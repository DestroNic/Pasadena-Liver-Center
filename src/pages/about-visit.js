import React, { Component } from 'react';
import Header from '../components/header';
import VisitForm from '../components/visit-form';

const title = "About Your Visit";

class AboutVisit extends Component {
    render(){
    return(
        <div>
            <Header header={title} />
            <div className="about-visit-info">
            <p>Please call our office to schedule an appointment with Dr. Mena and we will be in touch with you.<br /><br />

                In an effort to make your visit run smoothly , please fill our online patient form, Please also bring a picture ID, insurance card, any medications that you may be taking, and any lab results or imaging of the abdomen that you may have.<br /><br />

                Please contact the office with any questions and we look forward to seeing you.<br /><br />
            </p>
            </div>
            <VisitForm />
        </div>

    )
    }
}

export default AboutVisit;