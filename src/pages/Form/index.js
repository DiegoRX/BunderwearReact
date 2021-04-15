import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context'
import { Header } from '../Body'
import { amountFormatter } from '../../utils'
import ContactUs from '../../components/Form'

export default function Form({ totalSupply, reserveSOCKSToken, ready, balanceSOCKS }) {
  const [state] = useAppContext()

  return (
    <AppWrapper overlay={state.visible}>
      <Header  />
      <Content>
        <Title>Pay / order details</Title>
        <p style={{color:'white', marginLeft:'33px', marginBottom:'3px'}}>Where should we send them?</p>
        <ContactUs />

        <Footer>
        Hash confirmation is required. We will verify the request.
          <br />
          
          <br />
          {/* <a
            href="https://medium.com/frst/money-laundry-the-rise-of-the-crypto-sock-market-f979aafc3796"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more.
          </a> */}
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
  overflow: ${props => (props.overlay ? 'hidden' : 'scroll')};
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
