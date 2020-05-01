import React from 'react';
import ReactDOM from 'react-dom';

import CApp from './components/class/CApp';
import FApp from './components/functional/FApp';


ReactDOM.render(
    <div>
        <CApp />
        <FApp />
    </div>,
    document.querySelector("#root")
);