// pages/Submeters.js
"use client";
import Link from "next/link";
import data from "../data.json";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // Filter products with category "Submeters"
  const fansProduct = Object.keys(data.product)
    .filter((key) => data.product[key].category === "Submeters")
    .map((key) => ({ id: key, ...data.product[key] }));

  return (
    <>
      <Header />
      <div className="container mx-auto py-6">
        <h2 className="text-2xl font-bold mb-4">Fans</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3">
          {fansProduct.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="col">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 md:p-6">
                  <img
                    src={`/${product.images[0]}`}
                    alt={product.name}
                    width="100%"
                    height="200"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600">
                      {product.description
                        .replace(/<[^>]+>/g, "")
                        .slice(0, 100)}
                      ...
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
