export const actionTypes = {
  notifyError: 'ERROR',
};

const notify =
  (message, variant = 'error') =>
  (dispatch) => {
    dispatch({
      type: actionTypes.notifyError,
      payload: { message, variant },
    });
    setTimeout(() => {
      dispatch({
        type: actionTypes.notifyError,
        payload: { message: '', variant },
      });
    }, 50);
  };

export const actions = {
  notify,
};
