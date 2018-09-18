import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Coworkers from '../coworkers/Coworkers';
import Students from '../students/Students';
import Parents from '../parents/Parents';
import './users.css';

const subPages = {
    COWORKERS: 'coworkers',
    STUDENTS: 'students',
    PARENTS: 'parents',
};

export default class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            subPage: subPages.STUDENTS,
        };
    }

    setActivePage = (subPage) => {
        this.setState({
            subPage: subPage,
        });
    }

    render() {
        const { subPage } = this.state;

        return (
            <div className="users container">
                <h3>Пользователи</h3>
                <div className="users_nav">
                    <Link className={`users_nav_item ${subPage === subPages.COWORKERS ? "active" : ""}`} to="/users/coworkers" onClick={() => this.setActivePage("coworkers")}>Сотрудники</Link>
                    <Link className={`users_nav_item ${subPage === subPages.STUDENTS ? "active" : ""}`} to="/users/students" onClick={() => this.setActivePage("students")}>Учащиеся</Link>
                    <Link className={`users_nav_item ${subPage === subPages.PARENTS ? "active" : ""}`} to="/users/parents" onClick={() => this.setActivePage("parents")}>Родители</Link>
                </div>
                <div className="users_content">
                    <Switch>
                        <Route exact path='/users/coworkers' component={Coworkers}/>
                        <Route path='/users/students' component={Students}/>
                        <Route exact path='/users/parents' component={Parents}/>
                    </Switch>
                </div>
            </div>
        );
    };
}



