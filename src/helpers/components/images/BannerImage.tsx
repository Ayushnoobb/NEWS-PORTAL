import { BannerImageSchema } from "@/utils/schemas/CommonSchema";

export default function BannerImage(props: BannerImageSchema) {
  // Props
  const { imageProps, divProps, css, extendCss } = props;

  return (
    <div className={css ?? `${extendCss} rounded-md shadow-md`}>
      <div className={`${imageProps?.divCss} grid place-items-center`}>
        Your ad here
      </div>
      {divProps && <div>div</div>}
    </div>
  );
}
