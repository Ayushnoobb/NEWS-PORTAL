import {
  ChildrenSchema,
  CssSchema,
  SlugSchema,
} from "@/utils/schemas/CommonSchema";
import CustomText from "./CustomText";

export interface TitleTextSchema
  extends ChildrenSchema,
    SlugSchema,
    CssSchema {}

export default function TitleText({ children, css, ...rest }: TitleTextSchema) {
  return (
    <CustomText
      isBold
      isTitle
      css={
        css ?? "hover:text-brand-blue cursor-pointer leading-8 sm:leading-tight"
      }
      {...rest}
    >
      {children}
    </CustomText>
  );
}
