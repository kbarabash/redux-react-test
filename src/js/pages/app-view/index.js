import React from 'react';
import MainMenu from '../../components/main-menu';

export default class AppView extends React.Component {
    render() {
        return (
            <div>
                <MainMenu></MainMenu>
                <div>
                    {this.props.children}
                </div>
             </div>
        );
    }
}
