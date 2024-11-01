"use client";
import { notFound } from "next/navigation"; // Handles 404s in app router
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import details from "../../data.json";

export default function ProductDetail({ params }) {
  const { id } = params;
  const product = details?.product[id];

  console.log("produ", product);

  if (!product) return notFound(); // Triggers 404 if product is not found

  return (
    <>
      <Header />
      <div className="page-title">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="current">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container">
          <div class="row align-items-center">
            <div class="col-lg-7 portfolio-info">
              <h1 style={{ fontSize: "40px" }}>Images</h1>
            </div>
          </div>
          <div className="row gy-4 isotope-container">
            {product?.images?.map((eachImg, idx) => (
              <div key={idx} className="col-lg-2 col-md-2 portfolio-item">
                <img src={`/${eachImg}`} className="img-fluid" alt="" />
              </div>
            ))}
          </div>
          <div className="service-item">
            <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>
              Description
            </h1>
            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
