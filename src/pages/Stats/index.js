import React, {useContext} from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context'
import { Header } from '../Body'
import { amountFormatter } from '../../utils'
import { Context } from '../../context/Context'

export default function Body({ totalSupply, reserveSOCKSToken, ready, balanceSOCKS }) {

  const { balance, data, init } = useContext(Context)
  const UNIT_VALUE = 916666666666666667
  return (
    <AppWrapper >
      <Header  />
      <Content>
        <Title>BUND Stats</Title>
        <Description>
          <p>
            <span role="img" aria-label="socks">
            🩲
            </span>
            Initial BUND
          </p>
          <p>50</p>
        </Description>
        <Description>
          <p>
            <span role="img" aria-label="socks">
              🔥
            </span>
            Redeemed BUND
          </p>
          {data === undefined ?
          <p>#</p>:
          <p>{balance/UNIT_VALUE}</p>}
        </Description>

        <Shim />
        <Footer>
        {data === undefined ?
          <p>Connect Metamask to see the redeemed amount</p>
        : <p></p>}
          <br />
          <br />
        </Footer>
      </Content>
    </AppWrapper>
  )
}

const Footer = styled.p`
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  color: white;

  a {
    text-decoration: none;
    color: #fe6dde;
    margin-bottom: 1rem;
  }
`

const Shim = styled.div`
  height: 5rem;
`

const AppWrapper = styled.div`
  width: 100vw;
  height: 100%;
  margin: 0px auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
 // overflow: ${props => (props.overlay ? 'hidden' : 'scroll')};
  scroll-behavior: smooth;
  position: ${props => (props.overlay ? 'fixed' : 'initial')};
`

const Content = styled.div`
  width: calc(100vw - 32px);
  max-width: 375px;
  margin-top: 72px;
  background: #000000;
  background: linear-gradient(162.92deg, #2b2b2b 12.36%, #000000 94.75%);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 2rem;
`

const Title = styled.h2`
  color: white;
  font-weight: 500;
  margin-left: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
`

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-weight: 400;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1rem;

  p {
    margin: 0;
  }
`
