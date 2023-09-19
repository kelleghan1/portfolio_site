import { type FunctionComponent, type ReactEventHandler } from 'react'
import styled from 'styled-components'
import { ImageStyles } from './ImageStyles'

const ImageStyled = styled.img`${ImageStyles}`

interface ImageProps {
  src: string
  width?: string
  onLoad?: ReactEventHandler
  altText: string
  aspectRatio?: string
}

export const Image: FunctionComponent<ImageProps> = ({
  src,
  width = '100%',
  onLoad,
  altText,
  aspectRatio
}) => (
  <ImageStyled
    alt={altText}
    aspectRatio={aspectRatio}
    cssWidth={width}
    onLoad={onLoad}
    src={src}
  />
)
