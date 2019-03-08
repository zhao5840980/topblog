import * as constants from './constants';
import axios from 'axios';
const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
});
const registuser = () => ({
  type: constants.REGIS_LOGIN,
  value: true
});
export const logout = () => ({
  type: constants.LOGOUT,
  value: false
});
export const login = obj => {
  return dispatch => {
    axios
      .post('http://192.168.0.222:8088/login', obj)
      .then(res => {
        const result = res.data;
        if (result.code === 0) {
          console.log('成功');
          dispatch(changeLogin());
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const regiest = obj => {
  return dispatch => {
    axios.post('http://192.168.0.222:8088/login/createUser', obj).then(res => {
      //  console.log(res);
      const result = res.data;
      if (result.code === 0) {
        console.log('添加用户成功');
        dispatch(registuser());
      }
    });
  };
};
