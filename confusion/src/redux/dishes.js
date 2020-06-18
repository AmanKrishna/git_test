import * as ActionTypes from './ActionTypes';

// return dishes by default
// I am chaning the state from DISHES to an object containing
// 3 properties:
// isLoading: Dishes are currently being fetched or not
// errMess: Error message if the loading fails 
// dishes: List of dishes object
export const Dishes = (state = {
        isLoading: true,
        errMess: null,
        dishes : []
    },action) => {
    switch(action.type){
        // dishes added successfully
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading:false, errMess:null, dishes:action.payload}

        case ActionTypes.DISHES_LOADING:
            console.log('old',{...state})
            console.log('new',{...state, isLoading:false, errMess:null, dishes:[]})
            // ...state create a new object and then apply changes based
            // on whatever follows
            return {...state,isLoading:true,errMess:null,dishes:[]}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading:false, errMess:action.payload, dishes:[]}

        default:
            return state;
    }
}