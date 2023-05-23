// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 762 489"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#Q0-cnOHs3Ua)"}>
        <ellipse
          cx={"380.88"}
          cy={"244.475"}
          rx={"246.88"}
          ry={"110.475"}
          fill={"currentColor"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"Q0-cnOHs3Ua"}
          x={".708"}
          y={".708"}
          width={"760.342"}
          height={"487.533"}
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
            stdDeviation={"66.646"}
            result={"effect1_foregroundBlur_1106_176"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse7Icon;
/* prettier-ignore-end */
