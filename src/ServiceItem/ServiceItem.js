import React from "react";
import {NavLink} from "react-router-dom";
import "./ServiceItem.css";

const ServiceItem = (props) => {
  return (
    <div>
      
              <div className="col">
                <div className="card h-100">
                  <img src={props.img} className="card-img-top" alt="img" />
                  <div className="card-body">
                    <h5 className="card-title">{props.tittle}</h5>
                    <p className="card-text">
                      {
                          props.des
                      }
                    </p>
                    <NavLink to="/contact " className="btn btn-primary">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
  );
};

export default ServiceItem;
