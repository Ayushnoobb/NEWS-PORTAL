// Default imports

// Custom imports
import * as styles from "@/assets/css/styles";
import { LogoImage } from "@/dynamic-imports/components";
import { FlagSchema } from "@/utils/schemas/CommonSchema";

export default function RootLayoutLogo(props: FlagSchema) {
  // Props
  const { isFlag } = props;

  // Css
  const padding = !isFlag ? styles.padding_x : "";
  const justify = !isFlag ? "justify-center" : "justify-start";
  const defaultCss = `${justify} logo w-full h-[60px] max-h-[60px] flex sm:justify-start items-center`;
  const css = `${padding} ${defaultCss}`;

  return (
    <div className={css}>
      <LogoImage />
    </div>
  );
}
