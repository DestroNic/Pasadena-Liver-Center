import React from 'react';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';
import logo from '../assets/media/logo.png';

 const Navbar = props => {
        return(
            <div className="nav-wrapper">
                <div className="left-side">
                    <img src={logo} alt="logo" />
                    <NavLink to="/about-visit">
                        Sechedule an appointment
                    </NavLink>
                </div>
                <div className="right-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/about" activeClassName="nav-link-active">
                            About
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/services" activeClassName="nav-link-active">
                            Services
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink  to="/about-visit" activeClassName="nav-link-active">
                            About your visit
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        )
}

export default withRouter(Navbar);