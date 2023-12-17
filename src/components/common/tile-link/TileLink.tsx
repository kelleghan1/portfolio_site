import { type FunctionComponent, type ReactElement } from 'react'
import { type Link } from '../../../types/generatedGQLTypes'
import { Spacer } from '../../layout/spacer/Spacer'
import { LinkCustom } from '../link-custom/LinkCustom'
import { LinkDelayed } from '../link-delayed/LinkDelayed'

interface TileLinkProps extends Omit<Link, 'id' | 'type'> {
  hasBottomSpacing: boolean
}

export const TileLink: FunctionComponent<TileLinkProps> = ({
  url,
  label,
  isInternal = false,
  hasBottomSpacing
}) => {
  const renderLink = (): ReactElement => {
    if (isInternal) {
      return (
        <LinkDelayed
          hasLinkStyling={true}
          to={url}
        >
          { label }
        </LinkDelayed>
      )
    }

    return (
      <LinkCustom
        hasLinkStyling
        isExternal
        target='_blank'
        to={url}
      >
        { label }
      </LinkCustom>
    )
  }

  return (
    <Spacer
      b={hasBottomSpacing ? 1 : 0}
      key={url}
      l={0}
      r={0}
      t={0}
    >
      { renderLink() }
    </Spacer>
  )
}
