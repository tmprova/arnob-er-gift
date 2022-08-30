import React from 'react';
import Expertise from './expertise/Expertise';
import Intro from './intro/Intro';
import OurServices from './services/OurServices';

const About = () => {
    return (
        <div>
          {/* <Intro/> */}
          <Expertise/>
          <OurServices></OurServices>
        </div>
    );
};

export default About;