import { useId } from "react"
import { CartIcon, ClearCartIcon} from "./Icons"
import "./Cart.css";
import { useCart } from "../hooks/useCart";
import { CartProduct } from "./CartProduct";

export const Cart = () => {

  const cartCheckboxId = useId();
  const { cart, cleanCart, addToCart} = useCart();


  return (
    <>
      <span className="cart-length">{cart.length}</span>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden/>

      <aside className="cart">
        <ul>
          {
            cart.map(product => (
              <CartProduct 
                key={product.id} 
                item={product} 
                addToCart={addToCart}
                />
            ))
          }
        </ul>
        <button onClick={() => cleanCart()}>
          <ClearCartIcon />
        </button>
      </aside>

    </>
  )
}
