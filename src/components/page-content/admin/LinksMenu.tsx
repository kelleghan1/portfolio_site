import {
  type FunctionComponent,
  type ReactElement
} from 'react'
import { useQuery } from '@apollo/client'
import { GET_LINKS } from '../../../queries/graphQL'
import { type Link } from '../../../types/generatedGQLTypes'
import { Card } from '../../common/card/Card'
import { FlexWrapper } from '../../layout/flex-wrapper/FlexWrapper'
import { Spacer } from '../../layout/spacer/Spacer'

const LinksMenu: FunctionComponent = () => {
  const { data: linksResponse } = useQuery<{ links: Link[] }>(GET_LINKS)

  const renderLinkListItem = ({ id, isInternal, type: { name: typeName }, label, url }: Link): ReactElement =>
    <Card title={`${id}: ${label}`}>
      <FlexWrapper
        flexColumn
        gap={1}
      >
        <div>{ typeName }</div>
        <div>{ url }</div>
        <div>{ isInternal ? 'Internal' : 'External' }</div>
      </FlexWrapper>
    </Card>

  return (
    <Spacer {...{ b: 2, l: 0, r: 0, t: 0 }}>
      <Card
        collapsable
        defaultCollapse
        title='Links'
      >
        <FlexWrapper
          flexColumn
          gap={2}
        >
          { linksResponse?.links.map(renderLinkListItem) ?? [] }
        </FlexWrapper>
      </Card>
    </Spacer>

  )
}

export default LinksMenu
