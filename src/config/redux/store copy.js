const { createStore } = require("redux"); //store membuat state seccara globsl

const initialState = {
    dataBlog : [],
    name : 'Hanif'
}

const reducer = (state = initialState, action) => {
    return state;

}//reducer sebuah function yg memilik parameter state dan action 

const store = createStore(reducer);//perlu paramater berupa reducer

export default store;