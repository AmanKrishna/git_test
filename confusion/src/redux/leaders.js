import * as ActionTypes from './ActionTypes';

// return dishes by default
// I am chaning the state from DISHES to an object containing
// 3 properties:
// isLoading: Dishes are currently being fetched or not
// errMess: Error message if the loading fails 
// dishes: List of dishes object
export const Leaders = (state = {
        isLoading: true,
        errMess: null,
        leaders : []
    },action) => {
    switch(action.type){
        // dishes added successfully
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading:false, errMess:null, leaders:action.payload}

        case ActionTypes.LEADERS_LOADING:
            // ...state create a new object and then apply changes based
            // on whatever follows
            return {...state,isLoading:true,errMess:null,leaders:[]}

        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading:false, errMess:action.payload, leaders:[]}

        default:
            return state;
    }
}