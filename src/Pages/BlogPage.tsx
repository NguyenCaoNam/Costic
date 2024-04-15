import React from 'react'
import { ListBlog } from '../utils/data/ListBlog'
import BlogLarge from '../components/Blog/BlogLarge'
import IconArrowdown from '../utils/icon/Arrow/iconArrowdown'


const BlogPage = () => {
  return (
    <div className='flex flex-row gap-[60px] items-start'>
      <div className='flex flex-col gap-[80px] items-start w-[314px]'>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-row justify-between py-[16px] border-solid border-b border-[6E706E] pr-[10px]'>
            <p className='text-[24px] text-left leading-[34px] font-medium'>Category</p>
            <IconArrowdown height={20} width={20} />
          </div>
          <div className='flex flex-col gap-[8px] items-start'>
            <div className='flex flex-row justify-between Tag w-[314px]'>
              <p className='text-[16px] text-left leading-[22px] text-black'>Category Item</p>
              <p className='text-[16px] text-left leading-[22px] text-black'>1</p>
            </div>
            <div className='flex flex-row justify-between Tag w-[314px]'>
              <p className='text-[16px] text-left leading-[22px] text-black'>Category Item</p>
              <p className='text-[16px] text-left leading-[22px] text-black'>1</p>
            </div>
            <div className='flex flex-row justify-between Tag w-[314px]'>
              <p className='text-[16px] text-left leading-[22px] text-black'>Category Item</p>
              <p className='text-[16px] text-left leading-[22px] text-black'>1</p>
            </div>
            <div className='flex flex-row justify-between Tag w-[314px]'>
              <p className='text-[16px] text-left leading-[22px] text-black'>Category Item</p>
              <p className='text-[16px] text-left leading-[22px] text-black'>1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[64px] w-[955px]">
        {/* chỗ này phải là camel case itemproduct => itemProduct */}
        {ListBlog.map((itemblog) => (
          <BlogLarge key={itemblog.id} itemBlogDetail={itemblog} />
        ))}
      </div>
    </div>
  )
}
export default BlogPage
