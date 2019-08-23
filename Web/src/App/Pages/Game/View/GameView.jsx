/*
  eslint-disable
    no-console,
    no-unused-vars,
    jsx-a11y/no-noninteractive-element-interactions,
*/
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { GameBoardView } from './GameBoardView';

import * as selector from '../ViewModel/selectors';
import { Actions } from '../Model/actions';

import './static/game.scss';

const GameView = (props) => {
  const { Cards, Config } = props.Game;
  setTimeout(() => {
    // console.clear();
    console.log('Game Config: ', Config);
    console.log('Game props: ', Cards);
  }, 250);
  const newGame = () => {
    console.log('requesting new game');
    props.newGame();
  };

  return (
    <div className="game">
      <div className="menu">
        <ul>
          <li onClick={newGame}>New Game</li>
          <li onClick={newGame}>End Game</li>
        </ul>
      </div>
      <GameBoardView Layout={Config.Dimensions} Cards={Cards} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  Game: selector.GameSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  newGame: () => dispatch(Actions.NewGame()),
  // fetchAction: opts => dispatch(action.fetchProducts(opts)),
  // changeGridStateAction: opts => dispatch(action.setGridState(opts)),
  // requestCsvExportAction: opts => dispatch(action.requestCsvExport(opts)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
/*
  const withReducer = injectReducer({ key: 'productsPage', reducer });
  const withSaga = injectSaga({ key: 'productsPage', saga });
*/
export const Game = compose(
  withConnect,
)(GameView);
