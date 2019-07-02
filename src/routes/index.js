import React from 'react';
import {Route} from 'react-router-dom';
import history from '../js/history';
import { Router } from 'react-router';
import LoginComponent from '../view/LoginComponent';
import EmployList from '../view/EmploList';

const Routes = () => (
    <Router history={history}>
        <Route exact path="/" component={LoginComponent}></Route>
        <Route exact path="/login" component={LoginComponent}></Route>
        <Route  exact path="/dashboard" component={EmployList}></Route>   
    </Router>
    );
export default Routes;