import {fromJS} from 'immutable';
import {combineReducers} from 'redux-immutable';
import * as Action from './actions';
const initialState={
    index:0
};
export function Layouts(state=fromJS(initialState),action) {
    switch (action.type){
        case Action.LAYOUT_CHANGE_INDEX:
            return state.set('index',action.index);
        default:
            return state;
    }
}
export default combineReducers({
    Layouts
})