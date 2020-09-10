import React from "react";
import "./Commom.css";
import { NavLink } from "react-router-dom";
import "../../node_modules/animate.css"

const Common = (props) => {
  return (
    <section id="header" className="d-flex content-justify-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
          
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex content-justify-center flex-column">
                <h1 className="animate__animated animate__bounce" >
                  <b>{props.name}</b>
                </h1>
                <h2>{props.work}</h2>
                <div>
                  <NavLink to={props.visit} className="btn-get-started">
                    {props.btnName}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6  order-1 order-lg-2">
                {<img src={props.img} alt="home-img"/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
