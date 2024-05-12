import { useSearchParams, Link } from "react-router-dom"
import SearchProduct from "../hooks/SearchProduct";


const Search = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;
  const { data: products, loading, error } = SearchProduct(url);
  return (
    <div>
      <h1>Resultado:</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && <ul>
        {products && products.map((product) => (
          <li key={product.id}>
            <p>{product.name} - R$: {product.price.toFixed(2)}</p>
            <Link to={`/products/${product.id}`}>Detalhes</Link>

          </li>
        ))}
      </ul>
      }

    </div>
  )
}

export default Search
