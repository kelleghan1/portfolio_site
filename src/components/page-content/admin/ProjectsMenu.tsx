import {
  type FunctionComponent,
  type ReactElement,
  useContext
} from 'react'
import { Card } from '../../common/card/Card'
import { Image } from '../../common/image/Image'
import { FlexWrapper } from '../../layout/flex-wrapper/FlexWrapper'
import { Spacer } from '../../layout/spacer/Spacer'
import { PortfolioContext } from '../../wrappers/PortfolioContextProvider'

const ProjectsMenu: FunctionComponent = () => {
  const { projectIds, portfolioMap } = useContext(PortfolioContext)

  const renderProjectListItem = (projectId: string): ReactElement => {
    const projectItem = portfolioMap[projectId]

    return (
      <Card title={projectItem.name}>
        <FlexWrapper>
          <div>
            <Spacer {...{ b: 0, l: 0, r: 1, t: 0 }}>
              <Image
                altText={projectItem.name}
                src={projectItem.primaryImage.imageUrl}
                width='40px'
              />
            </Spacer>
          </div>
          <div>
            { projectItem.name }
          </div>
        </FlexWrapper>
      </Card>
    )
  }

  return (
    <Spacer {...{ b: 2, l: 0, r: 0, t: 0 }}>
      <Card
        collapsable
        defaultCollapse
        title='Projects'
      >
        <FlexWrapper
          flexColumn
          gap={2}
        >
          { projectIds.map(renderProjectListItem) }
        </FlexWrapper>
      </Card>
    </Spacer>
  )
}

export default ProjectsMenu
