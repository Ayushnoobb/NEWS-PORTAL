"use client";

import { divider } from "@/assets/colors";
import { padding_x } from "@/assets/css/styles";
import {
  FeaturedSection,
  HighlightSection,
  NewsCategoriesSection,
} from "@/dynamic-imports/components";
import { useAppDispatch } from "@/helpers/hooks/useStoreHooks";
import { GetHomepageThunk } from "@/helpers/redux-app/news-portal/_thunks";
import { useEffect, useRef } from "react";

export default function HomeSection() {
  // Hooks
  const didMountRef = useRef(false);

  // Redux
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      dispatch(GetHomepageThunk());
    }
  }, [dispatch]);

  return (
    <div
      className={`${padding_x} ${divider} w-full flex flex-col gap-3 md:gap-5 divide-y pb-10`}
    >
      <FeaturedSection />
      <HighlightSection />
      <NewsCategoriesSection />
    </div>
  );
}
