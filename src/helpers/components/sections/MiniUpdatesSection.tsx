// Assets
import { warning_button } from "@/assets/colors";
import * as fonts from "@/assets/fonts";

import { Button, MediaCard } from "@/dynamic-imports/components";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import { MiniUpdatesSectionSchema } from "@/utils/schemas/ComponentsSchema";

export default function MiniUpdatesSection(props: MiniUpdatesSectionSchema) {
  // Props
  const { articles, title } = props;

  // Css
  const btnCss = `${warning_button} px-5 py-2 w-full h-fit flex justify-center items-center gap-2 rounded-md`;

  // NewsCondition
  const newsCondition =
    title === "ताजा अपडेट" ? { isLatest: true } : { isTrending: true };

  return (
    <div className="flex flex-col justify-between gap-3 rounded-sm">
      <div className="flex flex-col gap-3 md:gap-5 rounded-sm">
        {articles?.slice(0, 4)?.map((item: ArticleSchema, idx: number) => (
          <MediaCard
            key={getUniqueKey(idx, item?.title)}
            {...item}
            extendCss="h-[95px]"
            showClock
            newsCondition={newsCondition}
          />
        ))}
      </div>
      <Button
        title={`२४ घन्टाका ${title}`}
        font={fonts.getFont("paragraph")}
        css={btnCss}
        showClock
      />
    </div>
  );
}
