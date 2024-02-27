import { ThreeColumnSection } from "@/dynamic-imports/components";
import { RootState, useAppSelector } from "@/helpers/hooks/useStoreHooks";
import { highlight_arr } from "@/utils/constants/homepage-constants";
import { destructHeaderData } from "@/utils/methods/reduxMethods";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { ThreeColumnSectionSchema } from "@/utils/schemas/ComponentsSchema";

export default function HighlightSection() {
  // Redux
  const { successResponse: h } = useAppSelector(
    (state: RootState) => state.NewsPortal.header_data
  );

  // Destructuring redux
  const { latest_articles, trending_articles } = destructHeaderData(h);

  return (
    <>
      {highlight_arr(latest_articles, trending_articles)?.map(
        (item: ThreeColumnSectionSchema, idx: number) => (
          <ThreeColumnSection key={getUniqueKey(idx, item.title!)} {...item} />
        )
      )}
    </>
  );
}
