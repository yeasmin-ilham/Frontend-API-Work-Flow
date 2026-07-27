

import { ProductList } from './components/ProductList'
import { ProductForm } from './components/ProductForm'
import { ProductCard } from './components/ProductCard'

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
    </div>
    </>
  )
}

export default App
