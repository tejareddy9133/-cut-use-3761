import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

export const LoginUser = (userData) => (dispatch) => {
    
    dispatch({type: LOGIN_REQUEST});
    return axios
    .post(`http://localhost:8080/users/login`, userData)
    .then((res) => {
        console.log(res,"action file");
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
        localStorage.setItem("token", res.data.token)
    })
    .catch(() => {
        dispatch({ type: LOGIN_FAILURE });
    });
};