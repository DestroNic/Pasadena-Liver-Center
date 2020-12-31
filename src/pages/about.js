import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header';
import mena from '../assets/media/mena.jpg';
import natalie from '../assets/media/staff/natalie.jpg';
import krystle from '../assets/media/staff/krystle.jpg';
import iman from '../assets/media/staff/iman.jpg';
import norma from '../assets/media/staff/norma.jpg';
import ruby from '../assets/media/staff/ruby.jpg';
import jennifer from '../assets/media/staff/jennifer.jpg';
import yvette from '../assets/media/staff/yvette.jpg';

const About = (props) => {
    let title1= "Our Mission"
    let title2 = "About us";
    let title3 = "our Staff";

    return(
        <motion.div className="about-wrapper"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        >
            <Header header={title1} />
            <div className='mission-content-wrapper'>
                <p className='mission-statement'>
                    Our mission is to improve the liver health of the community we serve with a commitment to excellence in all that we do.<br /><br />

                    Our goal is to provide patient-centered health care with superiority in quality clinical practice, education, and research.<br /><br />

                    Our goal is to exceed patient expectations by providing compassionate, attentive, and accessible patient-centered care.<br /><br />
                </p>
                <ul className='mission-bullets'>
                    <li> We are dedicated to providing quality patient care. Our patients <i>always</i> come first.</li>
                    <li> We provide patient-centered service by caring for the whole person. We consider their history, relationships, culture, and needs.</li>
                    <li> We treat each of our patients with respect and attentiveness.</li>
                    <li> We are compassionate listeners.</li>
                    <li> We use a team approach in providing health care and involve the patient as part of our team decision making process. We organize and coordinate health care services to meet the needs of our patients, especially those with complex medical care.</li>
                    <li> We are here to fight for your medical care.</li>
                    <li> Our team includes a Nurse Practitioner (NP) and Physician’s Assistant (PA). These extended providers play an important role in the continuity of care that we provide to our patients. They complement and support the work of Dr. Edward A. Mena.</li>
                </ul>
                <h3>
                    NURSE PRACTITIONER & PHYSICIAN ASSISTANT ROLE
                </h3>
                <ul className='mission-bullets'>
                    <li> Manage a variety of complex conditions associated with the assessment, treatment, and management of Hepatology patients</li>
                    <li> Provide clinical expertise in the planning and delivery of patient care</li>
                    <li> Promote innovative and creative clinical nursing practice and ensure it is validated with best practice guidelines and evidence-based research</li>
                    <li> Work collaboratively with all members of the health care team to ensure staff receives high quality support</li>
                    <li> Sub-Investigator for CLRI clinical trials</li>
                </ul>
            </div>
            <Header header={title2} />
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
            <Header header={title3} />
            <div className="staff-grid-wrapper">
                <div className="staff-grid-2">
                <div className="staff-member">
                        <img src={jennifer} alt="Jennifer Mohani Kahau-Segovia" />
                        <strong>Jennifer Mohani Kahau-Segovia</strong>
                        <i>NP-C</i>
                        <p>Moani Kahau-Segovia, is a practicing Nurse Practitioner in the field of hepatology under the
                            supervision of Edward A. Mena, MD, FAASLD at the Pasadena Liver Center. She also does
                            hospital rounds at Huntington Memorial Hospital. Moani is also a Sub-Investigator for the
                            California Liver Research Institute. Areas of focus include Hepatitis B, Hepatitis C, Fatty Liver
                            Disease, and Liver Cancer. Moani holds Bachelor of Arts degrees in Child Development and
                            Political Science; both of which were obtained at California State University, Los Angeles. She
                            also holds a Bachelor of Science degree in Nursing and Master of Science in Nursing as a Family
                            Nurse Practitioner; both of which were obtained at Azusa Pacific University. Prior to becoming
                            an FNP, Moani practiced as a Registered Nurse at Huntington Memorial Hospital in Pasadena.
                            During this journey, she married and raised 3 beautiful daughters.</p>
                    </div>
                    <div className="staff-member">
                        <img src={iman} alt="Iman Jooma" />
                        <strong>Iman Jooma</strong>
                        <i>Physician Assistant</i>
                        <p>Iman Jomaa is a nationally board-certified Physician Assistant specializing in hepatology working with Dr
                            Edward A Mena at the Pasadena Liver Center.
                            Iman is also a Sub-Investigator at the California Liver Research Institute which is a non-profit research
                            organization that is focused on the advancement of treatment and curing of all forms of liver disease
                            including Hepatitis B, Hepatitis C, Fatty liver disease and Liver Cancer.
                            Iman holds a Bachelor of Science degree and completed her physician assistant training at the Charles
                            Drew University of Medicine and Science in 2012. She worked in Family/Internal Medicine for 3 years
                            before joining the Pasadena Liver Center in 2015. She is fluent in English, Arabic, French and speak
                            Medical Spanish.
                            Her primary philosophy is to treat patients as she would her own Family Members.
                            When not practicing medicine, Iman enjoys spending time with her 2 baby boys and husband!</p>
                    </div>
                    
                    
                    </div>
                <div className="staff-grid-3">
                    <div className="staff-member">
                        <img src={yvette} alt="Yvette Santoscoy" />
                        <strong>Yvette Santoscoy</strong>
                        <i>Office Manager</i>
                    </div>
                    <div className="staff-member">
                        <img src={ruby} alt="Ruby Gonzales" />
                        <strong>Ruby Gonzales</strong>
                        <i>Medical Assistant</i>
                    </div>
                    <div className="staff-member">
                        <img src={natalie} alt="Natalie Lara" />
                        <strong>Natalie Lara</strong>
                        <i>MA Nurse Navigator</i>
                    </div>
                    </div>
                <div className="staff-grid-2s">
                    <div className="staff-member">
                        <img src={krystle} alt="Krystle Bonilla" />
                        <strong>Krystle Bonilla</strong>
                        <i>MA</i>
                    </div>
                    <div className="staff-member">
                        <img src={norma} alt="Norma Carmona" width='400px' height='400px'/>
                        <strong>Norma Carmona</strong>
                        <i>Medical Assistant</i>
                    </div>
                    <div></div>
                    
                    <div></div>
                </div>
            </div>
        </motion.div>

    )
}

export default About;
