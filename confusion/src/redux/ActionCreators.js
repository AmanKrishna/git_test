import * as ActionTypes from './ActionTypes';

// will create an action obj
// const x = () => {} // Does nothing
// const y = () => ({}) // returns an object
export const addComment = (dishId,rating,author,comment) => ({
    // will only affect comments there I will change comments.js
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});