import React from "react";
import Navbbar from "../components/Navbbar";
import Footer from "../components/Footer";
import background from '../assets/images/bg.jpg'

function About() {
  return (
    <main>
      <Navbbar />
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <h1 className="display-5 fw-bold text-primary">About AsyncMinds</h1>
              <p className="lead text-muted mt-3">
                At <span className="fw-bold text-dark">AsyncMinds</span>, we are passionate about creating innovative and powerful digital solutions. 
                We specialize in <b>web development</b>,<b> web design</b>, <b>UI/UX</b>, and <b>mobile application development</b>. 
                Our goal is to empower businesses with custom-built solutions that drive growth and enhance user experience.
              </p>
              <p className="mt-3">
                Founded by a team of experienced developers, AsyncMinds combines technical expertise with creative design to deliver 
                high-performance products that meet the unique needs of each client. From sleek websites to powerful mobile apps, 
                we are committed to excellence in every project.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={background}
                alt="About AsyncMinds"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">Why Choose Us?</h2>
            <p className="text-muted">
              We go beyond delivering just a product — we create an experience.
            </p>
          </div>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="fw-bold">Custom Solutions</h5>
                  <p className="text-muted">
                    We understand that every business is unique. That's why we deliver tailor-made solutions to fit your specific needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="fw-bold">Innovative Design</h5>
                  <p className="text-muted">
                    Our designs are user-friendly and visually appealing, ensuring a seamless experience for your customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="fw-bold">Expert Team</h5>
                  <p className="text-muted">
                    Our team of developers and designers are experts in the latest technologies and trends, ensuring you get the best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default About
