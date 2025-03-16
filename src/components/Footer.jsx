import React from "react";
import { Link, Links } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <a href="" className="nav-link px-2 text-muted">
                T
              </a> */}
              <Link to='/bookservices' className="nav-link px-2 text-muted">Book a Service</Link>
            </li>
            {/* <li className="nav-item">
              <a href="/developers" className="nav-link px-2 text-muted">
                Developers
              </a>
            </li> */}
            <li className="nav-item">
              {/* <a href="" className="nav-link px-2 text-muted">
                T
              </a> */}
              <Link to='/terms' className="nav-link px-2 text-muted">Terms & conditions</Link>
            </li>
            <li className="nav-item">
              {/* <a href="/privacy-policies" className="nav-link px-2 text-muted">
                Privacy Policy
              </a> */}
              <Link to='/privacy-policies' className="nav-link px-2 text-muted">Privacy Policy</Link>

            </li>
          </ul>
          <p className="text-center text-muted">© 2025 AsyncMinds</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
