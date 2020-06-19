import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl';

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

    // fetch will return a promise ie response
    return fetch(baseUrl + 'dishes')
        .then(response=>{
            // the following if else if when I do recieve a reponse
            // from the server
            // if response is ok
            if(response.ok){
                // this response will be delivered to the next then
                return response;
            }
            else{
                var error = new Error('Error '+response.status+': '+response.statusText);
                error.response = response;
                // throw error for catch
                throw error;
            }
            
        },
        // If I dont recieve any response from server
        // or server is unreachable
        // new Error(message)
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
        // response.json will convert response into js object
        // which will be returned and I will use it
        // in the next then as dishes
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error=> dispatch(dishesFailed(error.message)));
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

export const fetchComments = () => (dispatch) => {

    // fetch will return a promise ie response
    return fetch(baseUrl + 'comments')
        .then(response=>{
            // the following if else if when I do recieve a reponse
            // from the server
            // if response is ok
            if(response.ok){
                // this response will be delivered to the next then
                return response;
            }
            else{
                var error = new Error('Error '+response.status+': '+response.statusText);
                error.response = response;
                // throw error for catch
                throw error;
            }
            
        },
        // If I dont recieve any response from server
        // or server is unreachable
        // new Error(message)
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
        // response.json will convert response into json
        // which will be returned and I will use it
        // in the next then as dishes
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error=> dispatch(commentsFailed(error.message)));
}


// return an action object
export const commentsFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

// return an action object to add comments
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    // fetch will return a promise ie response
    return fetch(baseUrl + 'promotions')
        .then(response=>{
            // the following if else if when I do recieve a reponse
            // from the server
            // if response is ok
            if(response.ok){
                // this response will be delivered to the next then
                return response;
            }
            else{
                var error = new Error('Error '+response.status+': '+response.statusText);
                error.response = response;
                // throw error for catch
                throw error;
            }
            
        },
        // If I dont recieve any response from server
        // or server is unreachable
        // new Error(message)
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
        // response.json will convert response into json
        // which will be returned and I will use it
        // in the next then as dishes
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error=> dispatch(promosFailed(error.message)));
}

// tell that the dish is loading
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

// return an action object
export const promosFailed = (errMess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMess
});

// return an action object to add comments
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});