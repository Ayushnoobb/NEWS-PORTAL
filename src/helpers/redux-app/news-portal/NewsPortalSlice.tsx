import { createSlice } from "@reduxjs/toolkit";
import {
  GetHeaderThunk,
  GetSingleArticleThunk,
  GetAllArticlesThunk,
  GetAllCategoriesThunk,
  GetHomepageThunk,
  GetSingleCategoryNewsThunk,
} from "./_thunks";

const initialState: any = {
  // Api data
  homepage_data: {},
  header_data: {},
  categories_data: {},
  single_category_news_data: {},
  articles_data: {},
  single_article_data: {},

  // Non api data
  current_news: "",
};

export const NewsPortalSlice = createSlice({
  name: "news-portal/NewsPortalSlice",
  initialState,
  reducers: {
    setCurrentNews: (state, action) => {
      state.current_news = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      ////////////////////////////////////////
      ////////////////////////////////////////
      // Header data (Navbar, Featured, Trending, Latest News)
      ////////////////////////////////////////
      ////////////////////////////////////////
      .addCase(GetHeaderThunk.pending, (state) => {
        // Normal states
        state.header_data.isPending = true;
        state.header_data.isFulfilled = false;
        state.header_data.isRejected = false;
      })
      .addCase(GetHeaderThunk.fulfilled, (state, action) => {
        // Normal states
        state.header_data.isPending = false;
        state.header_data.isFulfilled = true;
        state.header_data.isRejected = false;

        // Success data
        state.header_data.successResponse = action.payload;
      })
      .addCase(GetHeaderThunk.rejected, (state, action) => {
        // Normal states
        state.header_data.isPending = false;
        state.header_data.isFulfilled = false;
        state.header_data.isRejected = true;

        // Rejected data
        state.header_data.errorResponse = action.payload;
      })
      ////////////////////////////////////////
      ////////////////////////////////////////
      // Homepage data (Articles Categorized data)
      ////////////////////////////////////////
      ////////////////////////////////////////
      .addCase(GetHomepageThunk.pending, (state) => {
        // Normal states
        state.homepage_data.isPending = true;
        state.homepage_data.isFulfilled = false;
        state.homepage_data.isRejected = false;
      })
      .addCase(GetHomepageThunk.fulfilled, (state, action) => {
        // Normal states
        state.homepage_data.isPending = false;
        state.homepage_data.isFulfilled = true;
        state.homepage_data.isRejected = false;

        // Success data
        state.homepage_data.successResponse = action.payload;
      })
      .addCase(GetHomepageThunk.rejected, (state, action) => {
        // Normal states
        state.homepage_data.isPending = false;
        state.homepage_data.isFulfilled = false;
        state.homepage_data.isRejected = true;

        // Rejected data
        state.homepage_data.errorResponse = action.payload;
      })
      ////////////////////////////////////////
      ////////////////////////////////////////
      // Get all categories
      ////////////////////////////////////////
      ////////////////////////////////////////
      .addCase(GetAllCategoriesThunk.pending, (state) => {
        // Normal states
        state.categories_data.isPending = true;
        state.categories_data.isFulfilled = false;
        state.categories_data.isRejected = false;
      })
      .addCase(GetAllCategoriesThunk.fulfilled, (state, action) => {
        // Normal states
        state.categories_data.isPending = false;
        state.categories_data.isFulfilled = true;
        state.categories_data.isRejected = false;

        // Success data
        state.categories_data.successResponse = action.payload;
      })
      .addCase(GetAllCategoriesThunk.rejected, (state, action) => {
        // Normal states
        state.categories_data.isPending = false;
        state.categories_data.isFulfilled = false;
        state.categories_data.isRejected = true;

        // Rejected data
        state.categories_data.errorResponse = action.payload;
      })

      ////////////////////////////////////////
      ////////////////////////////////////////
      // Get single cvategory news
      ////////////////////////////////////////
      ////////////////////////////////////////
      .addCase(GetSingleCategoryNewsThunk.pending, (state) => {
        // Normal states
        state.single_category_news_data.isPending = true;
        state.single_category_news_data.isFulfilled = false;
        state.single_category_news_data.isRejected = false;
      })
      .addCase(GetSingleCategoryNewsThunk.fulfilled, (state, action) => {
        // Normal states
        state.single_category_news_data.isPending = false;
        state.single_category_news_data.isFulfilled = true;
        state.single_category_news_data.isRejected = false;

        // Success data
        state.single_category_news_data.successResponse = action.payload;
      })
      .addCase(GetSingleCategoryNewsThunk.rejected, (state, action) => {
        // Normal states
        state.single_category_news_data.isPending = false;
        state.single_category_news_data.isFulfilled = false;
        state.single_category_news_data.isRejected = true;

        // Rejected data
        state.single_category_news_data.errorResponse = action.payload;
      })

      ////////////////////////////////////////
      ////////////////////////////////////////
      // Get all articles
      ////////////////////////////////////////
      ////////////////////////////////////////
      .addCase(GetAllArticlesThunk.pending, (state) => {
        // Normal states
        state.articles_data.isPending = true;
        state.articles_data.isFulfilled = false;
        state.articles_data.isRejected = false;
      })
      .addCase(GetAllArticlesThunk.fulfilled, (state, action) => {
        // Normal states
        state.articles_data.isPending = false;
        state.articles_data.isFulfilled = true;
        state.articles_data.isRejected = false;

        // Success data
        state.articles_data.successResponse = action.payload;
      })
      .addCase(GetAllArticlesThunk.rejected, (state, action) => {
        // Normal states
        state.articles_data.isPending = false;
        state.articles_data.isFulfilled = false;
        state.articles_data.isRejected = true;

        // Rejected data
        state.articles_data.errorResponse = action.payload;
      })

      ////////////////////////////////////////
      ////////////////////////////////////////
      // Get single article
      ////////////////////////////////////////
      ////////////////////////////////////////
      .addCase(GetSingleArticleThunk.pending, (state) => {
        // Normal states
        state.single_article_data.isPending = true;
        state.single_article_data.isFulfilled = false;
        state.single_article_data.isRejected = false;
      })
      .addCase(GetSingleArticleThunk.fulfilled, (state, action) => {
        // Normal states
        state.single_article_data.isPending = false;
        state.single_article_data.isFulfilled = true;
        state.single_article_data.isRejected = false;

        // Success data
        state.single_article_data.successResponse = action.payload;
      })
      .addCase(GetSingleArticleThunk.rejected, (state, action) => {
        // Normal states
        state.single_article_data.isPending = false;
        state.single_article_data.isFulfilled = false;
        state.single_article_data.isRejected = true;

        // Rejected data
        state.single_article_data.errorResponse = action.payload;
      });
  },
});
