export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          avatar_url: string | null
          title: string | null
          location: string | null
          bio: string | null
          website: string | null
          github: string | null
          linkedin: string | null
          skills: string[] | null
          interests: string[] | null
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          avatar_url?: string | null
          title?: string | null
          location?: string | null
          bio?: string | null
          website?: string | null
          github?: string | null
          linkedin?: string | null
          skills?: string[] | null
          interests?: string[] | null
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          avatar_url?: string | null
          title?: string | null
          location?: string | null
          bio?: string | null
          website?: string | null
          github?: string | null
          linkedin?: string | null
          skills?: string[] | null
          interests?: string[] | null
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string
          start_date: string
          end_date: string
          location: string | null
          image_url: string | null
          max_participants: number | null
          status: string
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          start_date: string
          end_date: string
          location?: string | null
          image_url?: string | null
          max_participants?: number | null
          status?: string
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          start_date?: string
          end_date?: string
          location?: string | null
          image_url?: string | null
          max_participants?: number | null
          status?: string
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      event_participants: {
        Row: {
          id: string
          event_id: string
          user_id: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          event_id: string
          user_id: string
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          event_id?: string
          user_id?: string
          status?: string
          created_at?: string
        }
      }
      announcements: {
        Row: {
          id: string
          title: string
          content: string
          priority: string
          status: string
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          priority?: string
          status?: string
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          priority?: string
          status?: string
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      conversations: {
        Row: {
          id: string
          title: string
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          created_at?: string
        }
      }
      conversation_participants: {
        Row: {
          id: string
          conversation_id: string
          user_id: string
          created_at: string
        }
        Insert: {
          id?: string
          conversation_id: string
          user_id: string
          created_at?: string
        }
        Update: {
          id?: string
          conversation_id?: string
          user_id?: string
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          conversation_id: string
          sender_id: string
          content: string
          read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          conversation_id: string
          sender_id: string
          content: string
          read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          conversation_id?: string
          sender_id?: string
          content?: string
          read?: boolean
          created_at?: string
        }
      }
      mentors: {
        Row: {
          id: string
          user_id: string
          expertise: string[]
          experience: string | null
          rating: number | null
          available: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          expertise: string[]
          experience?: string | null
          rating?: number | null
          available?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          expertise?: string[]
          experience?: string | null
          rating?: number | null
          available?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      mentorship_sessions: {
        Row: {
          id: string
          mentor_id: string
          mentee_id: string
          title: string
          description: string | null
          start_time: string
          end_time: string
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          mentor_id: string
          mentee_id: string
          title: string
          description?: string | null
          start_time: string
          end_time: string
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          mentor_id?: string
          mentee_id?: string
          title?: string
          description?: string | null
          start_time?: string
          end_time?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          description: string
          category: string | null
          status: string
          user_id: string
          image_url: string | null
          github_url: string | null
          demo_url: string | null
          technologies: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          category?: string | null
          status?: string
          user_id: string
          image_url?: string | null
          github_url?: string | null
          demo_url?: string | null
          technologies?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          category?: string | null
          status?: string
          user_id?: string
          image_url?: string | null
          github_url?: string | null
          demo_url?: string | null
          technologies?: string[] | null
          created_at?: string
          updated_at?: string
        }
        profiles: {
          Row: {
            id: string
            user_id: string
            full_name: string
            avatar_url: string | null
            title: string | null
            location: string | null
            bio: string | null
            website: string | null
            github: string | null
            linkedin: string | null
            skills: string[] | null
            interests: string[] | null
            visibility: string
            created_at: string
            updated_at: string
          }
          Insert: {
            id?: string
            user_id: string
            full_name: string
            avatar_url?: string | null
            title?: string | null
            location?: string | null
            bio?: string | null
            website?: string | null
            github?: string | null
            linkedin?: string | null
            skills?: string[] | null
            interests?: string[] | null
            visibility?: string
            created_at?: string
            updated_at?: string
          }
          Update: {
            id?: string
            user_id?: string
            full_name?: string
            avatar_url?: string | null
            title?: string | null
            location?: string | null
            bio?: string | null
            website?: string | null
            github?: string | null
            linkedin?: string | null
            skills?: string[] | null
            interests?: string[] | null
            visibility?: string
            created_at?: string
            updated_at?: string
          }
        }
      }
    }
  }
}
