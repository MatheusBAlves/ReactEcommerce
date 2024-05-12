import { Link } from 'react-router-dom';
import Products from '../../hooks/Product';
import styles from './Home.module.css'


export const Home = () => {
  const { data: items, httpConfig, loading, error } = Products();

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Lista de produtos</h1>
      {loading && <p className={styles.status}>Carregando dados...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!error && <ul className={styles.list}>
        {items && items.map((product) => (
          <li key={product.id} className={styles.itemList}>
            <p className={styles.itemName}>{product.name} - R$: {product.price.toFixed(2)}</p>
            <Link to={`/products/${product.id}`} className={styles.itemLink}>Detalhes</Link>
            {/* <p>
              {!loading && <button onClick={(e) => {
                e.preventDefault();
                httpConfig(product.id, "DELETE")
              }}>EXCLUIR</button>
              }
            </p> */}

          </li>
        ))}
      </ul>
      }
    </div>
  )
}
