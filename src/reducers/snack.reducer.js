import { actionTypes } from '../actions/snack.actions';
import { actionTypes as actionLogin } from '../actions/login.actions';

const reducer = (state = { message: '', variant: 'error' }, action) => {
  switch (action.type) {
    case actionTypes.notifyError: {
      return action.payload;
    }

    case actionLogin.logout: {
      return '';
    }

    default:
      return state;
  }
};

export default reducer;
