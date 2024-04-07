
const WishlistPage = () => {
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
          <div className='flex flex-row gap-[10px] py-[24px] border-solid border-b-[1px] border-black justify-between w-full items-center'>
            <div className='flex flex-row items-start gap-[16px] w-[700px]'>
              <div className='w-[130px] h-[130px] object-contain overflow-hidden'>
                <img src="https://i.pinimg.com/736x/5a/db/16/5adb167899bc83d07d7ca4007339036a.jpg" alt="" />
              </div>
              <div className='text-[20px] font-medium text-left leading-[28px] w-[554px]'>55+ Anti-Wrinkle Eye Treatment</div>
            </div>
            <div className='text-[18px] text-center w-[100px] leading-[74px]'>750$</div>
            <div className="flex flex-row gap-[16px] w-[304px]">
              <a className='Btn_primary w-fit leading-[18px]'>ADD TO CART</a>
              <a className='Btn_secondary w-fit leading-[18px]'>DELETE</a>
            </div>
          </div>
          <div className='flex flex-row gap-[10px] py-[24px] border-solid border-b-[1px] border-black justify-between w-full items-center'>
            <div className='flex flex-row items-start gap-[16px] w-[700px]'>
              <div className='w-[130px] h-[130px] object-contain overflow-hidden'>
                <img src="https://i.pinimg.com/736x/5a/db/16/5adb167899bc83d07d7ca4007339036a.jpg" alt="" />
              </div>
              <div className='text-[20px] font-medium text-left leading-[28px] w-[554px]'>55+ Anti-Wrinkle Eye Treatment</div>
            </div>
            <div className='text-[18px] text-center w-[100px] leading-[74px]'>750$</div>
            <div className="flex flex-row gap-[16px] w-[304px]">
              <a className='Btn_primary w-fit leading-[18px]'>ADD TO CART</a>
              <a className='Btn_secondary w-fit leading-[18px]'>DELETE</a>
            </div>
          </div>
        </div>
        <div className='Btn_secondary w-fit'>Clear Cart</div>
      </div>

    </div>

  )
}

export default WishlistPage