"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import details from "../data.json";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [nestedOpen, setNestedOpen] = useState("");
  const [nested1Open, setNested1Open] = useState("");

  const navigateToSection = (sectionID) => {
    if (router.pathname !== "/") {
      router.push(`/#${sectionID}`);
      setTimeout(() => {
        const section = document.getElementById(sectionID);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      const section = document.getElementById(sectionID);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      id="header"
      className={` header sticky-top ${
        openMobileMenu ? "mobile-nav-active" : ""
      }`}
    >
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href={`mailto:${details?.email}`}>{details?.email}</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>{details?.phone}</span>
            </i>
          </div>
        </div>
      </div>

      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <img
              src={`${window.location.protocol}//${window.location.host}/logo.png`}
              alt="Logo"
            />
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              {details.navbar.map((each) => (
                <li className="dropdown" key={each.name}>
                  {each.name === "Home" ? (
                    <Link href="/">
                      <span>{each.name}</span>
                    </Link>
                  ) : each.name === "All Products" ? (
                    <Link href="/allproducts">
                      <span>{each.name}</span>
                    </Link>
                  ) : (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setNestedOpen(each);
                      }}
                    >
                      <span>{each.name}</span>
                      {each?.child && each?.child?.length > 0 && (
                        <i className="bi bi-chevron-down toggle-dropdown"></i>
                      )}
                    </a>
                  )}
                </li>
              ))}

              <li>
                <a
                  href="#about-us"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection("about-us");
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
            <i
              className={`mobile-nav-toggle d-xl-none bi bi-${
                openMobileMenu ? "x" : "list"
              }`}
              onClick={() => setOpenMobileMenu((prev) => !prev)}
            ></i>
          </nav>
        </div>
      </div>
    </header>
  );
}
