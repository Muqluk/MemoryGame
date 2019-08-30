import { fromJS } from 'immutable';
import { initialState } from './initialState';
import { Constants } from './constants';

const { GameAction } = Constants;

export const Reducer = (state = initialState, { payload = {}, type = {} }) => {
  let newState = state;
  const common = {
    card: {
      get: (id) => (
        state.getIn(['Game', 'CurrentGame', 'Cards', id])
          .toJS()
      ),
      update: (card) => (
        state.setIn(
          ['Game', 'CurrentGame', 'Cards', card.cardId],
          fromJS(card)
        )
      ),
    },
    current: {
      get: () => (state.get('Game').get('CurrentGame').toJS()),
      update: (updateObj) => {
        Object.keys((updateObj)).forEach((key) => {
          newState = newState.setIn(
            ['Game', 'CurrentGame', key],
            updateObj[key],
          );
        });
        return newState;
      },
    }
  };

  switch (type) {
    case GameAction.NEW_GAME: {
      newState = newState.set('Cards', []);
      return newState;
    }
    case GameAction.CARD_CLICKED: {
      const card = common.card.get(payload);
      const newCard = {
        ...card,
        isVisible: !card.isVisible,
      };
      return common.card.update(newCard);
    }
    case GameAction.ADVANCE_PLAYER_TURN: {
      return common.current.update({ flipCount: 1 });
    }
    case GameAction.ADVANCE_PLAYER_TURN_SUCCESS: {
      const { turnsCounter } = common.current.get();
      return common.current
        .update({
          flipCount: 0,
          turnsCounter: turnsCounter + 1,
          lockAll: 1,
        });
    }
    case GameAction.HIDE_ALL_CARDS: {
      try {
        const { Cards } = common.current.get();
        const newCards = {};
        Object.keys(Cards).forEach((card) => {
          newCards[card] = Cards[card].isMatched
            ? ({ ...Cards[card] })
            : ({
              ...Cards[card],
              isVisible: false,
            });
        });
        return common.current.update({
          lockAll: 0,
          Cards: fromJS(newCards),
        });
      } catch (ex) {
        console.log(ex); // eslint-disable-line
        return state;
      }
    }
    case GameAction.ADVANCE_PLAYER_TURN_FAILED: {
      console.log('failure caught', payload); // eslint-disable-line
      return newState;
    }
    default:
      return state;
  }
};
