import './css/main.css';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import AppView from './js/pages/app-view';
import SimpleElementView from './js/components/simple-element';
import TodosView from './js/components/todos';


render((
    <Router>
        <Route name="app" component={AppView} path="/">
            <IndexRoute component={TodosView} />
            <Route path="todos" component={TodosView} />
            <Route path="simple-element" component={SimpleElementView} />
        </Route>
    </Router>
), document.getElementById('react-view'));
