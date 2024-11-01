import React from "react";
import { useRouter } from "next/router";

import details from "../data.json";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = details?.product[id];
  console.log("product", details);
  if (!product) {
    return <p>Product not found</p>; // Optional: loading state
  }
  return (
    <>
      <div class="page-title" data-aos="fade">
        <div class="container">
          <nav class="breadcrumbs">
            <ol>
              <li>
                <a href="/">{details?.lang === "EN" ? "Home" : "المنزل"}</a>
              </li>
              <li class="current">
                {details?.lang === "EN" ? product?.name : product?.nameAR}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="portfolio-details" class="portfolio-details section">
        <div class="container">
          <div
            class="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <div class="row align-items-center">
              <div class="col-lg-7 portfolio-info">
                <h3>{details?.lang === "EN" ? "Images" : "صور"}</h3>
              </div>
            </div>

            <div
              class="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {product?.images?.map((eachImg) => (
                <div class="col-lg-2 col-md-2 portfolio-item isotope-item filter-app">
                  <div class="portfolio-content h-100">
                    <img
                      style={{ height: "200px" }}
                      src={`${window.location.protocol}//${window.location.host}/${eachImg}`}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "5%" }}>
          <div class="col-lg-12 col-md-12">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fas fa-dna"></i>
              </div>
              <h4 style={{ color: "black" }}>
                {details?.lang === "EN" ? "Description" : "وصف"}
              </h4>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    details?.lang === "EN"
                      ? product?.description
                      : product?.descriptionAR,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
