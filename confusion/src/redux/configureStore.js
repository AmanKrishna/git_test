// creating redux store
import {createStore, combineReducers,applyMiddleware} from 'redux';
// redux will store the form
import {createForms} from 'react-redux-form';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialFeedback} from './forms';
import { Feedback } from './feedback';

// create store needs a reducer and an initial state
// store = database of state and reducer = set of functions
// that can act on store
export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            feedbacks: Feedback,
            // redux will create this reducer and provide the action
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        // adding a middleware
        applyMiddleware(thunk)
    );

    return store;
}
