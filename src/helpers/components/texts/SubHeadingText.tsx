import CustomText from "./CustomText";
import { TextSchema } from "@/utils/schemas/ComponentsSchema";

export default function SubHeadingText(props: TextSchema) {
  // Props
  const { children, css } = props;
  return (
    <CustomText isKhand isHeaderColor isSubHeading isBold css={css}>
      {children}
    </CustomText>
  );
}
