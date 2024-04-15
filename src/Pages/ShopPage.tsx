import CardProductSItem from '../components/CardProductS/CardProductS'
import { ListCardProduct } from '../utils/data/ListCardProduct'
import IconArrowdown from '../utils/icon/Arrow/iconArrowdown'

const ShopPage = () => {
  return (
    <div className='flex flex-row gap-[60px] items-start w-full'>
      <div className='flex flex-col gap-[80px] items-start w-[314px]'>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-row justify-between py-[16px] border-solid border-b border-[6E706E] pr-[10px]'>
            <p className='text-[24px] text-left leading-[34px] font-medium'>Category</p>
            <IconArrowdown height={20} width={20} />
          </div>
          <div className='flex flex-col gap-[8px] items-start'>
            <div className='flex flex-row justify-between Tag w-[314px]'>
              <p className='text-[16px] text-left leading-[22px] text-black'>Category Item</p>
              <p className='text-[16px] text-left leading-[22px] text-black'>1</p>
            </div>
            <div className='flex flex-row justify-between Tag w-[314px]'>
              <p className='text-[16px] text-left leading-[22px] text-black'>Category Item</p>
              <p className='text-[16px] text-left leading-[22px] text-black'>1</p>
            </div>
            <div className='flex flex-row justify-between Tag w-[314px]'>
              <p className='text-[16px] text-left leading-[22px] text-black'>Category Item</p>
              <p className='text-[16px] text-left leading-[22px] text-black'>1</p>
            </div>
            <div className='flex flex-row justify-between Tag w-[314px]'>
              <p className='text-[16px] text-left leading-[22px] text-black'>Category Item</p>
              <p className='text-[16px] text-left leading-[22px] text-black'>1</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-row justify-between py-[16px] border-solid border-b border-[6E706E] pr-[10px]'>
            <p className='text-[24px] text-left leading-[34px] font-medium'>Category</p>
            <p>icon</p>
          </div>
          <div className='flex flex-col gap-[8px] items-start'>
            <div className='flex flex-row justify-between Tag w-[314px]'>
              <p className='text-[16px] text-left leading-[22px] text-black'>Category Item</p>
              <p className='text-[16px] text-left leading-[22px] text-black'>1</p>
            </div>
            <div className='flex flex-row justify-between Tag w-[314px]'>
              <p className='text-[16px] text-left leading-[22px] text-black'>Category Item</p>
              <p className='text-[16px] text-left leading-[22px] text-black'>1</p>
            </div>
            <div className='flex flex-row justify-between Tag w-[314px]'>
              <p className='text-[16px] text-left leading-[22px] text-black'>Category Item</p>
              <p className='text-[16px] text-left leading-[22px] text-black'>1</p>
            </div>
            <div className='flex flex-row justify-between Tag w-[314px]'>
              <p className='text-[16px] text-left leading-[22px] text-black'>Category Item</p>
              <p className='text-[16px] text-left leading-[22px] text-black'>1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[20px] w-[955px]">
                {/* chỗ này phải là camel case itemproduct => itemProduct */}
        {ListCardProduct.map((itemProduct) => (
          <CardProductSItem key={itemProduct.id} itemCard={itemProduct} />
        ))}
      </div>
    </div>
  )
}

export default ShopPage