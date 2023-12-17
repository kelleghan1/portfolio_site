import { css } from 'styled-components'

export interface TagHStylePropsType {
  margin?: string
  color?: string
  fontSize?: string
}

const renderMargin = ({ margin }: TagHStylePropsType): string =>
  margin ? `margin: ${margin};` : ''

const renderColor = ({ color }: TagHStylePropsType): string =>
  color ? `color: ${color};` : ''

const renderFontSize = ({ fontSize }: TagHStylePropsType): string =>
  fontSize ? `font-size: ${fontSize};` : ''

export const TagHStyles = css<TagHStylePropsType>`
  line-height: 1em;
  ${renderFontSize}
  ${renderMargin}
  ${renderColor}
`
