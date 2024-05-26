import {
  type FunctionComponent,
  type ReactElement
} from 'react'
import { useQuery } from '@apollo/client'
import { GET_PROJECT_IMAGES } from '../../../queries/graphQL'
import { type ProjectImage } from '../../../types/generatedGQLTypes'
import { Card } from '../../common/card/Card'
import { Image } from '../../common/image/Image'
import { FlexWrapper } from '../../layout/flex-wrapper/FlexWrapper'
import { Spacer } from '../../layout/spacer/Spacer'

const ProjectImagesMenu: FunctionComponent = () => {
  const { data: projectImagesResponse } = useQuery<{ projectImages: ProjectImage[] }>(GET_PROJECT_IMAGES)

  const renderProjectImage = ({ id, imageUrl }: ProjectImage): ReactElement =>
    <Card title={`${id}`}>
      <FlexWrapper>
        <div>
          <Spacer {...{ b: 0, l: 0, r: 1, t: 0 }}>
            <Image
              altText={`image ${id}`}
              src={imageUrl}
              width='40px'
            />
          </Spacer>
        </div>
        <div>
          { imageUrl }
        </div>
      </FlexWrapper>
    </Card>

  return (
    <Spacer {...{ b: 2, l: 0, r: 0, t: 0 }}>
      <Card
        collapsable
        defaultCollapse
        title='Project Images'
      >
        <FlexWrapper
          flexColumn
          gap={2}
        >
          { projectImagesResponse?.projectImages.map(renderProjectImage) ?? [] }
        </FlexWrapper>
      </Card>
    </Spacer>

  )
}

export default ProjectImagesMenu
