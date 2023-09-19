import { css } from 'styled-components'
import { XSMALL_MAX } from '../../../utils/constants/breakpoints'

export const NavMenuStyles = css`
  nav {
    .nav-bar-item-wrapper {
      display: inline-block;
    }
  }

  @media screen and (max-width: ${XSMALL_MAX}) {
    nav {
      display: none;
    }
  }
`
