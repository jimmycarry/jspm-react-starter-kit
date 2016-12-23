import {combineReducers} from 'redux-immutable';
import {fromJS} from 'immutable';

const initialState = {
    title: 'WelCome I am Redux Status'
}
function galleryPage(state = fromJS(initialState), action) {
    switch (action.type) {
        default:
            return state;
    }
}
export default combineReducers({
    galleryPage
})