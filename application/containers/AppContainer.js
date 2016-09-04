import React from 'react';
import { connect } from 'react-redux';
import { loadCredentials } from '../actions';
import App from '../components/App';

export default connect(
  (state, ownProps) => ({
    ...state.accounts
  }),
  (dispatch) => ({
    loadCredentials(){
      dispatch(loadCredentials())
    }
  })
)(App);
