import React from 'react';
import Common from '../Common/Common';
import web from '../img/01.svg';

const About = () => {
    return (
        <div>
           <Common
           name= "About US"
           work="Leading Tech Company in BD"
           img ={web}
           visit = "/contact"
           btnName= "Contact Us"
           />
        </div>
    );
};

export default About;