export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	public: {
		Tables: {
			contact_messages: {
				Row: {
					email: string | null;
					name: string | null;
					subject: string | null;
					id: string;
					body: string | null;
					updated_at: Date | null;
				};
				Insert: {
					email?: string | null;
					name?: string | null;
					subject?: string | null;
					id?: string;
					body?: string | null;
					updated_at: Date | null;
				};
				Update: {
					email: string | null;
					name: string | null;
					subject: string | null;
					id: string;
					body: string | null;
					updated_at: Date | null;
				};
				Relationships: [];
			};
			profiles: {
				Row: {
					name: string | null;
					id: string;
					updated_at: string | null;
				};
				Insert: {
					name?: string | null;
					id: string;
					updated_at?: Date | null;
				};
				Update: {
					name?: string | null;
					id?: string;
					updated_at?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'profiles_id_fkey';
						columns: ['id'];
						referencedRelation: 'users';
						referencedColumns: ['id'];
					},
				];
			};
			stripe_customers: {
				Row: {
					stripe_customer_id: string;
					updated_at: Date | null;
					user_id: string;
				};
				Insert: {
					stripe_customer_id: string;
					updated_at?: Date | null;
					user_id: string;
				};
				Update: {
					stripe_customer_id?: string;
					updated_at?: Date | null;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'stripe_customers_user_id_fkey';
						columns: ['user_id'];
						referencedRelation: 'users';
						referencedColumns: ['id'];
					},
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			user_password_set: {
				Args: {
					[_ in never]: never;
				};
				Returns: boolean;
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
