export const isCategoriesNews = (news_slug: string) => ({
  newsCondition: { isCategories: true, news_slug },
});
export const isTrendingNews = { newsCondition: { isTrending: true } };
export const isFeaturedNews = { newsCondition: { isFeatured: true } };
export const isLatestNews = { newsCondition: { isLatest: true } };
