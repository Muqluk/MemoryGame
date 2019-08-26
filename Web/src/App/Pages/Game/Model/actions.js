import { Constants } from './constants';

export const Actions = {
  NewGame: () => ({
    type: Constants.GameAction.NEW_GAME,
  }),
  CardClicked: (card) => ({
    type: Constants.GameAction.CARD_CLICKED,
    payload: card.cardId,
  }),
  AdvanceTurn: () => ({
    type: Constants.GameAction.ADVANCE_PLAYER_TURN,
  }),
  AdvanceTurnComplete: () => ({
    type: Constants.GameAction.ADVANCE_PLAYER_TURN_SUCCESS
  }),
  AdvanceTurnFailed: () => ({
    type: Constants.GameAction.ADVANCE_PLAYER_TURN_FAILED
  }),
};
