import * as React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';
import {AppBar} from 'material-ui';
import './layout.css!';
export class LayoutTopNav extends React.Component {
    render() {
        const {className, children} = this.props;
        const mainClass = classNames('c-nav c-nav--inline',);

        return (
            <AppBar showMenuIconButton={true} title={'Jimmy & Boey family '}>
                {children}
            </AppBar>
        );
    }
}

export class LayoutTopNavLink extends React.Component {
    render() {
        const {children, className, isPrimary, isRight, href} = this.props;

        const mainClass = classNames(className, 'c-nav__item', {
            'c-nav__item--info': isPrimary,
            'c-nav__item--right': isRight
        });
        const activeClass = classNames('c-nav__item--active',);

        return (
            <Link to={href} className={mainClass} activeClassName={activeClass}>
                {children}
            </Link>
        );
    }
}
