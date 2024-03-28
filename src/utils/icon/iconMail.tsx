type iconMail = {
  width?: number;
  height?: number;
  color?: string;
};
const IconMail = ({ width, height, color }: iconMail) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "21"}
      height={height || "20"}
      viewBox="0 0 21 20"
      fill="none"
    >
      <path
        d="M7.8335 8.75H13.6668"
        stroke={color || "#292D32"}
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.58317 15.3587H9.9165L13.6248 17.8254C14.1748 18.1921 14.9165 17.8004 14.9165 17.1337V15.3587C17.4165 15.3587 19.0832 13.6921 19.0832 11.1921V6.19206C19.0832 3.69206 17.4165 2.02539 14.9165 2.02539H6.58317C4.08317 2.02539 2.4165 3.69206 2.4165 6.19206V11.1921C2.4165 13.6921 4.08317 15.3587 6.58317 15.3587Z"
        stroke="#292D32"
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconMail;
