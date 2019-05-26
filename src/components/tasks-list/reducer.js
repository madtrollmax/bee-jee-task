import * as actionTypes  from './actionTypes';

const initialState = {
    pagesCount: 0,
    tasksList: [],
    tasks: {},
    page: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.TASK_LIST_SET_VALUES:
            return {...action.payload};
        default:
            return state;
    }
};

export default reducer;