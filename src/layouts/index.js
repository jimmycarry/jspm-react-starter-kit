import './main.css!';
import './normalize.css!';
export let __hotReload = true;
import React, {Component, PropTypes} from 'react';
import {LayoutTopNav, LayoutTopNavLink} from './components/layout-top-nav';
import {LayoutHeader} from './components/layout-header';
import {LayoutMain} from './components/layout-main';
import {LayoutFooter} from './components/layout-footer';
import {BottomNavigation, BottomNavigationItem, Paper, FontIcon} from 'material-ui';
import * as Action from './actions'
import {connect} from 'react-redux';
import {selectors} from './selectors';
import {hashHistory} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {HISTORY} from './enum'
class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'MainLayout';
        this.homeIcon = <FontIcon className="muidocs-icon-action-home">
        </FontIcon>;
        this.galleryIcon = <FontIcon className="material-icons">
        </FontIcon>
    }

    componentDidMount() {
        this.props.changeIndex(HISTORY[this.props.location.pathname])
    }

    render() {
        return (
            <div className="c-text main">
                <LayoutHeader>
                    <LayoutTopNav/>
                </LayoutHeader>
                <LayoutMain>
                    {<ReactCSSTransitionGroup
                        component="div"
                        transitionName="route"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        style={{height: '100%'}}
                    >
                        {React.cloneElement(this.props.children, {
                            key: this.props.location.pathname
                        })}
                    </ReactCSSTransitionGroup>}
                </LayoutMain>
                <LayoutFooter>
                    <Paper zDepth='1'>
                        <BottomNavigation selectedIndex={HISTORY[this.props.location.pathname]}>
                            <BottomNavigationItem
                                label={'Home'}
                                icon={this.homeIcon}
                                onClick={() => {
                                    this.props.changeIndex(0);
                                    hashHistory.push({pathname: "/"})

                                }}
                            />
                            <BottomNavigationItem
                                label={'Gallery'}
                                icon={this.galleryIcon}
                                onClick={() => {
                                    this.props.changeIndex(1);
                                    hashHistory.push({pathname: "/gallery"})
                                }}/>
                        </BottomNavigation>
                    </Paper>
                </LayoutFooter>
            </div>
        );
    };

    static propTypes = {
        index: React.PropTypes.number,
        changeIndex: React.PropTypes.func
    }
}
MainLayout = connect(selectors, {
    changeIndex: Action.changeIndex
})(MainLayout);
export default MainLayout;