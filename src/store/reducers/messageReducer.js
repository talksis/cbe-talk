import { FETCH_MESSAGE } from "../type";

const initialState = {
    list:[],
    listCounter:0
}

export default (state = initialState, action) => {

    switch (action.type) {
        case FETCH_MESSAGE:
        console.log('리듀서 받음', action.payload )
            return {...state,list:action.payload.LIST,listCounter:action.payload.LIST_COUNT};
        default:
            return state;
    }
}