import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/main.css';
import App from './App';
import store from './store/reducer';
import { Provider } from 'react-redux';
import { isChrome, fullBrowserVersion } from 'react-device-detect';

const isLastVersion = async () => {
  const response = await fetch('http://omahaproxy.appspot.com/all.json');
  const data = await response.text();
  return data.includes(fullBrowserVersion)
};

ReactDOM.render(
  <Provider store={store}>
    <App isCorrectVersion={isChrome && isLastVersion()} />
  </Provider>,
  document.getElementById('root')
)
