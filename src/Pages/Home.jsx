
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { productServices } from '../services/productServices';

export const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setProducts(await productServices.ListProducts())
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>
        {products && products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <Link to="/add">Adicionar</Link>

    </>
  )
}
