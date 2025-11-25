import reducer from "./reducer";
import {createStore} from 'redux';
let store=createStore(reducer);
store.subscribe(()=>console.log("updated: ",store.getState()))
export default store;