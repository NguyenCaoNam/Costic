import React from "react";
type iconArrowdownProps = {
  width?: number;
  height?: number;
  color?: string; 
}
const IconArrowdown = ({width, height, color}: iconArrowdownProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width||"24"} height={height||"24"} viewBox="0 0 24 24" fill="none">
      <path d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001" stroke={color||"#292D32"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default IconArrowdown