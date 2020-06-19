import * as ActionTypes from './ActionTypes';

// return dishes by default
// I am chaning the state from DISHES to an object containing
// 3 properties:
// isLoading: Dishes are currently being fetched or not
// errMess: Error message if the loading fails 
// dishes: List of dishes object
export const Feedback = (state = {
        errMess: null,
        feedbacks : []
    },action) => {
    switch(action.type){
        // dishes added successfully
        case ActionTypes.ADD_FEEDBACKS:
            return {...state, errMess:null, feedbacks:action.payload}
        
        case ActionTypes.FEEDBACK_ERROR:
            return {...state,errorMess:action.payload,feedbacks:[]}

        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            // here i am not persisiting into the db
            console.log("feedback: ",feedback);
            // I can skip things which donot get effected or change
            return {...state,feedbacks: state.feedbacks.concat(feedback)};

        default:
            return state;
    }
}