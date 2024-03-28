type IconShipping = {
  width?: number;
  height?: number;
  color?: string;
};
const IconShipping = ({ width, height, color }: IconShipping) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.0007 14H13.0007C14.1007 14 15.0007 13.1 15.0007 12V2H6.00073C4.50073 2 3.19074 2.82999 2.51074 4.04999"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.00098 17C2.00098 18.66 3.34098 20 5.00098 20H6.00098C6.00098 18.9 6.90098 18 8.00098 18C9.10098 18 10.001 18.9 10.001 20H14.001C14.001 18.9 14.901 18 16.001 18C17.101 18 18.001 18.9 18.001 20H19.001C20.661 20 22.001 18.66 22.001 17V14H19.001C18.451 14 18.001 13.55 18.001 13V10C18.001 9.45 18.451 9 19.001 9H20.291L18.581 6.01001C18.221 5.39001 17.561 5 16.841 5H15.001V12C15.001 13.1 14.101 14 13.001 14H12.001"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00098 22C9.10555 22 10.001 21.1046 10.001 20C10.001 18.8954 9.10555 18 8.00098 18C6.89641 18 6.00098 18.8954 6.00098 20C6.00098 21.1046 6.89641 22 8.00098 22Z"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.001 22C17.1055 22 18.001 21.1046 18.001 20C18.001 18.8954 17.1055 18 16.001 18C14.8964 18 14.001 18.8954 14.001 20C14.001 21.1046 14.8964 22 16.001 22Z"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.001 12V14H19.001C18.451 14 18.001 13.55 18.001 13V10C18.001 9.45 18.451 9 19.001 9H20.291L22.001 12Z"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.00098 8H8.00098"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.00098 11H6.00098"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.00098 14H4.00098"
        stroke={color || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconShipping;
