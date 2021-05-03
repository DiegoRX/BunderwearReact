import React, {useContext} from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context'
import { Header } from '../Body'
import { amountFormatter } from '../../utils'
import bunderwear from '../../components/Gallery/genesis.png'
import NFT from '../../components/Gallery/genesisnftfinalhd.gif'
import ContactUs from '../../components/Form'
import Button from '../../components/Button' 
import { Context } from '../../context/Context'

export default function Body({ totalSupply, reserveSOCKSToken, ready, balanceSOCKS }) {
  const [state] = useAppContext()
  const {rewardLiquidityProviders, test, transfer} = useContext(Context);
  return (
    <AppWrapper overlay={state.visible}>
      <Header  />
      <Content>
        <Title>PAY / order details</Title>
        
       <Container>
           <Box>
               <Left>
               <ImgStyle src={bunderwear} alt="Logo" />
               </Left>
               <Right>
                    <Description>
                        1 BUNDERWEAR
                    </Description>
                    <Description>
                        One size fits most
                    </Description>
               </Right>
           </Box>
           <Box>
               <Left>
               <ImgStyle src={NFT} alt="Logo" />
               </Left>
               <Right>
                    <Description>
                       1 BUNDERWEAR NFT
                    </Description>
                    <Description>
                       Digital Colectible
                    </Description>
               </Right>
           </Box>
       </Container>
      </Content>
      <Content2>
      <ButtonFrame
        disabled={balanceSOCKS > 0 ? false : true}
        text={'REDEEM'}
        type={'Secondary'}
        onClick={transfer}
      />
      <ContactUs>

      </ContactUs>
      </Content2>
    </AppWrapper>
  )
}

const ButtonFrame = styled(Button)`
  width: 100%;
`
 
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

const ImgStyle = styled.img`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  /* background-color: ${props => props.theme.black}; */
  padding: 9px;
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
  background: #1E1C1E;
  //background: linear-gradient(162.92deg, #2b2b2b 12.36%, #000000 94.75%);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 2rem;
`
const Content2 = styled.div`
  width: calc(100vw - 32px);
  max-width: 375px;
  margin-top: -5px;
  background: white;
  //background: linear-gradient(162.92deg, #2b2b2b 12.36%, #000000 94.75%);
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
  color: white;gal
  font-weight: 400;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1rem;

  p {
    margin: 0;
  }
`
const Container = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
`
const Box = styled.div`
  height: 50%;
  margin: 14px;
  border-radius: 25px;
  border: 2px solid #3c353c;
  display: inline-flex;
`
const Left = styled.div`
  width: 40%;
`
const Right = styled.div`
    width: 60%;
`