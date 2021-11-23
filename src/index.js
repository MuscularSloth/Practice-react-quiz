import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ChakraProvider } from "@chakra-ui/react"

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer);


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

