"use client";
import Link from "next/link";
import data from "../data.json"; // Adjust path if necessary
import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures client-side rendering
  }, []);

  if (!isClient) return null; // Skip rendering on the server

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3">
        {Object.keys(data.product).map((key) => {
          const product = data.product[key];
          return (
            <Link href={`/product/${key}`} key={key}>
              <div className="col" key={key}>
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
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
