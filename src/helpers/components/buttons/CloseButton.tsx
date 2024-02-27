//Default imports
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

// Custom imports
import { ButtonSchema } from "@/utils/schemas/ComponentsSchema";

// Main function
export default function CloseButton(props: ButtonSchema) {
  // Props
  const { css, extendCss, ...rest } = props;

  // Css
  const defaultCss = "absolute text-red-500 hover:text-red-700";
  const position = extendCss ?? "top-6 right-6";
  const className = css ?? `${position} ${defaultCss}`;

  // Render
  return <AiOutlineClose className={className} {...rest} />;
}
