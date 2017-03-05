/**
 * app 组件
 */
import React from 'react';
import { Header, Sidebar } from '..';
import { MuiThemeProvider } from 'material-ui';
import './style.scss';

export class AppComponent extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <Sidebar {...this.props}></Sidebar>
                    <div id="main">
                        <Header {...this.props}></Header>
                        <div className="views">
                            {React.cloneElement(this.props.children, this.props)}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}