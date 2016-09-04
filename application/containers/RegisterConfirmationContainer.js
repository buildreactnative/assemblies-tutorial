import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';
import RegisterConfirmation from '../components/accounts/RegisterConfirmation';

export default connect(
  (state, ownProps) => ({
    ...ownProps
  }),
  (dispatch) => ({
    updateUser(user){
      dispatch(updateUser(user))
    }
  })
)(RegisterConfirmation);
