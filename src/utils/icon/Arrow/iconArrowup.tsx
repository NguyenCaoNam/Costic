
type iconArrowupProps = {
  width?: number;
  height?: number;
  color?: string;
}
const IconArrowdown = ({ width, height, color }: iconArrowupProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width||"24"} height={height||"24"} viewBox="0 0 24 24" fill="none">
      <path d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05" stroke={ color||"#292D32"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export default IconArrowdown