import { useState } from "react";
import ListProducts from "../hooks/Product";


export default function AddProduct() {

  const { httpConfig, loading } = ListProducts();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name,
      price: parseFloat(price),
      category,
      picture,
      available: false,
      canDelete: true
    };

    httpConfig(product, "POST")
    // productServices.AddProduct(product);

    window.location.href = "/";
  }

  return (<>
    <form onSubmit={handleSubmit}>
      <label>
        Nome
        <input type="text" name="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Preço
        <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Categoria
        <input type="text" name="category" placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <label>
        Foto
        <input type="text" name="picture" placeholder="Foto" value={picture} onChange={(e) => setPicture(e.target.value)} />
      </label>

      {!loading && <input type="submit" value="Criar" />}
    </form>

  </>
  )
}
