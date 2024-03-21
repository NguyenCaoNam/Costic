import React from 'react'
import { ListFeedback } from './listFeedback'

type Feedback = {
  name: string,
  content: string,
  img: string
}
const FeedbackItem = ({ name, content, img }: Feedback) => {
  return (
    <div>
      <img src={img} alt="" className='h-[80px] w-[80px] rounded-full overflow-hidden bg-contain relative top-[40px] right-[-172px] border-solid border-[#6E706E] border-[1px]' />
      <div className='flex flex-col gap-[8px] px-[16px] pb-[32px] pt-[48px] items-center rounded-[30px] border-solid border-[1px] border-[#6E706E]'>
        <div className='text-[24px] font-medium text-black w-[392px]'>{name}</div>
        <div className='text-[18px] text-book text-[#545454] text-left w-[392px]'>{content}</div>
      </div>
    </div>
  )
}
const Feedback = () => {

  return (
    <div className='flex flex-col gap-[20px] items-start'>
      <div className='text-[24px] leading-[18px] text-left border-b-[1px] border-solid py-[12px] w-[100%] font-bold border-black'>Feedback</div>
      <div className='flex flex-row gap-[28px] items-start'>
        {ListFeedback.map((Item) => {
          return (
            <FeedbackItem 
            key={Item.id}
            name={Item.name}
            content={Item.content}
            img={Item.img}/>
          )
        })}
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