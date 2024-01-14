import {
  type FunctionComponent,
  type ReactElement,
  useContext,
  type MouseEventHandler
} from 'react'
import { useOktaAuth } from '@okta/okta-react'
import styled from 'styled-components'
import { AdminContentStyles } from './AdminContentStyles'
import { Container } from '../../layout/container/Container'
import { PageRow } from '../../layout/page-row/PageRow'
import { Spacer } from '../../layout/spacer/Spacer'
import { PortfolioContext } from '../../wrappers/PortfolioContextProvider'

const AdminContentStyled = styled.div`${AdminContentStyles}`

const AdminContent: FunctionComponent = () => {
  const { isNavigating } = useContext(PortfolioContext)
  const { oktaAuth } = useOktaAuth()

  const handleLogoutClick: MouseEventHandler<HTMLButtonElement> = (): void => {
    void oktaAuth.signOut()
  }

  const renderContent = (): ReactElement =>
    <Spacer
      l={1.75}
      r={1.75}
      t={0}
    >
      ADMIN
      <div>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    </Spacer>

  return (
    <PageRow>
      <Container>
        <AdminContentStyled className={`fade-in ${isNavigating ? 'fade-out' : ''}`}>
          { renderContent() }
        </AdminContentStyled>
      </Container>
    </PageRow>
  )
}

export default AdminContent
