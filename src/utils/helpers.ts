import { type ProjectImage } from '../types/generatedGQLTypes'
import {
  type ImageLoadCallbackType,
  type TrueMapType
} from '../types/sharedTypes'

export const validateNumber = (value: number | undefined | null): boolean => {
  return (
    typeof value === 'number' &&
    !isNaN(value)
  )
}

export const trueVal = (value: string | number | undefined | null): boolean => {
  return (
    value !== undefined &&
    value !== null &&
    value !== ''
  )
}

export const preloadImagesIndividual = (
  images: Array<Pick<ProjectImage, 'imageUrl'>>,
  imageLoadCallback: ImageLoadCallbackType
): void => {
  for (let i = 0; i < images.length; i++) {
    const imageUrl = images[i].imageUrl
    const imageObject = new Image()

    imageObject.onload = () => { imageLoadCallback(imageUrl) }
    imageObject.onerror = () => { imageLoadCallback(imageUrl) }
    imageObject.src = imageUrl
  }
}

export const preloadImagesSet = async (images: Array<Pick<ProjectImage, 'imageUrl'>>): Promise<TrueMapType> => {
  const imagesLoadedMap: TrueMapType = {}

  await Promise.all(images.map(async ({ imageUrl }) => {
    imagesLoadedMap[imageUrl] = await new Promise(resolve => {
      const imageObject = new Image()

      imageObject.onload = () => { resolve(true) }
      imageObject.onerror = () => { resolve(true) }
      imageObject.src = imageUrl
    })
  }))

  return imagesLoadedMap
}

export const scrollToTop = (): void => {
  if (window.scrollTo) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

export const deriveAspectRatioFromImageUrl = (imageUrl: string): string | null => {
  const imageUrlSplit = imageUrl.split('/')
  const aspectRatioPath = imageUrlSplit[imageUrlSplit.length - 2]

  if (!aspectRatioPath) return null

  const aspectRatioOfPath = aspectRatioPath.split(',')[1]

  if (!aspectRatioOfPath) return null

  const aspectRatioPathSplit = aspectRatioOfPath.split('-')
  const parsedX = parseInt(aspectRatioPathSplit[1])
  const parsedY = parseInt(aspectRatioPathSplit[2])

  if (
    !validateNumber(parsedY) ||
    !validateNumber(parsedX)
  ) return null

  return `${parsedX} / ${parsedY}`
}
