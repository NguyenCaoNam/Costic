import React from 'react'
import { ListBlog } from './listBlog'

type BlogItem = {
  date: string,
  category: string,
  title: string
}

const BlogItem = ({ date, category, title }: BlogItem) => {
  return (
    <div className='flex flex-row gap-[56px] items-start py-[16px] border-solid  border-b-[1px] border-[#BCBDBC]} w-100%'>
      <div className='flex flex-row gap-[32px] items-start '>
        <div className='text-[20px] leading-[26px] uppercase font-medium'>{date}</div>
        <div className='text-[20px] leading-[26px] uppercase font-medium'>{category}</div>
      </div>
      <div className='text-[18px] leading-[32px] font-medium text-[#333333]'>{title}</div>
    </div>


  )
}

const Blog = () => {
  return (
    <div className='flex flex-col gap-[40px] items-start w-full px-[56px]'>
      <div className='text-[24px] leading-[18px] text-left border-b-[1px] border-solid py-[12px] w-[100%] font-bold border-black'>Blogs</div>
      <div className='flex flex-col gap-[8px] w-full'>
        {ListBlog.map((Item) => {
          return (
            <BlogItem
              key={Item.id}
              date={Item.date}
              category={Item.category}
              title={Item.title}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Blog