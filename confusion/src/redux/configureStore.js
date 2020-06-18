// creating redux store
import {createStore, combineReducers,applyMiddleware} from 'redux';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// create store needs a reducer and an initial state
// store = database of state and reducer = set of functions
// that can act on store
export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        // adding a middleware
        applyMiddleware(thunk,logger)
    );

    return store;
}
