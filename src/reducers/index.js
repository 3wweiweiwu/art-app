import { combineReducers } from 'redux';
import prestaging from './prestagingReducers';

const rootReducer = combineReducers({
  prestaging,
});

export default rootReducer;
