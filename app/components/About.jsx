"use client";
import React from "react";
import Client from "./Client";

export default function About() {
  return (
    <>
      <section
        id="why-us"
        style={{ margin: "2%" }}
        className="why-us section light-background"
      >
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-12 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="why-box">
                <h1 className="text-2xl">OUR VISION</h1>
                <p style={{ textAlign: "justify" }}>
                  To become the leading and first company in the Kingdom and the
                  Gulf Council countries in providing all incorporation
                  materials for small, medium, and large projects, whether
                  public sector or private sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="why-us"
        style={{ margin: "2%" }}
        className="why-us section light-background"
      >
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-12 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="why-box">
                <h3 className="text-2xl">OUR MISSION</h3>
                <p style={{ textAlign: "justify" }}>
                  Our mission is to provide companies in the construction and
                  projects sector with all the basic materials and supplies that
                  contribute to the successful implementation of their projects
                  in accordance with the highest standards of quality and
                  professionalism. We strive to provide comprehensive and
                  reliable solutions that meet the needs of small, medium and
                  large companies, whether in the public or private sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-us"
        style={{ margin: "2%" }}
        className="why-us section light-background"
      >
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-12 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="why-box">
                <h3 className="text-2xl">WHO WE ARE</h3>
                <p style={{ textAlign: "justify" }}>
                  RF lighting was established in 2014 in Jeddah as a starting
                  point in the Kingdom of Saudi Arabia. Mira Trading Company
                  provides projects with all incorporation materials for small,
                  medium, and large projects, whether they are public sector or
                  private sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about-us"
        style={{ margin: "2%" }}
        className="why-us section light-background"
      >
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-12 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="why-box">
                <h3 className="text-2xl">ABOUT COMPANY</h3>
                <p style={{ textAlign: "justify" }}>
                  At RF Lighitngs we are passionate about providing top quality
                  Electrical and plumbing products with exceptional customer
                  service to our customers. With years of experience in the
                  industry we have established ourselves as a trusted supplier
                  of Electrical and plumbing products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Client />
    </>
  );
}
