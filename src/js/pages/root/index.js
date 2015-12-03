import React from 'react';
import MainMenu from '../../components/main-menu';
import DevTools from '../../components/dev-tools';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import store from './store';

export default class RootView extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <ReduxRouter />
                    <DevTools />
                </div>
            </Provider>
        );
    }
}
