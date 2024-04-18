import React from "react";
type IconReturn = {
  width?: number;
  height?: number;
  color?: string;
};
const IconReturn = ({ width, height, color }: IconReturn) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6.70117 9.26001L12.0012 12.33L17.2612 9.28001"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.001 17.7701V12.3201"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7612 6.28998L7.56122 8.06998C6.84122 8.46998 6.24121 9.47998 6.24121 10.31V13.7C6.24121 14.53 6.83122 15.54 7.56122 15.94L10.7612 17.72C11.4412 18.1 12.5612 18.1 13.2512 17.72L16.4512 15.94C17.1712 15.54 17.7712 14.53 17.7712 13.7V10.3C17.7712 9.46998 17.1812 8.45998 16.4512 8.05998L13.2512 6.27998C12.5612 5.89998 11.4412 5.89998 10.7612 6.28998Z"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.001 15C22.001 18.87 18.871 22 15.001 22L16.051 20.25"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.00098 9C2.00098 5.13 5.13098 2 9.00098 2L7.95099 3.75"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconReturn;
