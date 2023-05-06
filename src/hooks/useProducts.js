import { useEffect } from "react";
import { useState } from "react"

export const useProducts = () => {
  
  const [products, setProducts] = useState([]);
  
  async function getProducts() {
    try {
      const res = await fetch("../../src/mocks/products.json");
      const data = await res.json();
      setProducts(data?.products ?? []);

    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getProducts();
  }, [])

  return {
    products
  }
}
