// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 145 143"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#-NTC6oPMZ3a)"}>
        <ellipse
          cx={"72.652"}
          cy={"71.215"}
          rx={"49.652"}
          ry={"48.215"}
          fill={"currentColor"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"-NTC6oPMZ3a"}
          x={".423"}
          y={".423"}
          width={"144.458"}
          height={"141.583"}
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
            result={"effect1_foregroundBlur_1106_185"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse9Icon;
/* prettier-ignore-end */
