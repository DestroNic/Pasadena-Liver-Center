import React  from 'react';
import Moment from 'react-moment';
 
export default class Footer extends React.Component {
    render() {

        let year = new Date().getFullYear();
        return (
            <div className='footer-wrapper'>
                
                <p>Pasadena Liver Center <Moment format="YYYY" withTitle></Moment></p>   
            </div>
        );
    }
}