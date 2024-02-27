import { CustomText } from "@/dynamic-imports/components";
import { CustomTagSchema } from "@/utils/schemas/CommonSchema";

export default function CustomTag(props: CustomTagSchema) {
  // Props
  const { title, status, css } = props;

  // Css
  const isSuccess = status === "success";
  const isWarning = status === "warning";
  const isError = status === "error";
  const color = isSuccess
    ? "bg-green-500"
    : isWarning
    ? "bg-yellow-500"
    : isError
    ? "bg-red-500"
    : "bg-blue-500";
  const defaultCss = "w-fit px-2.5 py-0.5 bg-red-600 text-white rounded-md";
  const newCss = `${defaultCss} ${color}`;
  const className = css ?? newCss;

  return (
    <div className={className}>
      <CustomText css="text-white">{title}</CustomText>
    </div>
  );
}
