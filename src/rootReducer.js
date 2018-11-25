import {
  combineReducers
} from 'redux';

import dashboardReducer from './container/dashboard/dashboard.reducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer
});

export default rootReducer;