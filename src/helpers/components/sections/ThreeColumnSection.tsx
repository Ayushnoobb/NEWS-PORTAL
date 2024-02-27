import { rGap, rPaddingT } from "@/assets/css/styles";
import {
  AdsSection,
  BannerImage,
  MiniUpdatesSection,
  PosterImage,
} from "@/dynamic-imports/components";
import { ThreeColumnSectionSchema } from "@/utils/schemas/ComponentsSchema";

export default function ThreeColumnSection(props: ThreeColumnSectionSchema) {
  // Props
  const { title, bannerImg, posterImg, articles, imgList } = props;

  return (
    <>
      <BannerImage imageProps={bannerImg} />

      <div
        className={`${rPaddingT} ${rGap} relative w-full h-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[360px_1fr_280px]`}
      >
        <PosterImage {...posterImg} showClock />

        <MiniUpdatesSection title={title} articles={articles} />

        <AdsSection imgList={imgList} />
      </div>
    </>
  );
}
