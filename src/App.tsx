import AddProduct from './components/AddProduct'
import ProductTable from './components/ProductTable'

function App() {

  return (
    <div className='dark:bg-black min-h-screen p-6'>
      <AddProduct />
      <div className='my-4'></div>
      <ProductTable />
    </div>
  )
}

export default App
