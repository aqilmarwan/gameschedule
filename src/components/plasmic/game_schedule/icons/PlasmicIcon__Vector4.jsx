// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 50"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M45.455 0H4.545C2.045 0 0 2.503 0 5.562v11.095h4.545V5.507h40.91v39.015H4.545v-11.18H0v11.152C0 47.553 2.045 50 4.545 50h40.91c2.5 0 4.545-2.447 4.545-5.506V5.562C50 2.475 47.955 0 45.455 0zM22.727 36.123L31.818 25l-9.09-11.123v8.342H0v5.562h22.727v8.343z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
