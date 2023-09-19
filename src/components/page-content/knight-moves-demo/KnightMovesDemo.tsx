import { type FunctionComponent, useContext } from 'react'
import { KnightMoves } from 'knight-moves'
import styled from 'styled-components'
import { KnightMovesDemoStyles } from './KnightMovesDemoStyles'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { Container } from '../../layout/container/Container'
import { PageRow } from '../../layout/page-row/PageRow'
import { Spacer } from '../../layout/spacer/Spacer'

const KnightMovesDemoStyled = styled.div`${KnightMovesDemoStyles}`

const KnightMovesDemo: FunctionComponent = () => {
  const { isNavigating } = useContext(PortfolioContext)

  return (
    <PageRow>
      <Container>
        <Spacer
          l={3}
          r={3}
          t={0}
        >
          <KnightMovesDemoStyled className={`fade-in ${isNavigating ? 'fade-out' : ''}`}>
            <KnightMoves quadrantSize={15} />
          </KnightMovesDemoStyled>
        </Spacer>
      </Container>
    </PageRow>
  )
}

export default KnightMovesDemo
