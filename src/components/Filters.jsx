/* eslint-disable react/prop-types */
import { useId } from 'react';
import './Filters.css';
import { useFilterProducts } from '../hooks/useFilterProducts';

export const Filters = () => {

  const { filters, setFilters } = useFilterProducts();


  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    // let price = Number(e.target.value);

    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio minimo:</label>
        <input 
          type="range" 
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todos</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}
