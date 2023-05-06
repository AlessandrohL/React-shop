import { useContext } from "react"
import { useProducts } from "./useProducts";
import { FiltersContext } from "../context/filters";

export const useFilterProducts = () => {

  const { products } = useProducts();

  const {filters, setFilters} = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter(product => { 
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === "all" ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products);
  
  return {
    filters,
    filteredProducts,
    setFilters
  }
}
