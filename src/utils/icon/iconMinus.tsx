import React from 'react'

type IconMinusProps = {
  width?: number,
  height?: number,
  color?: string
}
const IconMinus = ({width,height,color}:IconMinusProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width||"14"} height={height||"2"} viewBox="0 0 14 2" fill="none">
      <path d="M0.925989 1.94468H13.074C13.5708 1.94468 14 1.51551 14 1.00429C14 0.493064 13.5708 0.0722656 13.074 0.0722656H0.925989C0.438213 0.0722656 0 0.493064 0 1.00429C0 1.51551 0.438213 1.94468 0.925989 1.94468Z" fill={color||"black"} />
    </svg>
  )
}

export default IconMinus