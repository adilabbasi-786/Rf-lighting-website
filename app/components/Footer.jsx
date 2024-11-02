import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-3">
          <div className="col-lg-3 col-md-6 d-flex">
            <div className="address">
              <h4>
                Address{" "}
                <a
                  href="https://maps.app.goo.gl/57nQcReYUCyWTY1ZA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google maps
                </a>
              </h4>
              <p>
                <a
                  href="https://maps.app.goo.gl/57nQcReYUCyWTY1ZA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Replace with actual address */}
                  1234 Example Street, City, Country
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex">
            <div>
              <h4>Contact</h4>
              <p>
                <strong>Phone:</strong> <span>+123 456 7890</span>
                <br />
                <strong>Email:</strong> <span>example@example.com</span>
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex">
            <div>
              <h4>Certificates and Approvals</h4>
              <p className="mb-3">
                Commercial Registration from Ministry of Commerce
                <strong> (Cr: 4030231400)</strong>
              </p>
              <p>
                VAT REGISTRATION General Authority of Zakat and tax
                <strong> (311179707200003)</strong>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4>Follow Us</h4>
            <div className="social-links d-flex">
              <a
                href="https://www.facebook.com/profile.php?id=61566214222608"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/105097113/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://wa.me/966532942055"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright text-center mt-4">
        <p>
          This website Developed by{" "}
          <a
            href="https://ftssolution.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FTS Tech
          </a>{" "}
          +92 318 5669303
        </p>
      </div>
    </footer>
  );
}
