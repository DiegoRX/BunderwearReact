import React, { useState, useCallback, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useWeb3Context } from 'web3-react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import Modal from 'react-bootstrap/Modal';
import { useAppContext } from '../../context'
import Card from '../../components/Card'
import BuyButtons from '../../components/Buttons'
import RedeemButton from '../../components/RedeemButton'

export function Header({ totalSupply, ready, balanceSOCKS, setShowConnect }) {

  const { balance, data, init } = useContext(Context);

  const dataSliced = data
  return (
    <HeaderFrame>
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <Unicorn>
          <span role="img" aria-label="unicorn">
            🩲
          </span>{' '}
          BUNDERWEAR
        </Unicorn>
      </Link>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {data === undefined ?
          <Link to="/stats" style={{ textDecoration: 'none' }}>
            <Burned>
              ♥️ # Redeemed
            </Burned>
          </Link> :
          <Link to="/stats" style={{ textDecoration: 'none' }}>
            <Burned>
              ♥️ {balance / 916666666666666667} Redeemed
            </Burned>
          </Link>
        }
        {data === undefined ?
          <Burned1 onClick={init}>Connect Wallet</Burned1> :
          <span role="img" aria-label="fire">
            <Burned1>{dataSliced.join().slice(0, 6)}...{dataSliced.join().slice(-4)}</Burned1>
          </span>
        }
      </div>
    </HeaderFrame>
  )
}

const HeaderFrame = styled.div`
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  margin: 0px;
  font-size: 1.25rem;
  color: ${props => (props.balanceSOCKS ? props.theme.primary : 'white')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
`

const Burned = styled.div`
  background-color: none;
  border: 1px solid red;
  margin-right: 1rem;
  padding: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s ease;
  line-height: 1;

  :hover {
    transform: scale(1.02);
  }

  font-weight: 500;
  font-size: 14px;
  color: red;
`
const Burned1 = styled.div`
  background: linear-gradient(to right, red, #d52941);
  border: 1px solid red;
  margin-right: 1rem;
  padding: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s ease;
  line-height: 1;

  :hover {
    transform: scale(1.02);
  }

  font-weight: 500;
  font-size: 14px;
  color: white;
`

export default function Body({ }) {
  const { account } = useWeb3Context()

  const [state, setState] = useAppContext()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <AppWrapper overlay={state.visible}>
      <Header
      />
      <Content>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>How it works:</Modal.Title>
          </Modal.Header>
          <Modal.Body>BUND is a token that entitles you to 1 real pair of limited edition bunderwear, shipped anywhere in the world.</Modal.Body>
          <Modal.Body>You can sell the token back at any time. To get a real pair, redeem a BUND token.</Modal.Body>
          <Modal.Body> How it's priced:</Modal.Body>
          <Modal.Body> BUND tokens are listed starting at $2.75 USD. Each buy/sell will move the price, however floor will keep increasing with each TX.</Modal.Body>
          <Modal.Body> <a href='mailto:contact@bunderwear.club'>Get in touch</a></Modal.Body>



          <Modal.Footer>

          </Modal.Footer>
        </Modal>
        <Card />{' '}
        <Info>
          <div style={{ marginBottom: '4px' }}>Buy and sell real BUNDERWEAR with digital currency.</div>
          <div style={{ marginBottom: '4px' }}>
            Delivered on demand.{' '}
            <A style={{ color: '#007bff' }}
              onClick={handleShow}
            >
              Learn more
            </A>
          </div>
        </Info>
        <BuyButtons />
        <RedeemButton />
        {!!account && (
          <Link style={{ textDecoration: 'none' }} to="/status">
            <OrderStatusLink>Check order status?</OrderStatusLink>
          </Link>
        )}
      </Content>

    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  width: 95vw;
  height: 100%;
  margin: 0px auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
 
  scroll-behavior: smooth;
  position: ${props => (props.overlay ? 'fixed' : 'initial')};
`

const Content = styled.div`
  width: calc(100vw - 32px);
  max-width: 375px;
  margin-top: 72px;
`
const A = styled.a`
 :hover{
   text-decoration: underline;
 }
`

const Info = styled.div`
  color: ${props => props.theme.text};
  font-weight: 500;
  margin: 0px;
  font-size: 14px;
  padding: 20px;
  padding-top: 32px;
  border-radius: 0 0 8px 8px;
  /* border-radius: 8px; */
  margin-bottom: 12px;
  margin-top: -12px;
  /* margin-top: 16px; */
  background-color: ${props => '#f1f2f6'};
  a {
    color: ${props => props.theme.uniswapPink};
    text-decoration: none;
    /* padding-top: 8px; */
    /* font-size: 14px; */
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const OrderStatusLink = styled.p`
  color: ${props => props.theme.uniswapPink};
  text-align: center;
  font-size: 0.6rem;
`

const Unicorn = styled.p`
  color: black;
  font-weight: 600;
  margin: auto 0px;
  font-size: 16px;
`
//react-places-autocomplete react-google-recaptcha react-dom-confetti react-dom-confetti