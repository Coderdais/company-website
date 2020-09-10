import React, { useState } from "react";

const Contact = () => {
    const [data,setData] = useState({
        name : " ",
        phone: " ",
        email : " ",
        msg: " "

    })

    // const inputData = (e) =>{
        
    //         return{
    //             ...data,
    //             [name] : value
    //         }
    // }

    const eventHandel = (e) =>{
        const {name,value} = e.target;
            setData((prev)=>{
                return{
                    ...prev,
                    [name] : value
                }    
            });
          
    }
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form>
            <div className="mb-3">
              <label  className="form-label">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange= {eventHandel}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <label  className="form-label">
                Phone
              </label>
              <input
                type="number"
                name = "phone"
                value = {data.phone}
                onChange= {eventHandel}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Mobile Number"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={data.value}
                onChange= {eventHandel}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Input Your Email Address"
              />
            </div>

            <div class="mb-3">
              <label  className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                name = "msg"
                value = {data.value}
                onChange= {eventHandel}
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
          <div className="col-12">
            <button className="btn btn-outline-primary" type="submit">
              Submit 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
