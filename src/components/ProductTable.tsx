import { getProducts } from "@/lib/backend"
import { useQuery } from "@tanstack/react-query"
import ProductTableItem from "./ProductTableItem"

const ProductTable = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  if (isLoading || !data) {
    return <h1>Loading</h1>
  }

  console.log(data)

  return (
    <div className="flex flex-col gap-6">
      {data.map(product => <ProductTableItem key={product.id} product={product} />)}
    </div>
  )
}

export default ProductTable
