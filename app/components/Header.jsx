"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import details from "../data.json";
import Link from "next/link";

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const [logoSrc, setLogoSrc] = useState("");
  const router = useRouter();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures client-side rendering

    if (typeof window !== "undefined") {
      setLogoSrc(
        `${window.location.protocol}//${window.location.host}/logo.png`
      );
    }
  }, []);

  if (!isClient) return null; // Skip rendering on the server

  return (
    <>
      <header
        id="header"
        className={`header sticky-top ${
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
            <Link href="/" className="logo d-flex align-items-center">
              <img src={logoSrc} alt="Logo" />
            </Link>

            <nav id="navmenu" className="navmenu">
              <ul>
                {details.navbar.map((each) => (
                  <li
                    className={`dropdown ${each.child ? "has-children" : ""}`}
                    key={each.name}
                  >
                    {each.child ? (
                      <a href="#">
                        <span>{each.name}</span>
                        <i className="bi bi-chevron-down toggle-dropdown"></i>
                      </a>
                    ) : (
                      <Link
                        href={
                          each.name === "Home"
                            ? "/"
                            : `/${each.name.toLowerCase().replace(" ", "")}`
                        }
                      >
                        <span>{each.name}</span>
                      </Link>
                    )}

                    {/* Render children if exist */}
                    {each.child && (
                      <ul className="dropdown-menu">
                        {each.child.map((subItem) => (
                          <li key={subItem.name}>
                            <Link href={subItem.url}>
                              <span>{subItem.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
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

      <style jsx>{`
        .has-children:hover .dropdown-menu {
          display: block;
        }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          padding: 0;
          list-style: none;
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        }
        .dropdown-menu li {
          padding: 10px;
          white-space: nowrap;
        }
        .dropdown-menu li:hover {
          background: #f1f1f1;
        }
      `}</style>
    </>
  );
}
