import { useEffect, type ReactElement, type ReactNode } from 'react'
import { toRelativeUrl } from '@okta/okta-auth-js'
import { useOktaAuth } from '@okta/okta-react'
import { useNavigate } from 'react-router-dom'
import { LoadingContent } from '../common/loading-content/LoadingContent'

interface ProtectedRouteProps {
  children: ReactElement
}

const ProtectedRoute = ({ children }: ProtectedRouteProps): ReactNode => {
  const { oktaAuth, authState } = useOktaAuth()
  const navigate = useNavigate()
  const isAuthenticated = authState?.isAuthenticated

  useEffect(
    () => {
      if (isAuthenticated === false) {
        oktaAuth.setOriginalUri(
          toRelativeUrl(
            window.location.href,
            window.location.origin
          )
        )

        navigate('/login')
      }
    },
    [ oktaAuth, isAuthenticated, navigate ]
  )

  if (!authState) return <LoadingContent />
  if (isAuthenticated === true) return children
}

export default ProtectedRoute
