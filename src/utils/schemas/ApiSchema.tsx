//////////////////////////////
// Common
//////////////////////////////

// Single Article
export type ArticleSchema = {
  id: number;
  title: string;
  slug: string;
  content: string;
  description: string;
  created_at: string;
  updated_at: string;
  image1: string | null;
  image2: string | null;
  is_featured: boolean;
  is_trending: boolean;
  category: number;
  author: number;
};

// Single Title & Slug
export type TitleSlugSchema = {
  title: string;
  slug: string;
};

export type NavbarArticlesSchema = {
  navbar_category_totalHits: number;
  navbar_category: TitleSlugSchema[];
};
export type FeaturedArticlesSchema = {
  featured_articles_totalHits: number;
  featured_articles: ArticleSchema[];
};
export type TrendingArticlesSchema = {
  trending_articles_totalHits: number;
  trending_articles: ArticleSchema[];
};
export type LatestArticlesSchema = {
  latest_articles_totalHits: number;
  latest_articles: ArticleSchema[];
};
export type ArticleCategorizedSchema = {
  category_title: string;
  articles: ArticleSchema[];
};
export type ArticlesCategorizedSchema = {
  articles_categorized_totalHits: number;
  articles_categorized: { category_article_data: ArticleCategorizedSchema[] };
};

//////////////////////////////
// GetAllArticlesThunkResponse
//////////////////////////////
export type GetAllArticlesThunkResponse = {
  success: boolean;
  totalHits: number;
  data: ArticleSchema[];
};

//////////////////////////////
// HomepageNewsSchema
//////////////////////////////
export type HomepageNewsSchema = {
  success: boolean;
  data: ArticlesCategorizedSchema;
};
