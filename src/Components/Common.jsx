import React from 'react'
import { Link } from 'react-router-dom'
export default function Common({img,name}) {
    return (
        <div className="container-fluid home_about d-flex align-items-center">
            <div className="row ">
                <div className="col-md-10 mx-auto ">
                    <div className="row align-items-center ">
                    <div className="col-md-6 ">
                  <h1>{name} <br/><strong className='text-info'>Navbar brand</strong> is there</h1>
                  <h4>we are the team of web development</h4>
                  <div className="mt-4">
                      <Link to="/" className="btn-get-started"> Get Started </Link>
                  </div>
                </div>
                <div className="col-md-6">
                    <img src={img} alt="home" style={{height:"100%",width:"100%"}} className="animate"/>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
