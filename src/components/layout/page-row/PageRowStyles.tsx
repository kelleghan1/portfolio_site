import { css } from 'styled-components'

interface PageRowColor {
  color?: string
}

export const PageRowStyles = css<PageRowColor>`
  background-color: ${({ color }) => color ?? 'unset'};
`
