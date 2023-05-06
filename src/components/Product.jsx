/* eslint-disable react/prop-types */
import { useCart } from "../hooks/useCart"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"

export const Product = ({ product }) => {

  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  const isProductInCart = checkProductInCart(product);
  const classButton = isProductInCart ? "product-in-cart" : "product-not-cart";

  return (
    <li id={product.id}>
      <img 
        src={product.thumbnail} 
        alt={product.title} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <div>
        <button 
          onClick={() => {
            isProductInCart
              ? removeFromCart(product)
              : addToCart(product)
          }}
          className={classButton}
          >
          {
            isProductInCart 
              ? <RemoveFromCartIcon /> 
              : <AddToCartIcon />
          }
        </button>
      </div>
    </li>
  )
}
