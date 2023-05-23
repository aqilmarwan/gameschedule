// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse21Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 245 289"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#XtbxEaJlmBa)"} fill={"currentColor"}>
        <ellipse
          cx={"122.494"}
          cy={"144.448"}
          rx={"27.494"}
          ry={"49.448"}
        ></ellipse>

        <ellipse
          cx={"122.494"}
          cy={"144.448"}
          rx={"27.494"}
          ry={"49.448"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"XtbxEaJlmBa"}
          x={".629"}
          y={".629"}
          width={"243.729"}
          height={"287.636"}
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
            result={"effect1_foregroundBlur_1111_195"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse21Icon;
/* prettier-ignore-end */
