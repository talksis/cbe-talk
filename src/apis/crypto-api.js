import CryptoJS from 'crypto-js'
import { encryptAES256WithSHA256Key } from '../store/secret';

//x-www-form-url을 만들기 위한 함수임 
//data는 Object 타입으로 오면 됨 혹은 json이나. 그러면 예가 다 알아서 해줄꺼임
//반환 타입은 스트링임.. 그냥 얘한테 호출하고 돌려받으면 됨
const makeURIComponent = (data) => {
    const form = [];
    for (let pro in data) {
        let key = encodeURIComponent(pro);
        let value = encodeURIComponent(data[pro]);
        form.push(key + '=' + value);
    }
    return form.join('&')
}

export const messageListRequest =(text,cookie)=>{
    const cryptData = encryptAES256WithSHA256Key(text);
    console.log(cryptData);
    const form =[];
    const objData = {
        'head[version]':'1.0',
        'head[enctype]':'aes256sha256',
        'body[data]':cryptData
    }
    const makeRequestData =makeURIComponent(objData);
    return {
        url:'http://msg.cbe.go.kr:7880/ezmaru/pc/note/noteList',
        data:{
            method:'POST',
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
                "cookie":cookie
            },
            body: makeURIComponent(objData)
        }
    }
}

export const loginMakeRequest = (id, password) => {
    const hasedPassword = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);
    const loginData = {
        'j_username': '[1]' + id.toString(),//혹시 몰라서 스트링으로 변경
        'j_password': hasedPassword //SHA1로 해쉬된 암호를 보낸다. 
    }

    return { //이놈은 로그인을 위한 완벽한 세트로 만들어서 보낸다. 
        url: 'http://msg.cbe.go.kr:7880/ezmaru/loginProcess',
        data: {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: makeURIComponent(loginData)
        }
    }
}

