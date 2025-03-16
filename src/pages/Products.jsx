import React from "react";
import Navbbar from "../components/Navbbar";
import Footer from "../components/Footer";
import wuru from '../assets/images/wuru.jpg';
import ryuk from '../assets/images/ryuk.jpg';

function Products() {
  return (
    <main>
      <Navbbar />

      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Our Products</h1>
            {/* <p className="lead text-muted">
              Explore the innovative solutions we’ve built for our clients. At AsyncMinds, 
              we take pride in delivering high-performance websites and mobile applications 
              that combine functionality with a sleek user experience.
            </p> */}
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* Card 1 - wuru */}
            <div className="col">
              <div className="card shadow-sm">
                <img 
                  src={wuru} 
                  className="card-img-top" 
                  alt="Wuru Project" 
                  style={{ objectFit: 'cover', height: '225px' }}
                />
                <div className="card-body">
                  <p className="card-text">
                  Wuru Store is an online platform specializing in in-game currency top-ups and related services for popular mobile games. They offer recharge services for games like Mobile Legends and BGMI, aiming to provide a seamless and trustworthy experience for gamers seeking in-game enhancements.
                  <a href="https://wurustore.in">Visit</a>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">Completed in 2 weeks</small> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - ryuk */}
            <div className="col">
              <div className="card shadow-sm">
                <img 
                  src={ryuk} 
                  className="card-img-top" 
                  alt="Ryuk Project" 
                  style={{ objectFit: 'cover', height: '225px' }}
                />
                <div className="card-body">
                  <p className="card-text">
                  RyukOfficial is a leading platform specializing in in-game currency top-ups and recharge services for popular mobile games like Mobile Legends and BGMI. We are committed to providing a fast, secure, and seamless experience for gamers looking to level up their gameplay with exclusive in-game purchases.
                  <a href="https://ryukofficial.in">Visit</a>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">Completed in 3 weeks</small> */}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Products;
