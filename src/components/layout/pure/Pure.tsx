import { type FunctionComponent, type ReactNode } from 'react'

interface PureProps {
  children: ReactNode
}

export const Pure: FunctionComponent<PureProps> = ({ children }) =>
  <div className='pure-g'>
    { children }
  </div>
