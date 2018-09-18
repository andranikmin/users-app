import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../header/Header';
import Users from '../../pages/users/Users';


export default class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Header />
                <Switch>
                    <Route path='/users' component={Users}/>
                </Switch>
            </div>
        );
    };
}



