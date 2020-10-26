import { createStore,combineReducers} from 'redux';
import {counterRedcer1 as redcer1} from '../reducers/counterRedcer1';
import {counterRedcer2 as redcer2} from '../reducers/counterRedcer2';

let rootState = combineReducers({redcer1,redcer2});
//  创建store
let store = createStore(
    rootState
)

export default store;