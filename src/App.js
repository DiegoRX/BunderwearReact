import React, { useState, useEffect } from 'react';
import getBlockchain from './ethereum.js';
import { ethers } from 'ethers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Form from './pages/Form/index.js';
import { Context } from './context/Context';

function App() {
  const [signer, setSigner] = useState(undefined);
  const [simpleStorage, setSimpleStorage] = useState(undefined);
  const [data, setData] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [txReceipt, setTxReceipt] = useState(undefined);

  // useEffect(() => {
  // const init = async () => {
  //   const { simpleStorage, accounts } = await getBlockchain();
  //   console.log(1, simpleStorage)
  //   setSimpleStorage(simpleStorage);
  //   setData(accounts)

  // console.log(20, simpleStorage)
  // console.log(data, 'data puesx')

  // };
  // }, []);



    const init = async () => {
      const { simpleStorage, accounts, addresses, balance } = await getBlockchain();
      // console.log(1, simpleStorage)
      setSimpleStorage(simpleStorage);

      setData(accounts)
      // const name = await simpleStorage.methods.name().call()
      const name = await simpleStorage.methods.name().call()
      setName(accounts)
      setBalance(balance)
      // console.log(20, simpleStorage)
      // console.log(name, accounts.join(), data, 'data ne')

    };
// useEffect(()=>{
//   // console.log(data, 'dataaa')
// },setData)

  const rewardLiquidityProviders = async e => {
    e.preventDefault();
    // console.log(data[0], 'dataaa')
    // const tx = await simpleStorage.rewardLiquidityProviders({ gasLimit: 3000000 });
    // const receipt = await tx.wait();
    // console.log(tx)
    // console.log(receipt)
    const receipt = await simpleStorage.methods.rewardLiquidityProviders().send({
      from: data[0],
      gasLimit: 5,
      gas: 594867,
      to: '0x721b3F5ecb66096E6323dE712a8819Ce43A26dFa'
    })
    // .send({
    //   from: data[0],
    //   gas: 21000,
    // })
console.log(receipt, 'rewarded')
setTxReceipt(receipt)
    //const newData = await simpleStorage.readData();
if (receipt.status === true ){
  alert('Lo lograste!')
}
  };
  const transfer = async e => {
    e.preventDefault();
    console.log('redeemed')
    const recepient = '0x4621080FF83e0d2CcC87C9c0CfC5B5245177A99E'
    const amount = '1000000000000000000'
    const sender = data[0]
    
    // const balance = await simpleStorage.methods.balanceOf(recepient).call()
    // console.log('Balance is ', balance)
    const transfer = await simpleStorage.methods.transfer( recepient, amount)
    .send({ 
      gasLimit: 5,
      gas: 97024,
      from: sender
     })
    // const txReceipt = transfer.wait() 
    console.log(transfer)
    if (transfer.status === true ){
      // console.log("Aquí sí")
      setTxReceipt(transfer)
    }
    //   const amount = ethers.utils.parseUnits('1000000000000000000', 18);
    //   console.log(amount)
    //   const tx = await signer.sendTransaction({
    //     to: 0x000000000000000000000000000000000000dead,
    //     value: amount
    //   });
    //   await tx.wait();
  };

  const test = async e => {
    console.log('success!!!')
  }

  let dataContext = {
    simpleStorage,
    transfer,
    rewardLiquidityProviders,
    test,
    data,
    init,
    transfer,
    balance,
    txReceipt,
    setTxReceipt

  }

  if (
    typeof simpleStorage === 'undefined'
    // || typeof data === 'undefined'
  ) {
    <>

      <button >init</button>
    </>


  }

  return (
    <Context.Provider value={dataContext}>
      <BrowserRouter basename='/'>
        <Switch>
          <Route exact strict path="/" render={() => <Main />} />
          <Route exact strict path="/status" render={() => <Main status />} />
          <Route exact strict path="/stats" render={() => <Main stats />} />
          <Route exact strict path="/success" render={() => <Form />} />
          <Route path='/mining' component={() => {
            window.location.href = 'https://unifty.io/bsc/farm-view.html?address=0x816A3ae3b90F30b5fB79f68a5C4d2e445381A513';
            return null;
          }} />
          <Route path='/buy' component={() => {
            window.location.href = 'https://v1exchange.pancakeswap.finance/#/swap?inputCurrency=0x7acCa1BBA77bF389680EC9A3d24816FAbBA3E41b';
            return null;
          }} />
          <Route path='/contact' component={() => {
            window.location.href = 'https://contact@bunderwear.club';
            return null;
          }} />
          <Route path='/GetLPTokens' component={() => {
            window.location.href = 'https://v1exchange.pancakeswap.finance/#/add/BNB/0x7acCa1BBA77bF389680EC9A3d24816FAbBA3E41b';
            return null;
          }} />
          <Route exact strict path='/redeem' render={() => <Main redeem />} />
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
 //https://data-seed-prebsc-1-s1.binance.org:8545
 // 97  BNB 