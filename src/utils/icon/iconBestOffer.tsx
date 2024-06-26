import React from "react";

type IconBestOffer = {
  width?: number;
  height?: number;
  color?: string;
};
const IconBestOffer = ({ width, height, color }: IconBestOffer) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.80998 14.93C6.45998 13.83 6.86998 12.46 8.02998 12.09C8.63998 11.89 9.38998 12.06 9.81998 12.65C10.22 12.04 11 11.9 11.6 12.09C12.76 12.46 13.17 13.83 12.82 14.93C12.27 16.68 10.35 17.59 9.81998 17.59C9.27998 17.58 7.37998 16.69 6.80998 14.93Z"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default IconBestOffer;
