import { css } from 'styled-components'
import { MEDIUM_MIN, SMALL_MAX, SMALL_MIN, XSMALL_MAX } from '../../../utils/constants/breakpoints'
import { GREY3 } from '../../../utils/constants/colors'
import { SPACING_Y_NUM } from '../../../utils/constants/spacings'
import {
  animationFadeIn,
  animationFadeOut,
  boxShadow
} from '../../../utils/constants/styles'

export const PortfolioGridItemStyles = css`
  box-sizing: border-box;

  &.fade-in {
    ${animationFadeIn}
  }

  &.fade-out {
    ${animationFadeOut}
  }

  .image-wrapper {
    ${boxShadow}
    cursor: pointer;
  }

  @media screen and (min-width: ${MEDIUM_MIN}) {
    padding: 1%;
    flex: 0 0 20%;
  }

  @media screen and (max-width: ${SMALL_MAX}) and (min-width: ${SMALL_MIN}) {
    padding: 1%;
    flex: 0 0 25%;
  }

  @media screen and (min-width: ${SMALL_MIN}) {
    .image-wrapper {
      &:hover {
        box-shadow: 0px 0px 10px ${GREY3};
        transition: all .2s ease;
        transform: scale(1.05, 1.05);
      }
    }
  }

  @media screen and (max-width: ${XSMALL_MAX}) {
    padding: 0px 0px ${2.5 * SPACING_Y_NUM}px 0px;
    flex: 0 0 100%;
  }
`
