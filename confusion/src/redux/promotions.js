import {PROMOTIONS} from '../shared/promotion';

// return dishes by default
export const Promotions = (state = PROMOTIONS,action) => {
    switch(action.type){
        default:
            return state;
    }
}