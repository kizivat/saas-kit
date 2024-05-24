import type { Provider } from '@supabase/supabase-js';

export const WebsiteName: string = 'SaaS Kit';

/* You'll need to configure your providers in
your Supabase project settings `/supabase/config.toml` */
export const oAuthProviders: Provider[] = [
	'google',
	'twitter',
	// 'apple', // Consts $99/year to use Apple OAuth
	// 'facebook',
	'github',
];
