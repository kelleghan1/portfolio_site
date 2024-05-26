import {
  type FunctionComponent,
  type ReactElement,
  useContext
} from 'react'
import styled from 'styled-components'
import { AdminContentStyles } from './AdminContentStyles'
import LinksMenu from './LinksMenu'
import ProductsMenu from './ProductsMenu'
import ProjectImagesMenu from './ProjectImagesMenu'
import ProjectsMenu from './ProjectsMenu'
import { Card } from '../../common/card/Card'
import { Container } from '../../layout/container/Container'
import { PageRow } from '../../layout/page-row/PageRow'
import { Spacer } from '../../layout/spacer/Spacer'
import { PortfolioContext } from '../../wrappers/PortfolioContextProvider'

const AdminContentStyled = styled.div`${AdminContentStyles}`

const AdminContent: FunctionComponent = () => {
  const { isNavigating } = useContext(PortfolioContext)

  const renderCreateForm = (): ReactElement =>
    <Card title='Create'>
      Form
    </Card>

  return (
    <PageRow>
      <Container>
        <AdminContentStyled className={`fade-in ${isNavigating ? 'fade-out' : ''}`}>
          <Spacer {...{ l: 3, r: 3, t: 0 }}>
            <ProjectsMenu />
            <LinksMenu />
            <ProjectImagesMenu />
            <ProductsMenu />
            { renderCreateForm() }
          </Spacer>
        </AdminContentStyled>
      </Container>
    </PageRow>
  )
}

export default AdminContent
