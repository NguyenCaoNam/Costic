import React from 'react'
type iconReturnProps = {
  width?: number,
  height?: number,
  color?: string,
}
const IconReturn = ({ width, height, color }: iconReturnProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width||"30"} height={height||"30"} viewBox="0 0 30 30" fill="none">
      <path d="M27.5 18.75C27.5 23.5875 23.5875 27.5 18.75 27.5L20.0625 25.3125" stroke={color||"#292D32"} stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2.5 11.25C2.5 6.4125 6.4125 2.5 11.25 2.5L9.9375 4.6875" stroke={color||"#292D32"} stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17.1328 5.5625L22.1078 8.43748L27.0328 5.57501" stroke={color||"#292D32"} stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22.1094 13.5251V8.42505" stroke={color||"#292D32"} stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M20.9289 2.7625L17.9289 4.42495C17.2539 4.79995 16.6914 5.74994 16.6914 6.52494V9.69998C16.6914 10.475 17.2414 11.425 17.9289 11.8L20.9289 13.4625C21.5664 13.825 22.6164 13.825 23.2664 13.4625L26.2664 11.8C26.9414 11.425 27.5039 10.475 27.5039 9.69998V6.52494C27.5039 5.74994 26.9539 4.79995 26.2664 4.42495L23.2664 2.7625C22.6289 2.4125 21.5789 2.4125 20.9289 2.7625Z" stroke={color||"#292D32"} stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2.94141 19.3125L7.90391 22.1875L12.8414 19.325" stroke={color||"#292D32"} stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7.90234 27.2751V22.175" stroke={color||"#292D32"} stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6.7375 16.5125L3.73751 18.1749C3.06251 18.5499 2.5 19.4999 2.5 20.2749V23.45C2.5 24.225 3.05001 25.175 3.73751 25.55L6.7375 27.2125C7.375 27.575 8.42499 27.575 9.07499 27.2125L12.075 25.55C12.75 25.175 13.3125 24.225 13.3125 23.45V20.2749C13.3125 19.4999 12.7625 18.5499 12.075 18.1749L9.07499 16.5125C8.42499 16.1625 7.375 16.1625 6.7375 16.5125Z" stroke={color||"#292D32"} stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export default IconReturn