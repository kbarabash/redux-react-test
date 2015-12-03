import React from 'react';

import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, IndexRoute } from 'react-router';

import AppView from './pages/app-view';
import Page1View from './pages/page1';
import Page2View from './pages/page2';

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Route name="app" component={AppView} path="/">
                    <IndexRoute component={Page1View} />
                    <Route path="page1" component={Page1View} />
                    <Route path="page2" component={Page2View} />
                </Route>
            </Router>
        );
    }
}
