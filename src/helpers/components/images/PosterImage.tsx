"use client";

import * as colors from "@/assets/colors";
import { imgTransition } from "@/assets/css/styles";
import * as fonts from "@/assets/fonts";
import {
  BodyOverlay,
  CustomImage,
  CustomTag,
  CustomText,
  TimeCard,
} from "@/dynamic-imports/components";
import { getAbiralImg } from "@/utils/methods/imgMethods";
import { getRelativeTime } from "@/utils/methods/timeMethods";
import { PosterImageSchema } from "@/utils/schemas/ComponentsSchema";
import { useState } from "react";

export default function PosterImage(props: PosterImageSchema) {
  // Props
  const {
    tag,
    image1,
    showClock,
    title,
    titleFont,
    timeFont,
    updated_at,
    isTransparent,
    isZoomable,
  } = props;

  // State
  const [zoomImg, setZoomImg] = useState("");

  // Css variables
  const newTimeFont = timeFont ?? fonts.getFont("slight_para");
  const color = colors.white;
  const zoom = isZoomable ? zoomImg : "";

  // Title css
  const font = titleFont ?? fonts.getFont("sub_title", "extra_bold");
  const titleCss = `${font} ${color} tracking-wide line-clamp-3`;

  // Action when the mouse enters the div
  const handleMouseEnter = () => {
    setZoomImg(`${imgTransition} scale-110 overflow-hidden`);
  };

  const handleMouseLeave = () => {
    setZoomImg(imgTransition);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-full h-[300px] md:h-full flex flex-col justify-end rounded-md overflow-hidden"
    >
      {isTransparent && (
        <BodyOverlay css="z-minus_1 absolute w-full min-h-full rounded-md" />
      )}
      <CustomImage
        priority
        src={getAbiralImg(image1!)}
        alt={title ?? "Featured Highlight Image"}
        divCss={`${zoom} z-minus_10 absolute w-full h-full rounded-md`}
        imgCss="w-full h-full object-cover rounded-md"
        width={0}
        height={0}
      />
      <div className="p-5">
        {tag && (
          <div className="w-full flex justify-center items-center">
            <CustomTag title={tag} status="error" />
          </div>
        )}
        <CustomText css={titleCss} isExtraBold>
          {title}
        </CustomText>
        {showClock && updated_at && (
          <TimeCard
            {...{ font: newTimeFont, color }}
            title={getRelativeTime(updated_at)}
            isFlag
          />
        )}
      </div>
    </div>
  );
}
