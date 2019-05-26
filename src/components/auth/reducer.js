import * as actionTypes  from './actionTypes';

const initialState = {
    user: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_SET_USER:
            return {...action.payload};
        default:
            return state;
    }
};

export default reducer;