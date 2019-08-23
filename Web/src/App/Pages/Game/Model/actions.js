import { Constants } from './constants';

export const Actions = {
  NewGame: () => {
    console.log('Actions.NewGame'); // eslint-disable-line
    return ({
      type: Constants.NEW_GAME,
    });
  },
  // AddPlayer: (playerObj) => ({
  //   type: Constants.ADD_PLAYER,
  //   payload: { playerObj },
  // }),
  // RemovePlayer: (playerId) => ({
  //   type: Constants.REMOVE_PLAYER,
  //   payload: { playerId },
  // }),
};
