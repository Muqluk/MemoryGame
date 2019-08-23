/*
  eslint-disable
    react/prefer-stateless-function,
    no-unused-vars,
*/
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import Navigation from '../Components/Navigation';

import Home from './Pages/Home';
import Players from './Pages/Players';
import Game from './Pages/Game';

import ComponentTest from './Pages/ComponentTest';

import './Static/App.scss';

const NavArr = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  // {
  //   name: 'Players Admin',
  //   path: '/Players',
  //   component: Players
  // },
  {
    name: 'Game',
    path: '/Game',
    component: Game,
  },
  // {
  //   name: 'ComponentTest',
  //   path: '/ComponentTest',
  //   component: ComponentTest,
  // },
];

class AppRootComponent extends React.Component {
  render() {
    return (
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
    );
  }
}

const mapStateToProps = (AppState) => ({});

const mapDispatchToProps = (dispatch) => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export const AppRoot = compose(withConnect)(AppRootComponent);
