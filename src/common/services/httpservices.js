import Toast from 'react-native-simple-toast';
import {stringConstant} from '../constants';
import {NetInfo} from 'react-native';

const TOKEN = 'ACCESS_TOKEN', UNAUTHORIZED = "Unauthorized", FCM_TOKEN = "FCM_TOKEN",
    HIERARCHY = 'HIERARCHY', LOGIN_TYPE='LOGIN_TYPE';
let ONLINE_STATUS = undefined;
    
let obj = {
    get (url) {
        const METHOD = 'get';
        return doHttpCall(url, METHOD);
    },
    post (url, body) {
        const METHOD = 'post';
        return doHttpCall(url, METHOD, body);
    }
};

function doHttpCall(url, method, body={}) {
    const NEW_URL = stringConstant.BASE_URL + url;

    const promise = new Promise((resolve, reject) => {
        isOnline()
        .then(()=> {
            let options = {
                method : method,
                headers :{
                    api_key:'d1de133b3eef02b32c3dc1b647351c96'
                }

            };

            if (method === 'post') {
                options.body = JSON.stringify(body)
            }

                       
            // options.headers = new Headers();
            // options.headers.append('api_key', 'd1de133b3eef02b32c3dc1b647351c96');                

            fetch(NEW_URL, options)
            // .then(checkStatus)
            .then((response) => {
               resolve(response)
            }).catch((message)=> {
                Toast.show(message.message, Toast.LONG);
                reject(message);
            });
           
        }).catch ((message)=> {
            Toast.show(message.message, Toast.LONG);
            reject(message);
        });
    });

    return promise;
}

export function saveToken (token, type = 'app') {
    // return AsyncStorage.setItem(TOKEN, token);
    return AsyncStorage.multiSet([[TOKEN, token], [LOGIN_TYPE, type]]);
}

export function getToken () {
    return AsyncStorage.getItem(TOKEN);
}

export function getLoginType () {
    return AsyncStorage.getItem(LOGIN_TYPE);
}

function checkStatus(data) {
    const promise = new Promise((resolve, reject) =>{
        if (data.status === 401) {
            reject({message : UNAUTHORIZED});
        } else {
            resolve(data.json());
        }
    });
    return promise;
}

export function removeToken() {
    // let keys = [TOKEN, FCM_TOKEN, HIERARCHY];
    return AsyncStorage.clear();
}

const UNKNOWN = 'UNKNOWN', NONE = 'NONE';

function isOnline() {

    if (ONLINE_STATUS !== undefined) {
        return ONLINE_STATUS ?
         Promise.resolve({}) : 
         Promise.reject({message : 'NO_INTERNET_CONNECTION'});
    } 

    setNetworkChangeListener();

    const promise = new Promise((resolve, reject)=> {
        NetInfo.fetch().done((networkType) => {
            if (networkType.toUpperCase() === UNKNOWN || networkType.toUpperCase() === NONE) {
                reject({message : 'NO_INTERNET_CONNECTION'});
            } else {
                resolve({});
            }    
        });
    });

    return promise;
}

function setNetworkType (networkType) {
    if (networkType.toUpperCase() === UNKNOWN || networkType.toUpperCase() === NONE) {
        ONLINE_STATUS = false;
    } else {
        ONLINE_STATUS = true;
    }
}

function setNetworkChangeListener () {
    NetInfo.addEventListener('change',
        (networkType)=> {
            setNetworkType(networkType);       
        }
    );
}

export default obj;