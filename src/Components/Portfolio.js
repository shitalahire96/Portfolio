import React from 'react';
import pfImg1 from '../Assets/img/masonry-portfolio/masonry-portfolio-11.png';
import pfImg2 from '../Assets/img/masonry-portfolio/masonry-portfolio-11.png';
import pfImg3 from '../Assets/img/masonry-portfolio/masonry-portfolio-11.png';
import pfImg4 from '../Assets/img/masonry-portfolio/masonry-portfolio-11.png';
import pfImg5 from '../Assets/img/masonry-portfolio/masonry-portfolio-11.png';
import pfImg6 from '../Assets/img/masonry-portfolio/masonry-portfolio-11.png';

function Portfolio(props) {
    return (
        <div>
            <main className="main">

                {/* <!-- Portfolio Section --> */}
                <section id="portfolio" className="portfolio section">

                    {/* <!-- Section Title --> */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Documents</h2>
                        <p>All necessory Docs</p>
                    </div>  {/* <!-- End Section Title --> */}

                    <div className="container">
                        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                        {/*<ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-product">Card</li>
                            <li data-filter=".filter-branding">Web</li>
                        </ul><!-- End Portfolio Filters -->*/}

                        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <img src={pfImg1} className="img-fluid" alt=""/>
                                <i class="bi bi-file-pdf"></i>
                                <div className="portfolio-info">
                                    <h4>Doc 1</h4>
                                    <p>Doc Details</p>
                                    <a href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div> {/*<!-- End Portfolio Item -->*/}

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <img src={pfImg2} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Doc 2</h4>
                                    <p>Doc Details</p>
                                    <a href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <img src={pfImg3} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Doc 3</h4>
                                    <p>Doc Details</p>
                                    <a href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <img src={pfImg4} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Doc 4</h4>
                                    <p>Doc Details</p>
                                    <a href={pfImg4} title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <img src={pfImg5} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Doc 5</h4>
                                    <p>Doc Details</p>
                                    <a href={pfImg5} title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <img src={pfImg6} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Doc 6</h4>
                                    <p>Doc Details</p>
                                    <a href={pfImg6} title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>



                        </div> {/* <!-- End Portfolio Container -->*/}

                        </div>
                    </div>

                </section> {/* <!-- /Portfolio Section --> */}

            </main>
            
        </div>
    );
}

export default Portfolio;