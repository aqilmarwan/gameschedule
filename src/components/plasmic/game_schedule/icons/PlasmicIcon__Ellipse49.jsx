// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse49Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 289 289"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#2r9GjxsNpHaa)"} fill={"currentColor"}>
        <circle cx={"144.448"} cy={"144.448"} r={"49.448"}></circle>

        <circle cx={"144.448"} cy={"144.448"} r={"49.448"}></circle>
      </g>

      <defs>
        <filter
          id={"2r9GjxsNpHaa"}
          x={".629"}
          y={".629"}
          width={"287.636"}
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
            result={"effect1_foregroundBlur_1111_454"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse49Icon;
/* prettier-ignore-end */
