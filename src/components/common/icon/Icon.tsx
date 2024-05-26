import { type FunctionComponent, type ReactElement } from 'react'
import styled from 'styled-components'
import { IconStyles } from './IconStyles'

const IconStyled = styled.div`${IconStyles}`

interface IconProps {
  children: ReactElement
}

export const Icon: FunctionComponent<IconProps> = ({ children }) => (
  <IconStyled>
    { children }
  </IconStyled>
)
