import React from 'react'

type IconFacebook = {
  width?: number,
  height?: number,
  color?: string
}

const IconFacebook = ({ width, height, color }: IconFacebook) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width||"21"} height={height||"20"} viewBox="0 0 21 20" fill="none">
      <path d="M20.0501 10.0251C20.0501 4.49123 15.5589 0 10.0251 0C4.49123 0 0 4.49123 0 10.0251C0 14.8772 3.44862 18.9173 8.02005 19.8496V13.0326H6.01504V10.0251H8.02005V7.5188C8.02005 5.58396 9.59398 4.01003 11.5288 4.01003H14.0351V7.01754H12.0301C11.4787 7.01754 11.0276 7.46867 11.0276 8.02005V10.0251H14.0351V13.0326H11.0276V20C16.0902 19.4987 20.0501 15.2281 20.0501 10.0251Z" fill={color||"white"} />
    </svg>
  )
}

export default IconFacebook