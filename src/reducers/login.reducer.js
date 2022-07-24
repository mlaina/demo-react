import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { actionTypes } from '../actions/login.actions';

const initialAuthState = {
  user: undefined,
  token: undefined,
  email: undefined,
  iduser: undefined,
  name: undefined,
  surname1: undefined,
  roles: [],
  locale: 'es_ES',
};

const config = {
  storage,
  key: 'demo-react',
  whitelist: [
    'iduser',
    'token',
    'email',
    'name',
    'surname1',
    'roles',
    'locale',
  ],
};

const reducer = persistReducer(config, (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.login: {
      return { ...action.payload };
    }

    case actionTypes.logout: {
      return initialAuthState;
    }

    default:
      return state;
  }
});

export default reducer;
