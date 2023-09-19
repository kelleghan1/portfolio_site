import { css } from 'styled-components'
import { TEXT1 } from '../../../utils/constants/colors'
import { SPACING_Y } from '../../../utils/constants/spacings'
import { boxShadowDark } from '../../../utils/constants/styles'

export const NavMenuMobileStyles = css`
  nav {
    ${boxShadowDark};
    position: absolute;
    right: -100px;
    opacity: 0;
    background-color: #fff;
    z-index: 1;
    padding: ${SPACING_Y} 0px;

    &.open {
      right: 0px;
      opacity: 1;
    }
  }

  .hamburger-wrapper {
    .line-wrapper {
      width: 50px;
      height: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0px;

      .hamburger-line {
        background-color: ${TEXT1};
        padding: 1px 0px;
      }
    }
  }
`
