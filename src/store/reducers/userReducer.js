import { FETCH_LOGIN } from "../type";

const initialState = {
    id: '',
    password: '',
    data: {},
    cookie:''
}

export default (state = initialState, action) => {

    switch (action.type) {
        case FETCH_LOGIN:
        const { data, cookie } = action.payload
        console.log('리듀서 받음', data,cookie )
            return {...state,cookie,data};
        default:
            return state;
    }
}