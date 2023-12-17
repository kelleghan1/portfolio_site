import React, { type FunctionComponent, Suspense } from 'react'
import { LoadingOverlay } from '../components/common/loading-overlay/LoadingOverlay'

const LoginContent = React.lazy(async () => await import('../components/page-content/login-content/LoginContent'))

export const Login: FunctionComponent = () =>
  <Suspense fallback={<LoadingOverlay />}>
    <LoginContent />
  </Suspense>
