import { type FunctionComponent, type ReactElement } from 'react'
import styled from 'styled-components'
import { TagUlStyles } from './TagUlStyles'

const UlTagStyled = styled.ul`${TagUlStyles}`

interface TagUlPropsType {
  children: ReactElement
}

export const TagUl: FunctionComponent<TagUlPropsType> = ({ children }) => <UlTagStyled>{ children }</UlTagStyled>
