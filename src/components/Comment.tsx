type CommentProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemBlogDetail: any;
};

const Comment = ({itemBlogDetail}:CommentProps) => {
  return (
    <div className='flex flex-row gap-[16px] items-start w-full'>
      <div className='h-[70px] w-[70px] rounded-full object-contain overflow-hidden'>
        <img src="" alt="" />
      </div>
      <div className='flex flex-col items-start gap-[8px]'>
        <div className='flex flex-row w-full justify-between'>
          <p className='text-[20px] font-bold leading-[28px] text-left'>{itemBlogDetail?.comment}</p>
          <p className='text-[16px] leading-[22px] text-[#545454] text-right'>Datetime</p>
        </div>
        <p className='text-[18px] leading-[25px] w-full text-left text-black'>Content</p>
      </div>
    </div>
  )
}

export default Comment