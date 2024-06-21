import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export const useCartContext = () => {

  const { cart, setCart, qtd, setQtd, totalValue, setTotalValue } = useContext(CartContext);

  function mudarQuantidade(id, qtd) {
    return cart.map((item) => {
      if (item.id === id) item.quantidade += qtd;
      return item;
    })
  }

  function adicionarProduto(novoProduto) {
    const temOProduto = cart.some((item) => item.id === novoProduto.id);
    if (!temOProduto) {
      novoProduto.quantidade = 1;
      return setCart((previousCart) => [...previousCart, novoProduto]);
    }

    const newCart = mudarQuantidade(novoProduto.id, 1);

    setCart([...newCart]);
  }

  function removerProduto(id) {
    const produto = cart.find((item) => item.id === id);
    const ehUltimo = produto.quantidade === 1;
    if (ehUltimo) {
      return setCart((previousCart) =>
        previousCart.filter((item) => item !== id)
      )
    }

    const newCart = mudarQuantidade(id, -1);

    setCart([...newCart]);
  }

  useEffect(() => {
    const { totalTemp, qtdTemp } = cart.reduce((accum, item) => ({
      qtdTemp: accum.qtdTemp + item.quantidade,
      totalTemp: accum.totalTemp + item.price
    }),
      {
        qtdTemp: 0,
        totalTemp: 0,
      })
    setQtd(qtdTemp);
    setTotalValue(totalTemp);
  }, [cart])

  return {
    cart,
    setCart,
    adicionarProduto,
    removerProduto,
    qtd,
    totalValue
  }
}