import {
  keyframes,
  css
} from 'styled-components'
import { GREY3, GREY4 } from './colors'

export const keyframeFadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1; }
`

export const keyframeFadeOut = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0; }
`

export const animationFadeIn = css`
  animation: ${keyframeFadeIn} .25s forwards;
  animation-timing-function: linear;
`

export const animationFadeOut = css`
  animation: ${keyframeFadeOut} .2s forwards;
  animation-timing-function: linear;
`

export const boxShadow = css`
  box-shadow: 0px 0px 6px ${GREY4};
`

export const boxShadowDark = css`
  box-shadow: 0px 0px 10px ${GREY3};
`
