import { useState } from "react";
import { Link } from "react-router-dom";
import { productServices } from "../services/productServices";


export default function AddPage() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price: parseFloat(price),
      category,
      picture,
      available: false,
      canDelete: true
    };

    productServices.AddProduct(product);

    // window.location.href = "/";
  }

  return (<>
    <div>TESTE</div>
    <Link to="/">Home</Link>
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

      <input type="submit" value="Criar" />
    </form>

  </>
  )
}
