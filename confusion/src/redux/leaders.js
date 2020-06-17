import {LEADERS} from '../shared/leaders';

// return dishes by default
export const Leaders = (state = LEADERS,action) => {
    switch(action.type){
        default:
            return state;
    }
}