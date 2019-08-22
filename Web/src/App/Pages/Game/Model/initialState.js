import { fromJS } from 'immutable';

const Decks = ['Minions'];

// const Card = () => ({

// });

const initialState = fromJS({
  Game: {
    Config: {
      Deck: Decks.Minions,
      Dimensions: {
        rows: 5,
        columns: 5,
      },
    },
    CurrentPlayer: 0,
    Players: [],
    Cards: [],
  },
});

export { initialState };
