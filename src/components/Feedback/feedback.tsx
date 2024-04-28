import React from 'react'
import { ListFeedback } from './listFeedback'

type Feedback = {
  name: string,
  content: string,
  img: string
}

const FeedbackItem = ({ name, content, img }: Feedback) => {
  return (
    <div className='relative px-[16px] pb-[32px] pt-[48px] rounded-[30px] border-solid border border-[#6E706E]' >
      <div className='h-[80px] w-[80px] rounded-full absolute border-[#6E706E] border border-solid -top-11 right-1/2 translate-x-1/2'>
        <img src={img} alt="" className='object-cover rounded-full w-full h-full' />
      </div>
      <div className='text-[24px] font-medium text-black w-[392px] text-center'>{name}</div>
      <div className='text-[18px] text-[#545454] text-left w-[392px]'>{content}</div>
    </div>
  )
}
const Feedback = () => {
  return (
    <div className=''>
      <div className='text-[24px] leading-[18px] text-left border-b border-solid py-[12px] w-full font-bold border-black'>Feedback</div>
      <div className='flex flex-row gap-[28px] mt-20'>
        {ListFeedback.map((item) => (
          <FeedbackItem
            key={item?.id}
            name={item.name}
            content={item.content}
            img={item.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Feedback


// .WrapProduct {
//   display: flex;
//   flex-direction: row;
//   gap: 28px;
//   align-items: start;
// }

// padding: 12px 0px;
// border - bottom: 1px solid var(--Foundation - Grey - grey - 900, #101110);
// color: #000;
// font - size: 24px;
// font - style: normal;
// font - weight: 700;
// line - height: 18px;
// font - family: Chesna Grotesk;
// text - align: left;