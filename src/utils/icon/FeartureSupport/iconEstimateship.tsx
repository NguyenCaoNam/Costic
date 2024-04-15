import React from 'react'
type iconEstimateshipProps = {
  width?: number,
  height?: number,
  color?: string,
}
const IconEstimateship = ({width,height,color}:iconEstimateshipProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width||"30"} height={height||"30"}viewBox="0 0 30 30" fill="none">
      <path d="M28.7514 22.3876C28.7764 23.3251 28.5264 24.2126 28.0764 24.9751C27.8264 25.4251 27.4889 25.8376 27.1139 26.1751C26.2514 26.9751 25.1139 27.4626 23.8514 27.5001C22.0264 27.5376 20.4139 26.6001 19.5264 25.1626C19.0514 24.4251 18.7639 23.5376 18.7514 22.6001C18.7139 21.0251 19.4139 19.6001 20.5389 18.6626C21.3889 17.9626 22.4639 17.5251 23.6389 17.5001C26.4014 17.4376 28.6889 19.6251 28.7514 22.3876Z" stroke={color||"#292D32"} strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.8008 22.5375L23.0633 23.7374L25.6758 21.2124" stroke={color||"#292D32"} strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.96484 9.2998L15.0023 15.6873L25.9648 9.33727" stroke={color||"#292D32"} strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 27.0126V15.675" stroke={color||"#292D32"} strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27.0132 11.4625V18.5375C27.0132 18.6 27.0133 18.65 27.0008 18.7125C26.1258 17.95 25.0008 17.5 23.7508 17.5C22.5758 17.5 21.4883 17.9125 20.6258 18.6C19.4758 19.5125 18.7508 20.925 18.7508 22.5C18.7508 23.4375 19.0132 24.325 19.4757 25.075C19.5882 25.275 19.7258 25.4625 19.8758 25.6375L17.5883 26.9C16.1633 27.7 13.8383 27.7 12.4133 26.9L5.73826 23.2C4.22576 22.3625 2.98828 20.2625 2.98828 18.5375V11.4625C2.98828 9.7375 4.22576 7.63753 5.73826 6.80003L12.4133 3.1C13.8383 2.3 16.1633 2.3 17.5883 3.1L24.2633 6.80003C25.7758 7.63753 27.0132 9.7375 27.0132 11.4625Z" stroke={color||"#292D32"} strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default IconEstimateship