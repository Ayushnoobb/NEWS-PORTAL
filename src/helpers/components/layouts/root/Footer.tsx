import { footer_menu_items } from "@/utils/constants/layouts-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { LinkSchema, NestedLinkSchema } from "@/utils/schemas/CommonSchema";
import { CustomText, SubHeadingText } from "@/dynamic-imports/components";
import FooterCompanyInfo from "./_comps/FooterCompanyInfo";
import { footer } from "@/assets/colors";
import { padding_x } from "@/assets/css/styles";

const Footer = () => {
  return (
    <footer className={`${footer} footer pt-10 flex flex-col`}>
      <div
        className={`${padding_x} footer-menu grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5`}
      >
        {footer_menu_items.map(
          ({ title, child }: NestedLinkSchema, idx: number) => (
            <div
              key={getUniqueKey(idx, title!)}
              className="flex flex-col gap-2"
            >
              <SubHeadingText>{title}</SubHeadingText>

              <div className="pb-10 flex flex-col gap-1">
                {child.map(({ title, slug }: LinkSchema, idx: number) => (
                  <CustomText
                    key={getUniqueKey(idx, title!)}
                    slug={slug!}
                    isLinkColor
                  >
                    {title}
                  </CustomText>
                ))}
              </div>
            </div>
          )
        )}
      </div>

      <FooterCompanyInfo />
    </footer>
  );
};

export default Footer;
