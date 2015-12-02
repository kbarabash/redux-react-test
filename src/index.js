import './css/main.css';

import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import routes from './js/routes';

render(
    <Router>
        {routes}
    </Router>,
    document.getElementById('react-view')
);
