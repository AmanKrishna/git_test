import {COMMENTS} from '../shared/comments';

// return dishes by default
export const Comments = (state = COMMENTS,action) => {
    switch(action.type){
        default:
            return state;
    }
}