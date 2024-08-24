import React from "react";

function Card({ data }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {data.plan}
          </h5>
          <h6 className="card-price text-center">
            ${data.price}/month
          </h6>
          <hr />
          <ul className="fa-ul">
            {data.features.map((feature, index) => (
              <li key={index} className={feature.included ? "" : "text-muted"}>
                <span className="fa-li">
                  <i className={`fas ${feature.included ? "fa-check" : "fa-times"}`}></i>
                </span>
                {feature.text}
              </li>
            ))}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary">
              BUTTON
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;