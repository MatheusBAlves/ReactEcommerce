import { useSearchParams } from "react-router-dom"
import SearchProduct from "../../hooks/SearchProduct";
import ProductItem from "../../components/ProductItem/ProductItem";
import styles from './Search.module.css'

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;
  const { data: products, loading, error } = SearchProduct(url);
  return (
    <div>
      <h1>Resultado:</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && <ul className={styles.list}>

      </ul>
      }

    </div>
  )
}

export default Search
