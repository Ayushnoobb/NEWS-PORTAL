import CustomText from "./CustomText";
import { sky } from "@/assets/colors";
import { getActiveLink } from "@/assets/css/styles";
import { NavbarTextSchema } from "@/utils/schemas/ComponentsSchema";

export default function NavbarText(props: NavbarTextSchema) {
  // Props
  const { children, isSameLink, isFlag } = props;
  return (
    <CustomText
      css={getActiveLink(isSameLink, sky, isFlag, true)}
      isKhand
      isLarge
      isBold
    >
      {children}
    </CustomText>
  );
}
