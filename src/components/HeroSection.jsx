import React from "react";
import slider1 from "../assets/images/1.jpg";
import slider2 from "../assets/images/2.jpg";
import slider3 from "../assets/images/3.jpg";
function HeroSection() {
  return (
    <>
      {/* Carousel Section */}
      <div
        id="myCarousel"
        className="carousel slide pointer-event"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div
            className="carousel-item active"
            style={{
              backgroundImage: `url(${slider1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
              boxShadow: "inset 0 0 100px rgba(0,0,0,1)", // Shadow effect
            }}
          >
            <div className="container">
              <div className="carousel-caption text-start">
                <h1
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                  }}
                >
                  Empowering Your Business with Stunning Websites and Apps
                </h1>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${slider2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
              boxShadow: "inset 0 0 80px rgba(0,0,0,0.5)", // Shadow effect
            }}
          >
            <div className="container">
              <div className="carousel-caption">
                <h1
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                  }}
                >
                  Crafting High-Performance Websites for a Digital World
                </h1>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${slider3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
              boxShadow: "inset 0 0 80px rgba(0,0,0,0.5)", // Shadow effect
            }}
          >
            <div className="container">
              <div className="carousel-caption text-end">
                <h1
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                  }}
                >
                  Elevate Your Online Presence with Expert Web Solutions
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default HeroSection;
