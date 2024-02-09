import { useCallback, type FC, type ReactElement } from 'react'
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'
import { Security } from '@okta/okta-react'
import { type RestoreOriginalUriFunction } from '@okta/okta-react/bundles/types/OktaContext'
import { useNavigate } from 'react-router-dom'

interface OktaProviderProps {
  children: ReactElement
}

const OktaProvider: FC<OktaProviderProps> = ({ children }) => {
  const navigate = useNavigate()

  const oktaAuth = new OktaAuth({
    issuer: 'https://dev-13821022.okta.com/oauth2/default',
    clientId: '0oaeegzfr95kSGJ6J5d7',
    redirectUri: window.location.origin + '/login/callback',
    scopes: [ 'openid', 'profile', 'email' ]
  })

  const restoreOriginalUri: RestoreOriginalUriFunction = useCallback(
    async (_, originalUri) => {
      navigate(
        toRelativeUrl(
          originalUri || '/',
          window.location.origin
        ),
        { replace: true }
      )
    },
    [ navigate ]
  )

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
    >
      { children }
    </Security>
  )
}

export default OktaProvider
