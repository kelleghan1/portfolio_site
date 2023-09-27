import React, {
  type FunctionComponent,
  Suspense,
  useContext
} from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { LoadingOverlay } from '../components/common/loading-overlay/LoadingOverlay'
import { PortfolioContext } from '../components/context/PortfolioContextProvider'

const ProjectContent = React.lazy(async () => await import('../components/page-content/project-content/ProjectContent'))

type ParamsType = Record<'projectId', string | undefined>

export const Project: FunctionComponent = () => {
  const { projectId } = useParams<ParamsType>()

  const {
    portfolioMap,
    projectIds,
    isLoading
  } = useContext(PortfolioContext)

  if (isLoading) return null

  if (
    !projectId ||
    !portfolioMap[projectId] ||
    !projectIds.includes(projectId)
  ) {
    return (
      <Navigate
        replace
        to='/'
      />
    )
  }

  return (
    <Suspense fallback={<LoadingOverlay />}>
      <ProjectContent projectId={projectId} />
    </Suspense>
  )
}
