import React from 'react'
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import styles from "./CardProductL.module.scss";

type CardProductLItemProps = {
  itemCard: IProduct;
};

const CardProductLItem = ({ itemCard }: CardProductLItemProps) => {
  return (

    <Link
      to={`product/${itemCard?.id}`}
      className={styles.Wrap}
    >
      <div className='m-auto'>
        <img src={itemCard?.productImg[0]} alt="" className='w-[250px] h-[250px] overflow-hidden object-contain' />
      </div>
      <div className={`${styles.InforProduct} `}>
        <div className="text-[16px] font-medium leading-[25px] text-left text-[#333]">
          {itemCard?.productName}
        </div>
        <div className="flex flex-col gap-0 items-end">
          <div className="text-[20px] font-medium text-[#545454] text-left">
            {itemCard?.currentPrice}$
          </div>
          <div className="text-[16px] font-regular text-[#9C9D9C] text-left">
            {itemCard?.oldPrice}$
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CardProductLItem;
