import { css } from 'styled-components'

interface PortfolioListItemsStylesProps {
  rowColor?: string
}

export const PortfolioListItemStyles = css<PortfolioListItemsStylesProps>`
  box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.3);

  .half-wrapper {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ rowColor }) => rowColor ?? '#fff'};
  }
`
