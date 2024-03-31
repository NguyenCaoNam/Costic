import React from 'react'

type iconFreeshipProps = {
  width?: number,
  height?: number,
  color?: string,
}

const IconFreeship = ({width, height,color}:iconFreeshipProps) => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width={width||"30"} height={height||"30"} viewBox="0 0 30 30" fill="none">
      <path d="M25 0H5C2.2385 0 0 2.2385 0 5V25C0 27.7615 2.2385 30 5 30H25C27.7615 30 30 27.7615 30 25V5C30 2.2385 27.7615 0 25 0ZM8 12H5.455V14.25H8V15.75H5.455V19.5H4V10.5H8V12ZM14.2375 19.5H12.727L11.4915 15.75H10.929V19.5H9.5V10.5H12C13.379 10.5 14.5 11.6775 14.5 13.125C14.5 14.2235 13.8535 15.167 12.9395 15.5575L14.2375 19.5ZM20 12H17.455V14.25H20V15.75H17.455V18H20V19.5H16V10.5H20V12ZM26 12H23.455V14.25H26V15.75H23.455V18H26V19.5H22V10.5H26V12Z" fill="black" />
      <path d="M12.0012 12H10.9297V14.25H12.0012C12.5922 14.25 13.0727 13.745 13.0727 13.125C13.0727 12.505 12.5922 12 12.0012 12Z" fill={color||"black"} />
    </svg>
  )
}

export default IconFreeship