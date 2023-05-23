// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 27"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26.475 14.816c.058-.422.097-.86.097-1.316 0-.456-.039-.894-.116-1.316l3.26-2.228a.64.64 0 00.192-.86L26.822 4.42c-.192-.304-.598-.405-.945-.304l-3.838 1.35c-.81-.54-1.658-.978-2.603-1.316L18.857.574C18.8.236 18.471 0 18.086 0h-6.172c-.386 0-.694.236-.752.574l-.579 3.577A12.1 12.1 0 007.98 5.468l-3.838-1.35c-.347-.119-.752 0-.945.303L.11 9.096c-.193.303-.116.658.193.86l3.26 2.228a7.452 7.452 0 00-.136 1.316c0 .439.039.894.116 1.316l-3.26 2.228a.64.64 0 00-.192.86l3.086 4.675c.192.303.597.405.945.303l3.838-1.35c.81.54 1.658.98 2.603 1.317l.579 3.577c.077.338.385.574.771.574h6.172c.386 0 .713-.236.752-.574l.578-3.577a12.102 12.102 0 002.604-1.317l3.838 1.35c.347.119.752 0 .945-.303l3.086-4.675c.193-.303.116-.658-.193-.86l-3.22-2.228zM15 18.562c-3.182 0-5.786-2.278-5.786-5.062 0-2.784 2.604-5.063 5.786-5.063 3.182 0 5.786 2.279 5.786 5.063S18.182 18.563 15 18.563z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
