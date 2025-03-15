import React from 'react';
import Navbbar from '../components/Navbbar';
import slider1 from '../assets/images/1.jpg';
import slider2 from '../assets/images/2.jpg';
import slider3 from '../assets/images/3.webp';

function Home() {
  return (
    <>
      <Navbbar />
      <main>
         {/* Carousel Section */}
         <div id="myCarousel" className="carousel slide pointer-event" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active" style={{ 
              backgroundImage: `url(${slider1})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              height: '500px',
              boxShadow: 'inset 0 0 100px rgba(0,0,0,1)' // Shadow effect
            }}>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1 style={{ color: '#fff', fontWeight: '700', textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
                    Empowering Your Business with Stunning Websites and Apps
                  </h1>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item" style={{ 
              backgroundImage: `url(${slider2})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              height: '500px',
              boxShadow: 'inset 0 0 80px rgba(0,0,0,0.5)' // Shadow effect
            }}>
              <div className="container">
                <div className="carousel-caption">
                  <h1 style={{ color: '#fff', fontWeight: '700', textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
                    Crafting High-Performance Websites for a Digital World
                    </h1>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item" style={{ 
              backgroundImage: `url(${slider3})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              height: '500px',
              boxShadow: 'inset 0 0 80px rgba(0,0,0,0.5)' // Shadow effect
            }}>
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1 style={{ color: '#fff', fontWeight: '700', textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
                    Elevate Your Online Presence with Expert Web Solutions
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Marketing Section */}
        <div className="container marketing mt-5">
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-4 text-center">
              <img src={slider1} alt="Web Development" className="rounded-circle mb-3" width="140" height="140" />
              <h2>Custom Web Development</h2>
              <p>We create websites tailored to your business needs with a focus on performance and design.</p>
              <a className="btn btn-secondary" href="#">View Details »</a>
            </div>

            {/* Column 2 */}
            <div className="col-lg-4 text-center">
              <img src={slider2} alt="App Development" className="rounded-circle mb-3" width="140" height="140" />
              <h2>Mobile App Solutions</h2>
              <p>Our team develops feature-rich mobile apps for iOS and Android, ensuring a seamless user experience.</p>
              <a className="btn btn-secondary" href="#">View Details »</a>
            </div>

            {/* Column 3 */}
            <div className="col-lg-4 text-center">
              <img src={slider3} alt="SEO & Marketing" className="rounded-circle mb-3" width="140" height="140" />
              <h2>SEO & Digital Marketing</h2>
              <p>We help you rank higher on search engines and drive more traffic to your business.</p>
              <a className="btn btn-secondary" href="#">View Details »</a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container mt-5">
          <p className="float-end"><a href="#">Back to top</a></p>
          <p>© 2025 AsyncMinds · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
        </footer>
      </main>
    </>
  );
}

export default Home;
