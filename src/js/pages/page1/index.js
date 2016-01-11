import './css/page1.css';

import React from 'react';

export default class Page1View extends React.Component {
    render() {
        return (
            <div className="page1">
                <h1 className="page1__title">Page 1</h1>
                <div className="page1_image"></div>
            </div>
        );
    }
}
