import { css } from 'styled-components'
import {
  animationFadeIn,
  animationFadeOut,
  boxShadow
} from '../../../utils/constants/styles'

interface ProjectImageStylesPropsType {
  aspectRatio?: string | null
}

const renderAspectRatioPadding = ({ aspectRatio }: ProjectImageStylesPropsType): string =>
  aspectRatio ? `padding-top: calc(100% * (${aspectRatio}));` : ''

export const ProjectImageStyles = css<ProjectImageStylesPropsType>`
  .shadow {
    ${boxShadow}
  }

  .relative-wrapper {
    position: relative;
    background-color: #fff;

    .image-wrapper {
      opacity: 0;
    }
  }

  .fade-in {
    ${animationFadeIn}

    &.fade-out {
      ${animationFadeOut}
    }
  }

  .loading-wrapper {
    ${renderAspectRatioPadding}
    position: relative;
    background-color: #fff;
  }
`
