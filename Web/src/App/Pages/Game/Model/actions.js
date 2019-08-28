import { Constants } from './constants';

export const Actions = {
  NewGame: () => ({
    type: Constants.GameAction.NEW_GAME,
  }),
  HideCards: () => ({
    type: Constants.GameAction.HIDE_ALL_CARDS,
  }),
  ShowCards: () => ({
    type: Constants.GameAction.SHOW_ALL_CARDS,
  }),
  CardClicked: (card) => ({
    type: Constants.GameAction.CARD_CLICKED,
    payload: card.cardId,
  }),
  AdvanceTurn: (gameState) => ({
    type: Constants.GameAction.ADVANCE_PLAYER_TURN,
    payload: gameState,
  }),
  AdvanceTurnComplete: () => ({
    type: Constants.GameAction.ADVANCE_PLAYER_TURN_SUCCESS
  }),
  AdvanceTurnFailed: () => ({
    type: Constants.GameAction.ADVANCE_PLAYER_TURN_FAILED
  }),
};
