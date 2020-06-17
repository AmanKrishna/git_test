import {DISHES} from '../shared/dishes';

// return dishes by default
export const Dishes = (state = DISHES,action) => {
    switch(action.type){
        default:
            return state;
    }
}