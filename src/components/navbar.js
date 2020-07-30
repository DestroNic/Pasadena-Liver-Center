import React , { Component } from 'react';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';
import logo from '../assets/media/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

 class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            responsive: false
        }
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav(){
        document.getElementById("mySidenav").style.width = "250px";
    }

    closeNav(){
        document.getElementById("mySidenav").style.width = "0";
    }
    

    render(){
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
                    <div className="nav-link-wrapper" onClick={this.openNav}>
                            <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        )
}
}

export default withRouter(Navbar);