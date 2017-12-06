import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form'

import user from './user';
import flash from './flash';

const rootReducer = combineReducers({
  router: routerReducer,
  form,
  user,
  flash,
});

export default rootReducer;
