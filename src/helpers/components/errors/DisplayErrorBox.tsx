import { rPadding } from "@/assets/css/styles";

export type DisplayErrorBoxSchema = {
  title?: string;
  description?: string;
  css?: string;
  extendCss?: string;
};

export default function DisplayErrorBox(props: DisplayErrorBoxSchema) {
  // Props
  const { description, css, extendCss } = props;

  // Get css
  const defaultCss = `${rPadding} w-full h-full grid place-items-center`;
  const className =
    css ??
    `${
      extendCss ?? "bg-white text-brand-red text-2xl font-semibold shadow-md"
    } ${defaultCss}`;

  return <div className={className}>{description}</div>;
}
