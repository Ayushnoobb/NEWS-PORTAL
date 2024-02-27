import { light_blue_bg } from "@/assets/colors";
import { padding_x } from "@/assets/css/styles";
import { LogoImage, CustomText } from "@/dynamic-imports/components";
import { footer_end_items } from "@/utils/constants/layouts-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { OptionSchema } from "@/utils/schemas/CommonSchema";

export default function FooterCompanyInfo() {
  return (
    <div
      className={`${light_blue_bg} ${padding_x} footer-end py-10 flex-1 flex flex-col xl:flex-row gap-5 xl:gap-1`}
    >
      <div className="logo">
        <LogoImage />
      </div>

      <div className="footer-end w-full grid grid-cols-1 sm:grid-cols-[auto_auto_auto] md:grid-cols-[auto_auto_auto] lg:grid-cols-[auto_auto_auto_auto] xl:grid-cols-[auto_auto_auto_auto_auto] 2xl:grid-cols-5 gap-4 items-center divide-x divide-gray-400">
        {footer_end_items.map(
          ({ label, icon, value }: OptionSchema, idx: number) => {
            const isCopyright = label === "copyright";
            const newLabel = !isCopyright ? label : icon;

            return (
              <div
                key={getUniqueKey(idx, value)}
                className="px-2.5 flex flex-col gap-1 justify-between h-full border-l-[1px] border-l-gray-400"
              >
                {!isCopyright ? (
                  <CustomText isParagraph isSemiBold>
                    {newLabel}
                  </CustomText>
                ) : (
                  newLabel
                )}
                <CustomText isSlightPara>{value}</CustomText>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
