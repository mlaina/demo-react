---
# to: ./out/<%= name %>.actions.js
to: ../src/actions/<%= name %>.actions.js
---
import * as api from '../../api/<%= name %>.api';

export const actionTypes = {
  loadList: "LOAD<%= name.toUpperCase() %>",
  update: "UPDATE<%= name.toUpperCase() %>",
  delete: "DELETE<%= name.toUpperCase() %>"
};

const loadList = (params) => (dispatch, state) =>
  api.loadList(state().login.token, params).then( response =>
    dispatch({
      type: actionTypes.loadList,
      payload: response.data
    })
  );

const load = (id<%= name %>) => (dispatch, state) =>
  api.load(state().login.token, id<%= name %>).then( response => {
    const <%= name %> = response.data.resultList ? response.data.resultList[0] : response.data;
    return dispatch({
      type: actionTypes.update,
      payload: <%= name %>
    });
  });

const save = (<%= name %>) => (dispatch, state) =>
  api.save(state().login.token, <%= name %>).then( response => {
    const <%= name %> = response.data.resultList ? response.data.resultList[0] : response.data;
    return dispatch({
      type: actionTypes.update,
      payload: <%= name %>
    });
  });

const remove = (id<%= name %>) => (dispatch, state) =>
  api.remove(state().login.token, id<%= name %>).then( () =>
    dispatch({
      type: actionTypes.delete,
      payload: id<%= name %>
    })
  );

export const actions = {
  loadList,
  load,
  save,
  remove
};
