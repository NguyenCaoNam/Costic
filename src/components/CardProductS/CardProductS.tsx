import React from 'react'
import styles from './ProductCard.module.scss'
import { ListCardProductS } from './ListCardProductS'

type TCard = {
  ProductName: string,
  CurrentPrice: number,
  OldPrice: number,
  ProductImg?: string,
}

const CardProductSItem = ({ ProductName, CurrentPrice, OldPrice, ProductImg }: TCard) => {
  return (
    <div className={styles.ProductCardSmall}>
      <img className={styles.ProductImage} src={ProductImg} alt="" />
      <div className={styles.ContentProduct}>
        <div className={styles.ProductName}>{ProductName}</div>
        <div className={styles.Price}>
          <div className={styles.NewPrice}>{CurrentPrice}$</div>
          <div className={styles.OldPrice}>{OldPrice}$</div>
        </div>
      </div>
    </div>
  )
}
const CardProductS = () => {
  return (
    <div className='px-[56px]'>
    <div>
      <div className={styles.Title}>Feature Product</div>
      <div className={styles.WrapProduct}>
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

    </div>
    </div>
  )
}

export default CardProductS