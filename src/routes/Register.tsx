import React, { type FunctionComponent, Suspense } from 'react'
import { LoadingOverlay } from '../components/common/loading-overlay/LoadingOverlay'

const RegisterContent = React.lazy(async () => await import('../components/page-content/register-content/RegisterContent'))

export const Register: FunctionComponent = () =>
  <Suspense fallback={<LoadingOverlay />}>
    <RegisterContent />
  </Suspense>
