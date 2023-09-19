import { css } from 'styled-components'
import {
  animationFadeIn,
  animationFadeOut,
  boxShadow
} from '../../../utils/constants/styles'

export const ProjectDescriptionStyles = css`
  .description-wrapper {
    background-color: #fff;
    ${boxShadow}
  }

  &.fade-in {
    ${animationFadeIn}
    
    &.fade-out {
      ${animationFadeOut}
    }
  }
`
