import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import Button2 from './Button2'
import { useAppContext } from '../context'
import { TRADE_TYPES } from '../utils'
import { Link } from 'react-router-dom'

const BuyButtonFrame = styled.div`
  margin: 0.5rem 0rem 0.5rem 0rem;
  display: block;
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
  padding: 10px;
`
const ButtonFrame2 = styled(Button2)`
  width: 100%;
  padding: 10px;
`
// const Shim = styled.div`
//   width: 2rem !important;
//   height: 2rem;
// `

export default function BuyButtons(props) {
  const [, setState] = useAppContext()

  function handleToggleCheckout(tradeType) {
    setState(state => ({ ...state, visible: !state.visible, tradeType }))
  }

  return (
    <>
    
      <BuyButtonFrame>
        <Link to='/buy'>
        <ButtonFrame2
          disabled={false}
          text={'BUY NOW'}
          type={'cta'}
          color={'red'}
        />
        </Link>
      </BuyButtonFrame>
      <BuyButtonFrame>
      <Link to='/GetLPTokens'>
          <ButtonFrame2
            disabled={false}
            text={'GET LP TOKENS'}
            type={'button'}
            color={'red'}
          />
        </Link>
        </BuyButtonFrame>
      <BuyButtonFrame>
        <Link to='/mining'>
          <ButtonFrame2
            disabled={false}
            text={'START PHARMING'}
            type={'button'}
          />
        </Link>        
      </BuyButtonFrame>
    </>
  )
}
