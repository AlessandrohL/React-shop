/* eslint-disable react/prop-types */
import './Products.css';
import { Product } from './Product';
import { useId } from 'react';

export const Products = ({ products }) => {

  const idKey = useId(); 

  return (
    <main className='products'>
      <ul key={idKey}>
        {
          products.map(product => (
            <Product key={product.id} product={product}/>
          ))
        }
      </ul>
    </main>
  )
}
