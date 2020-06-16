// creating redux store
import {createStore} from 'redux';
import {Reducer,initialState} from './reducer';

// create store needs a reducer and an initial state
export const ConfigureStore = () =>{
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}
