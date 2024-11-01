"use client";
import React from "react";
import { useForm } from "react-hook-form";

let url =
  "https://hooks.slack.com/services/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";

export default function ContactUs() {
  const { reset, register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append(
      "payload",
      `{"text": "Name:${data.name}\nEmail:${data.email}\nSubject:${data.subject}\nMessage:${data.message}"}`
    );

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.text(), reset())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title">
        <h2>Contact</h2>
        <p>For any query contact us</p>
      </div>

      <div className="container" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Location</h3>
                <p>Your address here</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>Your phone number here</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>Your email here</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="post"
              className="php-email-form"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>

                <div className="col-md-12">
                  <input
                    {...register("subject", { required: true })}
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    {...register("message", { required: true })}
                    className="form-control"
                    rows="6"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
