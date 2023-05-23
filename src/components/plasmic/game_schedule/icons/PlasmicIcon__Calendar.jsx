// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CalendarIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24 6.857H8a2.286 2.286 0 00-2.286 2.286v16A2.286 2.286 0 008 27.429h16a2.286 2.286 0 002.286-2.286v-16A2.286 2.286 0 0024 6.857zm-3.429-2.286v4.572m-9.142-4.572v4.572m-5.715 4.571h20.572"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CalendarIcon;
/* prettier-ignore-end */
