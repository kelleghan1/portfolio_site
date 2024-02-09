import {
  type ReactElement,
  useContext,
  type MouseEventHandler
} from 'react'
import { useOktaAuth } from '@okta/okta-react'
import styled from 'styled-components'
import { LoginContentStyles } from './LoginContentStyles'
import { Container } from '../../layout/container/Container'
import { PageRow } from '../../layout/page-row/PageRow'
import { Spacer } from '../../layout/spacer/Spacer'
import { PortfolioContext } from '../../wrappers/PortfolioContextProvider'

const LoginContentStyled = styled.div`${LoginContentStyles}`

const LoginContent = (): ReactElement => {
  const { oktaAuth } = useOktaAuth()
  const { isNavigating } = useContext(PortfolioContext)

  const handleLoginClick: MouseEventHandler<HTMLButtonElement> = (): void => {
    void oktaAuth.signInWithRedirect()
  }

  const renderForm = (): ReactElement =>
    <Spacer
      l={1.75}
      r={1.75}
      t={0}
    >
      <button onClick={handleLoginClick}>Login</button>
    </Spacer>

  return (
    <PageRow>
      <Container>
        <LoginContentStyled className={`fade-in ${isNavigating ? 'fade-out' : ''}`}>
          { renderForm() }
        </LoginContentStyled>
      </Container>
    </PageRow>
  )
}

export default LoginContent
