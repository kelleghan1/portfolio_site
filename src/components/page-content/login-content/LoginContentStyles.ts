import { css } from 'styled-components'
import {
  animationFadeIn,
  animationFadeOut
} from '../../../utils/constants/styles'

export const LoginContentStyles = css`
  ${animationFadeIn}

  &.fade-out {
    ${animationFadeOut}
  }

  .flex-grow {
    flex-grow: 1;
  }
`
