// InfoContext.js
"use client";
import { useEffect, useState, createContext } from "react";
import Loader from "./Loader";
import details from "../data.json";

export const DetailsContext = createContext();

export default function InfoContext({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 600);
  }, []);

  return (
    <DetailsContext.Provider value={details}>
      {loading ? <Loader /> : children}
    </DetailsContext.Provider>
  );
}
