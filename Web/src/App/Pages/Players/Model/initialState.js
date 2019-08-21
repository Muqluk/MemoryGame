import { fromJS } from 'immutable';
// import { Player } from '../../../Modules/Players/Player';

export const initialState = fromJS({
  Players: [
    { id: 123, Name: 'Jeremy' },
    { id: 456, Name: 'Jacque' },
  ],
});
