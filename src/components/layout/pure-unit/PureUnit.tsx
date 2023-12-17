import { type FunctionComponent, type ReactNode } from 'react'
import styled from 'styled-components'
import { PureUnitStyles } from './PureUnitStyles'

interface PureUnitProps {
  pureClass: string
  isFlex?: boolean
  children: ReactNode
}

const PureUnitStyled = styled.div`${PureUnitStyles}`

export const PureUnit: FunctionComponent<PureUnitProps> = ({
  pureClass,
  children,
  isFlex
}) => {
  let className = pureClass

  if (isFlex) className += ' pure-unit-flex'

  return (
    <PureUnitStyled className={className}>
      { children }
    </PureUnitStyled>
  )
}
