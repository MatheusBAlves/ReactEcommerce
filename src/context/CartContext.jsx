import { createContext, useState } from "react";

export const CartContext = createContext();

CartContext.displayName = 'CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qtd, setQtd] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  return (
    <CartContext.Provider value={{ cart, setCart, qtd, setQtd, totalValue, setTotalValue }}>
      {children}
    </CartContext.Provider>
  )
}