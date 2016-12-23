import * as React from 'react';
import classNames from 'classnames';
const inlineStyles = {
    background: {
        backgroundColor: '#ffffff'
    }
}
export class LayoutMain extends React.Component {
    render() {
        const {className, children} = this.props;
        //const mainClass = classNames(className.toString(),);
        const innerClass = classNames('o-container o-container--medium',);

        return (
            <main className={this.props.className} style={inlineStyles.background}>
                <div className={innerClass}>
                    {children}
                </div>
            </main>
        );
    }
}
