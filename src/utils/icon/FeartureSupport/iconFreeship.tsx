import React from 'react'

type iconFreeshipProps = {
  width?: number,
  height?: number,
  color?: string,
}

const IconFreeship = ({width, height,color}:iconFreeshipProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width||"24"} height={height||"24"} viewBox="0 0 24 24" fill="none">
    <path d="M3.1709 7.43994L12.0009 12.5499L20.7709 7.46994" stroke={color||"#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.001 21.61V12.54" stroke={color||"#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.93111 2.48004L4.59111 5.44004C3.38111 6.11004 2.39111 7.79004 2.39111 9.17004V14.82C2.39111 16.2 3.38111 17.88 4.59111 18.55L9.93111 21.52C11.0711 22.15 12.9411 22.15 14.0811 21.52L19.4211 18.55C20.6311 17.88 21.6211 16.2 21.6211 14.82V9.17004C21.6211 7.79004 20.6311 6.11004 19.4211 5.44004L14.0811 2.47004C12.9311 1.84004 11.0711 1.84004 9.93111 2.48004Z" stroke={color||"#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default IconFreeship