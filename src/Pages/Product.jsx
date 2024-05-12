import { useParams } from "react-router-dom"
import Products from "../hooks/Product";

const Product = () => {

  const { id } = useParams();
  const { data: product, loading, error } = Products(id);

  console.log(product)

  return (
    <>
      {error && <p>Ocorreu um erro ao carregar o produto...</p>}
      {loading && <p>CARREGANDO DADOS...</p>}
      {product && <>
        <p>ID DO PRODUTO: {product.id}</p>
        <p>Nome do produto: {product.name}</p>
      </>}

    </>
  )
}

export default Product
