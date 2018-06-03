import { FETCH_MESSAGE } from "../type";
import { getMessageList } from "../../apis/apis";

export const getMessageAction = (page = 1, pageSize = 10) => (dispatch, getState) => {
    const cookie = getState().user.cookie;
    getMessageList(cookie, page, pageSize)
        .then(res => dispatch({ type: FETCH_MESSAGE, payload: res.data }))
        .catch(e => console.log("err", e));
}