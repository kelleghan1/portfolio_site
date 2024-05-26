import { css } from 'styled-components'
import { SPACING_X_NUM } from '../../../utils/constants/spacings'
import { boxShadow } from '../../../utils/constants/styles'

interface FlexWrapperStylesPropsType {
  backgroundColor?: string
  gap?: number
  justifyContent?: string
}

const renderBackgroundColor = ({ backgroundColor }: FlexWrapperStylesPropsType): string =>
  backgroundColor ? `background-color: ${backgroundColor};` : ''

const renderGap = ({ gap }: FlexWrapperStylesPropsType): string =>
  gap ? `gap: ${gap * SPACING_X_NUM}px` : ''

const renderjustifyContent = ({ justifyContent }: FlexWrapperStylesPropsType): string =>
  justifyContent ? `justify-content: ${justifyContent}` : ''

export const FlexWrapperStyles = css<FlexWrapperStylesPropsType>`
  display: flex;
  flex: 1;

  &.flex-column {
    flex-direction: column;
  }

  &.shadow {
    ${boxShadow}
  }

  ${renderGap}
  ${renderjustifyContent}
  ${renderBackgroundColor}
`
