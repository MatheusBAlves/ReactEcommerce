/* eslint-disable react/prop-types */
import ProductItem from '../ProductItem/ProductItem'
import styles from './ProductList.module.css'

const ProductList = ({ products }) => {

  return (
    <ul className={styles.list}>
      {products && products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  )
}

export default ProductList
