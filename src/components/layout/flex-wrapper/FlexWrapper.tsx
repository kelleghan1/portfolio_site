import { type ReactNode, type FunctionComponent } from 'react'
import styled from 'styled-components'
import { FlexWrapperStyles } from './FlexWrapperStyles'

interface FlexWrapperPropsType {
  flexColumn?: boolean
  hasShadow?: boolean
  backgroundColor?: string
  children: ReactNode
}

const FlexWrapperStyled = styled.div`${FlexWrapperStyles}`

export const FlexWrapper: FunctionComponent<FlexWrapperPropsType> = ({
  backgroundColor,
  children,
  flexColumn,
  hasShadow
}) => {
  let className = flexColumn ? 'flex-column flex-grow' : ''

  if (hasShadow) className += ' shadow'

  return (
    <FlexWrapperStyled
      backgroundColor={backgroundColor}
      className={className}
    >
      { children }
    </FlexWrapperStyled>
  )
}
