import { Constants } from './constants';

export const Actions = {
  GetPlayers: () => ({
    type: Constants.GET_PLAYERS,
  }),
  AddPlayer: (playerObj) => ({
    type: Constants.ADD_PLAYER,
    payload: { playerObj },
  }),
  RemovePlayer: (playerId) => ({
    type: Constants.REMOVE_PLAYER,
    payload: { playerId },
  }),
};
