import { useEffect, type ReactElement, type ReactNode, useContext } from 'react'
import { toRelativeUrl } from '@okta/okta-auth-js'
import { useOktaAuth } from '@okta/okta-react'
import { useNavigate } from 'react-router-dom'
import { PortfolioContext } from './PortfolioContextProvider'
import { LoadingContent } from '../common/loading-content/LoadingContent'

interface ProtectedRouteProps {
  children: ReactElement
}

const ProtectedRoute = ({ children }: ProtectedRouteProps): ReactNode => {
  const { oktaAuth, authState } = useOktaAuth()
  const navigate = useNavigate()
  const { isLoggedIn } = useContext(PortfolioContext)

  useEffect(
    () => {
      if (isLoggedIn === false) {
        oktaAuth.setOriginalUri(
          toRelativeUrl(
            window.location.href,
            window.location.origin
          )
        )

        navigate('/login')
      }
    },
    [ oktaAuth, navigate, authState, isLoggedIn ]
  )

  if (isLoggedIn === null) return <LoadingContent />
  if (isLoggedIn) return children
}

export default ProtectedRoute
