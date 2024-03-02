import React from 'react'
import styles from './CardProductL.module.scss'
import { ListCardProductL } from './ListCardProductL';
import 'tailwindcss/tailwind.css';

type TCardProduct = {
  ProductName: string;
  CurrentPrice: number;
  OldPrice?: number;
  ProductImg: string;
}
const CardProductLItem = ({ ProductName, ProductImg, OldPrice, CurrentPrice }: TCardProduct) => {
  return (
    <div className={styles.Wrap}>
      <div className={styles.ProductImg}>
        <img src={ProductImg} alt="" />
      </div>
      <div className={styles.InforProduct}>
        <div className={styles.ProductName}>{ProductName}</div>
        <div className={styles.Price}>
          <div className={styles.CurrentPrice}>{CurrentPrice}$</div>
          <div className={styles.OldPrice}>{OldPrice}$</div>
        </div>
      </div>
    </div>
  )
}

const CardProductL = () => {
  return (
    <>
      <div>
        <div className={styles.Title}>Feature Product</div>
        <div className={styles.WrapProduct}>
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
      <div className="Btn_Primary">Click me</div>
    </>
  )
}

export default CardProductL