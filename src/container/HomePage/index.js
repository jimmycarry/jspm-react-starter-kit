import * as React from 'react';
import  './index.less!';
export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.displayName = 'HomePage';
    }
    render(){
        return(
            <div className='HomePage'>
                <h1 className="title">WelCome To Home Pages</h1>
            </div>
        )
    }
}