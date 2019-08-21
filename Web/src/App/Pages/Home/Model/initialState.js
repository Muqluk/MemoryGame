import { fromJS } from 'immutable';

export const initialState = fromJS({
  Players: [{
    id: 123,
    Name: 'Jeremy',
  }, {
    id: 456,
    Name: 'Jacque',
  }],
});
