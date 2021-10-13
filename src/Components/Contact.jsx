import React from "react";
import contact from './image/contact.jpg'
export default function Contact() {
  return (
    <div className="pt-4 service">
      <h1 className="text-center">Contact with us</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto   pt-4 mb-4">
            <div className="row ">
              <div className="col-md-6 shadow">
                  <img src={contact} alt="img" style={{height:"100%",width:"100%"}} />
              </div>
              <div className="col-md-6 shadow">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1" className="text-info">First Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg shadow"
                      aria-describedby="emailHelp"
                      placeholder="first name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1" className="text-info">Last Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg shadow"
                      aria-describedby="emailHelp"
                      placeholder="last name"
                    />

                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1" className="text-info">Email Address</label>
                    <input
                      type="email"
                      className="form-control form-control-lg shadow"
                      id="exampleInputEmail1"
                      placeholder="email"
                      aria-describedby="emailHelp"
                    />
                
                  </div>
                  <div class="form-group">
                    <label for="textarea" className="text-info">Message</label>
                    <textarea
                      type="text"
                      className="form-control form-control-lg shadow"
                      placeholder="Write your message"
                      aria-describedby="textarea"
                      rows="3"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    SEND
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
