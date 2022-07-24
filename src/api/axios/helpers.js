import { actions as loginActions } from '../../actions/login.actions';
import { actions as snackActions } from '../../actions/snack.actions';

export default {
  error: (store) => (error) => {
    const { dispatch } = store;
    if (error.response) {
      if ([401, 403].includes(error.response.status)) {
        dispatch(loginActions.logout());
      } else {
        dispatch(snackActions.notify(error.response.data.mensaje));
      }
    }
    return Promise.reject(error);
  },
};

export const auth = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};
