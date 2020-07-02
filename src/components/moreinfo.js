import React from 'react';
import { NavLink } from 'react-router-dom';

const MoreInfoButton = () => {
    return(
        <div className="more-info-btn">
            <NavLink to="/services" >
                Learn More
            </NavLink>
        </div>
    )
}

export default MoreInfoButton;