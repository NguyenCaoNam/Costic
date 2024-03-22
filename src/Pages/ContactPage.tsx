import ContactWithUsForm from '../components/Form/ContactWithUs'

const ContactPage = () => {
  return (
    <div className='flex flex-col gap-[80px] items-center w-full'>
      <div className='flex flex-col gap-[40px]'>
        <div className='flex flex-col items-center gap-[16px]'>
          <p className='text-[24px] font-medium text-black text-center leading-[34px] w-full'>CONTACT WITH US</p>
          <p className='text-[24px] font-normal text-[#545454] text-center leading-[25px] w-[800px]'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore.</p>
        </div>
        <div className='flex flex-row gap-[64px] justify-between w-full'>
          <div>
            <div className='h-[60px] w-[60px] items-center'>
              <iconCall />
            </div>
            <div className='flex flex-col gap-[12px] items-start'>
              <p className='text-[20] font-medium text-left text-black w-[302px] leading-[28px]'>Phone</p>
              <p className='text-[16px] text-[#545454] leading-[22px] text-left w-[302px]'>0912825107</p>
            </div>
          </div>
          <div>
            <div>
            </div>
            <div className='flex flex-col gap-[12px] items-start'>
              <p className='text-[20] font-medium text-left text-black w-[302px] leading-[28px]'>Phone</p>
              <p className='text-[16px] text-[#545454] leading-[22px] text-left w-[302px]'>0912825107</p>
            </div>
          </div>
          <div>
            <div>
            </div>
            <div className='flex flex-col gap-[12px] items-start'>
              <p className='text-[20] font-medium text-left text-black w-[302px] leading-[28px]'>Phone</p>
              <p className='text-[16px] text-[#545454] leading-[22px] text-left w-[302px]'>0912825107</p>
            </div>
          </div>
        </div>
      </div>
      <ContactWithUsForm />
      <div></div>
    </div>
  )
}

export default ContactPage