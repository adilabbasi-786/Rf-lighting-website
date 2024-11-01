import React from "react";

export default function client() {
  return (
    <section id="clients" className="clients section">
      <div className="container section-title">
        <h2>Manufacturing Partners</h2>
        <p>
          We are proud to collaborate with renowned manufacturing partners who
          share our commitment to excellence and quality. Our partners include:
        </p>
        <ul>
          <li>
            <strong>Alfanar:</strong> A leading manufacturer with a strong
            reputation for producing high-quality products.
          </li>
          <li>
            <strong>Al Raed Al Arabi:</strong> A trusted partner with a long
            history of manufacturing excellence.
          </li>
          <li>
            <strong>Hylumen:</strong> A cutting-edge manufacturer at the
            forefront of technology and innovation.
          </li>
        </ul>
        <p>
          Through these strategic partnerships, we leverage the strengths of
          each manufacturer to provide our customers with an unparalleled range
          of products and services.
        </p>
      </div>
      <div class="container" data-aos-delay="100">
        <div class="row g-0 clients-wrap">
          <div class="col-xl-4 col-md-4 client-logo">
            <img
              style={{ height: "15rem" }}
              src="https://alfanarprojects.com/media/bwmc3udf/alfanar-steel-structures.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-xl-4 col-md-4 client-logo">
            <img
              style={{ height: "15rem" }}
              src="https://media.licdn.com/dms/image/v2/C4D0BAQEqpjOYWhq4xw/company-logo_200_200/company-logo_200_200/0/1670937273814/al_raed_al_arabi_sa_logo?e=1733961600&v=beta&t=DiJGcn7ePtYw2UQHsDS7CT-lHELFbIYJthGCRaR-K9g"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-xl-4 col-md-4 client-logo">
            <img
              style={{ height: "15rem" }}
              src="https://hylumen.com/wp-content/uploads/2021/01/Logo1-High-Res1-1.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
