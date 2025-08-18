import { Button } from "./ui/button"
import { Input } from "./ui/input"

const AddProduct = () => {
  return (
    <div>
      <Input placeholder="Enter the product name" />
      <Button>
        Add Product
      </Button>
    </div>
  )
}

export default AddProduct
