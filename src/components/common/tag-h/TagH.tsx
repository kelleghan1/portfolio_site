import { type ReactNode, type FunctionComponent } from 'react'
import styled from 'styled-components'
import { TagHStyles } from './TagHStyles'

const H1TagStyled = styled.h1`${TagHStyles}`
const H2TagStyled = styled.h2`${TagHStyles}`
const H3TagStyled = styled.h3`${TagHStyles}`
const H4TagStyled = styled.h4`${TagHStyles}`

enum SizeOptionsType {
  one = 1,
  two,
  three,
  four
}

interface TagHProps {
  size: SizeOptionsType
  margin?: string
  color?: string
  fontSize?: string
  children: ReactNode
}

export const TagH: FunctionComponent<TagHProps> = ({
  children,
  color,
  fontSize,
  margin = '0',
  size
}) => {
  const props = {
    color,
    margin,
    fontSize
  }

  switch (size) {
    case 4:
      return (
        <H4TagStyled {...props}>
          { children }
        </H4TagStyled>
      )
    case 3:
      return (
        <H3TagStyled {...props}>
          { children }
        </H3TagStyled>
      )
    case 2:
      return (
        <H2TagStyled {...props}>
          { children }
        </H2TagStyled>
      )
    case 1:
      return (
        <H1TagStyled {...props}>
          { children }
        </H1TagStyled>
      )
    default:
      return <p>{ children }</p>
  }
}
