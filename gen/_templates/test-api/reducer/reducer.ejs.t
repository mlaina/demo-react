---
# to: ./out/<%= name %>.reducer.js
to: ../src/reducers/<%= name %>.reducer.js
---
import {actionTypes} from '../actions/<%= name %>.actions';
import {actionTypes as actionLogin} from '../actions/login.actions';

const reducer = (state = {bean: {}, data: {}}, action) => {
  switch (action.type) {
    case actionTypes.loadList: {
      return {...state, data:{...action.payload}};
    }

    case actionTypes.update: {
      return {...state, bean:{...action.payload}};
    }

    case actionTypes.delete: {
      return {...state, data: { ...state.data,  resultList: state.data.resultList.filter(e => e.id<%= name %> !== action.payload)}};
    }

    case actionLogin.logout: {
      return {bean: {}, data: {}};
    }

    default:
      return state;
  }
};

export default reducer;
