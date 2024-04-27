import React from 'react'

const MyProfile = () => {
  return (
    <div className='flex flex-col gap-[40px]'>
      <div>MY PROFILE</div>
      <div className='flex flex-col gap-[]'>
        <div className='flex flex-col gap-[8px] items-start'>
          <div className='text-black text-[16px] text-left font-medium'>Username</div>
          <div className='w-[908px] text-[16px] text-black px-[16px] py-[12px] text-left border-1px border-[#545454] border-solid rounded-[30px]'>NamNCH</div>
        </div>
        <div className='flex flex-col gap-[8px] items-start'>
          <div className='text-black text-[16px] text-left font-medium'>Mobile Number</div>
          <div className='w-[908px] text-[16px] text-black px-[16px] py-[12px] text-left border-1px border-[#545454] border-solid rounded-[30px]'>0912825107</div>
        </div>
        <div className='flex flex-col gap-[8px] items-start'>
          <div className='text-black text-[16px] text-left font-medium'>Email Address</div>
          <div className='w-[908px] text-[16px] text-black px-[16px] py-[12px] text-left border-1px border-[#545454] border-solid rounded-[30px]'>nguyencaohainam@gmail.com</div>
        </div>
        <div className='flex flex-row gap-[8px] items-start'>
          <button className='Btn_secondary'>Change Password</button>
          <button className='Btn_primary'>Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default MyProfile