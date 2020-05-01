import React from 'react';

import CResourceList from './CResourceList'

class CApp extends React.Component {
    state = { resource: "posts" };
    updateState = async (resource) => {
        this.setState({ resource: resource });
    }
    render() {
        return (
            <div>
                <h3>Class: </h3>
                <input type="button" value="Posts" onClick={() => this.updateState('posts')} />
                <input type="button" value="Todo" onClick={() => this.updateState('todos')} />
                <CResourceList resource={this.state.resource} />
                <hr />
            </div>
        );
    }
}

export default CApp;