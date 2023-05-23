// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse32Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 351 332"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#x46tZdlG-ma)"}>
        <ellipse
          cx={"175.456"}
          cy={"166.101"}
          rx={"80.457"}
          ry={"71.101"}
          fill={"currentColor"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"x46tZdlG-ma"}
          x={".629"}
          y={".629"}
          width={"349.654"}
          height={"330.943"}
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
            stdDeviation={"47.185"}
            result={"effect1_foregroundBlur_1111_437"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse32Icon;
/* prettier-ignore-end */
