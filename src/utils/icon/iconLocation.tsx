import React from 'react'

type iconLocationProps = {
  width?: number,
  height?: number,
  color?: string
}
const iconLocation = ({width,height,color}:iconLocationProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width||"21"} height={height||"20"} viewBox="0 0 21 20" fill="none">
      <path d="M8.125 9.1665H12.7083" stroke={color||"#292D32"} stroke-width="1.25" stroke-linecap="round" />
      <path d="M3.43325 7.07484C5.07492 -0.141827 15.7666 -0.133494 17.3999 7.08317C18.3583 11.3165 15.7249 14.8998 13.4166 17.1165C11.7416 18.7332 9.09159 18.7332 7.40825 17.1165C5.10825 14.8998 2.47492 11.3082 3.43325 7.07484Z" stroke="#292D32" stroke-width="1.25" />
    </svg>
  )
}

export default iconLocation