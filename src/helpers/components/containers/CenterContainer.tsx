import { ContainerSchema } from "@/utils/schemas/ComponentsSchema";

export default function CenterContainer(props: ContainerSchema) {
  // Props
  const { children, css, extendCss } = props;

  // Css
  const defaultCss = "w-full h-full grid place-items-center bg-white shadow-md";
  const className = css ?? `${defaultCss} ${extendCss}`;

  return <div className={className}>{children}</div>;
}
