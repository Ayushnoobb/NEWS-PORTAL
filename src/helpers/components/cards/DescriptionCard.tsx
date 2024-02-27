import { hover_link, hover_red_dark, light_gray_bg } from "@/assets/colors";
import { span } from "@/assets/fonts";
import { CustomImage, CustomText } from "@/dynamic-imports/components";
import { getRouteUrl } from "@/utils/methods/defaultMethods";
import { getAbiralImg } from "@/utils/methods/imgMethods";
import { DescriptionCardSchema } from "@/utils/schemas/ComponentsSchema";
import { useRouter } from "next/navigation";

export default function DescriptionCard(props: DescriptionCardSchema) {
  // Props
  const { id, color, title, image1, description, newsCondition } = props;

  const router = useRouter();

  // Slug1
  const slug1 = getRouteUrl("/article", { id, ...newsCondition });

  // Css
  const bgColor = color ?? light_gray_bg;
  const hoverColor = color ? hover_red_dark : hover_link;
  const titleCss = `${hoverColor} line-clamp-3 cursor-pointer tracking-wide`;
  const descCss = `line-clamp-6 tracking-wide`;

  return (
    <div className="h-auto sm:h-[260px] flex flex-col sm:flex-row justify-between items-start rounded-md border-[1px] border-gray-300 shadow-md">
      <CustomImage
        priority
        src={getAbiralImg(image1!)}
        alt={title?.slice(0, 18) ?? "Description Card Image"}
        divCss={`${span} font-medium w-full sm:w-1/2 lg:w-[300px] h-[260px] cursor-pointer rounded-md`}
        imgCss="w-full h-full object-cover rounded-t-md sm:rounded-l-md sm:rounded-t-none"
        width={40}
        height={40}
        onClick={() => router.push(slug1)}
      />
      <div
        className={`${bgColor} flex-1 h-full px-8 py-2 flex gap-0 md:gap-1 flex-col justify-center`}
      >
        <CustomText slug={slug1} css={titleCss} isLarge isBold>
          {title}
        </CustomText>

        <CustomText slug={slug1} css={descCss}>
          {description}
        </CustomText>
      </div>
    </div>
  );
}
