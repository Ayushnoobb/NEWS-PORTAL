import * as fonts from "@/assets/fonts";
import {
  CustomImage,
  CustomText,
  TimeCard,
} from "@/dynamic-imports/components";
import { getRouteUrl } from "@/utils/methods/defaultMethods";
import { getAbiralImg } from "@/utils/methods/imgMethods";
import { getRelativeTime } from "@/utils/methods/timeMethods";
import { MediaCardSchema } from "@/utils/schemas/ComponentsSchema";
import { useRouter } from "next/navigation";

export default function MediaCard(props: MediaCardSchema) {
  // Props
  const {
    id,
    title,
    updated_at,
    info_placing,
    titleLineClamp: t,
    image1,
    showClock,
    css,
    extendCss,
    isColumn,
    newsCondition,
    isAccepted,
  } = props;

  // Hooks
  const router = useRouter();

  // Slug1
  const slug1 = getRouteUrl("/article", { id, ...newsCondition });

  // Container css
  const rowCss = `${
    extendCss ? "" : "h-[84px]"
  } flex gap-3 justify-between items-start rounded-sm`;
  const columnCss =
    "grid grid-cols-1 gap-3 justify-between items-start rounded-sm";
  const dimensionCss = isColumn ? columnCss : rowCss;
  const divCss = css ?? `${extendCss} ${dimensionCss} `;

  // Image css
  const defaultImgCss = `${fonts.span} font-medium cursor-pointer rounded-md`;
  const imgCss = isColumn
    ? "w-full h-[200px] sm:h-[120px] md:h-180px] lg:h-[240px]"
    : "w-[120px] h-full";
  const imgDivCss = `${defaultImgCss} ${imgCss}`;

  // Text css
  const titleLineClamp = t ? `line-clamp-${t}` : "line-clamp-3";
  const titleCss = `${titleLineClamp} cursor-pointer tracking-wide`;
  const placingCss = info_placing ?? "justify-between";

  return (
    <div className={divCss}>
      <CustomImage
        src={getAbiralImg(image1!)}
        alt={title?.slice(0, 18) ?? "media_card_img"}
        divCss={imgDivCss}
        imgCss="w-full h-full object-cover rounded-md"
        width={40}
        height={40}
        onClick={() => (!isAccepted ? router.push(slug1) : undefined)}
      />
      <div className={`${placingCss} h-full flex-1 flex flex-col gap-1`}>
        <CustomText
          slug={!isAccepted ? slug1 : ""}
          css={titleCss}
          isLinkColor
          isBody={isColumn}
          isSemiBold
        >
          {title}
        </CustomText>
        {showClock && (
          <TimeCard
            title={getRelativeTime(updated_at!)}
            font={fonts.getFont("small")}
          />
        )}
      </div>
    </div>
  );
}
