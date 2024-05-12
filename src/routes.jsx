import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import AddProduct from "./Pages/AddProduct";
import Product from "./Pages/Product";
import Search from "./Pages/Search";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/search" element={<Search />} />
      <Route path="/account" element={<Home />} />
      <Route path="/cart" element={<Home />} />
      <Route path="*" element={<p>Página não encontrada...</p>} />
    </Routes>
  )
}
