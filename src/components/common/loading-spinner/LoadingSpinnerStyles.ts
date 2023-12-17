import { css, keyframes } from 'styled-components'

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingSpinnerStyles = css`
  animation: 0.65s linear infinite ${spinner};
  border: solid 5px #cfd0d1;
  border-bottom-color: #000;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  top: 10%;
  left: 10%;
  transform: translate3d(-50%, -50%, 0);
  will-change: transform;
`
