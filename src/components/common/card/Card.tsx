import { type ReactNode, type FunctionComponent, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { FlexWrapper } from '../../layout/flex-wrapper/FlexWrapper'
import { Spacer } from '../../layout/spacer/Spacer'
import { ButtonCustom } from '../button-custom/ButtonCustom'
import { Icon } from '../icon/Icon'
import { TagH } from '../tag-h/TagH'

interface CardProps {
  children: ReactNode
  title?: string
  collapsable?: boolean
  defaultCollapse?: boolean
}

export const Card: FunctionComponent<CardProps> = ({ title, children, defaultCollapse, collapsable }) => {
  const [ isCollapsed, setIsCollapsed ] = useState(!!defaultCollapse)

  return (
    <FlexWrapper
      backgroundColor='#fff'
      hasShadow
    >
      <Spacer {...{ b: 2.5, l: 2.5, r: 2.5, t: 2.5 }}>
        {
          title &&
          <Spacer
            b={isCollapsed ? 0 : 2}
            l={0}
            r={0}
            t={0}
          >
            <FlexWrapper justifyContent='space-between'>
              <TagH size={2}>
                { title }
              </TagH>
              {
                collapsable &&
                <ButtonCustom
                  onClick={() => { setIsCollapsed(!isCollapsed) }}
                  title={`collapse ${title}`}
                >
                  <Icon>
                    { isCollapsed ? <ChevronDownIcon /> : <ChevronUpIcon /> }
                  </Icon>
                </ButtonCustom>
              }
            </FlexWrapper>
          </Spacer>
        }
        { !isCollapsed && children }
      </Spacer>
    </FlexWrapper>
  )
}
