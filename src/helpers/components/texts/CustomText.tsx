"use client";

import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";
import { CustomTextSchema } from "@/utils/schemas/CommonSchema";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";



export default function CustomText(props: CustomTextSchema) {
  // Props
  const { css, font, isKhand, slug, children, isDangerousHtml, ...rest } = props;

  // Hooks
  const router = useRouter();

  // Actions
  const onClick: MouseEventHandler<HTMLParagraphElement> | undefined =
    slug?.length ? () => router.push(slug) : undefined;

  // Color
  const { isLinkColor, isHeaderColor, isTitleColor, ...fontSize } = rest;

  // Font size
  const {
    isMainTitle,
    isTitle,
    isSubTitle,
    isHeading,
    isSubHeading,
    isLarge,
    isBody,
    isParagraph,
    isSlightPara,
    isSpan,
    isSmall,
    ...fontWeight
  } = fontSize;

  // Font weight
  const { isNormal, isMedium, isSemiBold, isBold, isExtraBold } = fontWeight;

  // Font size
  const choiceFontSize = isMainTitle
    ? fonts.main_title
    : isTitle
    ? fonts.title
    : isSubTitle
    ? fonts.sub_title
    : isHeading
    ? fonts.heading
    : isSubHeading
    ? fonts.sub_heading
    : isLarge
    ? fonts.large
    : isBody
    ? fonts.body
    : isParagraph
    ? fonts.paragraph
    : isSlightPara
    ? fonts.slight_para
    : isSpan
    ? fonts.span
    : isSmall
    ? fonts.small
    : fonts.paragraph;

  // Font weight
  const choiceFontWeight = isNormal
    ? "font-normal"
    : isMedium
    ? "font-medium"
    : isSemiBold
    ? "font-semibold"
    : isBold
    ? "font-bold"
    : isExtraBold
    ? "font-extrabold"
    : "font-medium";

  // Color
  const color = isLinkColor
    ? `${colors.hover_link} cursor-pointer`
    : isTitleColor
    ? colors.title
    : isHeaderColor
    ? colors.header
    : "";

  // Css
  const newFont = font ?? `${choiceFontSize} ${choiceFontWeight}`;
  const defaultCss = `${colors.near_black} ${newFont}`;
  const fontFamily = isKhand ? "font-khand" : "font-mukta";
  const className = `${defaultCss} ${fontFamily} ${color} ${css ?? ""}`;

  // Text Props
  const textProps = { onClick, className, children };

  if (isDangerousHtml) {
    return (
      <p
        dangerouslySetInnerHTML={{ __html: children as string }}
      />
    );
  }

  return (
    <>
      <p {...textProps} />
    </>
  );
}
