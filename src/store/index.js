import {applyMiddleware,compose} from 'redux';
import {combineReducers} from 'redux-immutable';
import {browserHistory,hashHistory} from 'react-router';
import {routerReducer,routerMiddleware,LOCATION_CHANGE} from 'react-router-redux';
import {createStore} from 'redux';
import {fromJS} from 'immutable';
import thunk from 'redux-thunk';
import mdlWare from '../services/middleWare'
import mainReducer from './reducers'
const routeInitialState= fromJS({
  locationBeforeTransitions: null,
});

const middleWare =[
    thunk,
    mdlWare,
    routerMiddleware(hashHistory)
];
/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

// 根部 reducer 
export const rootReducer = combineReducers({
  routing: routeReducer,
    ...mainReducer
});


// rehydrating state on app start: implement here...
const recoverState = () => (fromJS({}));
const composeEhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
export const store = createStore(
  rootReducer,
  recoverState(),
  //composeEhancer(applyMiddleware(sagaMiddleware,routerMiddleware(browserHistory)))
  composeEhancer(applyMiddleware(...middleWare))
);

// systemjs-hot-reloader hook, rehydrating the state of redux store
export function __reload(exports) {
  console.log(exports.store.getState());
}
