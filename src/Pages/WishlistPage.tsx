import React from "react"
import { useAppDispatch, useAppSelector } from "../hooks"
import { addProduct, clearFavourite, clearFavouriteById } from "../redux/rootSlice"

const WishlistPage = () => {
  const favouriteList = useAppSelector(state => state.root.listFavourite)
  const dispatch = useAppDispatch()
  const handleClearAll = () => {
    dispatch(clearFavourite())
  }

  const handleDeleteProduct = (id: string | number) => {
    dispatch(clearFavouriteById(id))
  }

  const handleAddProduct = (id: string | number, item: any) => {
    dispatch(addProduct({ id, data: item }))
  }
  return (
    <div className='flex flex-col gap-[80px] items-center'>
      <p className='leading-[45px] font-medium text-[32px] text-left w-full'>WISHTLIST</p>
      <div className='flex flex-col gap-[48px] w-full'>
        <div className='flex flex-col gap-[0px] items-center'>
          <div className='flex flex-row justify-between py-[10px] border-solid border-b-[1px] border-black w-full'>
            <p className='text-center font-bold text-[18px] w-[700px]'>Product</p>
            <p className='text-center font-bold text-[18px] w-[100px]'>Price</p>
            <p className='w-[304px]'></p>
          </div>
          {favouriteList?.length > 0 && favouriteList?.map(item => (
            <div key={item?.id} className='flex flex-row gap-[10px] py-[24px] border-solid border-b-[1px] border-black justify-between w-full items-center'>
              <div className='flex flex-row items-center gap-[16px] w-[700px]'>
                <div className='w-[130px] h-[130px] object-contain overflow-hidden'>
                  <img src={item?.productImg[0]} alt={`image-${item?.id}`} />
                </div>
                <div className='text-[20px] font-medium text-left leading-[28px] w-[554px]'>{item?.productName}</div>
              </div>
              <div className='text-[18px] text-center w-[100px] leading-[74px]'>{item?.oldPrice}$</div>
              <div className="flex flex-row gap-[16px] w-[304px]">
                <div className='Btn_primary w-fit leading-[18px] cursor-pointer' onClick={() => handleAddProduct(item?.id, item)}>ADD TO CART</div>
                <div className='Btn_secondary w-fit leading-[18px] cursor-pointer' onClick={() => handleDeleteProduct(item?.id)}>DELETE</div>
              </div>
            </div>
          ))}
        </div>
        {
          favouriteList?.length > 0
            ? <div className='Btn_secondary w-fit cursor-pointer' onClick={handleClearAll}>Clear Cart</div>
            : <p className="text-center">No data found</p>
        }
      </div>
    </div>

  )
}

export default WishlistPage