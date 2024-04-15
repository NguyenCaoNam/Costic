import { Link } from "react-router-dom";
import IconTag from "../../utils/icon/iconTag";

type blogItemProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemBlogDetail: any;
}

const BlogLarge = ({itemBlogDetail}: blogItemProps) => {
  return (
    <div className='flex flex-row gap-[32px] items-start'>
      <div className='h-[300px] w-[388px] object-fill overflow-hidden'>
        <img src={itemBlogDetail.imageBlog} alt="" />
      </div>
      <div className='flex flex-col gap-[8px]'>
        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row gap-[4px] item-center '>
          <IconTag height={20} width={20} />
            <p className='text-[14px] font-medium leading-[20px] w-fit text-[#101110]'>{itemBlogDetail.category}</p>
          </div>
          <p  className='text-[14px] font-medium leading-[20px] w-fit text-[#101110]'>{itemBlogDetail.date}</p>
        </div>
        <div className='flex flex-col items-start gap-[16px] w-full'>
          <Link to={`blog/${itemBlogDetail.id}`} className=' text-[30px] font-medium leading-[40px] text-left w-[534px] text-[#333333]'>{itemBlogDetail.title}</Link>
          <Link to={`blog/${itemBlogDetail.id}`}  className='text-[18px] leading-[25px] text-left w-[534px] h-fit text-[#101110] '>{itemBlogDetail.description}</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogLarge