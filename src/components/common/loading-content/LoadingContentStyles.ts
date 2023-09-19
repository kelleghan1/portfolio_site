import { css } from 'styled-components'

interface LoadingContentStylesPropsType {
  backgroundColor?: string
}

const renderBackgroundColor = ({ backgroundColor }: LoadingContentStylesPropsType): string =>
  backgroundColor ? `background-color: ${backgroundColor};` : ''

export const LoadingContentStyles = css<LoadingContentStylesPropsType>`
  ${renderBackgroundColor}

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
