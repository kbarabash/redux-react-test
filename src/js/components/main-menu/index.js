import './main-menu.css';

import React from 'react';
import { Link } from 'react-router';

export default class MainMenu extends React.Component {
    render() {
        return (
            <menu className="main-menu">
                <li className="maine-menu__item">
                    <Link to="page1">Page1</Link>
                </li>
                <li className="maine-menu__item">
                    <Link to="page2">Page2</Link>
                </li>
            </menu>
        );
    }
}
