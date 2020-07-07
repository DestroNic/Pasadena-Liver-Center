import React from 'react';
import YoutubeVideo from './video';


const HomeBody = (props) => {

    const video1 = 'VPFybM8Jkvs';
    const video2 = 'WrOnxsSM8pU';

    return(
        <div className="body-wrapper">
            <div className="top-card">
                <div className="header">
                    <p>Get an accurate diagnosis without a liver biopsy with our FibroScan</p>
                </div>
                <div className="grid-container">
                    <div className="left-side">
                        <YoutubeVideo videoId={video1}/>
                    </div>
                    <div className="right-side">
                        <p>The gold standard for determining the extent of liver damage was through a liver biopsy. The procedure for a liver biopsy involves inserting a needle in between the ribs over the liver and extracting a small portion of the liver.  That piece is then reviewed under a microscope and the extent of liver injury is evaluated. This is known as Fibrosis which has 4 stages.  Stage 4 is cirrhosis or hardening of the liver. However, we have new technology that is able to place a probe over the liver. The stage of Fibrosis is determined without having to remove a piece of liver. This is non-invasive and causes no bodily harm to the patient. This technology is known as Fibro-Scan and uses transient elastography to measure liver stiffness. We have this technology at Pasadena Liver Center. The procedure takes about 15 minutes. The Patient needs to be fasting for 3 hours. This procedure is covered by most insurance and HMO’s.</p>
                    </div>
                </div>
            </div>
            <div className="bottom-card">
                <div className="header">
                    <p>How FibroScan Works</p>
                </div>
                <div className="grid-container">
                    <div className="left-side">
                    <p>We have a dedicated Physician Assistant who has completed over 300 FibroScans.  I believe that this diagnostic tool is more accurate and it causes no bodily harm.  You can schedule your FibroScan 3 times a week by appointment only.<br /><br />

                        Tuesday, Wednesday, Friday – 8:45am to 10:30am<br />
                        Tuesday Afternoon – 1:00pm to 2:00pm (Outside referral or no follow up needed)</p>
                    </div>
                    <div className="right-side">
                        <YoutubeVideo videoId={video2} />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default HomeBody;