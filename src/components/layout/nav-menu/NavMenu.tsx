import { type FunctionComponent } from 'react'
import styled from 'styled-components'
import { NavMenuStyles } from './NavMenuStyles'
import { NavMenuItem } from '../nav-menu-item/NavMenuItem'
import { Spacer } from '../spacer/Spacer'

const NavMenuStyled = styled.div`${NavMenuStyles}`

export const NavMenu: FunctionComponent = () => {
  const spacerProps = {
    b: 0,
    l: 2,
    r: 0,
    t: 0
  }

  return (
    <NavMenuStyled>
      <nav className='large'>
        <div className='nav-bar-item-wrapper'>
          <Spacer {...spacerProps}>
            <NavMenuItem
              text='Development'
              toUrl='/development'
            />
          </Spacer>
        </div>
        <div className='nav-bar-item-wrapper'>
          <Spacer {...spacerProps}>
            <NavMenuItem
              text='Design'
              toUrl='/design'
            />
          </Spacer>
        </div>
        <div className='nav-bar-item-wrapper'>
          <Spacer {...spacerProps}>
            <NavMenuItem
              text='All'
              toUrl='/'
            />
          </Spacer>
        </div>
        <div className='nav-bar-item-wrapper'>
          <Spacer {...spacerProps}>
            <NavMenuItem
              text='Contact'
              toUrl='/contact'
            />
          </Spacer>
        </div>
      </nav>
    </NavMenuStyled>
  )
}
