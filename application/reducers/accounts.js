import * as actionTypes from '../constants';

const initialState = {
  user          : null,
  ready         : false,
  initialRoute  : 'Landing',
};

const accounts = (state=initialState, action) => {
  console.log('ACTION', action);
  switch(action.type){
    case actionTypes.SEND_DASHBOARD:
      return {
        ...state,
        user: action.user,
        ready: true,
        initialRoute: 'Dashboard'
      };
    case actionTypes.DONE_FETCHING:
      return {
        ...state,
        ready: true
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default accounts;
