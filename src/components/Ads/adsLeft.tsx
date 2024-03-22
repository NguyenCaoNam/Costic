
type AdsLeft={
  title: string,
  description: string,
  img: string
}

const AdsLeft = ({title, description, img}:AdsLeft) => {
  return (
    <div className='flex flex-row items-center justify-between w-full gap-[28px]'>
      <div className='flex flex-col gap-[64px] items-end'>
        <div className='flex flex-col items-end gap-[32px]'>
          <div className='text-[48px] text-black text-right'>{title}</div>
          <div className='text-[18px] text-[#545454] text-right'>{description}</div>
        </div>
        <button className='Btn_primary'>Shop Now</button>
      </div>
      <img src={img} alt="" className='w-[650px] h-[500px] overflow-hidden bg-auto' />
    </div>
  )
}

export default AdsLeft