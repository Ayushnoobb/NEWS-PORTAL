import { MediaCard } from "@/dynamic-imports/components";
import HeaderText from "../../texts/HeaderText";
import { rGap } from "@/assets/css/styles";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import { getUniqueKey } from "@/utils/methods/stringMethods";

export default function SimilarNewsSection(props: any) {
  // PsearchParams
  const { title, articles, ...newsCondition } = props;

  return (
    <div className="w-full h-full flex flex-col">
      <HeaderText>{title ?? "सम्बन्धित खबर"}</HeaderText>

      <div className={`${rGap} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}>
        {articles?.length &&
          articles?.map((item: ArticleSchema, idx: number) => (
            <MediaCard
              key={getUniqueKey(idx, item.title!)}
              {...item}
              isColumn
              newsCondition={newsCondition}
            />
          ))}
      </div>
    </div>
  );
}
