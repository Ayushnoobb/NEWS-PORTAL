import * as colors from "@/assets/colors";
import { CustomText } from "@/dynamic-imports/components";
import { TimeCardSchema } from "@/utils/schemas/ComponentsSchema";
import { LuClock4 } from "react-icons/lu";

export default function TimeCard(props: TimeCardSchema) {
  // Props
  const { color, css, title, font, isFlag } = props;

  // Css
  const mb = isFlag ? "mb-0.5" : "";
  const c = color ?? colors.dark_gray;
  const className = css ?? c;

  return (
    <div className="flex items-center gap-1">
      <LuClock4 className={`${font} ${mb} ${c}`} />
      <CustomText font={font} css={className}>
        {title}
      </CustomText>
    </div>
  );
}
