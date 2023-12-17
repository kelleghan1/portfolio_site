import { type FunctionComponent } from 'react'
import styled from 'styled-components'
import { LoadingOverlayStyles } from './LoadingOverlayStyles'
import { LoadingSpinner } from '../loading-spinner/LoadingSpinner'

const LoadingOverlayStyled = styled.div`${LoadingOverlayStyles}`

interface LoadingOverlayPropsType {
  fadeIn?: boolean
}

export const LoadingOverlay: FunctionComponent<LoadingOverlayPropsType> = ({ fadeIn = true }) => {
  const className = fadeIn ? 'fade-in' : ''

  return (
    <LoadingOverlayStyled className={className}>
      <LoadingSpinner />
    </LoadingOverlayStyled>
  )
}
