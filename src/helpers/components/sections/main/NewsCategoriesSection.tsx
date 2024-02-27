import { NewsCategorySection } from "@/dynamic-imports/components";
import { RootState, useAppSelector } from "@/helpers/hooks/useStoreHooks";

import {
  destructCategoriesData,
  destructHomepageData,
} from "@/utils/methods/reduxMethods";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { ArticleCategorizedSchema } from "@/utils/schemas/ApiSchema";

export default function NewsCategoriesSection() {
  // Redux
  const { homepage_data: h, categories_data: c } = useAppSelector(
    (state: RootState) => state.NewsPortal
  );

  // Variables
  const category_article_data = destructHomepageData(h?.successResponse);
  const all_categories = destructCategoriesData(c?.successResponse);
  const news_slug = (category_title: string) =>
    all_categories?.filter((item: any) => item?.title === category_title)[0]
      ?.slug;

  return (
    <>
      {!all_categories?.length ? (
        <>No category data.</>
      ) : (
        category_article_data?.map(
          (item: ArticleCategorizedSchema, idx: number) => (
            <NewsCategorySection
              key={getUniqueKey(idx, item?.category_title)}
              news_slug={news_slug(item?.category_title)}
              {...item}
            />
          )
        )
      )}
    </>
  );
}
