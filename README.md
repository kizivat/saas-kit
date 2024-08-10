<img alt="SaaS Kit logo" src="./static/images/logo@512.png" width="64" height="64">

# SaaS Kit

[![Build](https://github.com/kizivat/saas-kit/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/kizivat/saas-kit/actions/workflows/build.yml)
[![Format Check](https://github.com/kizivat/saas-kit/actions/workflows/format.yml/badge.svg?branch=main)](https://github.com/kizivat/saas-kit/actions/workflows/format.yml)
[![Linting](https://github.com/kizivat/saas-kit/actions/workflows/linting.yml/badge.svg?branch=main)](https://github.com/kizivat/saas-kit/actions/workflows/linting.yml)
[![License](https://img.shields.io/badge/License-MIT-brightgreen?labelColor=32383f)](https://github.com/kizivat/saas-kit/blob/main/LICENSE)

### SaaS Kit is an open-source, fast, and free to host SaaS template / boilerplate

- [Feature Rich](#features): user auth, user dashboard, marketing site, billing/subscriptions, pricing page, and more.
- [Delighful Developer Experience](#tech-stack): tools you'll love working with, including SvelteKit, Tailwind, shadcn-svelte, Postgres, and Supabase.
- Extensible: all the tools you need to make additional marketing pages, UI components, user dashboards, admin portals, database backends, API endpoints, and more.
- [Hosting](#suggested-hosting-stack): Our suggested hosting stack is free to host, cheap to scale, easy to manage.
- [MIT Open Source](https://github.com/kizivat/saas-kit/blob/main/LICENSE)
- [Quick Start](#quick-start): Full docs from `git clone` to deployment.

> Based on [CriticalMoments/CMSaasStarter](https://github.com/CriticalMoments/CMSaasStarter) by the folks at [Critical Moments](https://criticalmoments.io)!
>
> **Make mobile apps?** Improve conversion rates and ratings with [Critical Moments](https://criticalmoments.io).
>
> _(I'm not affiliated with Critical Moments, but I love their work and wanted to make it easier for others to use their template.)_

## Features

Everything you need to get started for a SaaS company:

- User Authentication: Sign up, sign out, forgot password, email verification, oAuth and account deletion. Powered by Supabase Auth.
- Marketing Page with SEO optimization
- User Dashboard with user profile, user settings, update email/password, billing, and more.
- Subscriptions powered by Stripe Checkout
- Pricing page
- Contact-us form
- Billing portal: self serve to change card, upgrade, cancel, or download receipts
- Style toolkit: theming and UI components
- Responsive: designed for mobile and desktop.
- Extensible: all the tools you need to make additional marketing pages, UI components, admin portals, database backends, API endpoints, and more.

## Tech Stack

- Web Framework: SvelteKit
- CSS / Styling
  - Framework: TailwindCSS
  - Component library: shadcn-svelte
- Suggested Hosting Stack
  - Host + CDN: Cloudflare Pages
  - Serverless compute: Cloudflare Workers
  - Authentication: Supabase Auth
  - Database: Supabase Postgres
- Payments
  - Stripe Checkout
  - Stripe Portal

## Suggested Hosting Stack

**There’s no cost for using this template**. The costs below reflect our suggested hosting stack.

- **$0/mo** — Supabase free tier, Cloudflare free tier.
  - Pros:
    - Free!
    - Can scale to thousands of users.
    - Unlimited static page requests.
    - 100k serverless functions/day.
  - Cons:
    - Does not include database backups. The frugal among you could hook up pgdump backups on lambda/S3 for a few cents per month.
    - Will auto-pause your database when not in use for 7 days.
  - Who it’s for:
    - This tier is perfectly functional for a hobby project, or pre-revenue company (up to 50,000 monthly active users). It’s easy to scale up once revenue starts, but it’s also fine to keep at this scale indefinitely.
- **$30/mo** - Supabase Pro, Cloudfare [Workers Paid](https://www.cloudflare.com/plans/developer-platform/)
  - Pros:
    - Database backups.
    - Never pauses database.
    - Over 1M serverless functions per day, with linear pricing for additional invocations.
  - Cons:
    - none
  - Who it’s for:
    - I suggest moving to this once you have paid customers or investors.

## Performance / Best Practices

The selected tech stack creates lightning fast websites.

- Instant navigation: the best of CSR + SSR in one. SSR your first page for fastest possible initial load times. For subsequent pages, the content is pre-loaded and rendered with CSR, for instant rendering.
- CDN optimized, for high edge-cache hit ratios
- Svelte and Tailwind compile out unused HTML, CSS and JS at deploy time for smaller pages
- Linting to find accessibility and syntax issues

# Quick Start

### Get Started (Local Development)

This repo is a template, so you can click the green "Use this template" button on Github to create your own repo with this code. Then clone your repo locally and follow these steps:

```sh
## First fork the project on Github
git clone <your-repo-from-this-template>
cd <your-repo-dir> ## or your fork name if different
npm install
## Create an env file. You'll replace the values in this in later steps.
cp .env.example .env.local
## Run the project locally in dev mode, and launch the browser
npm run dev -- --open
```

### Developer Environment

The repo includes [CI scripts](https://aws.amazon.com/devops/continuous-integration/) designed for [GitHub Actions](https://github.com/features/actions). These confirm you don’t break your [build](https://github.com/kizivat/saas-kit/blob/main/.github/workflows/build.yml), you use [proper code formatting](https://github.com/kizivat/saas-kit/blob/main/.github/workflows/format.yml), and [code linting and typechecking passes](https://github.com/kizivat/saas-kit/blob/main/.github/workflows/linting.yml).

You can manually run these scripts yourself; `npm run build` for the build, `npm run format:check` to check formatting, `npm run lint` for the linting, `npm run check` for typechecking, and `npm run test` for testing (if you add tests).

If you're using VSCode, go to the extensions tab and install the recommended extensions. Those should be:

- Svelte for Svelte and accessibility issues: [VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) or [other editors](https://sveltesociety.dev/tools#editor-support)
- ESLint for type checking and linting: [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [other editors](https://eslint.org/docs/latest/use/integrations)
- Vitest for testing if you add tests: [VSCode](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) or [other editors](https://vitest.dev/guide/ide)

To catch build, formatting, linting and test issues before you commit changes, we suggest the following local git hook. It will run before you commit, stop you from breaking the build, and show any issues that are found. Add the lines below to an executable git hook script at the location `.git/hooks/pre-commit`.

```
#!/bin/sh
set -e
npm run format:check
npm run lint
npm run build
npm run check
npm run test
```

Finally: if you find build, formatting or linting rules too tedious, you can disable enforcement by deleting the CI files (`.github/workflows/*`) and remove the git hook (`.git/hooks/pre-commit`).

### Setup Supabase

#### Local Development

This repo is ready to run locally with [Supabase CLI](https://supabase.com/docs/guides/cli). Supabase CLI is installed locally after running `npm install` above.

Having [Docker Desktop](https://www.docker.com/products/docker-desktop) installed is the only prerequisite for using Supabase CLI. Make sure Docker Desktop is running before running the commands below.

To start Supabase locally run:

```sh
npx supabase start
```

> "This takes time on your first run because the CLI needs to download the Docker images to your local machine. The CLI includes the entire Supabase toolset, and a few additional images that are useful for local development (like a local SMTP server and a database diff tool)." [1]
>
> [1] https://supabase.com/docs/guides/cli/getting-started?queryGroups=platform&platform=npm#running-supabase-locally

Now you can access your local Supabase Studio dashboard at [http://localhost:54323](http://localhost:54323).

At the end of the starting process, Supabase CLI will output values you'll need to set in your `.env.local` file for local development. You can also print this information at any time by running `npx supabase status`.

```sh
npx supabase status -o env --override-name api.url="PUBLIC_SUPABASE_URL" --override-name auth.anon_key="PUBLIC_SUPABASE_ANON_KEY" --override-name auth.service_role_key="PRIVATE_SUPABASE_SERVICE_ROLE"
```

See [/supabase/config.toml](/supabase/config.toml) for the local Supabase configuration. Here is a list of settings you'll probably want to change in the default configuration:

- [ ] `project_id`
- [ ] `auth.external.<providers_you_want_to_support>`

As a next step, you'll apply the initial database migration to your local Supabase instance:

```sh
npx supabase db reset
```

#### Going to Production

To start you'll need at least a free [Supabase account](https://app.supabase.io/) and a Supabase project created for your app.

After you have your account, you can login with the CLI:

```sh
npx supabase login
```

Follow the instructions from the CLI to authenticate with your Supabase account.

Next, you can proceed to link your local Supabase project to your hosted Supabase project. This will allow you to deploy your local database schema to your hosted project.

```sh
npx supabase link
```

Follow the instructions from the CLI to link your local project to your hosted project.

Finally, you can deploy your local database schema to your hosted project.

```sh
npx supabase db push
```

### Setup Stripe Billing

- Create a Stripe account
- Create a product and price Tiers
  - Create your [products](https://stripe.com/docs/api/products) and their [prices](https://stripe.com/docs/api/prices) in the Dashboard or with the Stripe CLI.
  - SaaS Starter works best if you define each tier as a separate product (eg, `SaaS Starter Free`, `Saas Starter Pro`, `Saas Starter Enterprise`). Currently we display the [default price](https://docs.stripe.com/products-prices/manage-prices#default-price) for each product. If you have multiple prices for a product, the user can switch between them in the management portal.
  - If you want to display only selected products, you can filter them by setting the `stipeProductIds` in `src/config.ts` to an array of the product ids you want to display.
- Setup your environment
  - Get your [Secret API](https://dashboard.stripe.com/test/apikeys) key, and add it as an environment variable `PRIVATE_STRIPE_API_KEY`. Be sure to use test keys for development, and keep your production/live keys secret and secure.
- Optional: theme your Stripe integration
  - Change the colors and fonts to match your brand [here](https://dashboard.stripe.com/settings/branding)
- Your pricing data will be fetched from Stripe and displayed on the pricing page automatically. (This approach is a subject to possible change in the future, as it relies on the Stripe API – you can always customize the pricing page to be static for performance reasons, however we like the idea of using Stripe as your "pricing CMS" for now better.)
- Update your portal configuration
  - Open [stripe portal config](https://dashboard.stripe.com/test/settings/billing/portal) and make the following changes
    - Disallow editing email under customer information (since we allow editing in primary portal)
    - Optional: setup a custom domain so Stripe pages use your own domain
- Repeat steps in production environment

### Deploy To Cloudflare

Cloudflare Pages and Workers is one of the most popular options for deploying SvelteKit and we recommend it. [Follow Cloudflare’s instructions](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/#deploy-with-cloudflare-pages) to deploy in a few clicks. Be sure to select “SvelteKit” as framework, and the rest of the defaults will work.

When prompted: add environment variables for your production environment (PUBLIC_SUPABASE_URL,
PUBLIC_SUPABASE_ANON_KEY, PRIVATE_SUPABASE_SERVICE_ROLE, and PRIVATE_STRIPE_API_KEY).

Optional: enable [Cloudflare Analytics](https://www.cloudflare.com/en-ca/application-services/products/analytics/) for usage metrics.

If you prefer another host you can explore alternatives:

- [SvelteKit official adapters](https://kit.svelte.dev/docs/adapters) including Netlify, Vercel, and Node
- [Community adapters](https://sveltesociety.dev/components#adapters) including Github pages, AppEngine, Azure, and more
- [Supabase](https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit) if you want one host for everything. Note: they do charge $10 a month for custom domains, unlike Cloudflare.

### Add your content!

After the steps above, you’ll have a working version like the demo page. However, it’s not branded, and doesn’t have your content. The following checklist helps you customize the template to make a SaaS homepage for your company.

- [ ] Set a name for your site in `src/config.ts:WebsiteName`
- [ ] Content
  - [ ] Add actual content for marketing homepage
  - [ ] Add any pages you want on top of our boiler plate (about, terms of service, etc). Be sure to add links to them in the header, mobile menu header, and footer as appropriate (`src/routes/(marketing)/+layout.svelte`).
- [ ] Update SEO content
  - [ ] Update title and meta description tags for every public page. We include generic ones using your site name (`src/config.ts:WebsiteName`), but the more specific these are the better.
- [ ] Style
  - [ ] Create or paste your shadcn-svelte theme matching your brand (see `src/app.css`)
  - [ ] Update the marketing page layout `src/routes/(marketing)/+layout.svelte`: customize design, delete unwanted pages from header and footer
  - [ ] Update the favicon in the `/static/` directory
- [ ] Functionality
  - [ ] Add actual SaaS functionality!
  - [ ] Replace the admin dashboard with real content (`/src/routes/(app)/dasboard/+page.svelte`).
  - [ ] Add API endpoints and database tables as needed to deliver your SaaS product.
