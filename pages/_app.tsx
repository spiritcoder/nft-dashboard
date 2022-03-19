import "../styles/globals.css";
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import {ExternalProvider, JsonRpcFetchFunc, Web3Provider} from '@ethersproject/providers'
// import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

import "regenerator-runtime/runtime";

const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  return new Web3Provider(provider)
}
function MyApp({ Component, pageProps }: any) {
  // Ethereun Mainnet - 1 (ETH)
  // Ropsten Test Network - 3 (ETH)
  // Rinkeby Test Network - 4 (ETH)
  // Kovan Test Network -  42 (ETH)
  // Polygon Mumbai Test Network - 80001 (MATIC)
  // Polygon Mainnet Network - 137 (MATIC)
  // const supportedChainIds = [80001, 4, 1, 137];

  // const connectors = {
  //   injected: {},
  // };


  return (
    // <ThirdwebWeb3Provider
    //   supportedChainIds={supportedChainIds}
    //   connectors={connectors}
    // >
    //   <Component {...pageProps} />
    // </ThirdwebWeb3Provider>
    <Web3ReactProvider getLibrary={getLibrary}>
       <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;