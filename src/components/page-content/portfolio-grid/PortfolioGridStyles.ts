import { css } from 'styled-components'
import { XSMALL_MAX } from '../../../utils/constants/breakpoints'

export const PortfolioGridStyles = css`
  display: flex;
  flex-wrap: wrap;
  margin: -1%;

  @media screen and (max-width: ${XSMALL_MAX}) {
    margin: 0px;
  }
`
