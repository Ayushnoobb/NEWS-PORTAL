"use client";

import * as styles from "@/assets/css/styles";
import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";
import {
  CloseButton,
  CustomImage,
  CustomText,
} from "@/dynamic-imports/components";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/helpers/hooks/useStoreHooks";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import BodyOverlay from "@/helpers/components/others/BodyOverlay";
import useScrollLock from "@/helpers/hooks/useScrollLock";
import { useEffect } from "react";
import { getAbiralImg } from "@/utils/methods/imgMethods";
import { CurrentTitleSchema } from "@/utils/schemas/CommonSchema";
import { useRouter } from "next/navigation";
import { getRouteUrl } from "@/utils/methods/defaultMethods";
import { destructHeaderData } from "@/utils/methods/reduxMethods";
import { setCurrentNews } from "@/helpers/redux-app/news-portal/_actions";

export interface SingleCurrentNewsSchema
  extends ArticleSchema,
    CurrentTitleSchema {}

// This component will display individual current news data with a title and image (also will forward to a link)
const SingleCurrentNews = (props: SingleCurrentNewsSchema) => {
  // Props
  const { id, currentTitle, title, image1 } = props;

  // Hooks
  const router = useRouter();

  // Variables
  const getStatus = (str: string) => (currentTitle === str ? true : false);

  // Slug1
  const slug1 = getRouteUrl("/article", {
    id,
    isTrending: getStatus("ट्रेन्डिङ"),
    isLatest: getStatus("ताजा अपडेट"),
  });

  return (
    <div className="h-[64px] md:h-[80px] md:px-5 py-2 flex justify-between items-start rounded-md rounded-r-none border-r-2 border-gray-300">
      <div className="flex w-4/5">
        <CustomText slug={slug1} css="line-clamp-2" isSlightPara>
          {title}
        </CustomText>
      </div>
      <CustomImage
        priority
        src={getAbiralImg(image1!)}
        alt={title?.slice(0, 18) ?? "single_news_image"}
        divCss={`${fonts.span} font-medium w-[84px] h-[40px] md:h-[56px] rounded-md`}
        imgCss="w-full h-full object-cover rounded-md"
        width={40}
        height={40}
        onClick={() => router.push(slug1)}
      />
    </div>
  );
};

// This component is responsible for displaying either the trending/latest news.
// Depending upon the icon button clicked in the right side of navbar
export default function CurrentNews() {
  // Redux
  const dispatch = useAppDispatch();
  const { lockScroll, unlockScroll } = useScrollLock();
  const { header_data: h, current_news: c } = useAppSelector(
    (state: RootState) => state.NewsPortal
  );

  // Destructuring variables
  const { latest_articles, trending_articles } = destructHeaderData(
    h?.successResponse
  );

  // Variables
  const is_trending = c === "trending";
  const is_latest = c === "latest";

  // useEffect
  useEffect(() => {
    if (is_trending || is_latest) lockScroll();

    return () => unlockScroll();
  }, [is_latest, is_trending, lockScroll, unlockScroll]);

  // Return nothing if the condition is not satisfied
  if (!is_trending && !is_latest) return;

  // Else return the correct title and data
  const title = is_latest ? "ताजा अपडेट" : is_trending ? "ट्रेन्डिङ" : "";
  const data = is_latest
    ? latest_articles
    : is_trending
    ? trending_articles
    : [];

  // Css to handle scrollbar
  const scrollCss =
    data.length > 6
      ? "max-h-[calc(400px-80px-50px-24px)] overflow-y-scroll"
      : "";

  return (
    <>
      <BodyOverlay />
      <div
        className={`${styles.padding_x} min-w-[360px] h-[306px] md:h-[400px] z-drawer animate-slideDown pt-10 bg-white absolute top-0 left-0 w-full shadow-md`}
      >
        {/* Header section */}
        <div
          className={`${colors.normal_border} animate-showDown bg red-300 w-full h-[50px] flex justify-between items-center border-b-[1px]`}
        >
          <CustomText
            css={`h-full ${colors.active_border} border-b-[3px] leading-[56px]`}
            isSubTitle
            isTitleColor
            isKhand
            isExtraBold
          >
            {title}
          </CustomText>
          <CloseButton
            css="text-red-500 hover:text-red-700 text-2xl"
            onClick={() => dispatch(setCurrentNews(""))}
          />
        </div>

        {/* Body section */}
        <div
          className={`${scrollCss} single-news-border-r-0 animate-showDown md:fourth-element-padding-0 w-full flex-1 p-3 pl-0 grid grid-cols-2 md:grid-cols-3`}
        >
          {data?.slice(0, 6)?.map((item: ArticleSchema, idx: number) => (
            <SingleCurrentNews
              key={getUniqueKey(idx, title!)}
              {...item}
              currentTitle={title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
