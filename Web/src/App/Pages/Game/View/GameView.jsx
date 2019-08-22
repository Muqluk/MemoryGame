/*
  eslint-disable
    no-console,
    no-unused-vars,
*/
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { GameBoardView } from './GameBoardView';

import * as selector from '../ViewModel/selectors';
import * as action from '../Model/actions';

import './static/game.scss';

const GameView = (props) => {
  console.log('Game props: ', props);
  return (
    <div className="game">
      <div className="menu">menu</div>
      <GameBoardView />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  Game: selector.GameSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  // fetchAction: opts => dispatch(action.fetchProducts(opts)),
  // changeGridStateAction: opts => dispatch(action.setGridState(opts)),
  // requestCsvExportAction: opts => dispatch(action.requestCsvExport(opts)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
/*
  const withReducer = injectReducer({ key: 'productsPage', reducer });
  const withSaga = injectSaga({ key: 'productsPage', saga });ß
*/
export const Game = compose(
  // withReducer,
  // withSaga,
  withConnect,
)(GameView);
