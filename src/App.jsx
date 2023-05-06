import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { CartProvider } from "./context/cartContext";
import { useFilterProducts } from "./hooks/useFilterProducts"



function App() {

  const { filteredProducts } = useFilterProducts();

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts}/>
      <Footer />
    </CartProvider>
    
  )
}

export default App
