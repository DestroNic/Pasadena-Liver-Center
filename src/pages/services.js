import React from 'react';
import Header from '../components/header';
import ClriLink from '../components/clriLink';
import { motion } from "framer-motion";
import service1 from "../assets/media/services/service_1.png";
import service2 from "../assets/media/services/service_2.jpg";
import service3 from "../assets/media/services/service_3.jpg";
import service4 from "../assets/media/services/service_4.png";
import service5 from "../assets/media/services/service_5.png";
import service6 from "../assets/media/services/service_6.jpg";
import service7 from "../assets/media/services/service_7.jpg";



const Services = () => {
    let title = "Services";
    
    return(
        <motion.div className="service-wrapper"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}>

            <Header header={title} />
            <div className="cards-wrapper">
                <div className="service-content">
                <div className="service-header">
                    <p>Cirrhosis</p>
                </div>
                <div className="service-card">
                    <div className="left-side">
                        <img src={service1} alt="Cirrhosis" />
                    </div>
                    <div className="right-side">
                        <p>
                        Cirrhosis is a late stage condition where the liver does not function properly, usually due to long term damage caused by alcohol, hepatitis B, hepatitis C and non –alcohol fatty liver disease. The most important message I have for a patient with cirrhosis is to remain positive.  I recommend surveillance for liver cancer every 6 months.  The risk of liver cancer increases 4% per year due to cirrhosis.  Surveillance is done by both an ultrasound and blood test to look for markers of liver cancer known as an Alpha Feto-Protein.  I collaborate with all liver transplant centers in the Los Angeles area.  I refer to a Liver Transplant Center when the patient has a Model of End Stage Liver Disease (MELD) score above 15 or when the patient has liver cancer.  Here at the Pasadena Liver Center, we take a multidisciplinary approach to curing liver cancer and assisting our patients through a stressful time in their lives.
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="service-content1">
                <div className="service-header">
                    <p>Hepatic Encephalopathy</p>
                </div>
                <div className="service-card">
                    <div className="left-side">
                        <p>
                        Hepatic Encephalopathy is an injury to the brain caused by cirrhosis or acute liver failure. Typically it involves the buildup of ammonia in the brain caused by the inability of the liver to filter toxins normally released through the stool. These toxins buildup in the brain and cause impairment in speech, motor function, ability to drive and the patients are typically described as slow.  The first person to notice these impairments is a loved one or caregiver. Treatment involves lowering these toxins through the stool using medications such as Lactulose and a drug called Xifaxin . By doing so, we can improve patients cognition and improve quality of life.  The goal of therapy in hepatic encephalopathy is to make patients’ lives and quality of life better.  I do not advocate the use of following serial ammonia levels in the blood. These are neither helpful nor a guide to therapy.
                        </p>
                    </div>
                    <div className="right-side">
                        <img src={service2} alt="Hepatic Encephalopathy" />
                    </div>
                </div>
                
            </div>
            <div className="service-content">
                <div className="service-header">
                    <p>Hepatitis</p>
                </div>
                <div className="service-card">
                    <div className="left-side">
                        <img src={service3} alt="Hepatitis" />
                    </div>
                    <div className="right-side">
                        <p>
                        Hepatitis is an inflammation of the liver. It can be caused by multiple ideologies such as excess alcohol consumption, viral infection such as Hepatitis A, B and C, and most commonly obesity, diabetes and a bad cholesterol level.   Chronic hepatitis can progress on to cirrhosis. We typically recommend liver enzymes to be screened on a yearly basis.
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="service-content1">
                <div className="service-header">
                    <p>Hepatitis B</p>
                </div>
                <div className="service-card">
                    <div className="left-side">
                        <p>
                        Hepatitis B is a DNA virus that affects approximately 1.25 million Americans. There are over 350 million people worldwide who are infected and living with this chronic illness.  The highest concentration of Hepatitis B is found in Asia. It is crucial that patients with Hepatitis B undergo surveillance for liver cancer every 6-8 months with blood tests and imaging of the liver.  There are medications for Hepatitis b which control the infection and decrease the risk of progression on to cirrhosis.  The most important part of Hepatitis B that we want everyone to understand is continued lifelong surveillance.  We recommend all household contacts be screened and vaccinated if appropriate
                        </p>
                    </div>
                    <div className="right-side">
                        <img src={service4} alt="Hepatitis B" />
                    </div>
                </div>
                
            </div>
            <div className="service-content">
                <div className="service-header">
                    <p>Hepatitis C</p>
                </div>
                <div className="service-card">
                    <div className="left-side">
                        <img src={service5} alt="" />
                    </div>
                    <div className="right-side">
                        <p>
                        Hepatitis C remains a silent epidemic throughout the United States.  It is estimated that 5.3 million Americans are living with viral hepatitis and don’t even know it.  There is good news for people being diagnosed with Hepatitis C these days.  There are remarkable drugs available for the treatment of Hepatitis C.  These drugs eradicate and cure the patient. The treatment durations varies depending on the severity of illness and the type of Hepatitis C.  There are different types of Hepatitis C known as genotypes.  These genotypes are found in different parts of the world.  The duration of treatment length may vary 8, 12 or 24 weeks.  Side effects are very well tolerated.  I encourage anyone with Hepatitis C to seek treatment.
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="service-content1">
                <div className="service-header">
                    <p>Fatty Liver</p>
                </div>
                <div className="service-card">
                    <div className="left-side">
                        <p>
                        Fatty liver is the most common liver disease. An Estimated 30 Million Americans have fatty liver disease. Fatty liver is a diagnosis of exclusion which means we have to eliminate other types of liver disease. It is related to metabolic disease, which means diabetes, family history of diabetes, a high triglyceride count, hypertension and obesity.
Treatment at this time involves diet and exercise; there are no good pharmacologic therapies for fatty liver, however, we may be participating in a few clinical trials of certain medications. Our strongest recommendation is that the patient exercise, which includes walking 30 min a day 3x a week.
                        </p>
                    </div>
                    <div className="right-side">
                    <img src={service6} alt="Fatty Liver" />
                    </div>
                </div>
                
            </div>
            <div className="service-content">
                <div className="service-header">
                    <p>Liver Cancer</p>
                </div>
                <div className="service-card">
                    <div className="left-side">
                        <img src={service7} alt="" />
                    </div>
                    <div className="right-side">
                        <p>
                        We treat all types of Liver cancer here at the Pasadena Liver Center, with a focus on cancers related to cirrhosis.  We take a multi-disciplinary approach and work closely with the liver transplant team, radiologists and the USC liver team so that we can treat your liver disease and cancer at the same time.  By taking this approach, we can ensure that the most effective therapies are being used, using an evidence based approach.
                        </p>
                    </div>
                </div>
                </div>
            </div>
            <ClriLink />
        </motion.div>

    )
}

export default Services;