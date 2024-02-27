import { rGap } from "@/assets/css/styles";
import { getFont } from "@/assets/fonts";
import { HeaderText, PosterImage } from "@/dynamic-imports/components";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import { CommonNewsSectionSchema } from "@/utils/schemas/CommonSchema";

export default function DidYouLeaveSection(props: CommonNewsSectionSchema) {
  // Props
  const { title, articles } = props;

  // Variables
  const commonProps = {
    titleFont: getFont("body", "semi_bold"),
    isTransparent: true,
  };

  return (
    <div className="w-full h-full">
      <HeaderText>{title ?? "छुटाउनुभयो कि ?"}</HeaderText>

      <div className={`${rGap} grid grid-cols-1 md:grid-cols-4 md:h-[300px]`}>
        {articles?.map((item: ArticleSchema, idx: number) => (
          <PosterImage
            key={getUniqueKey(idx, item.title!)}
            {...item}
            {...commonProps}
          />
        ))}
      </div>
    </div>
  );
}
