"use client";

// Custom imports
import * as styles from "@/assets/css/styles";
import { RootState, useAppSelector } from "@/helpers/hooks/useStoreHooks";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { CustomImage, CustomText } from "@/dynamic-imports/components";
import { getAbiralImg } from "@/utils/methods/imgMethods";
import { useRouter } from "next/navigation";
import { getRouteUrl } from "@/utils/methods/defaultMethods";
import { destructHeaderData } from "@/utils/methods/reduxMethods";

export default function FeaturedHighlights() {
  // Redux
  const { successResponse: h } = useAppSelector(
    (state: RootState) => state.NewsPortal.header_data
  );

  // Destructuring redux
  const { featured_articles } = destructHeaderData(h);

  // Hooks
  const router = useRouter();

  // Slug1
  const slug1 = (id: number) =>
    getRouteUrl("/article", {
      id,
      isFeatured: true,
    });

  return (
    <div
      className={`${styles.width_x} featured-highlights thin-scrollbar overflow-x-auto overflow-y-hidden relative flex items-center gap-4 sm:gap-6 border-b-[1px] border-gray-200`}
    >
      {featured_articles
        ?.slice(0, 9)
        ?.map(({ id, title, image1, slug }: ArticleSchema, idx: number) => (
          <div
            key={getUniqueKey(idx, title! + slug)}
            className="min-w-[84px] flex items-center gap-1"
          >
            <CustomImage
              priority
              src={getAbiralImg(image1!)}
              alt={title ?? "featured_image_avatar"}
              divCss="w-[24px] h-[24px] rounded-full"
              imgCss="w-full h-full object-cover rounded-full"
              width={24}
              height={24}
              onClick={() => router.push(slug1(id))}
            />
            <CustomText
              slug={slug1(id)}
              css="min-w-fit"
              isKhand
              isBold
              isLinkColor
            >
              {title.slice(0, 10)}
            </CustomText>
          </div>
        ))}
    </div>
  );
}
