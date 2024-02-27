import { rGap } from "@/assets/css/styles";
import {
  AdsSection,
  BannerImage,
  DescriptionCard,
  DisplayErrorBox,
  HeaderText,
  MediaCard,
} from "@/dynamic-imports/components";
import { isCategoriesNews } from "@/utils/constants/common-constants";
import { ads_section, banners } from "@/utils/constants/homepage-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import {
  MediaCardSchema,
  NewsCategorySchema,
} from "@/utils/schemas/ComponentsSchema";

export default function NewsCategorySection(props: NewsCategorySchema) {
  // Props
  const { category_title, articles, news_slug } = props;

  // Vriables
  const isNoArticles = articles?.length < 1;
  const css = (articles: ArticleSchema[]) =>
    articles.length > 2 ? "md:items-end" : "md:items-start";
  const articles1 = articles?.slice(1, 4);
  const articles2 = articles?.slice(4, 7);
  const a1Css = css(articles1);
  const a2Css = css(articles2);

  return (
    <>
      <BannerImage imageProps={banners.samachar_section} />

      <div className={`${rGap} xl:grid xl:grid-cols-[auto_280px]`}>
        {/* First column */}
        <div className="flex flex-col">
          <HeaderText>{category_title}</HeaderText>

          <DescriptionCard {...articles[0]} {...isCategoriesNews(news_slug!)} />

          {isNoArticles ? (
            <DisplayErrorBox description="हाल देखाउनको लागि कुनै लेखहरू छैनन्।" />
          ) : (
            <div className="h-fit md:h-[calc(100%-260px-72px)] max-h-[calc(100%-260px-72px)] flex flex-col sm:flex-row gap-3">
              <div
                className={`${a1Css} flex flex-col basis-1/2 pt-4 md:pt-3 md:grid md:grid-rows-3 gap-3`}
              >
                {articles1?.map((item: MediaCardSchema, idx: number) => (
                  <MediaCard
                    {...item}
                    key={getUniqueKey(idx, item.title!)}
                    extendCss="h-[104px]"
                    info_placing="justify-center"
                    {...isCategoriesNews(news_slug!)}
                  />
                ))}
              </div>
              <div
                className={`${a2Css} flex flex-col basis-1/2 md:pt-3 md:grid md:grid-rows-3 gap-3`}
              >
                {articles2?.map((item: MediaCardSchema, idx: number) => (
                  <MediaCard
                    {...item}
                    key={getUniqueKey(idx, item.title!)}
                    extendCss="h-[104px]"
                    info_placing="justify-center"
                    {...isCategoriesNews(news_slug!)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Second column */}
        <div className="h-full hidden lg:flex flex-col justify-between pt-5 gap-4 ">
          <AdsSection imgList={ads_section.news} />
        </div>
      </div>
    </>
  );
}
