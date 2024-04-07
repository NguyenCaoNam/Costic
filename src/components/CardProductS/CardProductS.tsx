import styles from './ProductCard.module.scss'
import { Link } from 'react-router-dom'

type CardProductSItemProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemCard: any;
};

const CardProductSItem = ({itemCard}: CardProductSItemProps) => {
  return (
    <div className={styles.ProductCardSmall}>
      <Link to={`product/${itemCard.id}`}>
        <img className={styles.ProductImage} src={itemCard.productImg[0]} alt="" />
      </Link>
      <div className={styles.ContentProduct}>
        <Link to={`product/${itemCard.id}`}className={styles.ProductName}>{itemCard.productName}</Link>
        <Link to={`product/${itemCard.id}`} className={styles.Price}>
          <div className={styles.NewPrice}>{itemCard.currentPrice}$</div>
          <div className={styles.OldPrice}>{itemCard.oldPrice}$</div>
        </Link>
      </div>
    </div>
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