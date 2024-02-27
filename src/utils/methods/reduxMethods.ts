import { ReduxErrorMessageSchema } from "../schemas/ReduxSchema";

export const getReduxErrorMsg = (error: ReduxErrorMessageSchema) => {
  return (
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString()
  );
};

export const destructHeaderData: any = (h: any) => {
  const navbar_category = h?.data[0]?.navbar_category ?? [];
  const trending_articles = h?.data[1]?.trending_articles ?? [];
  const latest_articles = h?.data[2]?.latest_articles ?? [];
  const featured_articles = h?.data[3]?.featured_articles ?? [];

  return {
    navbar_category,
    trending_articles,
    latest_articles,
    featured_articles,
  };
};

export const destructHomepageData: any = (h: any) =>
  h?.data[0]?.articles_categorized?.category_article_data ?? [];

export const destructCategoriesData: any = (h: any) => h?.data ?? [];

export const destructSingleCategoryNewsData: any = (h: any) => h?.data ?? [];
