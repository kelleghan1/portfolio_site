import { type FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { NavMenuItemStyles } from './NavMenuItemStyles'
import { LinkDelayed } from '../../common/link-delayed/LinkDelayed'

const NavMenuItemStyled = styled.div`${NavMenuItemStyles}`

interface NavMenuItemProps {
  toUrl: string
  text: string
  handleClick?: () => void
  tabIndex?: number
}

export const NavMenuItem: FunctionComponent<NavMenuItemProps> = ({
  toUrl,
  text,
  handleClick,
  tabIndex
}) => {
  const location = useLocation()
  const navMenuItemClassname = location?.pathname === toUrl ? 'selected' : ''

  return (
    <NavMenuItemStyled className={navMenuItemClassname}>
      <LinkDelayed
        handleClick={handleClick}
        tabIndex={tabIndex}
        to={toUrl}
      >
        { text }
      </LinkDelayed>
    </NavMenuItemStyled>
  )
}
