import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// return dishes by default
export const Comments = (state = {
        errMess: null,
        comments: []
    },action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess:null, comments:action.payload}

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess:action.payload, comments:[]}

        // i am only introducing ADD_COMMENT case in 
        // this file/reducer. Other reducer will have
        // no case to catch it hence will ignore it
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            // here i am not persisiting into the db
            console.log("Comment: ",comment);
            // I can skip things which donot get effected or change
            return {...state,comments: state.comments.concat(comment)};
        default:
            return state;
    }
}