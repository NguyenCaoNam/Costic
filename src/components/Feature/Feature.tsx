import React from 'react'
import IconFreeship from '../../utils/icon/FeartureSupport/iconFreeship'
import IconReturn from '../../utils/icon/iconReturn'
import IconScurity from '../../utils/icon/iconScurity'
import IconBestOffer from '../../utils/icon/iconBestOffer'

const Feature = () => {
  return (
    <div className='flex flex-row gap-[24px] items-start'>
      <div className='flex flex-col items-center gap-[13px] p-[16px] border-solid border-[1px] border-[#545454] rounded-[10px]'>
        <div className='text-[24px] font-medium leading-[40px] text-center w-[282px] '>Free Shipping</div>
        <IconFreeship width={40} height={40} color='#B0B0B0' />
        <div className='text-center text-[18px] leading-[40px] text-[#6E706E] w-[282px]'>Orrder over $90</div>
      </div>
      <div className='flex flex-col items-center gap-[13px] p-[16px] border-solid border-[1px] border-[#545454] rounded-[10px]'>
        <div className='text-[24px] font-medium leading-[40px] text-center w-[282px] '>Free Shipping</div>
        <IconReturn width={40} height={40} color='#B0B0B0' />
        <div className='text-center text-[18px] leading-[40px] text-[#6E706E] w-[282px]'>Orrder over $90</div>
      </div>
      <div className='flex flex-col items-center gap-[13px] p-[16px] border-solid border-[1px] border-[#545454] rounded-[10px]'>
        <div className='text-[24px] font-medium leading-[40px] text-center w-[282px] '>Free Shipping</div>
        <IconScurity width={40} height={40} color='#B0B0B0' />
        <div className='text-center text-[18px] leading-[40px] text-[#6E706E] w-[282px]'>Orrder over $90</div>
      </div>
      <div className='flex flex-col items-center gap-[13px] p-[16px] border-solid border-[1px] border-[#545454] rounded-[10px]'>
        <div className='text-[24px] font-medium leading-[40px] text-center w-[282px] '>Free Shipping</div>
        <IconBestOffer width={40} height={40} color='#B0B0B0' />
        <div className='text-center text-[18px] leading-[40px] text-[#6E706E] w-[282px]'>Orrder over $90</div>
      </div>
    </div>
  )
}

export default Feature