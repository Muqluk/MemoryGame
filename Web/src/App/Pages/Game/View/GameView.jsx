/*
  eslint-disable
    jsx-a11y/no-noninteractive-element-interactions,
*/
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { GameBoardView } from './GameBoardView';

import GameSelectors from '../ViewModel/selectors';
import { Actions } from '../Model/actions';

import './static/game.scss';

const GameView = (props) => {
  const { cardClicked, Cards, Config, CurrentGame } = props;
  const newGame = () => props.newGame();

  return (
    <div className="game">
      <div className="menu">
        <ul>
          <li onClick={newGame}>New Game</li>
          <li onClick={newGame}>End Game</li>
        </ul>
      </div>
      <GameBoardView
        Layout={Config.Dimensions}
        Cards={Cards}
        cardClicked={cardClicked}
        CurrentGame={CurrentGame}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  Cards: GameSelectors.GameCards(),
  Config: GameSelectors.GameConfig(),
  CurrentGame: GameSelectors.CurrentGame(),
});

const mapDispatchToProps = (dispatch) => ({
  newGame: () => dispatch(Actions.NewGame()),
  cardClicked: (card) => dispatch(Actions.CardClicked(card)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const Game = compose(
  withConnect,
)(GameView);
