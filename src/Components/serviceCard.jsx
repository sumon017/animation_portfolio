import React from "react";

export default function ServiceCard({img,title,des}) {
  return (
    <div className="col-md-4  mb-4">
      <div className="card card-deck m-1">
        <img src={img} class="card-img-top shadow" alt=".." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {des}
          </p>
          <a href="#" className="btn btn-outline-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
