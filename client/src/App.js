import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Nav from './components/layout/Nav';
import Main from './components/layout/Main';

const App = () => {
    return (
        <Fragment>
            <Nav />
            <Main />
        </Fragment>
    );
};

export default App;
