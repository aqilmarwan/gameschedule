// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 95 94"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#4nQMS8yFtCa)"}>
        <ellipse
          cx={"47.551"}
          cy={"46.84"}
          rx={"24.551"}
          ry={"23.84"}
          fill={"currentColor"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"4nQMS8yFtCa"}
          x={".423"}
          y={".423"}
          width={"94.255"}
          height={"92.834"}
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
            result={"effect1_foregroundBlur_1106_186"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse10Icon;
/* prettier-ignore-end */
