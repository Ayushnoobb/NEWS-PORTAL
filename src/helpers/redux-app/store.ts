"use client";
import { configureStore } from "@reduxjs/toolkit";
import { GlobalSlice } from "./common/GlobalSlice";
import { NewsPortalSlice } from "./news-portal/NewsPortalSlice";
import { AuthSlice } from "./auth/AuthSlice";

const store = configureStore({
  reducer: {
    Global: GlobalSlice.reducer,
    NewsPortal: NewsPortalSlice.reducer,
    Auth:AuthSlice.reducer,
  },
});

export default store;
