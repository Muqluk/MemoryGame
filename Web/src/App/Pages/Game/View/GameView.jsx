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
  const { cardClicked, Game } = props;
  const { Cards, Config } = Game;
  setTimeout(() => {
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
      <GameBoardView Layout={Config.Dimensions} Cards={Cards} cardClicked={props.cardClicked} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  Game: selector.GameSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  newGame: () => dispatch(Actions.NewGame()),
  cardClicked: (card) => dispatch(Actions.CardClicked(card)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
/*
  const withReducer = injectReducer({ key: 'productsPage', reducer });
  const withSaga = injectSaga({ key: 'productsPage', saga });
*/
export const Game = compose(
  withConnect,
)(GameView);
