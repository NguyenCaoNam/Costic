import React from "react";
type IconPersonal = {
  width?: number;
  height?: number;
  color?: string;
};
const IconPersonal = ({ width, height, color }: IconPersonal) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconPersonal;
