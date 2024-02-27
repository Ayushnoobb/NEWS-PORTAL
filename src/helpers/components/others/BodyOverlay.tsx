import { transparent_black_bg } from "@/assets/colors";
import { BodyOverlaySchema } from "@/utils/schemas/ComponentsSchema";

export default function BodyOverlay(props: BodyOverlaySchema) {
  // Props
  const { children, css } = props;

  // Css
  const defaultCss = `${transparent_black_bg} top-0 left-0 min-w-[360px] min-h-full`;
  const c = css ?? "z-app_bar fixed w-screen";
  const className = `${defaultCss} ${c}`;

  return <div className={className}>{children}</div>;
}
