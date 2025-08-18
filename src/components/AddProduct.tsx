import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { addProduct } from "@/lib/backend"
import { useState } from "react"

const AddProduct = () => {

  const [productName, setProductName] = useState("")

  const queryClient = useQueryClient()

  const addProductMutation = useMutation({
    mutationFn: async (newProduct: string) => addProduct(newProduct),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['products'] })
  })

  return (
    <div className="flex flex-row gap-4">
      <Input placeholder="Enter the product name" onChange={(e) => setProductName(e.target.value)} />
      <Button onClick={() => addProductMutation.mutate(productName)}>
        Add Product
      </Button>
    </div>
  )
}

export default AddProduct
