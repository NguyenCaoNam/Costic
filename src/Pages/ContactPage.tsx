import React from 'react'
import ContactWithUsForm from '../components/Form/ContactWithUs'
import IconCall from '../utils/icon/iconCall'
import IconMail from '../utils/icon/iconMail'
import IconLocation from '../utils/icon/iconLocation'
import LikeHandle from '../components/Event/LikeHandle'
import HandleQuantityProduct from '../components/Event/HandleQuantityProduct'

const ContactPage = () => {
  return (
    <div className='flex flex-col gap-[80px] items-center w-full'>
      <div className='flex flex-col gap-[40px]'>
        <div className='flex flex-col items-center gap-[16px]'>
          <p className='text-[24px] font-medium text-black text-center leading-[34px] w-full'>CONTACT WITH US</p>
          <p className='text-[18px] font-normal text-[#545454] text-center leading-[25px] w-[800px]'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore.</p>
        </div>
        <div className='flex flex-row gap-[64px] justify-between w-full'>
          <div className='flex flex-row gap-[16px] items-start'>
            <div className='h-[60px] w-[60px] flex flex-col items-center justify-center rounded-full bg-[#E9EAE9]'>
              <IconCall />
            </div>
            <div className='flex flex-col gap-[4px] items-start'>
              <p className='text-[20] font-medium text-left text-black w-[302px] leading-[28px]'>Phone</p>
              <p className='text-[16px] text-[#545454] leading-[22px] text-left w-[302px]'>0912825107</p>
            </div>
          </div>
          <div className='flex flex-row gap-[16px] items-start'>
            <div className='h-[60px] w-[60px] flex flex-col items-center justify-center rounded-full bg-[#E9EAE9]'>
            <IconMail />
            </div>
            <div className='flex flex-col gap-[4px] items-start'>
              <p className='text-[20] font-medium text-left text-black w-[302px] leading-[28px]'>Mail</p>
              <p className='text-[16px] text-[#545454] leading-[22px] text-left w-[302px]'>nguyencaohainamjr@gmail.com</p>
            </div>
          </div>
          <div className='flex flex-row gap-[16px] items-start'>
            <div className='h-[60px] w-[60px] flex flex-col items-center justify-center rounded-full bg-[#E9EAE9]'>
            <IconLocation />
            </div>
            <div className='flex flex-col gap-[4px] items-start'>
              <p className='text-[20] font-medium text-left text-black w-[302px] leading-[28px]'>Address</p>
              <p className='text-[16px] text-[#545454] leading-[22px] text-left w-[302px]'>Hai Chau, Da Nang</p>
            </div>
          </div>
        </div>
      </div>
      <ContactWithUsForm />
      <div>
        <LikeHandle />
        <br />
        <HandleQuantityProduct />
      </div>
    </div>
  )
}

export default ContactPage