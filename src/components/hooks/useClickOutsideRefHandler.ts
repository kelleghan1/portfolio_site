import { useEffect, type RefObject } from 'react'

export const useClickOutsideRefHandler = (
  ref: RefObject<HTMLElement>,
  outsideRefCallback: () => void
): void => {
  useEffect(
    () => {
      const handleClickOutside = (event: MouseEvent): void => {
        if (
          !(event?.target instanceof HTMLElement) ||
          !ref.current?.contains(event.target)
        ) {
          outsideRefCallback()
        }
      }

      document.addEventListener(
        'click',
        handleClickOutside
      )

      return () => {
        document.removeEventListener(
          'click',
          handleClickOutside
        )
      }
    },
    [
      ref,
      outsideRefCallback
    ]
  )
}
