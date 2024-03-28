import React from 'react'

type iconAddProps = {
  width?: number,
  height?: number,
  color?: string
}
const IconAdd = ({ width, height, color }: iconAddProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width||"14"} height={height||"14"} viewBox="0 0 14 14" fill="none">
      <path d="M0 6.99731C0 7.51082 0.424238 7.92957 0.932622 7.92957H6.06887V13.0638C6.06887 13.5705 6.48625 13.9946 6.99999 13.9946C7.51369 13.9946 7.93945 13.5705 7.93945 13.0638V7.92957H13.0688C13.5757 7.92957 14 7.51082 14 6.99731C14 6.48377 13.5757 6.05819 13.0688 6.05819H7.93945V0.932265C7.93945 0.424076 7.51369 0 6.99999 0C6.48625 0 6.06887 0.424076 6.06887 0.932265V6.05819H0.932622C0.424238 6.05819 0 6.48377 0 6.99731Z" fill={color||"black"} />
    </svg>
  )
}

export default IconAdd