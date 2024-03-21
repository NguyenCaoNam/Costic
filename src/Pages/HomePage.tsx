import React from 'react'
import AdsRight from '../components/Ads/adsRight'
import CardProductL from '../components/CarProductL/CardProductL'
import AdsLeft from '../components/Ads/adsLeft'
import CardProductS from '../components/CardProductS/CardProductS'
import Feedback from '../components/Feedback/feedback'
import Blog from '../components/Blog/Blog'
import { ListCardProductL } from '../components/CarProductL/ListCardProductL'
import CardProductLItem from '../components/CarProductL/CardProductL'

const HomePage = () => {
  return (
    <>
      <AdsRight title={'2023 HALF-YEAR RESULT'} description={'Here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be.'} img={'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
      <div>
        <div className='text-[24px] font-bold heading-auto py-[12px] border-solid border-b-[1px] border-black uppercase text-left'>Features Product</div>
        <div className='flex flex-row items-start justify-around'>
          {ListCardProductL.map((Item) => {
            return (
              <CardProductLItem
                key={Item.id}
                ProductImg={Item.ProductImg}
                ProductName={Item.ProductName}
                CurrentPrice={Item.CurrentPrice}
                OldPrice={Item.OldPrice} />
            )
          })}
        </div>
      </div>
      {/* <CardProductL ProductName={''} CurrentPrice={0} ProductImg={''} /> */}
      <AdsLeft title={'2023 HALF-YEAR RESULT'} description={'Here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be.'} img={'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
      <CardProductS />
      <Feedback />
      <Blog />

    </>
  )
}

export default HomePage