import React from 'react';

export default class TodosView extends React.Component {
    render() {
        return (
            <div>
                <h1 className="todo-title">Todos</h1>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
