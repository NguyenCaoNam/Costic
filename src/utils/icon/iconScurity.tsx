import React from 'react'

type IconScurity = {
  width?: number,
  height?: number,
  color?: string
}
const IconScurity = ({ width, height, color }: IconScurity) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width||"24"} height={height||"24"} viewBox="0 0 24 24" fill="none">
      <path d="M11.7405 17.75H17.6605C17.5705 17.83 17.4805 17.9 17.3905 17.98L13.1205 21.18C11.7105 22.23 9.41049 22.23 7.99049 21.18L3.71049 17.98C2.77049 17.28 2.00049 15.73 2.00049 14.56V7.14998C2.00049 5.92998 2.9305 4.57998 4.0705 4.14998L9.05049 2.27999C9.87049 1.96999 11.2305 1.96999 12.0505 2.27999L17.0205 4.14998C17.9705 4.50998 18.7805 5.50999 19.0305 6.52999H11.7305C11.5105 6.52999 11.3105 6.54 11.1205 6.54C9.27048 6.65 8.79048 7.31998 8.79048 9.42998V14.86C8.80048 17.16 9.39049 17.75 11.7405 17.75Z" stroke={color||"#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.80054 11.22H22.0005" stroke={color||"#292D32"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22.0005 9.42001V14.97C21.9805 17.19 21.3705 17.74 19.0605 17.74H11.7405C9.39054 17.74 8.80054 17.15 8.80054 14.84V9.41C8.80054 7.31 9.28054 6.63999 11.1305 6.51999C11.3205 6.51999 11.5205 6.51001 11.7405 6.51001H19.0605C21.4105 6.52001 22.0005 7.10001 22.0005 9.42001Z" stroke={color||"#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11.3206 15.26H12.6505" stroke={color||"#292D32"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14.7505 15.26H18.0205" stroke={color||"#292D32"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export default IconScurity