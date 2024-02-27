import { CustomImage } from "@/dynamic-imports/components";
import { MiniLogoImageSchema } from "@/utils/schemas/ComponentsSchema";

export default function MiniLogoImage(props: MiniLogoImageSchema) {
  // Props
  const { isFlag, ...rest } = props;

  // Css
  const absoluteCss =
    "animate-showDown absolute left-10 md:left-32 lg:left-[172px] w-[36px] h-[36px] bg-white rounded-full";
  const css = "w-[36px] h-[36px] bg-white rounded-full";
  const divCss = isFlag ? css : absoluteCss;

  return (
    <CustomImage
      priority
      src="/image/logo_small.png"
      alt="logo_small"
      divCss={divCss}
      width={40}
      height={24}
      {...rest}
    />
  );
}
