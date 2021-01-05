import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faClock, faPhoneAlt, faFax } from '@fortawesome/free-solid-svg-icons';


const title = "Contact Us";


const Contact = () => {
    return(
        <motion.div>
            <Header header={title} />
            <div className="contact-wrapper">
                <div className="contact-info">
                    <div className="left-side">
                        <div className="contact-item">
                            <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className="contact-detail">
                                
                                <p>Address</p>
                               <p>301 S. Fair Oaks Ave.  Ste 405<br /> Pasadena CA 91105</p>

                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div className="contact-detail">
                                <p>Office Hours</p>
                                <p>Monday - Friday – 9:00 to 4:30pm</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </div>
                            <div className="contact-detail">
                                <p>Phone</p>
                                <p>626-440-7325</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon={faFax} />
                            </div>
                            <div className="contact-detail">
                                <p>Fax</p>
                                <p>626-440-7310</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13208.937486858313!2d-118.1509844!3d34.1403455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa4a40e8fce601bdc!2sEdward%20A.%20Mena%2C%20M.D.%20Pasadena%20Liver%20Center!5e0!3m2!1sen!2sus!4v1609823400980!5m2!1sen!2sus" width="600" height="450" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0" />
                    </div>
                </div>
                <div className="contact-footer">
                    <p>Fibroscan (By appointment only)</p><br />
                    <p>Tuesday, Wednesday, and Fridays – 8:45am to 10:30am <br />
                    Tuesday Afternoon – 1:00pm to 2:00pm (Outside referral or no follow up needed)</p>

                </div>
            </div>
        </motion.div>

    )
}

export default Contact;