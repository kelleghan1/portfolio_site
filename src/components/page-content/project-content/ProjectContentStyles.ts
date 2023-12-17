import { css } from 'styled-components'
import {
  SMALL_MIN,
  XSMALL_MAX
} from '../../../utils/constants/breakpoints'

export const ProjectContentStyles = css`
  .columns-wrapper {
    display: none;

    .block-description {
      display: none;
    }

    .single-image-tablet-columns {
      display: none;
    }
  }
  
  .list-wrapper {
    display: none;
  }

  @media screen and (min-width: ${SMALL_MIN}) {
    .columns-wrapper {
      display: block;
    }
  }

  @media screen and (max-width: ${XSMALL_MAX}) {
    .list-wrapper {
      display: block;
    }
  }

  @media screen and (max-width: 900px) {
    .columns-wrapper {
      .block-description {
        display: block;
      }

      .column-description {
        display: none;
      }

      .single-image-tablet-columns {
        display: block;
      }

      .single-image-desktop-columns {
        display: none;
      }
    }
  }
`
