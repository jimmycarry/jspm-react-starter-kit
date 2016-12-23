import * as React from 'react';
import classNames from 'classnames';
export class LayoutFooter extends React.Component {
    render() {
        const {className,children} = this.props;
        const mainClass = classNames('u-centered', 'u-letter-box--medium',);

        return (
            <footer className={mainClass}>
                {children}
            </footer>
        );
    }
}