import { type FunctionComponent, type ReactEventHandler, type ReactNode } from 'react'
import styled from 'styled-components'
import { ButtonCustomStyles } from './ButtonCustomStyles'

const ButtonCustomStyled = styled.button`${ButtonCustomStyles}`

interface ButtonCustomPropsType {
  onClick: ReactEventHandler
  title: string
  children: ReactNode
}

export const ButtonCustom: FunctionComponent<ButtonCustomPropsType> = ({
  children,
  onClick,
  title
}) =>
  <ButtonCustomStyled
    onClick={onClick}
    title={title}
  >
    { children }
  </ButtonCustomStyled>
