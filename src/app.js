import './css/main.css';

import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, IndexRoute } from 'react-router';

import AppView from './js/pages/app-view';
import Page1View from './js/pages/page1';
import Page2View from './js/pages/page2';

render((
    <Router history={createBrowserHistory()}>
        <Route name="app" component={AppView} path="/">
            <IndexRoute component={Page1View} />
            <Route path="page1" component={Page1View} />
            <Route path="page2" component={Page2View} />
        </Route>
    </Router>
), document.getElementById('react-view'));
