import { type FunctionComponent } from 'react'
import styled from 'styled-components'
import { LoadingContentStyles } from './LoadingContentStyles'
import { LoadingSpinner } from '../loading-spinner/LoadingSpinner'

const LoadingContentStyled = styled.div`${LoadingContentStyles}`

interface LoadingContentPropsType {
  backgroundColor?: string
}

export const LoadingContent: FunctionComponent<LoadingContentPropsType> = ({ backgroundColor }) =>
  <LoadingContentStyled backgroundColor={backgroundColor}>
    <LoadingSpinner />
  </LoadingContentStyled>
