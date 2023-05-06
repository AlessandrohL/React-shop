/* eslint-disable react/prop-types */

export const CartProduct = ({ item, addToCart }) => {

  return (
    <li>
      <img src={item.thumbnail} alt={item.title} />

      <div>
        <strong>{item.title}</strong> - ${item.price}
      </div>
      <footer>
        <small>QTY:{item.quantity}</small>
        <button
          onClick={() => addToCart(item)}
        >+</button>
      </footer>
    </li>
  )
}
