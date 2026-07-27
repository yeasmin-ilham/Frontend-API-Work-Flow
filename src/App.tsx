

import { ProductList } from './components/ProductList'
import { ProductForm } from './components/ProductForm'
import { ProductCard } from './components/ProductCard'
import { ProductsPage } from './pages/ProductsPage'
import { ProductDetailPage } from './pages/ProductDetailPage'

function App() {

 const  ProductValue = {
  id: "Kg",
  name: "shoe",
  price: 45,
  stock: 100,
  category: "Male Shoe",
  createdAt: "sunday"
}
  
  return (
    <>
    <div>
      <ProductList/>
      <ProductForm/>
      <ProductCard  product={ProductValue}/>
      <ProductsPage/>
      <ProductDetailPage/>
    </div>
    </>
  )
}

export default App
