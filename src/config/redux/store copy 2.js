const { createStore, combineReducers } = require("redux"); //store membuat state seccara globsl


const initialStateHome = {
    dataBlogs : []
}

const HomeReducer = (state = initialStateHome, action) => {
    if(action.type === 'UPDATE_DATA_BLOG'){
        return {
            ...state,
            dataBlogs : action.payload
        }
    }
    return state;

}//reducer sebuah function yg memilik parameter state dan action 

const initialState = {
    name : 'Hanif'
}

const GlobalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME')
    return {
        ...state,
        name : 'Amber'
    }
    return state;
}


const reducer = combineReducers({HomeReducer,GlobalReducer});

const store = createStore(reducer);//perlu paramater berupa reducer

export default store;