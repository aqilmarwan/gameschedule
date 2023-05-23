// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
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
          "M44.126 27.438c.096-.782.16-1.594.16-2.438 0-.844-.064-1.656-.193-2.438l5.433-4.125c.482-.375.61-1.062.321-1.593l-5.143-8.657c-.321-.562-.996-.75-1.575-.562l-6.397 2.5a18.97 18.97 0 00-4.339-2.438l-.964-6.625C31.332.438 30.786 0 30.143 0H19.857a1.24 1.24 0 00-1.254 1.063l-.964 6.625c-1.575.625-3.021 1.468-4.34 2.437l-6.396-2.5a1.288 1.288 0 00-1.575.563L.185 16.843c-.321.562-.193 1.218.322 1.593l5.432 4.125a15.242 15.242 0 00-.225 2.438c0 .813.064 1.656.193 2.438L.474 31.563a1.267 1.267 0 00-.321 1.593l5.143 8.657c.321.562.996.75 1.575.562l6.397-2.5a18.97 18.97 0 004.339 2.438l.964 6.624c.129.626.643 1.063 1.286 1.063h10.286c.643 0 1.19-.438 1.254-1.063l.964-6.624c1.575-.626 3.021-1.47 4.34-2.438l6.396 2.5c.578.219 1.253 0 1.575-.563l5.143-8.656c.321-.562.193-1.218-.322-1.593l-5.367-4.125zM25 34.374c-5.304 0-9.643-4.219-9.643-9.375s4.34-9.375 9.643-9.375c5.304 0 9.643 4.219 9.643 9.375s-4.34 9.375-9.643 9.375z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
