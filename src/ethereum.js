import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import BUNDERWEAR from '../build/contracts/BUNDERWEAR.json';
import Web3 from 'web3';

const getBlockchain = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const networkId = await provider.request({ method: 'net_version' })
      console.log('Ethereum successfully detected!')
      console.log(accounts)
       const web3Provider = new Web3(window.ethereum);
     // provider = new ethers.providers.Web3Provider(provider);


      const deployedNetwork = BUNDERWEAR.networks[networkId].address
      const ABI = BUNDERWEAR.abi
      const simpleStorage = new web3Provider.eth.Contract(
        ABI,
        deployedNetwork
      )
      // const signer = provider.getSigner();
      
      // const simpleStorage = new Contract(
      //   BUNDERWEAR.networks[networkId].address,
      //   BUNDERWEAR.abi,
      //   signer
      // );  
      const recepient = '0x4621080FF83e0d2CcC87C9c0CfC5B5245177A99E'

      const balance = await simpleStorage.methods.balanceOf(recepient).call()
      console.log('Balance is ', balance)
      const addresses = await web3Provider.eth.getAccounts() 
        console.log(addresses, simpleStorage, ABI, deployedNetwork, networkId, balance)
      resolve({simpleStorage, accounts, addresses, balance});
      
     
      


    
    
      return;
    }else if(!provider) {
      alert('Install Metamask');
    }
    reject('Install Metamask');
  });

export default getBlockchain;
