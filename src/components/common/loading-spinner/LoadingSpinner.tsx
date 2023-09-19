import { type FunctionComponent } from 'react'
import styled from 'styled-components'
import { LoadingSpinnerStyles } from './LoadingSpinnerStyles'

const LoadingSpinnerStyled = styled.div`${LoadingSpinnerStyles}`

export const LoadingSpinner: FunctionComponent = () => <LoadingSpinnerStyled />
