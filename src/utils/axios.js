import axios from 'axios';
// import { getSession, redirectToLogin, logout } from 'services/AuthService';

const DEVICE_TYPE = 3; // device type for every api request
axios.defaults.headers.common.deviceType = DEVICE_TYPE;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const setSessionHeader = () => {
  // const sessionToken = getSession().sessionId;
  let sessionToken;
  if (sessionToken) {
    axios.defaults.headers.common.sessionId = sessionToken;
  } else {
    // empty buffered sessionId if cookie is cleared
    delete axios.defaults.headers.common.sessionId;
  }
};

const _ajax = ({
  method,
  url,
  data = {}
}) => {
  setSessionHeader();
  return axios({
      method,
      url,
      data
    })
    .then(response => response)
    .catch(error => error.response);
};

const postData = (url, data) => _ajax({
  method: 'post',
  url,
  data
});

const getData = (url, data) => _ajax({
  method: 'get',
  url,
  data
});

const putData = (url, data) => _ajax({
  method: 'put',
  url,
  data
});

const deleteData = (url, data) => _ajax({
  method: 'delete',
  url,
  data
});

const patchData = (url, data) => _ajax({
  method: 'patch',
  url,
  data
});

function handleAPIError(error) {
  if (error.response.status === 403) {
    console.log("logout and redirect to login page.");
    // logout();
    // redirectToLogin();
  } else {
    return Promise.reject(error);
  }
  return false;
}
axios.interceptors.response.use(response => response, handleAPIError);
export {
  getData,
  postData,
  putData,
  deleteData,
  patchData
};