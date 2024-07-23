-- Create a table for user profiles
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  "name" text,
  updated_at timestamp with time zone,
  created_at timestamp with time zone default now()
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table profiles
  enable row level security;

create policy "Profiles are viewable by self." on profiles
  for select using (auth.uid() = id);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Create Stripe Customer Table
-- One stripe customer per user (PK enforced)
-- Limit RLS policies -- mostly only server side access
create table stripe_customers (
  user_id uuid references auth.users on delete cascade not null primary key,
  stripe_customer_id text unique,
  updated_at timestamp with time zone,
  created_at timestamp with time zone default now()
);
alter table stripe_customers enable row level security;

-- Create a table for "Contact Us" form submissions
-- Limit RLS policies -- only server side access
create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  "name" text,
  email text,
  "subject" text,
  body text,
  updated_at timestamp with time zone,
  created_at timestamp with time zone default now()
);
alter table contact_messages enable row level security;

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, "name")
  values (new.id, new.raw_user_meta_data->>'name');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function to check whether a user has password set
create function public.user_password_set()
returns boolean as $$
begin
  return exists (select 1 from auth.users where id = auth.uid() and length(auth.users.encrypted_password) > 0);
end;
$$ language plpgsql security definer;

-- Set up Storage!
insert into storage.buckets (id, name)
  values ('avatars', 'avatars');

-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage#policy-examples for more details.
create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars');
