import { login as loginApi } from '../api/login.api';
import jwt from 'jwt-decode';

export const actionTypes = {
  login: 'LOGIN',
  logout: 'LOGOUT',
  locale: 'LOCALE',
};

const loginSuccess = ({ email, accessToken, iduser, name, surname1 }) => {
  const roles = jwt(accessToken) ? jwt(accessToken).authorities : [];

  return {
    type: actionTypes.login,
    payload: { email, token: accessToken, iduser, name, surname1, roles },
  };
};

const login = (email, password, token) => (dispatch) =>
  loginApi(email, password, token).then((response) => {
    dispatch(loginSuccess(response.data));
  });

const logout = () => {
  return { type: actionTypes.logout };
};

const local = (locale) => {
  return { type: actionTypes.locale, payload: locale };
};

export const actions = {
  login,
  logout,
  local,
};
