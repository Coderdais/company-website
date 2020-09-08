import React from 'react';
import Common from '../Common/Common';
import web from "../img/02.jpg";

const Home = () => {
    return (
        <div>
            <Common
            name="Welcome to Homepage"
            work="Works With Our Great Team"
            img ={web}
            visit="/service"
            btnName= "Get Started"

            
            ></Common>
        </div>
    );
};

export default Home;