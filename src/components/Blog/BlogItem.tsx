import { Link } from "react-router-dom";

type blogItemProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemBlogDetail: any;
}

const BlogItem = ({itemBlogDetail}: blogItemProps) => {
  return (
    <div className='flex flex-row gap-[56px] items-start py-[16px] border-solid  border-b-[1px] border-[#BCBDBC]} w-full'>
      <div className='flex flex-row gap-[32px] items-start '>
        <Link to={`blog/${itemBlogDetail.id}`} className='text-[20px] leading-[26px] uppercase font-medium'>{itemBlogDetail.date}</Link>
        <Link to={`blog/${itemBlogDetail.id}`} className='text-[20px] leading-[26px] uppercase font-medium'>{itemBlogDetail.category}</Link>
      </div>
      <Link to={`blog/${itemBlogDetail.id}`} className='text-[18px] leading-[32px] text-[#333333]'>{itemBlogDetail.title}</Link>
    </div>
  )
}
export default BlogItem;


// const Blog = () => {
//   return (
//     <div className='flex flex-col gap-[40px] items-start w-full'>
//       <div className='text-[24px] leading-[18px] text-left border-b-[1px] border-solid py-[12px] w-[100%] font-bold border-black'>Blogs</div>
//       <div className='flex flex-col gap-[8px] w-full'>
//         {ListBlog.map((Item) => {
//           return (
//             <BlogItem
//               key={Item.id}
//               date={Item.date}
//               category={Item.category}
//               title={Item.title}
//             />
//           )
//         })}
//       </div>
//     </div>
//   )
// }
