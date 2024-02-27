import * as colors from "@/assets/colors";
import { CssSchema } from "@/utils/schemas/CommonSchema";

export default function Divider(props: CssSchema) {
  // Props
  const { css } = props;

  // Css
  const default_css = `${colors.divider_bg} absolute bottom-[1px]`;
  const dimension = css ?? "w-full h-[1px]";
  const className = `${default_css} ${dimension}`;

  return <div className={className} />;
}
