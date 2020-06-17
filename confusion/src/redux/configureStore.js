// creating redux store
import {createStore, combineReducers} from 'redux';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Promotions} from './promotions';
import {Leaders} from './leaders';

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
        })
    );

    return store;
}
