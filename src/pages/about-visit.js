import React, { Component } from 'react';
import Header from '../components/header';
import formFill from '../assets/media/form-fill.jpg';  
// import VisitForm from '../components/visit-form';

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
            </div >
            <div className='about-visit-body'>
                <img src={formFill} alt='form' />

            </div>
            <div className='about-visit-links'>
                <div className='three-link'>
                <a href='https://mphtechinc-client-public.s3-us-west-2.amazonaws.com/plc/privacy+practices.docx.pdf' target='_blank'>Privacy Practice Disclosure</a>
                <a href='https://mphtechinc-client-public.s3-us-west-2.amazonaws.com/plc/CHRONIC+LIVER+DISEASE.docx.pdf' target='_blank'>Chronic Liver Disease</a>
                <a href='https://mphtechinc-client-public.s3-us-west-2.amazonaws.com/plc/medication+list.docx.pdf' target='_blank'>Medication List</a>
                </div>
                <div className='two-link'>
                <a href='https://mphtechinc-client-public.s3-us-west-2.amazonaws.com/plc/Financial+Policy.docx.pdf' target='_blank'>Financial Policy</a>
                <a href='https://mphtechinc-client-public.s3-us-west-2.amazonaws.com/plc/disability+forms.docx.pdf' target='_blank'>Disability Forms</a>
                </div>
            </div>
            <div className='about-visit-info'>
                <p>Please print and fill out the following forms. You can either scan them and email them to ruby@pasadena-livercenter.com or bring them with you to your appointment.</p>
            </div>
        </div>

    )
    }
}

export default AboutVisit;