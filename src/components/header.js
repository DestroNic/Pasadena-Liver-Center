import React from 'react';

const Header = props => {
    return(
        <div className="header-wrapper">
            <p>{props.header}</p>
        </div>
    )
}

export default Header;