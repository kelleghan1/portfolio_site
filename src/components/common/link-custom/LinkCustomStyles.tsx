import { css } from 'styled-components'
import { GREY2, LINK1, TEXT1 } from '../../../utils/constants/colors'

export const LinkCustomStyles = css`
  & > a {
    text-decoration: none;
    color: ${TEXT1};

    &:focus {
      outline: 1px dashed ${GREY2};
    }

    &:visited {
      color: ${TEXT1};
    }
  }

  &.show-link-styling {
    > a {
      color: ${LINK1};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &.display-block {
    display: block;
    
    > a {
      display: block;
    }
  }
`
