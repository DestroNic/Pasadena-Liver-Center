import React from 'react';
import logo from '../assets/media/logo.png';
import MoreInfoButton from '../components/moreinfo';
import HomeBody from '../components/home-body';
import { motion } from 'framer-motion';


const Home = () => {
    return(
        <motion.div className="container"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
        
        >
        <div className="bg-wrapper">
        <div className="bg-content">
          <div className="left-side">
              <img src={logo} alt="logo"></img>
          </div>
          <div className="right-side">
            <p>We treat a wide range of liver diseases including:</p>
            <p>Cirrhosis, Hepatic Encephalopathy, Hepatitis, Hepatitis B, <br />Hepatitis C, Fatty liver decease, Liver cancer and more.</p>
            <MoreInfoButton />
          </div>
        </div>
        </div>
        <HomeBody />
        </motion.div>

    )
}

export default Home;