// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 579 414"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#Okwk4XFjL4a)"}>
        <ellipse
          cx={"289.677"}
          cy={"207.35"}
          rx={"155.677"}
          ry={"73.35"}
          fill={"currentColor"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"Okwk4XFjL4a"}
          x={".708"}
          y={".708"}
          width={"577.938"}
          height={"413.283"}
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
            result={"effect1_foregroundBlur_1106_178"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse4Icon;
/* prettier-ignore-end */
