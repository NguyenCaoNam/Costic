import React from 'react'
import styles from './ProductCard.module.scss'
import { Link } from 'react-router-dom'

type CardProductSItemProps = {
  itemCard: IProduct;
};

const CardProductSItem = ({ itemCard }: CardProductSItemProps) => {
  return (
    <Link to={`/product/${itemCard?.id}`} key={itemCard?.id} className={styles.ProductCardSmall}>
      <div >
        <img className={styles.ProductImage} src={itemCard?.productImg[0]} alt="" />
      </div>
      <div className={styles.ContentProduct}>
        <div className={styles.ProductName}>{itemCard?.productName}</div>
        <div className={styles.Price}>
          <div className={styles.NewPrice}>{itemCard?.currentPrice}$</div>
          <div className={styles.OldPrice}>{itemCard?.oldPrice}$</div>
        </div>
      </div>
    </Link>
  )
}

export default CardProductSItem


// const CardProductS = () => {
//   return (
//     <div className='px-[56px]'>
//     <div>
//       <div className={styles.Title}>Feature Product</div>
//       <div className={styles.WrapProduct}>
//         {ListCardProductS.map((Item) => {
//           return (
//             <CardProductSItem
//               key={Item.id}
//               ProductImg={Item.ProductImg}
//               ProductName={Item.ProductName}
//               CurrentPrice={Item.CurrentPrice}
//               OldPrice={Item.OldPrice}
//             />
//           )
//         })}
//       </div>

//     </div>
//     </div>
//   )
// }

// export default CardProductS