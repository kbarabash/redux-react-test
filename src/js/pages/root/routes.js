import React from 'react';

import { Route, IndexRoute } from 'react-router';

import AppView from '../app-view';
import Page1View from '../page1';
import Page2View from '../page2';

export default (
    <Route name="app" component={AppView} path="/">
        <IndexRoute component={Page1View} />
        <Route path="page1" component={Page1View} />
        <Route path="page2" component={Page2View} />
    </Route>
)
