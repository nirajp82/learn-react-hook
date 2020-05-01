import React, { useState } from 'react';

import FResourceList from './FResourceList'

const FApp = () => {
    const [resource, setResource] = useState('posts');

    return (
        <div>
            <h3>Funtional: </h3>
            <input type="button" value="Posts" onClick={() => setResource('posts')} />
            <input type="button" value="Todo" onClick={() => setResource('todos')} />

            <FResourceList resource={resource} />
        </div>
    );
}

export default FApp;

