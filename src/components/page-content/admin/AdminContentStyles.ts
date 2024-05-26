import { css } from 'styled-components'
import { SPACING_X_L, SPACING_Y, SPACING_Y_L } from '../../../utils/constants/spacings'
import {
  animationFadeIn,
  animationFadeOut
} from '../../../utils/constants/styles'

export const AdminContentStyles = css`
  ${animationFadeIn}

  &.fade-out {
    ${animationFadeOut}
  }

  .flex-grow {
    flex-grow: 1;
  }

  .list-item-wrapper {
    padding: ${SPACING_Y_L} ${SPACING_X_L};
    border: 1px solid gray;
  }

  .list-item-header {
    padding: ${SPACING_Y} 0;
    margin-bottom: ${SPACING_Y};
    border-bottom: 1px solid gray;
  }
`
