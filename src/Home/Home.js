import React from 'react';
import About from '../About/About';
import Common from '../Common/Common';
import Footer from '../Footer/Footer';
import web from "../img/02.svg";
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
        <main>
            <Common
            // first_name="We help to achieve your goal"
            last_name = "CODERSTAGE"
            work="Your product is our concern. We ensure your best experience with us"
            img ={web}
            visit="/service"
            btnName= "More Info"

            
            ></Common>
            
            </main>
            
            <br/>
           <Footer/>

        </div>
    );
};

export default Home;