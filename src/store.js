import { applyMiddleware, createStore, compose } from 'redux';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
import reducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {AsyncStorage} from 'react-native';
import batch from 'redux-offline/lib/defaults/batch';
import retry from 'redux-offline/lib/defaults/retry';
import discard from 'redux-offline/lib/defaults/discard';
import {persistStore, autoRehydrate} from 'redux-persist';


const myConfig = {
    ...offlineConfig,
    effect: (effect, action) => sendData(effect, action),
    persistOptions: {
        storage: AsyncStorage,
        blacklist : ['nav']
    },
};

const configureStore = () => {
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(thunk),
            offline(myConfig),
            autoRehydrate()
        )
    );

    persistStore(store, {storage: AsyncStorage,blacklist:['nav']});
    return store;
}

function sendData (effect, action) {
    const promise = new Promise((resolve, reject) => {
        let options = {
            method : effect.method
        };
        
        options.headers = new Headers();
        options.headers.append('Content-Type', 'application/json');
        options.body = JSON.stringify(effect.body);

        fetch(effect.url, options)
        .then((response) => {
            resolve(response);
        }).catch((message)=> {
            reject(message);
        }); 
    });
    return promise;
}

function retryConf (action, retries) {
    if (retries < 3) {
        return 1000 * retries;
    } else {
        return null
    }
}

export default configureStore;
