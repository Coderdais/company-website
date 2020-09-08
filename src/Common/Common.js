import React from "react";

import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
                <div className="col-md-6 order-2 order-lg-1">
                  <h1>{props.name}</h1>
                  <h2>{props.work}</h2>
                  <div>
                    <NavLink to={props.visit} className="btn-get-started">{props.btnName}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                   {
                        <img src={props.img} alt="home-img"/>
                   }
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common;
