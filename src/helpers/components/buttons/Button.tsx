// Assets
import * as fonts from "@/assets/fonts";

// Custom imports
import { CustomText } from "@/dynamic-imports/components";
import { ButtonSchema } from "@/utils/schemas/ComponentsSchema";
import { LuClock4 } from "react-icons/lu";

export default function Button(props: ButtonSchema) {
  // Props
  const { font, title, type, color, css, showClock } = props;

  // Variables
  const newType = type ?? "button";
  const newFont = font ?? fonts.getFont("slight_para");

  // Css
  const titleCss = color ?? "text-white";
  const iconCss = `${newFont} ${color ?? "text-white"}`;
  const className =
    css ??
    "px-5 py-2 w-fit h-fit flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-700 rounded-md";

  // Custom props
  const btnProps = { className, type: newType };

  return (
    <button {...btnProps}>
      {showClock && <LuClock4 className={iconCss} />}
      <CustomText font={newFont} css={titleCss}>
        {title}
      </CustomText>
    </button>
  );
}
