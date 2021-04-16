import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import BUNDERWEAR from '../build/contracts/BUNDERWEAR.json';
import Web3 from 'web3';

const getBlockchain = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      console.log('Ethereum successfully detected!')
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const networkId = await provider.request({ method: 'net_version' })
      const web3Provider = new Web3(provider);
      
      const deployedNetwork = BUNDERWEAR.networks['97'].address
      const ABI = BUNDERWEAR.abi
      const simpleStorage = new web3Provider.eth.Contract(
        ABI,
        deployedNetwork
      )
      // const signer = provider.getSigner();
      // const simpleStorage = new Contract(
      //   BUNDERWEAR.networks['5777'].address,
      //   BUNDERWEAR.abi,
      //   signer
      // );     
      resolve({simpleStorage, accounts});
      console.log(provider)
      console.log(1, accounts)
      console.log(networkId)
      console.log(web3Provider)
      console.log(simpleStorage)
      console.log(networkId)
      


    const addresses = await web3Provider.eth.getAccounts()
    console.log(addresses)
      return;
    }
    reject('Install Metamask');
  });

export default getBlockchain;
