/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styles from './ProductItem.module.css'
import { useCartContext } from "../../hooks/useCartContext"


const ProductItem = ({ product }) => {

  const { adicionarProduto } = useCartContext();

  return (
    <li className={styles.item}>
      <img src={product.picture} alt={product.name} className={styles.picture} />
      <p >{product.name} - R$: {product.price.toFixed(2)}</p>
      <Link to={`/products/${product.id}`} className={styles.link} >Detalhes</Link>
      <button onClick={() => { adicionarProduto(product) }}>Adicionar ao carrinho</button>
    </li >
  )
}

export default ProductItem
