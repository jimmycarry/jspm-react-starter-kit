//模块依赖
import './common/style/route.css!'
import React, {PropTypes, Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, browserHistory,Redirect} from 'react-router';
import MainLayout from './layouts/index';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux'
import {store} from './store/index';
import {selectLocationState} from './layouts/selectors';
import {MuiThemeProvider} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
//路由
import HomePage from './container/HomePage/index';
import GalleryPage from './container/GalleryPage/index';

const history = syncHistoryWithStore(hashHistory, store, {selectLocationState: selectLocationState()});
function App() {
    return (
        <MuiThemeProvider>
            <Provider store={store}>
                <Router history={history}>
                    <Route component={MainLayout}>
                        <Route path='/' component={HomePage} key="1"/>
                        <Route path='/gallery' component={GalleryPage} key="2"/>
                        <Redirect to='/'/>
                    </Route>
                </Router>
            </Provider>
        </MuiThemeProvider>
    )
}
render(<App/>, document.getElementById('app'));