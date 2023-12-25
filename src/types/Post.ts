export interface Post {
  title: string;
  description: string;
  content: string;
  author: string;
  category: string[] | string;
  country: string;
  language: string;
  published_at: string;
  source: string;
  slug: string;
  image?: string;
}