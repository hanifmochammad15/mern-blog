import { createStore, applyMiddleware } from  'redux' //store membuat state seccara globsl
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));//perlu paramater berupa reducer

export default store;