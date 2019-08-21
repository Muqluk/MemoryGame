import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { AppRoot } from './App/AppRoot';
import configureStore from './App/Store/configureStore';
import registerServiceWorker from './App/Store/registerServiceWorker';


const history = createBrowserHistory();
const store = configureStore({}, history);

const DOM_NODE = document.getElementById('main');

const Main = () => (
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
    <AppRoot />
    {/* </ConnectedRouter> */}
  </Provider>
);

ReactDOM.render(<Main />, DOM_NODE);
registerServiceWorker();
