import { type FunctionComponent, type ReactNode } from 'react'
import styled from 'styled-components'
import { ContainerStyles } from './ContainerStyles'

const ContainerStyled = styled.div`${ContainerStyles}`

interface ContainerPropsType {
  children: ReactNode
}

export const Container: FunctionComponent<ContainerPropsType> = ({ children }) =>
  <ContainerStyled>
    { children }
  </ContainerStyled>
