import {PROMOTIONS} from '../shared/promotion';
import * as ActionTypes from './ActionTypes';
// return dishes by default
export const Promotions = (state = {
        isLoading: true,
        errMess: null,
        promos: []
    },action) => {
    switch(action.type){

        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading:false, errMess:null, promos:action.payload}

        case ActionTypes.PROMOS_LOADING:
            // ...state create a new object and then apply changes based
            // on whatever follows
            return {...state,isLoading:true,errMess:null,promos:[]}
        
        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading:false, errMess:action.payload}

        default:
            return state;
    }
}