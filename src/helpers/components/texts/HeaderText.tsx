import CustomText from "./CustomText";
import { TextSchema } from "@/utils/schemas/ComponentsSchema";

export default function HeaderText(props: TextSchema) {
  // Props
  const { children, css, extendCss, isFlag } = props;

  // Css
  const pt = !isFlag ? "pt-1" : "";
  const defaultCss = `${extendCss} ${pt} leading-[48px] md:leading-[72px]`;
  const imgCss = css ?? defaultCss;

  return (
    <CustomText css={imgCss} isHeaderColor isTitle isKhand isExtraBold>
      {children}
    </CustomText>
  );
}
