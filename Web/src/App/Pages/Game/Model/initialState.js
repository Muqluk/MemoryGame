/*
  eslint-disable
    no-unused-vars,
*/
import { fromJS } from 'immutable';
import { minionIcons as icons } from './minionIcons';

const Decks = { Minions: 'Minions' };

const getCards = () => {
  const cards = {};
  const Card = (opts) => {
    const cardOpts = {
      row: 0,
      col: 0,
      cardId: 'R0C0',
      icon: '',
      isVisible: false,
      ...opts
    };
    const card = {
      row: cardOpts.row || 0,
      col: cardOpts.col || 0,
      cardId: `R${cardOpts.row || 0}C${cardOpts.col || 0}`,
      icon: cardOpts.icon || '',
      isVisible: false,
    };
    cards[`R${cardOpts.row || 0}C${cardOpts.col || 0}`] = card;
  };

  Card({ row: 0, col: 0, icon: icons[0].url });
  Card({ row: 0, col: 1, icon: icons[2].url });
  Card({ row: 0, col: 2, icon: icons[1].url });
  Card({ row: 0, col: 3, icon: icons[3].url });
  Card({ row: 1, col: 0, icon: icons[5].url });
  Card({ row: 1, col: 1, icon: icons[4].url });
  Card({ row: 1, col: 2, icon: icons[6].url });
  Card({ row: 1, col: 3, icon: icons[7].url });
  Card({ row: 2, col: 0, icon: icons[1].url });
  Card({ row: 2, col: 1, icon: icons[0].url });
  Card({ row: 2, col: 2, icon: icons[6].url });
  Card({ row: 2, col: 3, icon: icons[7].url });
  Card({ row: 3, col: 0, icon: icons[2].url });
  Card({ row: 3, col: 1, icon: icons[4].url });
  Card({ row: 3, col: 2, icon: icons[3].url });
  Card({ row: 3, col: 3, icon: icons[5].url });

  return cards;
};

const prepState = () => {
  const Cards = getCards();
  const Config = {
    Deck: Decks.Minions,
    Dimensions: {
      rows: 4,
      columns: 4,
    },
  };
  const returning = {
    Game: {
      Config,
      CurrentGame: {
        Cards,
        currentPlayer: 0,
        flipCount: 0,
        Players: [
          {
            id: 154,
            Name: 'Jeremy',
          },
          {
            id: 241,
            Name: 'Jacque',
          },
        ],
        SelectionHistory: {},
        turnsCounter: 0,
      },
      HasError: false,
      Errors: [],
    },
  };
  return returning;
};
const initialState = fromJS(prepState());

export { initialState };
