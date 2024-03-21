// import React from 'react';

// type AdsRightProps = {
//   img: string;
//   title: string;
//   description: string;
// };

// const AdsRight = ({ img, title, description }: AdsRightProps) => {
//   return (
//     <div className="flex flex-row gap-[28px] items-">
//       <img src={img} className='h-[500px] w-[650px] overflow-hidden' />
//       <div className="flex flex-col gap-[64px]">
//         <div className='flex flex-col gap-[32px]'>
//           <div className="text-[48px] w-[390px] font-medium text-black">{title}</div>
//           <div className="text-[#545454] leading-[450] text-[28px]">{description}</div>
//         </div>
//         <div className="Btn_primary">SHOP NOW</div>
//       </div>
//     </div>
//   );
// };

// export default AdsRight;

import React from 'react'

type AdsRight = {
  title: string,
  description: string,
  img: string
}
const AdsRight = ({ title, description, img }: AdsRight) => {
  return (
    <div className='flex flex-row items-center gap-[28px]'>
      <img src={img} alt="" className='w-[650px] h-[500px] overflow-hidden bg-cover' />
      <div className='flex flex-col gap-[64px] items-start'>
        <div className='flex flex-col items-start gap-[32px]'>
          <div className='text-[48px] text-black text-left'>{title}</div>
          <div className='text-[18px] text-[#545454] text-left'>{description}</div>
        </div>
        <button className='Btn_primary'>Shop Now</button>
      </div>
    </div>
  )
}

export default AdsRight