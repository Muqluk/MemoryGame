/*
  eslint-disable
    no-console,
    no-unused-vars,
    react/forbid-prop-types,
*/
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { array } from 'prop-types';


import * as selector from '../ViewModel/selectors';
import * as action from '../Model/actions';

const HomeView = (props) => (
  <div>
    <div>Hi!  click on <u><b>Game</b></u> above!</div> {/* eslint-disable-line */}
  </div>
);

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const Home = compose(withConnect)(HomeView);
