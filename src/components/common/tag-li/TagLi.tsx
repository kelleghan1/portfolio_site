import { type FunctionComponent, type ReactElement } from 'react'
import styled from 'styled-components'
import { TagLiStyles } from './TagLiStyles'

const TagLiStyled = styled.li`${TagLiStyles}`

interface TagLiPropsType {
  children: ReactElement
}

export const TagLi: FunctionComponent<TagLiPropsType> = ({ children }) => {
  return <TagLiStyled>{ children }</TagLiStyled>
}
