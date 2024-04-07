import { Link } from "react-router-dom"


type AdsRight = {
  title: string,
  description: string,
  img: string
}
const AdsRight = ({ title, description, img }: AdsRight) => {
  return (
    <div className='flex flex-row items-center gap-[28px] w-full'>
      <img src={img} alt="" className='w-[650px] h-[500px] overflow-hidden bg-cover' />
      <div className='flex flex-col gap-[64px] items-start'>
        <div className='flex flex-col items-start gap-[32px]'>
          <div className='text-[48px] text-black text-left'>{title}</div>
          <div className='text-[18px] text-[#545454] text-left'>{description}</div>
        </div>
        <Link to={"/dealoftheweek"} className='Btn_primary'>Shop Now</Link>
      </div>
    </div>
  )
}

export default AdsRight