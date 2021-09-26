const initialState = {
    name : 'Hanif'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME')
    return {
        ...state,
        name : 'Amber'
    }
    return state;
}

export default globalReducer;