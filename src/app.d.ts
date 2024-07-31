import {
	Session,
	SupabaseClient,
	type AMREntry,
	type User,
} from '@supabase/supabase-js';
import Stripe from 'stripe';
import 'unplugin-icons/types/svelte';
import { Database } from './DatabaseDefinitions';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			supabaseServiceRole: SupabaseClient<Database>;
			safeGetSession: () => Promise<{
				session: Session | null;
				user: User | null;
				amr: AMREntry[] | null;
			}>;
			stripe: Stripe;
		}
		interface PageData {
			session: Session | null;
		}
		// interface Error {}
		// interface Platform {}
	}
}

export {};
