import React, { useState, useEffect } from 'react'
import { useWeb3Context } from 'web3-react'
import Web3 from 'web3';

import { Message } from './styles'

export default function Web3ReactManager({ children }) {
  const context = useWeb3Context()
 console.log(context)
  useEffect(() => {
    context.setFirstValidConnector(['MetaMask', 'Infura'])
  }, [])
 
  if (!context.active && !context.error) {
    // loading
    return (<Message>Initializing...</Message>)
  } else if (context.error) {
    //error
    return (<p>error</p>)
  } else {
    // success
    return children
  }
}


//   const { setConnector, error, active } = useWeb3Context()

//   // initialization management
//   useEffect(() => {
//     if (!active) {
//       if (window.ethereum) {
//         try {
//           const web3 = new Web3(window.ethereum)
//           web3.listAccounts().then(accounts => {
//             if (accounts.length >= 1) {
//               setConnector('Injected', { suppressAndThrowErrors: true })
//             } else {
//               setConnector('Network')
//             }
//           })
//         } catch {
//           setConnector('Network')
//         }
//       } else {
//         setConnector('Network')
//       }
//     }
//   }, [active, setConnector])

//   const [showLoader, setShowLoader] = useState(false)
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setShowLoader(true)
//     }, 750)
//     return () => {
//       clearTimeout(timeout)
//     }
//   }, [])

//   if (error) {
//     console.error(error)
//     return <Message>Connection Error.</Message>
//   } else if (!active) {
//     return showLoader ? <Message>Initializing...</Message> : null
//   } else {
//     return children
//   }
// }
