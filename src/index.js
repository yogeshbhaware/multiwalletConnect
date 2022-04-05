import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider} from "@ethersproject/providers" 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider} from "@chakra-ui/react"
import { ethers } from "ethers"

function getLibrary(provider) {
  const library = new ethers.provider.Web3Provider(provider);
  library.pollingIntervsl = 8000;
  return library;
};

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
          <App/>
      </Web3ReactProvider>
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
