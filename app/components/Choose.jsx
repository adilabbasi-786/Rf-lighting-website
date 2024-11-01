import React from "react";

export default function Choose() {
  return (
    <section id="services" className="cards section">
      <div className="container section-title">
        <h2>Services</h2>
        <p>We provide the best professional services</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos-delay="100">
            <div className="card-item">
              <span>01</span>
              <h4>
                <a href="" className="stretched-link">
                  Fast charging
                </a>
              </h4>
              <p>
                Express shipping for orders over 10,000 Saudi riyals for all
                categories except cables and wires within Jeddah and Riyadh.
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos-delay="200">
            <div className="card-item">
              <span>02</span>
              <h4>
                <a href="" className="stretched-link">
                  Secure payment methods
                </a>
              </h4>
              <p>
                We are committed to providing the highest level of quality and
                satisfaction to our customers.
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos-delay="300">
            <div className="card-item">
              <span>03</span>
              <h4>
                <a href="" className="stretched-link">
                  Technical support around the clock
                </a>
              </h4>
              <p>Enjoy an exciting and unique shopping experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
