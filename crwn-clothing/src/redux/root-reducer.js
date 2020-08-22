// Represent state of our application
import { combineReducers } from 'redux';

import UserReducer from './user/user.reducer';

export default combineReducers({
  user: UserReducer,
});
