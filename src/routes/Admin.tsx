import React, { type FunctionComponent, Suspense } from 'react'
import { LoadingOverlay } from '../components/common/loading-overlay/LoadingOverlay'

const AdminContent = React.lazy(async () => await import('../components/page-content/admin/AdminContent'))

export const Admin: FunctionComponent = () =>
  <Suspense fallback={<LoadingOverlay />}>
    <AdminContent />
  </Suspense>
