import { loginMakeRequest, messageListRequest } from './crypto-api'

//여기서 그냥 내보내자.
export const ipcRenderer = window.require('electron').ipcRenderer;

export const login = (id, password) => {
    const request = loginMakeRequest(id, password);
    return new Promise((resolve, reject) => {
        ipcRenderer.once('responseFetch', (e, args) => {
            if (args["data"]["RESULT"] === 'SUCCESS') {
                resolve(args);
            } else {
                reject(args);
            }
        })
        ipcRenderer.send('requestFetch', request);
    })
}

export const getMessageList = (cookie,
    pageNo,
    pageSize,
    offset = 0,
    searchValue = "",
    orderValue = "desc",
    orderOpt = "regdate",
    searchType = "",
    detailMode = "ALL",
    pageMode = "note") => {
    const request = messageListRequest(JSON.stringify({
        searchType,
        searchValue,
        pageMode,
        detailMode,
        pageNo,
        pageSize,
        orderOpt,
        orderValue,
        offset
    }), cookie)
    console.log(request);
    return new Promise((resolve, reject) => {
        console.log('promise');
        ipcRenderer.once('responseFetch', (e, args) => {
            console.log(args);
            if (args["data"]["RESULT"] === 'SUCCESS') {
                resolve(args);
            } else {
                reject(args);
            }
        })
        ipcRenderer.send('requestFetch', request);
    })
}
