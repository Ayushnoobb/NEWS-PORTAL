//////////////////////////////
// Default fonts

import { FontSizeSchema, FontWeightSchema } from "@/utils/schemas/CommonSchema";
import { Khand, Mukta } from "next/font/google";

//////////////////////////////
export const khand = Khand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-khand",
});

export const mukta = Mukta({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mukta",
});

//////////////////////////////
// Font sizes
//////////////////////////////
export const main_title =
    "text-[26px] xs:text-[29px] sm:text-[32px] md:text-[40px] lg:text-[48px]",
  title =
    "text-[24px] xs:text-[27px] sm:text-[30px] md:text-[38px] lg:text-[46px]",
  sub_title =
    "text-[22px] xs:text-[25px] sm:text-[28px] md:text-[36px] lg:text-[44px]",
  heading = "text-[36px]",
  sub_heading = "text-[30px]",
  large = "text-[24px]",
  body = "text-[18px]",
  paragraph = "text-[16px]",
  slight_para = "text-[14px]",
  span = "text-[12px]",
  small = "text-[10px]";

export const getFont = (size: FontSizeSchema, weight?: FontWeightSchema) => {
  const weights = {
    normal: "font-normal",
    medium: "font-medium",
    semi_bold: "font-semibold",
    bold: "font-bold",
    extra_bold: "font-extrabold",
  };

  const getSize = (key: FontSizeSchema) =>
    ((
      {
        main_title,
        title,
        sub_title,
        heading,
        sub_heading,
        large,
        body,
        paragraph,
        slight_para,
        span,
        small,
      } as const
    )[key]);

  return `${getSize(size)} ${weights[weight ?? "medium"]}`;
};
//////////////////////////////
// Line Heights
//////////////////////////////
export const main_title_line_height = "leading-[56px]",
  title_line_height = "leading-[48px]",
  sub_title_line_height = "leading-[40px]",
  heading_line_height = "leading-[32px]",
  sub_heading_line_height = "leading-[24px]",
  slight_large_line_height = "leading-[20px]",
  large_line_height = "leading-[16px]",
  body_line_height = "leading-[12px]",
  paragraph_line_height = "leading-[8px]",
  span_line_height = "leading-[4px]",
  small_line_height = "leading-[0]";
// title
// sub_title
// heading
// sub_heading
