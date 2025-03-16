import React from "react";
import slider1 from '../assets/images/1.jpg';
import slider2 from '../assets/images/2.jpg';
import slider3 from '../assets/images/3.webp';


function Service() {
  return (
    <>
      {/* Marketing Section */}
      <div className="container marketing mt-5">
        <div className="row">
          {/* Column 1 */}
          <div className="col-lg-4 text-center">
            <img
              src={slider1}
              alt="Web Development"
              className="rounded-circle mb-3"
              width="140"
              height="140"
            />
            <h2>Custom Web Development</h2>
            <p>
              We create websites tailored to your business needs with a focus on
              performance and design.
            </p>
            <a className="btn btn-secondary" href="#">
              View Details »
            </a>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4 text-center">
            <img
              src={slider2}
              alt="App Development"
              className="rounded-circle mb-3"
              width="140"
              height="140"
            />
            <h2>Mobile App Solutions</h2>
            <p>
              Our team develops feature-rich mobile apps for iOS and Android,
              ensuring a seamless user experience.
            </p>
            <a className="btn btn-secondary" href="#">
              View Details »
            </a>
          </div>

          {/* Column 3 */}
          <div className="col-lg-4 text-center">
            <img
              src={slider3}
              alt="SEO & Marketing"
              className="rounded-circle mb-3"
              width="140"
              height="140"
            />
            <h2>SEO & Digital Marketing</h2>
            <p>
              We help you rank higher on search engines and drive more traffic
              to your business.
            </p>
            <a className="btn btn-secondary" href="#">
              View Details »
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
