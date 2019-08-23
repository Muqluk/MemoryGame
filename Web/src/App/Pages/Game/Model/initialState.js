/*
  eslint-disable
    no-unused-vars,
*/
import { fromJS } from 'immutable';
import { minionIcons as icons } from './minionIcons';

const Decks = { Minions: 'Minions' };

const getCards = () => {
  const cards = [];
  const Card = (opts) => {
    const cardOpts = {
      row: 0,
      col: 0,
      cardId: 'R0C0',
      icon: '',
      isVisible: false,
      ...opts
    };
    cards[`R${cardOpts.row || 0}C${cardOpts.col || 0}`] = { // eslint-disable-line
      row: cardOpts.row || 0,
      col: cardOpts.col || 0,
      cardId: `R${cardOpts.row || 0}C${cardOpts.col || 0}`,
      icon: cardOpts.icon || '',
      isVisible: false,
    };
  };

  Card({ row: 0, col: 0, icon: icons[0] });
  Card({ row: 0, col: 1, icon: icons[2] });
  Card({ row: 0, col: 2, icon: icons[1] });
  Card({ row: 0, col: 3, icon: icons[3] });
  Card({ row: 1, col: 0, icon: icons[5] });
  Card({ row: 1, col: 1, icon: icons[4] });
  Card({ row: 1, col: 2, icon: icons[6] });
  Card({ row: 1, col: 3, icon: icons[7] });
  Card({ row: 2, col: 0, icon: icons[1] });
  Card({ row: 2, col: 1, icon: icons[0] });
  Card({ row: 2, col: 2, icon: icons[6] });
  Card({ row: 2, col: 3, icon: icons[7] });
  Card({ row: 3, col: 0, icon: icons[2] });
  Card({ row: 3, col: 1, icon: icons[4] });
  Card({ row: 3, col: 2, icon: icons[3] });
  Card({ row: 3, col: 3, icon: icons[5] });
  // console.log(cards);

  return cards;
}

const prepState = () => {
  // const cards = [];
  // const Card = (opts) => {
  //   const cardOpts = {
  //     row: 0,
  //     col: 0,
  //     cardId: 'R0C0',
  //     icon: '',
  //     isVisible: false,
  //     ...opts
  //   };
  //   cards[`R${cardOpts.row || 0}C${cardOpts.col || 0}`] = { // eslint-disable-line
  //     row: cardOpts.row || 0,
  //     col: cardOpts.col || 0,
  //     cardId: `R${cardOpts.row || 0}C${cardOpts.col || 0}`,
  //     icon: cardOpts.icon || '',
  //     isVisible: false,
  //   };
  // };

  // Card({ row: 0, col: 0, icon: icons[0] });
  // Card({ row: 0, col: 1, icon: icons[2] });
  // Card({ row: 0, col: 2, icon: icons[1] });
  // Card({ row: 0, col: 3, icon: icons[3] });
  // Card({ row: 1, col: 0, icon: icons[5] });
  // Card({ row: 1, col: 1, icon: icons[4] });
  // Card({ row: 1, col: 2, icon: icons[6] });
  // Card({ row: 1, col: 3, icon: icons[7] });
  // Card({ row: 2, col: 0, icon: icons[1] });
  // Card({ row: 2, col: 1, icon: icons[0] });
  // Card({ row: 2, col: 2, icon: icons[6] });
  // Card({ row: 2, col: 3, icon: icons[7] });
  // Card({ row: 3, col: 0, icon: icons[2] });
  // Card({ row: 3, col: 1, icon: icons[4] });
  // Card({ row: 3, col: 2, icon: icons[3] });
  // Card({ row: 3, col: 3, icon: icons[5] });
  // console.log(cards);

  // return fromJS({
  // console.log(getCards());
  const Cards = getCards();
  console.log(Cards);
  return {
    Game: {
      Config: {
        Deck: Decks.Minions,
        Dimensions: {
          rows: 4,
          columns: 4,
        },
      },
      CurrentPlayer: 0,
      Players: [],
      Cards2: Cards,
      Cards,

    },
    // });
  };
};
const initialState = prepState();

console.log('initialState', initialState);

export { initialState };
