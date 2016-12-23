import * as React from 'react';
import classNames from 'classnames';
export let __hotReload = true;

// const inlineStyles = {};

export class LayoutHeader extends React.Component {
    render() {
        const {className, children} = this.props;
        return (
            <header className={this.props.className}>
                {children}
            </header>
        );
    }
}