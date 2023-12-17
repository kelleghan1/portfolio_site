import { type SyntheticEvent } from 'react'

export type HandleNavigationFunctionType = (
  currentPathName: string,
  event: SyntheticEvent,
  to: string
) => number

export type ImageLoadCallbackType = (imageUrl: string) => void

export type TrueMapType = Record<string, true>
