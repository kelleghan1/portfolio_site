import React, { type FunctionComponent, Suspense } from 'react'
import { LoadingOverlay } from '../components/common/loading-overlay/LoadingOverlay'

const ContactContent = React.lazy(async () => await import('../components/page-content/contact-content/ContactContent'))

export const Contact: FunctionComponent = () =>
  <Suspense fallback={<LoadingOverlay />}>
    <ContactContent />
  </Suspense>
