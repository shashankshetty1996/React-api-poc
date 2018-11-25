import { takeEvery, all } from 'redux-saga/effects';
import ACTIONS from './api-config/actions.constants';

import { getFakeUsers, addFakeUser } from './container/dashboard/dashboard.saga';

export default () => 
  all([
    takeEvery(ACTIONS.DASHBOARD.GET_USERS, getFakeUsers),
    takeEvery(ACTIONS.DASHBOARD.ADD_USER, addFakeUser)
  ]);
