import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand brand">WellnessTracker</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Wellness Activity Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Wellness Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create New User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}