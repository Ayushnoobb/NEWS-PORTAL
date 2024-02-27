// assets
import { getImgSrc } from "../methods/imageMethods";

export const banners = {
  featured_section: {
    src: getImgSrc("homepage/banner_hotel_yak_gif"),
    alt: "banner_hotel_yak_gif",
    divCss: "w-full h-[80px] rounded-md rounded-md",
    width: 0,
    height: 0,
  },
  highlight_section: {
    src: getImgSrc("homepage/banner_hotel_yak_gif"),
    alt: "banner_hotel_yak_gif",
    divCss: "w-full h-[80px] rounded-md",
    width: 0,
    height: 0,
  },
  samachar_section: {
    src: getImgSrc("homepage/banner_bhatbhateni_jpeg"),
    alt: "banner_bhatbhateni_jpeg",
    divCss: "w-full h-[80px] rounded-md",
    width: 0,
    height: 0,
  },
  business_section: [
    {
      src: getImgSrc("homepage/banner_hotel_yak_gif"),
      alt: "banner_hotel_yak_gif",
      divCss: "h-[80px] rounded-md",
      width: 0,
      height: 0,
    },
    {
      src: getImgSrc("homepage/banner_nmb_visa_gif"),
      alt: "banner_nmb_visa_gif",
      divCss: "h-[80px] rounded-md",
      width: 0,
      height: 0,
    },
    {
      src: getImgSrc("homepage/banner_nt_fiber_gif"),
      alt: "banner_nt_fiber_gif",
      divCss: "h-[80px] rounded-md",
      width: 0,
      height: 0,
    },
  ],
};

export const ads_section = {
  highlights: [
    {
      src: getImgSrc("homepage/ad_kbc_gif"),
      alt: "ad_kbc_gif",
      width: 0,
      height: 0,
    },
    {
      src: getImgSrc("homepage/ad_kmc_gif"),
      alt: "ad_kmc_gif",
      width: 0,
      height: 0,
    },
    {
      src: getImgSrc("homepage/ad_tata_jpg"),
      alt: "ad_tata_jpg",
      width: 0,
      height: 0,
    },
  ],
  news: [
    {
      src: getImgSrc("homepage/ad_krishi_gif"),
      alt: "ad_krishi_gif",
      width: 0,
      height: 0,
    },
    {
      src: getImgSrc("homepage/ad_muktinath_gif"),
      alt: "ad_muktinath_gif",
      width: 0,
      height: 0,
    },
    {
      src: getImgSrc("homepage/ad_nepal_airlines_gif"),
      alt: "ad_nepal_airlines_gif",
      width: 0,
      height: 0,
    },
    {
      src: getImgSrc("homepage/ad_nepal_airlines_gif"),
      alt: "ad_shangrila_gif",
      width: 0,
      height: 0,
    },
  ],
};

//////////////////////////////
// Highlights section
//////////////////////////////
export const highlight_arr = (latest_articles: any, trending_articles: any) => [
  {
    title: "ताजा अपडेट",
    bannerImg: banners.highlight_section,
    posterImg: {
      ...latest_articles[0],
      isTransparent: true,
      isZoomable: true,
    },
    articles: latest_articles,
    imgList: ads_section.highlights.slice(0, 3),
  },
  {
    title: "ट्रेन्डिङ",
    bannerImg: banners.samachar_section,
    posterImg: {
      ...trending_articles[0],
      isTransparent: true,
      isZoomable: true,
    },
    articles: trending_articles,
    imgList: ads_section.news.slice(0, 3),
  },
];
