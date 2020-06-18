import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';

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

// here instead of returning an action object
// I am returning a function
// this is a redux-thunk
// first dishesLoading action is dispatched 
// after 2 sec addDishes action is dispatched
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    // set a delay
    setTimeout(()=>{
        dispatch(addDishes(DISHES));
    },2000)
}

// tell that the dish is loading
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

// return an action object
export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});

// return an action object to add dish
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});