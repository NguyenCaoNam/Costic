import React from 'react'
import AdsRight from '../components/Ads/adsRight'
import AdsLeft from '../components/Ads/adsLeft'
import Feedback from '../components/Feedback/feedback'
import Blog from '../components/Blog/Blog'
import { ListCardProduct } from '../components/CarProductL/ListCardProduct'
import CardProductLItem from '../components/CarProductL/CardProductL'
import { LisTag } from '../components/Tag/LisTag'
import Tag from '../components/Tag/Tag'
import { ListCardProductS } from '../components/CardProductS/ListCardProductS'
import CardProductSItem from '../components/CardProductS/CardProductS'

const HomePage = () => {
  return (
    <>
      <AdsRight title={'2023 HALF-YEAR RESULT'} description={'Here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be.'} img={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b2c9a599371369.5ef17aefef2ad.png'} />
      <div className='flex flex-col w-full items-center gap-[40px]'>
        <div className='text-[24px] w-full font-bold heading-auto py-[12px] border-solid border-b-[1px] border-black text-left'>Features Product</div>
        <div className='flex flex-wrap gap-[28px] w-[1328px]'>
          {ListCardProduct.map(itemproduct => (
            <CardProductLItem
              key={itemproduct.id}
              ProductImg={itemproduct.ProductImg}
              ProductName={itemproduct.ProductName}
              CurrentPrice={itemproduct.CurrentPrice}
              OldPrice={itemproduct.OldPrice}
            />
          ))}
        </div>
        <div className="Btn_secondary" > More</div>
      </div >
      <div className='flex flex-col w-full items-center gap-[40px]'>
        <div className='text-[24px] w-full font-bold heading-auto py-[12px] border-solid border-b-[1px] border-black text-left'>Summer Sale</div>
        <AdsLeft title={'EXCLUSIVE DRESST COLLECTION'} description={'Here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be.'} img={'https://hypeandhyper.com/content/images/2022/06/L3A1498-1-scaled-1.jpg'} />
      </div>
      <div className='flex flex-col w-full items-center gap-[40px]'>
        <div className='flex flex-col items-start gap-[28px] w-full'>
          <div className='text-[24px] w-full font-bold heading-auto py-[12px] border-solid border-b-[1px] border-black text-left'>Our Store</div>
          <div className='flex flex-row gap-[24px] w-full '>
            {LisTag.map((Item) => {
              return (
                <Tag
                  key={Item.id}
                  content={Item.content}
                />
              )
            })}
          </div>
        </div>
        <div className='flex flex-row gap-[24px] w-full'>
          {ListCardProductS.map((Item) => {
            return (
              <CardProductSItem
                key={Item.id}
                ProductImg={Item.ProductImg}
                ProductName={Item.ProductName}
                CurrentPrice={Item.CurrentPrice}
                OldPrice={Item.OldPrice}
              />
            )
          })}
        </div>
        <div className="Btn_secondary">More</div>
      </div>

      <div className='flex flex-col w-full items-center gap-[40px]'>
        <div className='text-[24px] w-full font-bold heading-auto py-[12px] border-solid border-b-[1px] border-black text-left'>Deal Of The Week</div>
        <AdsRight title={'DEAL OF THE WEEK'} description={'Here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be.'} img={'https://www.cosmeticsdesign-europe.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/article/2020/10/01/indie-beauty-brand-typology-aims-to-expand-skin-care-range-in-2020/11797386-1-eng-GB/Indie-beauty-brand-Typology-aims-to-expand-skin-care-range-in-2020.jpg'} />
      </div>
      <Feedback />
      <Blog />

    </>
  )
}

export default HomePage