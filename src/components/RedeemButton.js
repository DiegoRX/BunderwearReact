import React, { useContext } from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'
import { useWeb3Context } from 'web3-react'
import { Context } from '../../src/context/Context';
import Button from './Button'
import Button2 from './Button2'
import { useAppContext } from '../context'
import { TRADE_TYPES } from '../utils'
import { Link } from 'react-router-dom'
import ButtonGrey from './ButtonGrey';

const BuyButtonFrame = styled.div`
  margin: 0.5rem 0rem 0.5rem 0rem;
  display: flex;
  align-items: center;
  flex-direction: center;
  flex-direction: row;
  color: ${props => props.theme.black};

  div {
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    /* For mobile phones: */
    /* margin: 1.5rem 2rem 0.5rem 2rem; */
  }
`
const ButtonFrame = styled(Button)`
  width: 100%;
  background: grey;
`
const ButtonFrame2 = styled(Button2)`
  width: 100%;
`
const ButtonFrame3 = styled(ButtonGrey)`
  width: 100%;
`
const Shim = styled.div`
  width: 1rem !important;
  height: 1rem;
`

export default function RedeemButton({ balanceSOCKS }) {
  const [, setState] = useAppContext()
  const { account } = useWeb3Context()
  const { rewardLiquidityProviders, test, transfer, data, init } = useContext(Context);
  function handleToggleCheckout(tradeType) {
    setState(state => ({ ...state, visible: !state.visible, tradeType }))
  }
  const test1 = async e => {
    console.log("hola prueba 2")
  }
  return (


    <BuyButtonFrame>
      { data === undefined ?
        <>
         
            <ButtonFrame3
              disabled={balanceSOCKS > 0 ? false : true}
              text={'REDEEM'}
              type={'Secondary'}
              transfer={transfer}
              color={'grey'}
              onClick={init}
            />

          <Shim />
          <ButtonFrame3
            disabled={
              account === null ||
              !balanceSOCKS ||
              balanceSOCKS.lt(ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18)))
            }
            text={'REWARD LP'}
            type={'secondary'}
            color={'grey'}
            onClick={init}
          /></> :
        <> <Link to='/redeem' style={{ width: '100%' }}>
          <ButtonFrame2
            disabled={balanceSOCKS > 0 ? false : true}
            text={'REDEEM'}
            type={'Secondary'}
            transfer={transfer}
          />
        </Link>
          <Shim />
          <ButtonFrame
            disabled={
              account === null ||
              !balanceSOCKS ||
              balanceSOCKS.lt(ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18)))
            }
            text={'REWARD LP'}
            type={'secondary'}
            onClick={rewardLiquidityProviders}
            color={'orange'}
          /> </>
      }

    </BuyButtonFrame>
  )
}
