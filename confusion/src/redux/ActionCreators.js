import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

// will create an action obj
// const x = () => {} // Does nothing
// const y = () => ({}) // returns an object
export const addComment = (comment) => ({
    // will only affect comments there I will change comments.js
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId,rating,author,comment) => (dispatch) => {

    const newComment= {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    // comment id will be taken care by the user
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    //   I will send a post message and then get a response
    // this response will contain the updated comments
    .then(response => {
        let temp = response.json();
        console.log(temp);
        return temp;
    })
    // updating the store
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
}


// action creator for adding feedback
export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});

export const feedbackFailed = (errMess) => ({
    type: ActionTypes.FEEDBACK_ERROR,
    payload: errMess
});

export const fetchFeedbacks = () => (dispatch) => {

    // fetch will return a promise ie response
    return fetch(baseUrl + 'feedback')
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
        .then(feedbacks => dispatch(addFeedback(feedbacks)))
        .catch(error=> dispatch(feedbackFailed(error.message)));
}

export const postFeedback = (firstName,lastName,telnum,email,agree,contactType,message)=> (dispatch) => {
    const newFeedback = {
        firstName: firstName,
        lastName: lastName,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    }
    console.log('NEW FEEDBACK: ',newFeedback);
    return fetch(baseUrl+'feedback',{
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error("Error "+response.status+": "+response.message);
            error.response = response;
            throw error;
        }
    },
        error => {
            throw error;    
        }
    )
    .then(response => response.json())
    .then(feedback => {
        alert(JSON.stringify(feedback));
        return feedback;
    })
    .then(feedback => dispatch(addFeedback(feedback)))
    .catch(error => console.log(error));
}

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

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    // fetch will return a promise ie response
    return fetch(baseUrl + 'leaders')
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
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error=> dispatch(leadersFailed(error.message)));
}

// tell that the dish is loading
export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

// return an action object
export const leadersFailed = (errMess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errMess
});

// return an action object to add comments
export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});