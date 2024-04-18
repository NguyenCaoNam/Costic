import React from 'react'
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import styles from "./CardProductL.module.scss";

type CardProductLItemProps = {
  itemCard: IProduct;
};

const CardProductLItem = ({ itemCard }: CardProductLItemProps) => {
  return (
    <div key={itemCard?.id} className={styles.Wrap}>
      <Link
        to={`product/${itemCard?.id}`}
        className="w-[424px] h-[500px] overflow-hidden"
      >
        <img src={itemCard?.productImg[0]} alt="" />
      </Link>
      <div className={styles.InforProduct}>
        <Link
          to={`product/${itemCard?.id}`}
          className="text-[16px] font-medium leading-[25px text-left text-[#333] w-[328px]"
        >
          {itemCard?.productName}
        </Link>
        <div className="flex flex-col gap-0 items-end">
          <div className="text-[20px] font-medium text-[#545454] text-left">
            {itemCard?.currentPrice}$
          </div>
          <div className="text-[16px] font-regular text-[#9C9D9C] text-left">
            {itemCard?.oldPrice}$
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardProductLItem;

// const CardProductL = () => {
//   return (
//     <div className='flex flex-col items-center w-100%'>
//       <div className='flex flex-col gap-[32px]'>
//         <div className='text-[24px] font-bold heading-auto py-[12px] border-solid border-b-[1px] border-black uppercase' >Feature Product</div>
//         <div className='flex flex-row gap-[28px] items-start'>
//           {ListCardProductL.map((Item) => {
//             return (
//               <CardProductLItem
//                 key={Item.id}
//                 ProductImg={Item.ProductImg}
//                 ProductName={Item.ProductName}
//                 CurrentPrice={Item.CurrentPrice}
//                 OldPrice={Item.OldPrice} />
//             )
//           })}
//         </div>
//       </div>
//       <div className="Btn_secondary">More</div>
//     </div>
//   )
// }

// export default CardProductL
