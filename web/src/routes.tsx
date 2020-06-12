import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import CreatePoint from './pages/createPoint';
import RegistrationComplete from './pages/registrationCompleted';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact /> 
            <Route component={CreatePoint} path="/create-point" />
            <Route component={RegistrationComplete} path="/registe-complete" />
        </BrowserRouter>
    )
}

export default Routes;