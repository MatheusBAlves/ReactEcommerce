
import Products from '../../hooks/Product';
import styles from './Home.module.css'
import ProductList from '../../components/ProductList/ProductList';


export const Home = () => {
  const { data: items, httpConfig, loading, error } = Products();

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Lista de produtos</h1>
      {loading && <p className={styles.status}>Carregando dados...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!error && <ProductList products={items} />}
    </div>
  )
}
