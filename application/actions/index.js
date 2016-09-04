import * as actionTypes from '../constants';
import { extend } from 'underscore';
import { API, DEV } from '../config';
import { Headers } from '../fixtures';
import { AsyncStorage } from 'react-native';

export const sendDashboard = (user) => ({
  type: actionTypes.SEND_DASHBOARD,
  user
});

export const doneFetching = () => ({
  type: actionTypes.DONE_FETCHING
});

export const updateUser = (user) => ({
  type: actionTypes.UPDATE_USER,
  user
});

export const fetchUser = (sid) => (
  (dispatch, getState) => {
    fetch(`${API}/users/me`, { headers: extend(Headers, { 'Set-Cookie': `sid=${sid}`})})
    .then(response => response.json())
    .then(user => dispatch(sendDashboard(user)))
    .catch(err => dispatch(doneFetching()))
    .done();
  }
);

export const loadCredentials = () => (
  async (dispatch, getState) => {
    try {
      let sid = await AsyncStorage.getItem('sid');
      if (sid) {
        dispatch(fetchUser(sid));
      } else {
        dispatch(doneFetching())
      }
    } catch (err) {
      dispatch(doneFetching())
    }
  }
)
