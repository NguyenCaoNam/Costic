import React from 'react'
type iconTagProps = {
  width?: number,
  height?: number,
  color?: string
}
const IconTag = ({width,height,color}:iconTagProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width||"25"} height={height||"25"} viewBox="0 0 25 25" fill="none">
      <path d="M4.67038 15.8L9.20038 20.33C11.0604 22.19 14.0804 22.19 15.9504 20.33L20.3404 15.94C22.2004 14.08 22.2004 11.06 20.3404 9.19005L15.8004 4.67005C14.8504 3.72005 13.5404 3.21005 12.2004 3.28005L7.20038 3.52005C5.20038 3.61005 3.61038 5.20005 3.51038 7.19005L3.27038 12.19C3.21038 13.54 3.72038 14.85 4.67038 15.8Z" stroke={color||"#545454"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 12.5001C11.3807 12.5001 12.5 11.3808 12.5 10.0001C12.5 8.61935 11.3807 7.50006 10 7.50006C8.61929 7.50006 7.5 8.61935 7.5 10.0001C7.5 11.3808 8.61929 12.5001 10 12.5001Z" stroke={color||"#545454"} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default IconTag