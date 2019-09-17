import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import configureStore from 'Store/configureStore';
import registerServiceWorker from 'Store/registerServiceWorker';
import Navigation from 'Components/Navigation';

import Home from 'Pages/Home';
import Game from 'Pages/Game';

import 'css/App.scss';

const history = createBrowserHistory();
const store = configureStore({}, history);

const DOM_NODE = document.getElementById('main');

const NavArr = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  }, {
    name: 'Game',
    path: '/Game',
    component: Game,
  },
];

const Main = () => (
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
    <div className="app">
      <BrowserRouter>
        <Navigation.TopMenu locations={NavArr.filter((nav) => !nav.isHidden)} />
        <Switch>
          {NavArr
            .filter((nav) => !nav.isHidden)
            .map((nav) => (<Route key={nav.path} exact {...nav} />))}
        </Switch>
      </BrowserRouter>
    </div>
    {/* </ConnectedRouter> */}
  </Provider>
);

ReactDOM.render(<Main />, DOM_NODE);
registerServiceWorker();
