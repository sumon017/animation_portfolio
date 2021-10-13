import React from 'react'
import {data} from './serviceData'
import ServiceCard from './serviceCard'
export default function Service({img,name}) {
    return (
        <div className="service">
        <div className="py-4">
           <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container ">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row">
                        {data.map((item, index)=>{
                           return (<ServiceCard key={index} img={item.img} title={item.title} des={item.des}/>)
                        })}
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}
