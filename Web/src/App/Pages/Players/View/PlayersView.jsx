/*
  eslint-disable
    no-console,
    no-unused-vars,
*/
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import * as selector from '../ViewModel/selectors';
import * as action from '../Model/actions';

import '../Players.scss';

const PlayerRow = (player) => (
  <tr key={player.id}>
    <td>{player.id}</td>
    <td>{player.Name}</td>
    <td>
      <div onClick={() => { console.log('deleting this players'); }}>
        Delete Player
      </div>
    </td>
  </tr>
);

const PlayersView = (props) => {
  console.log('Players props: ', props);
  return (
    <div className="players">
      <div>Player Administration</div>
      <table className="admin">
        <thead>
          <tr>
            <td style={{ width: '75px' }}>ID</td>
            <td style={{ width: '275px' }}>Name</td>
            <td style={{ width: '150px' }} />
          </tr>
        </thead>
        <tbody>
          {props.Players.map((player) => PlayerRow(player))}
        </tbody>
      </table>
      <div onClick={() => { console.log('should be adding!'); }}>Add Player</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  Players: selector.PlayersSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  // fetchAction: opts => dispatch(action.fetchProducts(opts)),
  // changeGridStateAction: opts => dispatch(action.setGridState(opts)),
  // requestCsvExportAction: opts => dispatch(action.requestCsvExport(opts)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
// const withReducer = injectReducer({ key: 'productsPage', reducer });
// const withSaga = injectSaga({ key: 'productsPage', saga });ß

export const Players = compose(
  // withReducer,
  // withSaga,
  withConnect,
)(PlayersView);
