import React,
{
  type FunctionComponent,
  type ReactElement,
  Suspense,
  useContext
} from 'react'
import {
  useParams,
  Navigate
} from 'react-router-dom'
import { LoadingOverlay } from '../components/common/loading-overlay/LoadingOverlay'
import { PortfolioContext } from '../components/context/PortfolioContextProvider'

const KnightMovesDemo = React.lazy(async () => await import('../components/page-content/knight-moves-demo/KnightMovesDemo'))

type ParamsType = Record<'projectId', string | undefined>

const projectDemoMap: Record<string, ReactElement> = {
  knightmoves: <KnightMovesDemo />
}

export const ProjectDemo: FunctionComponent = () => {
  const { projectId } = useParams<ParamsType>()

  const {
    portfolioMap,
    projectIds,
    isLoading
  } = useContext(PortfolioContext)

  if (isLoading) return null

  if (!projectId) {
    return (
      <Navigate
        replace
        to='/'
      />
    )
  }

  if (!projectDemoMap[projectId]) {
    if (
      portfolioMap[projectId] &&
      projectIds.includes(projectId)
    ) {
      return (
        <Navigate
          replace
          to={`/project/${projectId}`}
        />
      )
    }

    return (
      <Navigate
        replace
        to='/'
      />
    )
  }

  return (
    <Suspense fallback={<LoadingOverlay />}>
      { projectDemoMap[projectId] }
    </Suspense>
  )
}
