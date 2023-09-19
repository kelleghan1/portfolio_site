import {
  type ChangeEventHandler,
  type FunctionComponent,
  type ReactElement,
  useContext,
  useState
} from 'react'
import styled from 'styled-components'
import { RegisterContentStyles } from './RegisterContentStyles'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { Container } from '../../layout/container/Container'
import { PageRow } from '../../layout/page-row/PageRow'
import { Spacer } from '../../layout/spacer/Spacer'

const RegisterContentStyled = styled.div`${RegisterContentStyles}`

const RegisterContent: FunctionComponent = () => {
  const { isNavigating } = useContext(PortfolioContext)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState(email || '')

  const handleSubmit: ChangeEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault()

    // if (password !== confirmPassword) return
  }

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setEmail(e.target.value)
  }

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setConfirmPassword(e.target.value)
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
        <div>
          <label htmlFor='password-input'>
            Confirm Password
          </label>
          <input
            id='confirm-password-input'
            name='confirm password'
            onChange={handleConfirmPasswordChange}
            type='password'
            value={confirmPassword}
          />
        </div>
        <button type='submit'>Log in</button>
      </form>

    </Spacer>

  return (
    <PageRow>
      <Container>
        <RegisterContentStyled className={`fade-in ${isNavigating ? 'fade-out' : ''}`}>
          { renderForm() }
        </RegisterContentStyled>
      </Container>
    </PageRow>
  )
}

export default RegisterContent
