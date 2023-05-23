// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse19Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 623 623"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#g9TRyNX2Ca)"} fill={"currentColor"}>
        <circle cx={"311.381"} cy={"311.381"} r={"111.381"}></circle>

        <circle cx={"311.381"} cy={"311.381"} r={"111.381"}></circle>
      </g>

      <defs>
        <filter
          id={"g9TRyNX2Ca"}
          x={".471"}
          y={".471"}
          width={"621.819"}
          height={"621.819"}
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
            stdDeviation={"99.764"}
            result={"effect1_foregroundBlur_1108_179"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse19Icon;
/* prettier-ignore-end */
