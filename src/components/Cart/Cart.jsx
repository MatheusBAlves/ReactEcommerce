import { IoMdCart } from "react-icons/io";
import { useCartContext } from "../../hooks/useCartContext"


const Cart = () => {
  const { cart, qtd } = useCartContext();
  return (
    <>
      <IoMdCart style={{ position: "relative" }} />
      <p style={{
        position: "absolute", right: "20%",
        top: "65%",
        transform: "translate(50%, -50%)"
      }}>{qtd}</p>
    </>
  )
}

export default Cart
