import {
  type FunctionComponent,
  type ReactElement
} from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../../../queries/graphQL'
import { type Product } from '../../../types/generatedGQLTypes'
import { Card } from '../../common/card/Card'
import { FlexWrapper } from '../../layout/flex-wrapper/FlexWrapper'
import { Spacer } from '../../layout/spacer/Spacer'

const ProductsMenu: FunctionComponent = () => {
  const { data: projectImagesResponse } = useQuery<{ products: Product[] }>(GET_PRODUCTS)

  const renderProduct = ({ id, name }: Product): ReactElement =>
    <Card title={`${id}: ${name}`}>
      <></>
    </Card>

  return (
    <Spacer {...{ b: 2, l: 0, r: 0, t: 0 }}>
      <Card
        collapsable
        defaultCollapse
        title='Products'
      >
        <FlexWrapper
          flexColumn
          gap={2}
        >
          { projectImagesResponse?.products.map(renderProduct) ?? [] }
        </FlexWrapper>
      </Card>
    </Spacer>

  )
}

export default ProductsMenu
