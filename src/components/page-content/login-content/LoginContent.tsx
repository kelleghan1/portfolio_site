import {
  type ChangeEventHandler,
  type FunctionComponent,
  type ReactElement,
  useContext,
  useState
} from 'react'
import styled from 'styled-components'
import { LoginContentStyles } from './LoginContentStyles'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { Container } from '../../layout/container/Container'
import { PageRow } from '../../layout/page-row/PageRow'
import { Spacer } from '../../layout/spacer/Spacer'

const LoginContentStyled = styled.div`${LoginContentStyles}`

const LoginContent: FunctionComponent = () => {
  const { isNavigating } = useContext(PortfolioContext)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit: ChangeEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault()
  }

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setEmail(e.target.value)
  }

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setPassword(e.target.value)
  }

  const renderForm = (): ReactElement =>
    <Spacer
      l={1.75}
      r={1.75}
      t={0}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email-input'>
            Email
          </label>
          <input
            id='email-input'
            name='email'
            onChange={handleEmailChange}
            type='text'
            value={email}
          />
        </div>
        <div>
          <label htmlFor='password-input'>
            Password
          </label>
          <input
            id='password-input'
            name='password'
            onChange={handlePasswordChange}
            type='password'
            value={password}
          />
        </div>
        <button type='submit'>Log in</button>
      </form>
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
