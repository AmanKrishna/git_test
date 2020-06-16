// Implement reducer function
// reducer is a pure function
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotion';

export const initialState={
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

// getting the new state resulting from the action
export const Reducer = (state=initialState,action) => {
    return state;
}