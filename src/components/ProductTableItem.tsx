import type { Product } from '@/lib/backend'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

type Props = {
  product: Product
}

const ProductTableItem = (props: Props) => {
  return (
    <div>
      <Card className='bg-green-500'>
        <CardHeader>
          <CardTitle>
            {props.product.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          -- {props.product.id}
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductTableItem
