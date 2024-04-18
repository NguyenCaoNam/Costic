import React from "react"
import Feedback from "../components/Feedback/feedback"

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-[104px] w-full">
      <div className='flex flex-row gap-[64px] w-full items-center'>
        <div className="w-[632px] h-[632px] object-cover overflow-hidden">
          <img src="https://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/7/99/799b3c6b-7927-573f-8062-5a998426a0d3/642474695f312.image.jpg?resize=1200%2C800" alt="" className='w-[632px] h-[632px] overflow-hidden bg-auto object-cover' />
        </div>
        <div className='flex flex-col gap-[32px] items-start'>
          <div className='text-[48px] text-black text-left w-[632px] leading-[67px]'>OUR STORY</div>
          <p className='text-[18px] text-black w-[632px] text-left'>Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around. Those medals you wear on your moth-eaten chest should be there for bungling at which you are best. So, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon. Howwww! Nab him, jab him, tab him, grab him, stop that pigeon now. Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around. Those medals you wear on your moth-eaten chest should be there for bungling at which you are best. So, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon. Howwww! Nab him, jab him, tab him, grab him, stop that pigeon now.</p>
        </div>
      </div>
      <div className="flex flex-row gap-[64px] items-center">
        <div className="flex flex-row justify-between w-[632px]">
          <div className="flex flex-col gap-[8px] items-center">
            <p className="text-[36px] text-medium text-center text-black leading-[50px] border-b-[1px] border-black border-solid">1,000+</p>
            <p className="text-[18px] text-[#545454] text-center leading-[25px]">Total Products</p>
          </div>
          <div className="flex flex-col gap-[8px] items-center">
            <p className="text-[36px] text-medium text-center text-black leading-[50px] border-b-[1px] border-black border-solid">1,500+</p>
            <p className="text-[18px] text-[#545454] text-center leading-[25px]">Total Variant</p>
          </div>
          <div className="flex flex-col gap-[8px] items-center">
            <p className="text-[36px] text-medium text-center text-black leading-[50px] border-b-[1px] border-black border-solid">12,500+</p>
            <p className="text-[18px] text-[#545454] text-center leading-[25px]">Total Users</p>
          </div>
          <div className="flex flex-col gap-[8px] items-center">
            <p className="text-[36px] text-medium text-center text-black leading-[50px] border-b-[1px] border-black border-solid">2,000+</p>
            <p className="text-[18px] text-[#545454] text-center leading-[25px]">Total Sells</p>
          </div>
        </div>
        <div className="w-[632px] h-[632px] object-cover overflow-hidden">
          <img src="https://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/7/99/799b3c6b-7927-573f-8062-5a998426a0d3/642474695f312.image.jpg?resize=1200%2C800" alt="" className='w-[632px] h-[632px] overflow-hidden bg-auto object-cover' />
        </div>
      </div>
      <Feedback />
      <div className="flex flex-col w-full items-center gap-[40px]">
        <div className='text-[24px] w-full font-bold heading-auto py-[12px] border-solid border-b-[1px] border-black text-left'>Our Team</div>
        <div className="flex flex-row gap-[32px]">
          <div className="flex flex-col gap-[16px] items-start p-[16px] border-solid border-[1px] border-[#E9EAE9] w-fit rounded-[10px]">
            <div>
              <img src="https://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/7/99/799b3c6b-7927-573f-8062-5a998426a0d3/642474695f312.image.jpg?resize=1200%2C800" alt="" className='w-[276px] h-[320px] overflow-hidden bg-auto object-cover rounded-[10px]' />
            </div>
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="text font-medium text-[24px] text-left leading-[26px] text-black w-full">Cao Hai Nam</p>
              <p className="leading-[26px] text-[18px] text-[#6E706E] w-full text-left">Designer</p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-start p-[16px] border-solid border-[1px] border-[#E9EAE9] w-fit rounded-[10px]">
            <div>
              <img src="https://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/7/99/799b3c6b-7927-573f-8062-5a998426a0d3/642474695f312.image.jpg?resize=1200%2C800" alt="" className='w-[276px] h-[320px] overflow-hidden bg-auto object-cover rounded-[10px]' />
            </div>
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="text font-medium text-[24px] text-left leading-[26px] text-black w-full">Duong Duc Linh</p>
              <p className="leading-[26px] text-[18px] text-[#6E706E] w-full text-left">Developer</p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-start p-[16px] border-solid border-[1px] border-[#E9EAE9] w-fit rounded-[10px]">
            <div>
              <img src="https://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/7/99/799b3c6b-7927-573f-8062-5a998426a0d3/642474695f312.image.jpg?resize=1200%2C800" alt="" className='w-[276px] h-[320px] overflow-hidden bg-auto object-cover rounded-[10px]' />
            </div>
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="text font-medium text-[24px] text-left leading-[26px] text-black w-full">CaoHaiNam</p>
              <p className="leading-[26px] text-[18px] text-[#6E706E] w-full text-left">Dessigner</p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-start p-[16px] border-solid border-[1px] border-[#E9EAE9] w-fit rounded-[10px]">
            <div>
              <img src="https://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/7/99/799b3c6b-7927-573f-8062-5a998426a0d3/642474695f312.image.jpg?resize=1200%2C800" alt="" className='w-[276px] h-[320px] overflow-hidden bg-auto object-cover rounded-[10px]' />
            </div>
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="text font-medium text-[24px] text-left leading-[26px] text-black w-full">CaoHaiNam</p>
              <p className="leading-[26px] text-[18px] text-[#6E706E] w-full text-left">Dessigner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage