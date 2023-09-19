import { css } from 'styled-components'
import { GREY2 } from '../../../utils/constants/colors'

export const ButtonCustomStyles = css`
  border: none;
  background-color: transparent;
  display: block;
  padding: 0px;
  cursor: pointer;

  &:focus {
    outline: 1px dashed ${GREY2};
  }
`
