import React from "react";
import Footer from "../Footer/Footer";
import "./About.css";
import "../../node_modules/animate.css";
import saving from "../img/saving.svg";
import learning from "../img/online.svg";

const About = () => {
  return (
    <div>
      <main className="container">
        <div>
          <p className="first">What </p>
          <p className="second">we are?</p>
          <br />
          <br />
          <div className="row">
            <div className="col-8 company-details animate__animated animate__fadeInTopLeft">
              <p>
                CoderStage is a startup IT firm in Bangladesh. Our mission is to
                produce high quality, cost effective, reliable mobile app and
                web solutions on time. Our young and experienced Professionals
                are here to reach goals as soon as possible.
              </p>
            </div>
          </div>
        </div>
        <div>
          <br />
          <br />

          
        </div>
        <br /> <br/> 
        <br />
        <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <img src={saving} alt="saving" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <p className="first">Our </p>
              <p className="second">Products</p>
              <br />
              <br />

              <p className="product-details  animate__animated animate__backInRight">
                <h5>Pocket Bank</h5>
                <h1 style={{ color: "red" }}>Coming Soon..</h1>
              </p>
            </div>
          </div>
          <br/><br/> <br/>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
             
            <p className="product-details">
            <h5>School Management System </h5>
            <h1 style={{ color: "red" }}>Coming Soon..</h1>
          </p>
              
            </div>
            <div className="col-12 col-md-6 col-lg-6">
            <img  src={learning} alt="learning" />
            </div>
          </div>
      </main>
      <br/><br/>
      <Footer></Footer>
    </div>
  );
};

export default About;
