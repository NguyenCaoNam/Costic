import React, { useEffect, useState } from "react";
import AdsLeft from "../components/Ads/adsLeft";
import AdsRight from "../components/Ads/adsRight";
import CardProductLItem from "../components/CarProductL/CardProductL";
import { ListCardProduct } from "../utils/data/ListCardProduct";
import CardProductSItem from "../components/CardProductS/CardProductS";
import Feedback from "../components/Feedback/feedback";
import { LisTag } from "../components/Tag/LisTag";
import Tag from "../components/Tag/Tag";
import { ListBlog } from "../utils/data/ListBlog";
import BlogItem from "../components/Blog/BlogItem";
import { Link } from "react-router-dom";

const HomePage = () => {

  const [bestSellerList, setBestSellerList] = useState<IProduct[]>([]);
  const [listProduct, setListProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    if (ListCardProduct) {
      const resultSort = ListCardProduct.sort((a, b) => b.counter - a.counter)
      const resultBestSeller = resultSort.slice(0, 4)
      setBestSellerList(resultBestSeller)

      const resultProduct = ListCardProduct.slice(0, 4)
      setListProduct(resultProduct)
    }
  }, [ListCardProduct])

  return (
    <div>
      <AdsRight
        title={"2023 HALF-YEAR RESULT"}
        description={
          "Here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be."
        }
        img={
          "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b2c9a599371369.5ef17aefef2ad.png"
        }
      />
      <div className="flex flex-col w-full items-center gap-[40px]">
        <div className="text-[24px] w-full font-bold heading-auto py-[12px] border-solid border-b-[1px] border-black text-left">
          Features Product
        </div>
        <div className="flex flex-wrap gap-[28px] w-[1328px]">
          {/* chỗ này phải là camel case itemproduct => itemProduct */}
          {bestSellerList?.map((itemProduct) => (
            <CardProductLItem key={itemProduct?.id} itemCard={itemProduct} />
          ))}
        </div>
        <Link to={"/shop"} className="Btn_secondary">More</Link>
      </div>
      <div className="flex flex-col w-full items-center gap-[40px]">
        <div className="text-[24px] w-full font-bold heading-auto py-[12px] border-solid border-b-[1px] border-black text-left">
          Summer Sale
        </div>
        <AdsLeft
          title={"EXCLUSIVE DRESST COLLECTION"}
          description={
            "Here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be."
          }
          img={
            "https://hypeandhyper.com/content/images/2022/06/L3A1498-1-scaled-1.jpg"
          }
        />
      </div>
      <div className="flex flex-col w-full items-center gap-[40px]">
        <div className="flex flex-col items-start gap-[28px] w-full">
          <div className="text-[24px] w-full font-bold heading-auto py-[12px] border-solid border-b-[1px] border-black text-left">
            Our Store
          </div>
          <div className="flex flex-row gap-[24px] w-full ">
            {LisTag.map((Item) => {
              return <Tag key={Item.id} content={Item.content} />;
            })}
          </div>
        </div>
        <div className="flex flex-wrap gap-[24px] w-[1328px]">
          {/* chỗ này phải là camel case itemproduct => itemProduct */}
          {listProduct?.map((itemProduct) => (
            <CardProductSItem key={itemProduct?.id} itemCard={itemProduct} />
          ))}
        </div>
        <Link to={"/shop"} className="Btn_secondary">More</Link>
      </div>

      <div className="flex flex-col w-full items-center gap-[40px]">
        <div className="text-[24px] w-full font-bold heading-auto py-[12px] border-solid border-b-[1px] border-black text-left">
          Deal Of The Week
        </div>
        <AdsRight
          title={"DEAL OF THE WEEK"}
          description={
            "Here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be."
          }
          img={
            "https://www.cosmeticsdesign-europe.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/article/2020/10/01/indie-beauty-brand-typology-aims-to-expand-skin-care-range-in-2020/11797386-1-eng-GB/Indie-beauty-brand-Typology-aims-to-expand-skin-care-range-in-2020.jpg"
          }
        />
      </div>
      <Feedback />
      <div className='flex flex-col gap-[40px] items-start w-full'>
        <div className='text-[24px] leading-[18px] text-left border-b-[1px] border-solid py-[12px] w-[100%] font-bold border-black'>Blogs</div>
        <div className='flex flex-col gap-[8px] w-full'>
          {ListBlog.map((itemBlog) => (
            <BlogItem key={itemBlog.id} itemBlogDetail={itemBlog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
