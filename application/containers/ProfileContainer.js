import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';
import ProfileView from '../components/profile/ProfileView';

export default connect(
  (state, ownProps) => ({
  ...ownProps
}),
  (dispatch) => ({
    updateUser(user){
      dispatch(updateUser(user))
    }
  })
)(ProfileView);
