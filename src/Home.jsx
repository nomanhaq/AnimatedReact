import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/images1.jpeg'; 
import web1 from '../src/images/images1.jpeg'; 

const Home = () => {
  return ( 
  <>
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1 >
                                This is  <strong className="brand-name"> Noman ul Haq </strong>  Animated website Home Page
                            </h1>
                            
                            <h2 className="my-4">
                                Full Stack developer
                            </h2>
                            <div className="mt-4"> 
                                <NavLink to="/service" className="btn-get-started">
                                    Get Started 
                                </NavLink>
                            </div>

                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={web} className="img-fluid animated" alt="homeimage"/> 
                            <img src={web1} className="img-fluid animated" alt="homeimage"/> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
  );
}

export default Home;