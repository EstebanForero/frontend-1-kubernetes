import { getProducts } from "@/lib/backend"
import { useQuery } from "@tanstack/react-query"

const ProductTable = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  return (
    <div>ProductTable</div>
  )
}

export default ProductTable
