import { combineReducers } from 'redux';

import toolReducer from './tool/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  tool: toolReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
