// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 79 78"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#ZxpyUPhxMwa)"}>
        <ellipse
          cx={"39.301"}
          cy={"38.829"}
          rx={"16.301"}
          ry={"15.829"}
          fill={"currentColor"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"ZxpyUPhxMwa"}
          x={".423"}
          y={".423"}
          width={"77.755"}
          height={"76.811"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"11.288"}
            result={"effect1_foregroundBlur_1106_188"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse12Icon;
/* prettier-ignore-end */
