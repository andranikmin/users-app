import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './header.css';


class Header extends React.Component {
    
    render() {
        const { location: { pathname } } = this.props;

        return (
            <div className="header">
                <div className="container">
                    <nav className="header_nav">
                        <Link to="/">AOD</Link>
                        <Link to="/users/students" className={`header_nav_item ${pathname === "/users/students" ? "active" : ""}`}>Пользователи</Link>
                    </nav>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);


