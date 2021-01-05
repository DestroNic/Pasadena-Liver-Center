import React  from 'react';
import Moment from 'react-moment';
 
export default class Footer extends React.Component {
    render() {

        
        return (
            <div className='footer-wrapper'>
                
                <p>Pasadena Liver Center <Moment format="YYYY" withTitle></Moment> &#169;</p>   
            </div>
        );
    }
}