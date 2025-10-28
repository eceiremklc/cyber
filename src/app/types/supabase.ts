export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          fullname: string;
          email: string;
          created_at: string;
          avatarUrl?: string;
          phone?: string;
          address?: string;
        };
        Insert: {
          id?: string; // Supabase otomatik oluşturuyor
          fullname: string;
          email: string;
          created_at?: string; // varsayılan now()
          avatarUrl?: string;
          phone?: string;
          address?: string;
        };
        Update: {
          id?: string;
          fullname?: string;
          email?: string;
          created_at?: string;
          avatarUrl?: string;
          phone?: string;
          address?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
