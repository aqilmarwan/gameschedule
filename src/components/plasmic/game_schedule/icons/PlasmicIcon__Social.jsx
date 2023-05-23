// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SocialIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 133 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.31 11.573C20.31 5.18 15.766 0 10.156 0 4.545 0 0 5.18 0 11.573c0 5.776 3.714 10.564 8.569 11.433v-8.088h-2.58v-3.345h2.58v-2.55c0-2.9 1.515-4.502 3.835-4.502 1.111 0 2.274.226 2.274.226v2.846h-1.281c-1.261 0-1.655.893-1.655 1.808v2.172h2.816l-.45 3.345h-2.366v8.088c4.855-.869 8.569-5.657 8.569-11.433zm24.442 8.763c7.664 0 11.856-7.192 11.856-13.43 0-.204 0-.407-.012-.61a9.188 9.188 0 002.079-2.443 7.571 7.571 0 01-2.394.742c.87-.59 1.521-1.517 1.832-2.61a7.786 7.786 0 01-2.646 1.145c-.628-.756-1.459-1.257-2.364-1.425a3.75 3.75 0 00-2.642.497c-.809.49-1.452 1.268-1.83 2.214a5.303 5.303 0 00-.265 3.02 10.765 10.765 0 01-4.757-1.432c-1.48-.85-2.785-2.042-3.831-3.5a5.271 5.271 0 00-.456 3.44c.24 1.17.864 2.193 1.746 2.86a3.774 3.774 0 01-1.891-.59v.06c0 1.09.333 2.146.942 2.989.61.843 1.458 1.422 2.4 1.638a3.69 3.69 0 01-1.88.08c.265.938.784 1.759 1.482 2.346a3.86 3.86 0 002.41.932c-1.475 1.314-3.298 2.027-5.175 2.025-.331 0-.663-.023-.992-.068 1.906 1.385 4.123 2.12 6.388 2.116M86.884 2.073c2.711 0 3.033.011 4.103.067.99.05 1.528.238 1.886.396a3.14 3.14 0 011.168.86c.355.403.575.786.76 1.323.138.405.304 1.014.35 2.136.048 1.213.058 1.577.058 4.648 0 3.071-.01 3.435-.059 4.648-.045 1.122-.21 1.73-.35 2.136a3.64 3.64 0 01-.76 1.323 3.14 3.14 0 01-1.167.86c-.358.158-.895.345-1.886.396-1.07.056-1.391.067-4.103.067-2.712 0-3.033-.011-4.104-.067-.99-.05-1.528-.238-1.885-.396a3.14 3.14 0 01-1.168-.86 3.641 3.641 0 01-.76-1.323c-.139-.405-.304-1.014-.35-2.136-.048-1.213-.059-1.577-.059-4.648 0-3.071.01-3.435.06-4.648.045-1.122.21-1.73.35-2.136.183-.537.404-.92.759-1.323a3.14 3.14 0 011.168-.86c.357-.158.895-.345 1.885-.396 1.071-.056 1.392-.067 4.104-.067zm0-2.073c-2.758 0-3.104.013-4.187.07-1.081.055-1.82.25-2.465.534a4.962 4.962 0 00-1.799 1.327 5.764 5.764 0 00-1.171 2.037c-.251.732-.423 1.568-.472 2.792-.05 1.227-.061 1.619-.061 4.743 0 3.124.011 3.516.06 4.743.05 1.224.222 2.06.473 2.792.26.756.606 1.398 1.171 2.037a4.962 4.962 0 001.799 1.327c.646.284 1.384.479 2.465.535 1.083.056 1.429.069 4.187.069s3.104-.013 4.187-.07c1.08-.055 1.819-.25 2.465-.534a4.963 4.963 0 001.799-1.327 5.764 5.764 0 001.171-2.037c.251-.732.423-1.568.472-2.792.05-1.227.061-1.619.061-4.743 0-3.124-.011-3.516-.061-4.743-.05-1.224-.221-2.06-.472-2.792a5.764 5.764 0 00-1.171-2.037A4.963 4.963 0 0093.536.604C92.89.32 92.152.125 91.071.069 89.988.013 89.64 0 86.884 0zm0 5.596c-2.88 0-5.215 2.645-5.215 5.907s2.335 5.907 5.215 5.907 5.215-2.645 5.215-5.907-2.335-5.907-5.215-5.907zm0 9.741c-1.87 0-3.385-1.716-3.385-3.834 0-2.118 1.515-3.834 3.385-3.834 1.87 0 3.385 1.716 3.385 3.834 0 2.118-1.516 3.834-3.385 3.834zm6.64-9.974c0 .762-.546 1.38-1.22 1.38-.672 0-1.218-.618-1.218-1.38 0-.763.546-1.38 1.219-1.38s1.218.617 1.218 1.38zM124.362.02c1.108-.02 2.209-.008 3.309-.02.067 1.467.533 2.962 1.481 4 .946 1.063 2.285 1.55 3.587 1.714v3.86c-1.22-.045-2.446-.332-3.554-.928-.482-.247-.932-.565-1.372-.891-.005 2.801.01 5.599-.016 8.388-.066 1.34-.456 2.674-1.144 3.778-1.107 1.839-3.028 3.037-5.002 3.075-1.21.078-2.419-.296-3.451-.985-1.709-1.141-2.912-3.231-3.087-5.475-.021-.48-.027-.958-.01-1.426.152-1.824.949-3.57 2.185-4.756 1.402-1.383 3.365-2.041 5.203-1.652.017 1.42-.033 2.839-.033 4.259-.84-.308-1.821-.222-2.555.356-.536.393-.942.996-1.154 1.677-.176.486-.125 1.026-.115 1.542.201 1.573 1.536 2.896 2.962 2.753.945-.012 1.851-.633 2.343-1.543.16-.318.338-.644.348-1.018.083-1.715.05-3.423.06-5.137.007-3.865-.01-7.719.016-11.57l-.001-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SocialIcon;
/* prettier-ignore-end */
