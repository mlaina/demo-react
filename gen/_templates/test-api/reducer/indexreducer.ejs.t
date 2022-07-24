---
to: ./out/index.reducer.js
---
import <%= name %> from './<%= name %>.reducer';

const reducers = combineReducers({
  <%= name %>,
});
