import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import AddPage from "./Pages/AddPage";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<AddPage />} path="/add" />
    </Routes>
  )
}
