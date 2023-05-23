// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1364 715"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#pmT3WfYpLla)"} fill={"currentColor"}>
        <ellipse
          cx={"681.934"}
          cy={"357.425"}
          rx={"547.934"}
          ry={"223.425"}
        ></ellipse>

        <ellipse
          cx={"681.934"}
          cy={"357.425"}
          rx={"547.934"}
          ry={"223.425"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"pmT3WfYpLla"}
          x={".708"}
          y={".708"}
          width={"1362.45"}
          height={"713.433"}
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
            result={"effect1_foregroundBlur_1106_177"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse5Icon;
/* prettier-ignore-end */
