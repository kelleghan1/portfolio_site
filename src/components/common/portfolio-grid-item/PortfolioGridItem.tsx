import { type FunctionComponent, useMemo } from 'react'
import styled from 'styled-components'
import { PortfolioGridItemStyles } from './PortfolioGridItemStyles'
import { Image } from '../image/Image'
import { LinkDelayed } from '../link-delayed/LinkDelayed'

const PortfolioGridItemStyled = styled.div`
  ${PortfolioGridItemStyles}
`

interface PortfolioGridItemPropsType {
  homeImage: string
  projectId: string
  name: string
}

export const PortfolioGridItem: FunctionComponent<PortfolioGridItemPropsType> = ({
  homeImage,
  projectId,
  name,
  ...rest
}) => useMemo(
  () => (
    <PortfolioGridItemStyled {...rest}>
      <div className='image-wrapper'>
        <LinkDelayed
          isBlock
          to={`/project/${projectId}`}
        >
          <Image
            altText={`View project page for ${name}`}
            aspectRatio='1 / 1'
            src={homeImage}
          />
        </LinkDelayed>
      </div>
    </PortfolioGridItemStyled>
  ),
  [
    homeImage,
    projectId,
    name
  ]
)
