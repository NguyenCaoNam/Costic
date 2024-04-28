import React, { useEffect, useState } from 'react'
import { ListBlog } from '../utils/data/ListBlog'
import BlogLarge from '../components/Blog/BlogLarge'
import IconArrowdown from '../utils/icon/Arrow/iconArrowdown'
import { listCategory } from '../utils/constants'

const BlogPage = () => {
  const [category, setCategory] = useState<ICategory[]>([])
  const [activeItem, setActiveItem] = useState<number>(0);
  const [listBlog, setListBlog] = useState<any[]>()

  const handleActive = (id: number) => {
    setActiveItem(id)
  }

  useEffect(() => {
    if (listCategory && ListBlog) {
      const updatedCategories = listCategory.map(category => {
        let total = 0;
        if (category.categoryId === 0) {
          total = ListBlog.length;
        } else {
          total = ListBlog?.reduce((acc: number, product: any) => {
            if (product.categoryId === category.categoryId) {
              return acc + 1;
            }
            return acc;
          }, 0);
        }
        return { ...category, total };
      });
      setCategory(updatedCategories)
    }
  }, [listCategory, ListBlog])

  useEffect(() => {
    if (ListBlog && activeItem) {
      const filteredBlogs = ListBlog.filter(item => item.categoryId === activeItem);
      setListBlog(filteredBlogs);
    } else {
      setListBlog(ListBlog);
    }
  }, [activeItem, ListBlog]);

  return (
    <div className='flex flex-row gap-[60px] items-start'>
      <div className='flex flex-col gap-[80px] items-start w-[314px]'>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-row justify-between py-[16px] border-solid border-b border-[6E706E] pr-[10px]'>
            <p className='text-[24px] text-left leading-[34px] font-medium'>Category</p>
            <IconArrowdown height={20} width={20} />
          </div>
          <div className='flex flex-col gap-[8px] items-start'>
            {category && category.map(item => (
              <div key={item.id} className={`cursor-pointer flex flex-row justify-between Tag w-[314px] ${activeItem === item.categoryId && 'bg-black hover:bg-black'}`}
                onClick={() => handleActive(item.categoryId)}
              >
                <p className={`text-[16px] text-left leading-[22px] text-black ${activeItem === item.categoryId && 'text-white'}`}>{item.title}</p>
                <p className={`text-[16px] text-left leading-[22px] text-black ${activeItem === item.categoryId && 'text-white'}`}>{item.total}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[64px] w-[955px]">
        {/* chỗ này phải là camel case itemproduct => itemProduct */}
        {listBlog?.map((itemblog) => (
          <BlogLarge key={itemblog?.id} itemBlogDetail={itemblog} />
        ))}
      </div>
    </div>
  )
}
export default BlogPage
