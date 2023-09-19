import { css } from 'styled-components'

interface ImageStylesPropsType {
  aspectRatio?: string
  cssWidth: string
}

const renderAspectRatio = ({ aspectRatio }: ImageStylesPropsType): string =>
  aspectRatio ? `aspect-ratio: ${aspectRatio};` : ''

const renderCssWidth = ({ cssWidth }: ImageStylesPropsType): string => `width: ${cssWidth};`

export const ImageStyles = css<ImageStylesPropsType>`
  display: block;
  ${renderAspectRatio}
  ${renderCssWidth}
`
