import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { ArticleSchema } from "./ApiSchema";

export type CheckNewsConditionSchema = {
  newsCondition?: {
    isCategories?: boolean;
    news_slug?: string;
    isFeatured?: boolean;
    isLatest?: boolean;
    isTrending?: boolean;
  };
};

export type ButtonTypeSchema = {
  type?: "button" | "submit" | "reset" | undefined;
};
//
export type FontSizeSchema =
  | "main_title"
  | "title"
  | "sub_title"
  | "heading"
  | "sub_heading"
  | "large"
  | "body"
  | "paragraph"
  | "slight_para"
  | "span"
  | "small";

export type FontWeightSchema =
  | "normal"
  | "medium"
  | "semi_bold"
  | "bold"
  | "extra_bold";

export type ShowClockSchema = { showClock?: boolean };

export type ChildrenSchema = {
  children?: ReactNode;
};

export type InfoPlacingSchema = {
  info_placing?: string;
};

export type ColorSchema = {
  color?: string;
};

export type TimeSchema = {
  time?: string;
};

export type UpdatedAtSchema = {
  updated_at?: string;
};

export type IdSchema = { id: number };

export type Image1Schema = { image1: string | null };

export type TitleSchema = {
  title?: string;
};

export type TitleLineClampSchema = {
  titleLineClamp?: number;
};

export type DescriptionSchema = {
  description?: string;
};

export type FontSchema = {
  font?: string;
};

export type CurrentTitleSchema = {
  currentTitle?: string;
};

export type SlugSchema = {
  slug?: string;
};

export type NewsSlugSchema = {
  news_slug?: string;
};

export interface TitleFontSchema extends TitleSchema, FontSchema, CssSchema {}

export interface TitleSlugSchema extends TitleSchema, SlugSchema {}

export type OnClickSchema = {
  onClick?: () => void;
};

//////////////////////////////
// Image/Icons
//////////////////////////////
export type IconSchema = {
  icon?: ReactNode;
};

export type IsDimensionSchema = {
  isRow?: boolean;
  isColumn?: boolean;
};

export interface CustomImageSchema extends OnClickSchema, FlagSchema {
  src: string | StaticImageData;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  divCss?: string;
  imgCss?: string;
  blurDataURL?: string;
  onClick?: () => void;
  priority?: boolean;
}

export type ImageArrSchema = {
  imgList: CustomImageSchema[];
};

export type ImageSchema = {
  img: CustomImageSchema;
};

export type BannerImgSchema = {
  bannerImg: CustomImageSchema;
};

//////////////////////////////
//
//////////////////////////////
export interface OptionSchema extends IconSchema {
  label: string;
  value: string;
}

//////////////////////////////
// Layouts
//////////////////////////////
export type RootLayoutSchema = {
  children: React.ReactNode;
};

// Css
export type CssSchema = {
  css?: string;
  extendCss?: string;
};

export type FlagSchema = {
  isFlag?: boolean;
  setIsFlag?: (val: boolean) => void;
};

export type AcceptedSchema = {
  isAccepted?: boolean;
  setIsAccepted?: (val: boolean) => void;
};

//////////////////////////////
// Links
//////////////////////////////
export interface LinkSchema extends TitleSlugSchema, IconSchema {}

export interface NestedLinkSchema extends IconSchema, TitleSchema {
  child: LinkSchema[];
}
//////////////////////////////
// sections
//////////////////////////////
export interface BannerImageSchema extends CssSchema {
  imageProps?: CustomImageSchema;
  divProps?: CustomImageSchema;
}

export interface CommonNewsSectionSchema
  extends TitleSchema,
    AllArticlesSchema {}

//////////////////////////////
// tags
//////////////////////////////
export type CustomTagSchema = {
  title: string;
  status?: "success" | "warning" | "error" | "info";
  css?: string;
};

//////////////////////////////
// texts
//////////////////////////////
export interface CustomTextSchema
  extends ChildrenSchema,
    CssSchema,
    SlugSchema,
    FontSchema,
    CheckNewsConditionSchema {
  // font family
  isKhand?: boolean;

  // color
  isHeaderColor?: boolean;
  isLinkColor?: boolean;
  isTitleColor?: boolean;

  // font size
  isMainTitle?: boolean;
  isTitle?: boolean;
  isSubTitle?: boolean;
  isHeading?: boolean;
  isSubHeading?: boolean;
  isLarge?: boolean;
  isBody?: boolean;
  isParagraph?: boolean;
  isSlightPara?: boolean;
  isSpan?: boolean;
  isSmall?: boolean;

  // font weight
  isNormal?: boolean;
  isMedium?: boolean;
  isSemiBold?: boolean;
  isBold?: boolean;
  isExtraBold?: boolean;


  // dangerously set innerHtml
  isDangerousHtml?:boolean;
}

//////////////////////////////
// Functions
//////////////////////////////
export type HandleActionSchema = {
  handleAction: () => void;
};

// Title and Image
export interface LinkImageSchema extends LinkSchema, ImageSchema {}

// Articles
export type AllArticlesSchema = {
  articles: ArticleSchema[];
};
