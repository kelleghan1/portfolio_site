import { type FunctionComponent, type ReactEventHandler, type ReactElement, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LinkCustomStyles } from './LinkCustomStyles'

const LinkCustomStyled = styled.span`${LinkCustomStyles}`

interface LinkCustomPropsType {
  children: ReactNode
  hasLinkStyling?: boolean
  isBlock?: boolean
  isExternal?: boolean
  onClick?: ReactEventHandler
  tabIndex?: number
  target?: string
  to: string
}

export const LinkCustom: FunctionComponent<LinkCustomPropsType> = ({
  children,
  onClick,
  to,
  isExternal,
  target,
  hasLinkStyling,
  tabIndex,
  isBlock
}) => {
  let linkCLassname = hasLinkStyling ? 'show-link-styling' : ''

  if (isBlock) linkCLassname += ' display-block'

  const renderLink = (): ReactElement => {
    if (isExternal) {
      return (
        <a
          href={to}
          onClick={onClick}
          rel='noreferrer'
          tabIndex={tabIndex}
          target={target}
        >
          { children }
        </a>
      )
    }

    return (
      <Link
        onClick={onClick}
        tabIndex={tabIndex}
        target={target}
        to={to}
      >
        { children }
      </Link>
    )
  }

  return (
    <LinkCustomStyled className={linkCLassname}>
      { renderLink() }
    </LinkCustomStyled>
  )
}
