import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header';
import mena from '../assets/media/mena.jpg';
import aurelia from '../assets/media/staff/aurelia.jpg';
import brenda from '../assets/media/staff/brenda.jpg';
import iman from '../assets/media/staff/iman.jpg';
import norma from '../assets/media/staff/norma.jpg';
import ruby from '../assets/media/staff/ruby.jpg';
import tam from '../assets/media/staff/tam.jpg';
import yvette from '../assets/media/staff/yvette.jpg';

const About = (props) => {
    let title1 = "About us";
    let title2 = "our Staff";

    return(
        <motion.div className="about-wrapper"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        >
            <Header header={title1} />
            <div className="about-content-wrapper">
                <div className="left-side">
                    <img src={mena} alt="Dr. Edward Mena" />
                    <div className="mena-bio">
                    <h4>Dr. Edward Mena</h4>

                        <i>Hepatologist and Medical Director of the Pasadena Liver Center<br />
                        President and CEO of California Liver Research Institute (CLRI)</i>

                        <p>Dr. Mena’s interests include nonalcoholic fatty-liver disease in adult and pediatric patients, nonalcoholic steatohepatitis in response to chronic Hepatitis C and Liver Cancer and coordinating outreach programs in the Latino, Armenian, and Egyptian communities to better understand the role of Hepatitis B and C and cirrhosis within these populations. Dr. Mena also focuses on managing and curing patients with primary liver cancer.
                        </p>
                    </div>
                </div>
                <div className="right-side">
                    <strong>Education</strong>
                    <p>
                    Fellowship, Hepatology, University of Southern California Liver Unit, Rancho Los Amigos Medical Center
                    Residency, Internal Medicine, White Memorial Medical Center- Chief resident at White Memorial Medical Center
                    Medical Degree, University of Southern California Keck School of Medicine
                    Post-Baccalaureate Program, University of California, San Diego
                    Bachelor of Science, Biochemistry, University of California, Los Angeles
                    </p>

                    <strong>Research Interests</strong>
                    <p>
                    Hepatitis B and C, nonalcoholic fatty-liver disease, nonalcoholic steatohepatitis treatment response to interferon-based therapies in chronic hepatitis C, hepatitis C in the Latino community, hepatitis C epidemiology in Egyptian patients in southern California
                    </p>

                    <strong>Awards</strong>
                    <p>
                    Hispanic Health Leadership Award 2019 
                    Health Care Visionary Award - American Liver Foundation 2020
                    </p>

                    <strong>Affiliations</strong>
                    <p>
                    USC Transplant Center
                    Cedars-Sinai Transplant Center
                    AASLD – American Association For The Study Of Liver Diseases
                    EASL – European Association For The Study Of The Liver
                    Huntington Memorial Medical Center
                    </p>


                    <strong>Languages</strong>
                    <p>English and Spanish</p>


                    <strong>Languages Spoken in the office</strong>
                    <p>English, Spanish, Vietnamese, French, and Arabic</p>

                </div>
            </div>
            <Header header={title2} />
            <div className="staff-grid-wrapper">
                <div className="staff-grid">
                    <div className="staff-member">
                        <img src={norma} alt="Norma Carmona" />
                        <strong>Norma Carmona</strong>
                        <i>Medical Assistant</i>
                    </div>
                    <div className="staff-member">
                        <img src={ruby} alt="Ruby Gonzales" />
                        <strong>Ruby Gonzales</strong>
                        <i>Medical Assistant</i>
                    </div>
                    <div className="staff-member">
                        <img src={yvette} alt="Yvette Santoscoy" />
                        <strong>Yvette Santoscoy</strong>
                        <i>Office Manager</i>
                    </div>
                    <div className="staff-member">
                        <img src={iman} alt="Iman Jooma" />
                        <strong>Iman Jooma</strong>
                        <i>Physician Assistant</i>
                    </div>
                    <div className="staff-member">
                        <img src={aurelia} alt="Aurelia Sanchez" />
                        <strong>Aurelia Sanchez</strong>
                        <i>Medical Assistant</i>
                    </div>
                    <div className="staff-member">
                        <img src={brenda} alt="Brenda Serbantez" />
                        <strong>Brenda Serbantez</strong>
                        <i>Receptionist</i>
                    </div>
                    <div></div>
                    <div className="staff-member">
                        <img src={tam} alt="Tam Nguyen" />
                        <strong>Tam Nguyen</strong>
                        <i>Receptionist</i>
                    </div>
                    <div></div>
                </div>
            </div>
        </motion.div>

    )
}

export default About;