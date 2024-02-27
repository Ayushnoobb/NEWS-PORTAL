"use client";

import { CustomImage } from "@/dynamic-imports/components";
import { FlagSchema } from "@/utils/schemas/CommonSchema";
import { useRouter } from "next/navigation";

export default function LogoImage({ isFlag }: FlagSchema) {
  // Hooks
  const router = useRouter();

  // Action when logo is clicked
  return (
    <CustomImage
      priority
      src="/image/logo_full.png"
      alt="logo_full"
      divCss={isFlag ? "w-[120px] h-auto" : "w-[156px] h-9/12"}
      width={100}
      height={100}
      onClick={() => router.push("/")}
    />
  );
}
