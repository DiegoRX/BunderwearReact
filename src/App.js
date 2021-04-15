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

  useEffect(() => {
    const init = async () => {
      const { simpleStorage, accounts } = await getBlockchain();
      console.log(1, simpleStorage)
      setSimpleStorage(simpleStorage);
    //   const name = await simpleStorage.methods.name().call()

    //   console.log(20, simpleStorage)
     setData(accounts);
    //   console.log(data, 'data pues')
    };
    init();
  }, []);

  const rewardLiquidityProviders = async e => {
    e.preventDefault();
    console.log('rewarded')
    // const data = e.target.elements[0].value;
    // const tx = await simpleStorage.rewardLiquidityProviders();
    // const receipt = await tx.wait();
    // console.log(tx)
    // console.log(receipt)


    const newData = await simpleStorage.readData();
    setData(newData);
  };
  const transfer = async e => {
    e.preventDefault();
    const amount = ethers.utils.parseUnits('1000000000000000000', 18);
    console.log(amount)
    const tx = await signer.sendTransaction({
      to: 0x000000000000000000000000000000000000dead,
      value: amount
    });
    await tx.wait();
  };
  const test = async e => {
    console.log('success!!!')
  }
  
  let dataContext = {
    simpleStorage,
    transfer,
    rewardLiquidityProviders,
    test,
    data
    
  }

  if (
    typeof simpleStorage === 'undefined'
    // || typeof data === 'undefined'
  ) {
    <Main />
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
            window.location.href = 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x7acCa1BBA77bF389680EC9A3d24816FAbBA3E41b';
            return null;
          }} />

        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
 //https://data-seed-prebsc-1-s1.binance.org:8545
 // 97  BNB 