import { type FunctionComponent, type ReactElement } from 'react'
import styled from 'styled-components'
import { PortfolioListItemStyles } from './PortfolioListItemStyles'
import {
  SPACING_Y,
  SPACING_Y_NUM
} from '../../../utils/constants/spacings'
import { Container } from '../../layout/container/Container'
import { PageRow } from '../../layout/page-row/PageRow'
import { Pure } from '../../layout/pure/Pure'
import { PureUnit } from '../../layout/pure-unit/PureUnit'
import { Spacer } from '../../layout/spacer/Spacer'
import { Image } from '../image/Image'
import { TagH } from '../tag-h/TagH'
import { TagP } from '../tag-p/TagP'

const PortfolioListItemStyled = styled.div`${PortfolioListItemStyles}`

interface PortfolioListItemPropsType {
  description: string
  homeImage: string
  projectId: string
  name: string
  rowColor: string
  textColor?: string
  products: string[]
}

const renderItemImage = (homeImage: PortfolioListItemPropsType['homeImage']): ReactElement => {
  return (
    <div className='half-wrapper'>
      <div className='image-wrapper'>
        <Image
          altText=''
          src={homeImage}
        />
      </div>
    </div>
  )
}

const renderItemInfo = (
  name: PortfolioListItemPropsType['name'],
  description: PortfolioListItemPropsType['description'],
  textColor: PortfolioListItemPropsType['textColor'],
  products: PortfolioListItemPropsType['products']
): ReactElement => {
  return (
    <div className='half-wrapper'>
      <Spacer
        b={3}
        l={3}
        r={3}
        t={3}
      >
        <TagH
          color={textColor}
          margin={`0 0 ${SPACING_Y} 0`}
          size={2}
        >
          { name }
        </TagH>
        <TagH
          color={textColor}
          margin={`0 0 ${SPACING_Y_NUM * 2}px 0`}
          size={3}
        >
          { products.join(', ') }
        </TagH>
        <TagP color={textColor}>
          { description }
        </TagP>
      </Spacer>
    </div>
  )
}

export const PortfolioListItem: FunctionComponent<PortfolioListItemPropsType> = ({
  name,
  description,
  homeImage,
  projectId,
  rowColor,
  products,
  textColor
}) => {
  return (
    <PageRow key={projectId}>
      <Container>
        <Spacer
          l={3}
          r={3}
        >
          <PortfolioListItemStyled rowColor={rowColor}>
            <Pure>
              <PureUnit pureClass='u-1 u-md-1-2'>
                { renderItemImage(homeImage) }
              </PureUnit>
              <PureUnit pureClass='u-1 u-md-1-2'>
                {
                  renderItemInfo(
                    name,
                    description,
                    textColor,
                    products
                  )
                }
              </PureUnit>
            </Pure>
          </PortfolioListItemStyled>
        </Spacer>
      </Container>
    </PageRow>
  )
}
