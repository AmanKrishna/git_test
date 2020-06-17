import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// return dishes by default
export const Comments = (state = COMMENTS,action) => {
    switch(action.type){
        // i am only introducing ADD_COMMENT case in 
        // this file/reducer. Other reducer will have
        // no case to catch it hence will ignore it
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            // adding ID and date to the comment object 
            // obtained from action.payload
            comment.id = state.length;
            comment.date = new Date().toISOString();
            // here i am not persisiting into the db
            console.log("Comment: ",comment);
            return state.concat(comment);
        default:
            return state;
    }
}