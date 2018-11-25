import { call, put } from 'redux-saga/effects';
import { getData, postData } from '../../utils/axios';

import API from '../../api-config/api.config';
import ACTIONS from '../../api-config/actions.constants';

function* getFakeUsers(action) {
  let response;
  try {
    response = yield call(getData, API.jsonPlaceholderUsers);
    if (response.status === 200) {
      yield put({
        type: ACTIONS.DASHBOARD.GET_USERS_SUCCESS,
        response: response.data
      });
    } else {
      yield call({
        type: ACTIONS.DASHBOARD.GET_USERS_FAIL,
        response: response.data
      });
    }
  } catch (e) {
    yield call({
      type: ACTIONS.DASHBOARD.GET_USERS_FAIL,
      data: e
    });
  }
}

function* addFakeUser(action) {
  let response;
  try {
    response = yield call(postData, API.jsonPlaceholderUsers, action.data);
    if (response.status === 200) {
      yield put({
        type: ACTIONS.DASHBOARD.ADD_USER_SUCCESS,
        response: response.data
      });
    } else {
      yield call({
        type: ACTIONS.DASHBOARD.ADD_USER_FAIL,
        response: response.data
      });
    }
  } catch (e) {
    yield call({
      type: ACTIONS.DASHBOARD.ADD_USER_FAIL,
      data: e
    });
  }
}

export { getFakeUsers, addFakeUser };