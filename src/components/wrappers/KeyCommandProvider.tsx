import {
  type ReactElement,
  useEffect,
  useState,
  useCallback
} from 'react'
import { useNavigate } from 'react-router-dom'

interface KeyCommandProviderProps {
  children: ReactElement
}

const KeyCommandProvider = ({ children }: KeyCommandProviderProps): ReactElement => {
  const [ keys, setKeys ] = useState('')
  const navigate = useNavigate()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent): void => { setKeys((keys + e.key).slice(-5)) },
    [ keys ]
  )

  useEffect(
    () => { if (keys === 'admin') navigate('/admin') },
    [ keys, navigate ]
  )

  useEffect(
    () => {
      document.addEventListener(
        'keydown',
        handleKeyDown
      )

      return () => {
        document.removeEventListener(
          'keydown',
          handleKeyDown
        )
      }
    },
    [ handleKeyDown ]
  )

  return children
}

export default KeyCommandProvider
