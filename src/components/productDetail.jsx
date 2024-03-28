import React from 'react'
import HandleQuantityProduct from './Event/HandleQuantityProduct'
import LikeHandle from './Event/LikeHandle'
import { useParams } from 'react-router-dom'

const productDetail = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams()
  console.log(params)
  return (
    <div className="flex flex-row gap-[64px] items-start">
      <div className="flex flex-row gap-[16px] items-start">
        <div className="w-[632px] h-[632px] object-cover"></div>
        <div className="flex flex-row gap-[16px] items-center">
          <div className="h-[146px] w-[146px] object-contain">
            <img src="" alt="" className='h-full w-auto object-contain overflow-hidden' />
          </div>
          <div className="h-[146px] w-[146px] object-contain">
            <img src="" alt="" className='h-full w-auto object-contain overflow-hidden' />
          </div>
          <div className="h-[146px] w-[146px] object-contain">
            <img src="" alt="" className='h-full w-auto object-contain overflow-hidden' />
          </div>
          <div className="h-[146px] w-[146px] object-contain">
            <img src="" alt="" className='h-full w-auto object-contain overflow-hidden' />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] items-start">
        <div className="flex flex-col gap-[40px] items-start">
          <div className="flex flex-col gap-[16px] items-start">
            <div className="text-black text-[24px] font-[700] w-[632px] text-left">{params.itemproductid}</div>
            <div className="text-[#545454] text-[18px] font-[500] w-[500px] text-left">Only 55 Item Left!</div>
          </div>
          <div className="flex flex-col gap-[24px] items-start border-b-[#E9EAE9] border-[1px] border-solid pb-[24px]">
            <div className="flex flex-col gap-[16px] items-start">
              <div className="text-[20px] font-[500] text-[#545454] text-left w-full">{params.itemproductCurrentPrice}</div>
              <div className="text-[18px] font-[500] text-[#545454] text-left w-full line-through">{params.itemproductOldPrice}</div>
            </div>
            <div className="flex flex-row gap-[32px] items-center">
              <div className="text-[18px] text-[500] text-[#6E706E]">Quantity</div>
              <HandleQuantityProduct />
            </div>
            <div className="flex flex-row items-center gap-[32px]">
              <div className="Btn_primary">Buy Now</div>
              <div className="Btn_secondary">Add To Cart</div>
            </div>
            <div className="flex flex-row gap-[8px] items-center">
              <LikeHandle />
              <div className="Share">
                <div>Share</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] items-start pb-[24px] border-solid border-[1px] border-[#E9EAE9] w-[632px]">
          <div className=" text-[18px] font-[500px] text-[#6E706E]">#Treatment  #Serum  #Costic </div>
          <div className="flex flex-row gap-[16px] items-end">
            <div className="text-[18px] font-[500px] text-[#6E706E]">Unit:</div>
            <div className="text-[18px] text-center font-[500px] text-[#101110]">1 Piece</div>
          </div>
          <div className="flex flex-row gap-[16px] items-end">
            <div className="text-[18px] font-[500px] text-[#6E706E]">SKU:</div>
            <div className="text-[18px] text-center font-[500px] text-[#101110]">SRW12-1</div>
          </div>
        </div>
        {/* <div className="ProductDetail3">
          <div className="ServiceItem">
            <div className="ImgServiceItem" style="
                                background-image: url(/Media/Img/ProductDetail/Service/Group\ 8114.png);
                                width: 32.307px;
                                height: 30px;
                                background-repeat: no-repeat;"></div>
            <div style="display: flex; flex-direction: column; align-items: start; gap: 4px;">
              <div className="TitelServiceItem">Estimated Delivery</div>
              <div className="DescriptionServiceItem">With 4 days</div>
            </div>
          </div>
          <div className="ServiceItem">
            <div className="ImgServiceItem" style="
                            background-image: url(/Media/Img/ProductDetail/Service/Group\ 8116.png);
                            width: 32.307px;
                            height: 30px;
                            background-repeat: no-repeat;"></div>
            <div style="display: flex; flex-direction: column; align-items: start; gap: 4px;">
              <div className="TitelServiceItem">Free Shipping</div>
              <div className="DescriptionServiceItem">Order over 100$</div>
            </div>
          </div>
          <div className="ServiceItem">
            <div className="ImgServiceItem" style="
                            background-image: url(/Media/Img/ProductDetail/Service/Vector.png);
                            width: 32.307px;
                            height: 30px;
                            background-repeat: no-repeat;"></div>
            <div style="display: flex; flex-direction: column; align-items: start; gap: 4px;">
              <div className="TitelServiceItem">7 Days Return</div>
              <div className="DescriptionServiceItem">With 4 days</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default productDetail