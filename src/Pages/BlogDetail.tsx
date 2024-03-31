import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import FormSignup from "../components/Form/FormSignup";
import { ListBlog } from "../utils/data/ListBlog";
import IconFacebook from "../utils/icon/IconFacebook";
import IconInsta from "../utils/icon/IconInsta";
import IconX from "../utils/icon/IconX";
import IconYoutube from "../utils/icon/IconYoutube";
import IconTag from "../utils/icon/iconTag";

const BlogDetail = () => {
  const params = useParams();
  const { id } = params;

  //Find blog theo id;
  const blogDetail = ListBlog.find((BlogItem) => BlogItem.id === Number(id));
  console.log(blogDetail);
  return (
    <div className="flex flex-col gap-[104px] items-center">
      <div className="flex flex-col items-end gap-[16px]">
        <div className="flex flex-col gap-[64px] items-center w-full pb-[64px] border-b border-solid border-[#6E706E]">
          <div className="flex flex-col gap-[16px] items-center">
            <p className="text-[30px] font-medium text-center w-full leading-[42px] text-black">
              {blogDetail?.title}
            </p>
            <div className="flex flex-row gap-[8px] items-center">
              <div className="flex flex-row gap-[4px] px-[16px] py-[6px] rounded-[30px] border-solid border-[1px] border-[#6E706E] bg-white">
                <IconTag />
                <div className="text-[18px] text-[#6E706E]">
                  {blogDetail?.category}
                </div>
              </div>
              <div className="text-[18px] text-[#6E706E] px-[16px] py-[6px] rounded-[30px] border-solid border-[1px] border-[#6E706E] bg-white">
                {blogDetail?.date}
              </div>
            </div>
          </div>
          <div>
            <div className="text-[20px] text-left w-full leading-[28px]">
              {blogDetail?.content[0]}
            </div>
            <img src={blogDetail?.imageBlog} alt="" />
            <div className="text-[20px] text-left w-full leading-[28px]">
              {blogDetail?.content[1]}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[16px] items-center w-full">
          <IconFacebook color="black" />
          <IconX color="black" />
          <IconInsta color="black" />
          <IconYoutube color="black" />
        </div>
      </div>
      <div className="flex flex-col gap-[32px] items-center">
        <div className="text-[24px] font-bold text-center border-solid border-b border-[#000000] pb-[16px]">
          Comment
        </div>
        <div className="flex flex-col gap-[16px] items-center">
          {/* comment đây anh */}
          {/* <div className='flex flex-row gap-[16px] items-start w-full'>
            <div className='h-[70px] w-[70px] rounded-full object-contain overflow-hidden'>
              <img src="" alt="" />
            </div>
            <div className='flex flex-col items-start gap-[8px]'>
              <div className='flex flex-row w-full justify-between'>
                <p className='text-[20px] font-bold leading-[28px] text-left'>Name</p>
                <p className='text-[16px] leading-[22px] text-[#545454] text-right'>Datetime</p>
              </div>
              <p className='text-[18px] leading-[25px] w-full text-left text-black'>Content</p>
            </div>
          </div> */}
          {blogDetail?.comment.length &&
            blogDetail.comment.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
        </div>
      </div>
      <FormSignup />
    </div>

    // cái comment để chỗ nào
  );
};

export default BlogDetail;
