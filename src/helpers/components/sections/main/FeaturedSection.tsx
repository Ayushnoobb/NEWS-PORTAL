"use client";

import { rMarginTop } from "@/assets/css/styles";
import { BannerImage, HeroArticleSection } from "@/dynamic-imports/components";
import { RootState, useAppSelector } from "@/helpers/hooks/useStoreHooks";
import { banners } from "@/utils/constants/homepage-constants";
import { destructHeaderData } from "@/utils/methods/reduxMethods";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";

export default function FeaturedSection() {
  // Redux
  const { successResponse: h } = useAppSelector(
    (state: RootState) => state.NewsPortal.header_data
  );

  const { featured_articles } = destructHeaderData(h);

  return (
    <>
      <BannerImage
        imageProps={banners.featured_section}
        extendCss={rMarginTop}
      />
      {featured_articles
        ?.slice(0, 3)
        ?.map((item: ArticleSchema, idx: number) => (
          <HeroArticleSection
            key={getUniqueKey(idx, item?.title ?? "Hero Article")}
            {...item}
          />
        ))}
    </>
  );
}
