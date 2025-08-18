import { useMutation } from "@tanstack/react-query"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const AddProduct = () => {

  const addProductMutation = useMutation({
    mutationFn: (newProduct: string) =>
  })

  return (
    <div className="flex flex-row gap-4">
      <Input placeholder="Enter the product name" />
      <Button>
        Add Product
      </Button>
    </div>
  )
}

export default AddProduct
