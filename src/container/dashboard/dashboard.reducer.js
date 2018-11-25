import ACTIONS from '../../api-config/actions.constants';

const initialState = {
  data: [],
  alert: ''
};

const dashboard = (state = initialState, action) => {
  const tempState = Object.assign({}, state);
  switch (action.type) {
    case ACTIONS.DASHBOARD.GET_USERS_SUCCESS:
      tempState.data = action.response;
      return tempState;
    case ACTIONS.DASHBOARD.GET_USERS_FAIL:
      tempState.alert = action.response.message;
      return tempState;
    case ACTIONS.DASHBOARD.ADD_USER_SUCCESS:
      tempState.alert = action.response.message;
      return tempState;
    case ACTIONS.DASHBOARD.ADD_USER_FAIL:
      tempState.alert = action.response.message;
      return tempState;
    default:
      return tempState;
  }
};

export default dashboard;
