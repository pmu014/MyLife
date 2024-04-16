//중앙데이터관리소(store)를 설정하는부분

import {createStore} from "redux";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    //모듈스에있는 스테이트묶음을 여기에넣음

})

const store = createStore(rootReducer);

export default store;