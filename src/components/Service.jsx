import React from "react";
import slider1 from '../assets/images/web.jpg';
import slider2 from '../assets/images/app.png';
import slider3 from '../assets/images/design.png';
import slider4 from '../assets/images/UI.png';


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
              style={{objectFit:'cover'}}
            />
            <h2>Web Development</h2>
            <p>
            We build fast, secure, and scalable websites tailored to your business needs. Our expert developers leverage the latest technologies to create responsive, high-performance web solutions that drive results. From dynamic websites to complex web applications, we turn your ideas into reality.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4 text-center">
            <img
              src={slider2}
              alt="App Development"
              className="rounded-circle mb-3"
              width="140"
              height="140"
              style={{objectFit:'cover'}}
            />
            <h2>Mobile Application Development</h2>
            <p>
            We develop powerful and user-friendly mobile applications for both iOS and Android platforms. Our apps are designed for performance and scalability, ensuring a seamless user experience and helping you stay connected with your audience on the go.
            </p>
          </div>

          {/* Column 3 */}
          <div className="col-lg-4 text-center">
            <img
              src={slider3}
              alt="SEO & Marketing"
              className="rounded-circle mb-3"
              width="140"
              height="140"
              style={{objectFit:'cover'}}
            />
            <h2>Web Design</h2>
            <p>
            Our creative team designs visually stunning and user-friendly websites that reflect your brand identity. We focus on clean layouts, modern aesthetics, and intuitive navigation to ensure a seamless user experience that engages and converts visitors.</p>
          </div>
          {/* Column 4*/}
          <div className="col-lg-4 text-center">
            <img
              src={slider4}
              alt="SEO & Marketing"
              className="rounded-circle mb-3"
              width="140"
              height="140"
              style={{objectFit:'cover'}}
            />
            <h2> UI/UX</h2>
            <p>
            We craft user experiences that are not only visually appealing but also intuitive and easy to navigate. Our UI/UX experts design interfaces that enhance user satisfaction, improve engagement, and ensure a smooth interaction flow across all devices.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
