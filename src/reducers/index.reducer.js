import { combineReducers } from 'redux';
import login from './login.reducer';
import snack from './snack.reducer';

const reducers = combineReducers({
  login,
  snack,
});

export default reducers;
