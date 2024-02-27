import { getUniqueKey } from "@/utils/methods/stringMethods";
import { ImageArrSchema } from "@/utils/schemas/CommonSchema";

export default function AdsSection({ imgList }: ImageArrSchema) {
  return (
    <div className="hidden xl:flex xl:flex-col xl:gap-5 xl:justify-between">
      {imgList?.map((_, idx: number) => (
        // <CustomImage
        //   {...item}
        //   priority
        //   key={getUniqueKey(idx, item.alt)}
        //   divCss="w-full h-[155px] rounded-md shadow-md"
        //   imgCss="w-full h-full object-cover rounded-md"
        //   width={0}
        //   height={0}
        // />
        <div
          key={getUniqueKey(idx, "Mini ad section")}
          className="grid place-items-center w-full h-[155px] rounded-md shadow-md"
        >
          Mini Ad here
        </div>
      ))}
    </div>
  );
}
