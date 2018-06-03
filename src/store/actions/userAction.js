import { login } from "../../apis/apis"
import { FETCH_LOGIN } from "../type";
export const loginAction = (id, password) => dispatch => 
    login(id, password).then(res => dispatch({ type: FETCH_LOGIN, payload: res }) ).catch(e=>console.log(e));
