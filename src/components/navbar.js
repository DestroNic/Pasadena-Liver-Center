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

    componentDidMount() {
        this.closeNav();
    }

    openNav(){
        
        document.getElementById('bars').style.display = "none";
        document.getElementById('nav-menu').style.width = '50%';
        
    }

    closeNav(){
        
            document.getElementById('nav-menu').style.width = '0%';
            document.getElementById('bars').style.display = "block";    
    
    }
    

    render(){
        return(
            <div className="nav-wrapper" id="menu-parent">
                <div className="left-side" id="left-menu">
                    <img src={logo} alt="logo" />
                    
                </div>
                <div className="right-side responsive"  id="nav-menu">
                <div className="nav-link-wrapper">
                        <a href="#" onClick={this.closeNav}>&times;</a>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active" onClick={this.closeNav} className='menu-item'>
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/about" activeClassName="nav-link-active" onClick={this.closeNav} className='menu-item'>
                            About
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/services" activeClassName="nav-link-active" onClick={this.closeNav} className='menu-item'>
                            Services
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink  to="/about-visit" activeClassName="nav-link-active" onClick={this.closeNav} className='menu-item'>
                            About your visit
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/contact" activeClassName="nav-link-active" onClick={this.closeNav} className='menu-item'>
                            Contact
                        </NavLink>
                    </div>
                    
                </div>
                <div className="nav-link-wrapper" id="bars" onClick={this.openNav}>
                            <FontAwesomeIcon icon={faBars} />
                    </div>
            </div>
        )
}
}

export default withRouter(Navbar);