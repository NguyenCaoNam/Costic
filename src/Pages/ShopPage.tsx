/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import CardProductSItem from '../components/CardProductS/CardProductS'
import IconArrowdown from '../utils/icon/Arrow/iconArrowdown'
import { listCategory } from "../utils/constants";
import { ListCardProduct } from "../utils/data/ListCardProduct";

interface ICategory {
  total: number;
  id: number;
  title: string;
  categoryId: number;
}

const ShopPage = () => {
  const [category, setCategory] = useState<ICategory[]>([])
  const [listProduct, setListProduct] = useState<any[]>(ListCardProduct)
  const [activeItem, setActiveItem] = useState<number>(0);

  const handleActive = (id: number) => {
    setActiveItem(id)
  }

  useEffect(() => {
    if (listCategory) {
      const updatedCategories = listCategory.map(category => {
        let total = 0;
        if (category.categoryId === 0) {
          total = ListCardProduct.length;
        } else {
          total = ListCardProduct.reduce((acc, product) => {
            if (product.categoryId === category.categoryId) {
              return acc + 1;
            }
            return acc;
          }, 0);
        }
        return { ...category, total };
      });
      setCategory(updatedCategories)
    }
  }, [listCategory])

  useEffect(() => {
    if (activeItem) {
      const result = ListCardProduct.filter(item => item.categoryId === activeItem)
      setListProduct(result)
    } else {
      setListProduct(ListCardProduct)
    }
  }, [activeItem])

  return (
    <div className='flex flex-row gap-[60px] items-start w-full'>
      <div className='flex flex-col gap-[80px] items-start w-[314px]'>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-row justify-between py-[16px] border-solid border-b border-[6E706E] pr-[10px]'>
            <p className='text-[24px] text-left leading-[34px] font-medium'>Category</p>
            <IconArrowdown height={20} width={20} />
          </div>
          <div className='flex flex-col gap-[8px] items-start'>
            {category && category.map(item => (
              <div key={item.id} className={`flex flex-row justify-between Tag w-[314px] ${activeItem === item.categoryId && 'bg-black hover:bg-black'}`}
                onClick={() => handleActive(item.categoryId)}
              >
                <p className={`text-[16px] text-left leading-[22px] text-black ${activeItem === item.categoryId && 'text-white'}`}>{item.title}</p>
                <p className={`text-[16px] text-left leading-[22px] text-black ${activeItem === item.categoryId && 'text-white'}`}>{item.total}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[20px] w-[955px]">
        {listProduct && listProduct.map((itemProduct) => (
          <CardProductSItem key={itemProduct.id} itemCard={itemProduct} />
        ))}
      </div>
    </div>
  )
}

export default ShopPage