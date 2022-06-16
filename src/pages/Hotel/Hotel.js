import React, { useState } from "react";
import './Hotel.css'
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'
import slider3 from '../../images/slider_1.jpg'
// import Header from "../Shared/Header/Header";

const Hotel = () => {
    // React Bootstrap carousal
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <>
      <div id="fh5co-wrapper">
        <div id="fh5co-page">
          <div id="fh5co-header">
            <header id="fh5co-header-section">
              <div className="container-fluid slider">
                {/* Carrousel */}
                <>
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                      />

                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </>
              </div>
            </header>
          </div>
          {/* <!-- end:fh5co-header --> */}
          <aside id="fh5co-hero" className="js-fullheight">
            <div className="flexslider js-fullheight">
              <ul className="slides">
                <li
                  style={{
                    backgroundImage: "url(assets/images/slider1.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="overlay-gradient"></div>
                  <div className="container">
                    <div className="col-md-12 col-md-offset-0 text-center slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <p>
                            <span>Bora Hotel</span>
                          </p>
                          <h2>Reserve Room for Family Vacation</h2>
                          <p>
                            <Link to="/login" className="btn btn-primary btn-lg">
                              Book Now
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{ backgroundImage: " url(assets/images/slider2.jpg)" }}
                >
                  <div className="overlay-gradient"></div>
                  <div className="container">
                    <div className="col-md-12 col-md-offset-0 text-center slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <p>
                            <span>Deluxe Hotel</span>
                          </p>
                          <h2>Make Your Vacation Comfortable</h2>
                          <p>
                          <Link to="/registration" className="btn btn-primary btn-lg">
                              Book Now
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{ backgroundImage: "url(assets/images/slider3.jpg)" }}
                >
                  <div className="overlay-gradient"></div>
                  <div className="container">
                    <div className="col-md-12 col-md-offset-0 text-center slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <p>
                            <span>Luxe Hotel</span>
                          </p>
                          <h2>A Best Place To Enjoy Your Life</h2>
                          <p>
                          <Link to="/login" className="btn btn-primary btn-lg">
                              Book Now
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
          <div className="wrap">
            <div className="container">
              <div className="row">
                {/* <div id="availability">
					<form action="/">

						<div className="a-col">
							<section>
								<select className="cs-select cs-skin-border">
									<option defaultValue="" disabled select="true">Select Hotel</option>
									<option defaultValue="email">Luxe Hotel</option>
									<option defaultValue="twitter">Deluxe Hotel</option>
									<option defaultValue="linkedin">Five Star Hotel</option>
								</select>
							</section>
						</div>
						<div className="a-col alternate">
							<div className="input-field">
								<label htmlFor="date-start">Check In</label>
								<input type="text" className="form-control" id="date-start" />
							</div>
						</div>
						<div className="a-col alternate">
							<div className="input-field">
								<label htmlFor="date-end">Check Out</label>
								<input type="text" className="form-control" id="date-end" />
							</div>
						</div>
						<div className="a-col action">
							<a href="/">
								<span>Check</span>
								Availability
							</a>
						</div>
					</form>
				</div> */}
              </div>
            </div>
          </div>

          <div id="fh5co-counter-section" className="fh5co-counters">
            <div className="container">
              <div className="row">
                <div className="col-md-3 text-center">
                  <span
                    className="fh5co-counter js-counter"
                    data-from="0"
                    data-to="20356"
                    data-speed="5000"
                    data-refresh-interval="50"
                  ></span>
                  <span className="fh5co-counter-label">User Access</span>
                </div>
                <div className="col-md-3 text-center">
                  <span
                    className="fh5co-counter js-counter"
                    data-from="0"
                    data-to="15501"
                    data-speed="5000"
                    data-refresh-interval="50"
                  ></span>
                  <span className="fh5co-counter-label">Hotels</span>
                </div>
                <div className="col-md-3 text-center">
                  <span
                    className="fh5co-counter js-counter"
                    data-from="0"
                    data-to="8200"
                    data-speed="5000"
                    data-refresh-interval="50"
                  ></span>
                  <span className="fh5co-counter-label">Transactions</span>
                </div>
                <div className="col-md-3 text-center">
                  <span
                    className="fh5co-counter js-counter"
                    data-from="0"
                    data-to="8763"
                    data-speed="5000"
                    data-refresh-interval="50"
                  ></span>
                  <span className="fh5co-counter-label">
                    Rating &amp; Review
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div id="featured-hotel" className="fh5co-bg-color">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-title text-center">
                    <h2>Featured Hotels</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="feature-full-1col">
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/hotel_feture_1.jpg)",
                    }}
                  >
                    <div className="descrip text-center">
                      <p>
                        <small>For as low as</small>
                        <span>$100/night</span>
                      </p>
                    </div>
                  </div>
                  <div className="desc">
                    <h3>Deluxe Hotel</h3>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus
                      ett mauada fames ac turpis egestas. Etiam euismod tempor
                      leo, in suscipit urna condimentum sed. Vivamus augue enim,
                      consectetur ac interdum a, pulvinar ac massa. Nullam
                      malesuada congue{" "}
                    </p>
                    <p>
                    <Link to="/login" className="btn btn-primary btn-lg">
                              Book Now
                            </Link>
                    </p>
                  </div>
                </div>

                <div className="feature-full-2col">
                  <div className="f-hotel">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(assets/images/hotel_feture_2.jpg)",
                      }}
                    >
                      <div className="descrip text-center">
                        <p>
                          <small>For as low as</small>
                          <span>$99/night</span>
                        </p>
                      </div>
                    </div>
                    <div className="desc">
                      <h3>Hotel Bora</h3>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        ett mauada fames ac turpis egestas. Etiam euismod tempor
                        leo, in suscipit urna condimentum sed.{" "}
                      </p>
                      <p>
                      <Link to="/registration" className="btn btn-primary btn-lg">
                              Book Now
                            </Link>
                      </p>
                    </div>
                  </div>
                  <div className="f-hotel">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          " url(assets/images/hotel_feture_3.jpg)",
                      }}
                    >
                      <div className="descrip text-center">
                        <p>
                          <small>For as low as</small>
                          <span>$99/night</span>
                        </p>
                      </div>
                    </div>
                    <div className="desc">
                      <h3>D’Morvie</h3>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        ett mauada fames ac turpis egestas. Etiam euismod tempor
                        leo, in suscipit urna condimentum sed.{" "}
                      </p>
                      <p>
                      <Link to="/login" className="btn btn-primary btn-lg ">
                              Book Now
                            </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="hotel-facilities">
            {/* <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-title text-center">
                    <h2>Hotel Facilities</h2>
                  </div>
                </div>
              </div>

              <div id="tabs">
                <nav className="tabs-nav">
                  <a href="/" className="active" data-tab="tab1">
                    <i className="flaticon-restaurant icon"></i>
                    <span>Restaurant</span>
                  </a>
                  <a href="/" data-tab="tab2">
                    <i className="flaticon-cup icon"></i>
                    <span>Bar</span>
                  </a>
                  <a href="/" data-tab="tab3">
                    <i className="flaticon-car icon"></i>
                    <span>Pick-up</span>
                  </a>
                  <a href="/" data-tab="tab4">
                    <i className="flaticon-swimming icon"></i>
                    <span>Swimming Pool</span>
                  </a>
                  <a href="/" data-tab="tab5">
                    <i className="flaticon-massage icon"></i>
                    <span>Spa</span>
                  </a>
                  <a href="/" data-tab="tab6">
                    <i className="flaticon-bicycle icon"></i>
                    <span>Gym</span>
                  </a>
                </nav>
                <div className="tab-content-container">
                  <div
                    className="tab-content active show"
                    data-tab-content="tab1"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="assets/images/tab_img_1.jpg"
                            className="img-responsive"
                            alt="img"
                          />
                        </div>
                        <div className="col-md-6">
                          <span className="super-heading-sm">World Class</span>
                          <h3 className="heading">Restaurant</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Molestias officia perferendis modi impedit,
                            rem quasi veritatis. Consectetur obcaecati incidunt,
                            quae rerum, accusamus sapiente fuga vero at. Quia,
                            labore, reprehenderit illum dolorem quae facilis
                            reiciendis quas similique totam sequi ducimus
                            temporibus ex nemo, omnis perferendis earum fugit
                            impedit molestias animi vitae.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laboriosam neque blanditiis eveniet nesciunt,
                            beatae similique doloribus, ex impedit rem officiis
                            placeat dignissimos molestias temporibus, in! Minima
                            quod, consequatur neque aliquam.
                          </p>
                          <p className="service-hour">
                            <span>Service Hours</span>
                            <strong>7:30 AM - 8:00 PM</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" data-tab-content="tab2">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="assets/images/tab_img_2.jpg"
                            className="img-responsive"
                            alt="img"
                          />
                        </div>
                        <div className="col-md-6">
                          <span className="super-heading-sm">World Class</span>
                          <h3 className="heading">Bars</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Molestias officia perferendis modi impedit,
                            rem quasi veritatis. Consectetur obcaecati incidunt,
                            quae rerum, accusamus sapiente fuga vero at. Quia,
                            labore, reprehenderit illum dolorem quae facilis
                            reiciendis quas similique totam sequi ducimus
                            temporibus ex nemo, omnis perferendis earum fugit
                            impedit molestias animi vitae.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laboriosam neque blanditiis eveniet nesciunt,
                            beatae similique doloribus, ex impedit rem officiis
                            placeat dignissimos molestias temporibus, in! Minima
                            quod, consequatur neque aliquam.
                          </p>
                          <p className="service-hour">
                            <span>Service Hours</span>
                            <strong>7:30 AM - 8:00 PM</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" data-tab-content="tab3">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="assets/images/tab_img_3.jpg"
                            className="img-responsive"
                            alt="img"
                          />
                        </div>
                        <div className="col-md-6">
                          <span className="super-heading-sm">World Class</span>
                          <h3 className="heading">Pick Up</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Molestias officia perferendis modi impedit,
                            rem quasi veritatis. Consectetur obcaecati incidunt,
                            quae rerum, accusamus sapiente fuga vero at. Quia,
                            labore, reprehenderit illum dolorem quae facilis
                            reiciendis quas similique totam sequi ducimus
                            temporibus ex nemo, omnis perferendis earum fugit
                            impedit molestias animi vitae.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laboriosam neque blanditiis eveniet nesciunt,
                            beatae similique doloribus, ex impedit rem officiis
                            placeat dignissimos molestias temporibus, in! Minima
                            quod, consequatur neque aliquam.
                          </p>
                          <p className="service-hour">
                            <span>Service Hours</span>
                            <strong>7:30 AM - 8:00 PM</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" data-tab-content="tab4">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="assets/images/tab_img_4.jpg"
                            className="img-responsive"
                            alt="img"
                          />
                        </div>
                        <div className="col-md-6">
                          <span className="super-heading-sm">World Class</span>
                          <h3 className="heading">Swimming Pool</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Molestias officia perferendis modi impedit,
                            rem quasi veritatis. Consectetur obcaecati incidunt,
                            quae rerum, accusamus sapiente fuga vero at. Quia,
                            labore, reprehenderit illum dolorem quae facilis
                            reiciendis quas similique totam sequi ducimus
                            temporibus ex nemo, omnis perferendis earum fugit
                            impedit molestias animi vitae.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laboriosam neque blanditiis eveniet nesciunt,
                            beatae similique doloribus, ex impedit rem officiis
                            placeat dignissimos molestias temporibus, in! Minima
                            quod, consequatur neque aliquam.
                          </p>
                          <p className="service-hour">
                            <span>Service Hours</span>
                            <strong>7:30 AM - 8:00 PM</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" data-tab-content="tab5">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="assets/images/tab_img_5.jpg"
                            className="img-responsive"
                            alt="img"
                          />
                        </div>
                        <div className="col-md-6">
                          <span className="super-heading-sm">World Class</span>
                          <h3 className="heading">Spa</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Molestias officia perferendis modi impedit,
                            rem quasi veritatis. Consectetur obcaecati incidunt,
                            quae rerum, accusamus sapiente fuga vero at. Quia,
                            labore, reprehenderit illum dolorem quae facilis
                            reiciendis quas similique totam sequi ducimus
                            temporibus ex nemo, omnis perferendis earum fugit
                            impedit molestias animi vitae.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laboriosam neque blanditiis eveniet nesciunt,
                            beatae similique doloribus, ex impedit rem officiis
                            placeat dignissimos molestias temporibus, in! Minima
                            quod, consequatur neque aliquam.
                          </p>
                          <p className="service-hour">
                            <span>Service Hours</span>
                            <strong>7:30 AM - 8:00 PM</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" data-tab-content="tab6">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="assets/images/tab_img_6.jpg"
                            className="img-responsive"
                            alt="img"
                          />
                        </div>
                        <div className="col-md-6">
                          <span className="super-heading-sm">World Class</span>
                          <h3 className="heading">Gym</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Molestias officia perferendis modi impedit,
                            rem quasi veritatis. Consectetur obcaecati incidunt,
                            quae rerum, accusamus sapiente fuga vero at. Quia,
                            labore, reprehenderit illum dolorem quae facilis
                            reiciendis quas similique totam sequi ducimus
                            temporibus ex nemo, omnis perferendis earum fugit
                            impedit molestias animi vitae.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laboriosam neque blanditiis eveniet nesciunt,
                            beatae similique doloribus, ex impedit rem officiis
                            placeat dignissimos molestias temporibus, in! Minima
                            quod, consequatur neque aliquam.
                          </p>
                          <p className="service-hour">
                            <span>Service Hours</span>
                            <strong>7:30 AM - 8:00 PM</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div id="testimonial">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-title text-center">
                    <h2>Happy Customer Says...</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="testimony">
                    <blockquote>
                      &ldquo;If you’re looking for a top quality hotel look no
                      further. We were upgraded free of charge to the Premium
                      Suite, thanks so much&rdquo;
                    </blockquote>
                    <p className="author">
                      <cite>John Doe</cite>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="testimony">
                    <blockquote>
                      &ldquo;Me and my wife had a delightful weekend get away
                      here, the staff were so friendly and attentive. Highly
                      Recommended&rdquo;
                    </blockquote>
                    <p className="author">
                      <cite>Rob Smith</cite>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="testimony">
                    <blockquote>
                      &ldquo;If you’re looking for a top quality hotel look no
                      further. We were upgraded free of charge to the Premium
                      Suite, thanks so much&rdquo;
                    </blockquote>
                    <p className="author">
                      <cite>Jane Doe</cite>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="fh5co-blog-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-title text-center">
                    <h2>Our Blog</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="blog-grid"
                    style={{
                      backgroundImage: "url(assets/images/image-1.jpg)",
                    }}
                  >
                    <div className="date text-center">
                      <span>09</span>
                      <small>Aug</small>
                    </div>
                  </div>
                  <div className="desc">
                    <h3>
                      <a href="/">Most Expensive Hotel</a>
                    </h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="blog-grid"
                    style={{
                      backgroundImage: "url(assets/images/image-2.jpg)",
                    }}
                  >
                    <div className="date text-center">
                      <span>09</span>
                      <small>Aug</small>
                    </div>
                  </div>
                  <div className="desc">
                    <h3>
                      <a href="/">1st Anniversary of Luxe Hotel</a>
                    </h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="blog-grid"
                    style={{
                      backgroundImage: "url(assets/images/image-3.jpg)",
                    }}
                  >
                    <div className="date text-center">
                      <span>09</span>
                      <small>Aug</small>
                    </div>
                  </div>
                  <div className="desc">
                    <h3>
                      <a href="/">Discover New Adventure</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer id="footer" className="fh5co-bg-color">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="copyright">
                    {/* <p><small>&copy; 2016 Free HTML5 Template. <br> All Rights Reserved. <br>
						Designed by <a href="http://freehtml5.co" target="_blank">FreeHTML5.co</a> <br/> Demo Images: <a href="http://unsplash.com/" target="_blank">Unsplash</a></small></p> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-3">
                      <h3>Company</h3>
                      <ul className="link">
                        <li>
                          <a href="/">About Us</a>
                        </li>
                        <li>
                          <a href="/">Hotels</a>
                        </li>
                        <li>
                          <a href="/">Customer Care</a>
                        </li>
                        <li>
                          <a href="/">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h3>Our Facilities</h3>
                      <ul className="link">
                        <li>
                          <a href="/">Resturant</a>
                        </li>
                        <li>
                          <a href="/">Bars</a>
                        </li>
                        <li>
                          <a href="/">Pick-up</a>
                        </li>
                        <li>
                          <a href="/">Swimming Pool</a>
                        </li>
                        <li>
                          <a href="/">Spa</a>
                        </li>
                        <li>
                          <a href="/">Gym</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h3>Subscribe</h3>
                      <p>
                        Sed cursus ut nibh in semper. Mauris varius et magna in
                        fermentum.{" "}
                      </p>
                      <form action="/" id="form-subscribe">
                        <div className="form-field">
                          <input
                            type="email"
                            placeholder="Email Address"
                            id="email"
                          />
                          <input type="submit" id="submit" value="Send" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <ul className="social-icons">
                    <li>
                      <a href="/">
                        <i className="icon-twitter-with-circle"></i>
                      </a>
                      <a href="/">
                        <i className="icon-facebook-with-circle"></i>
                      </a>
                      <a href="/">
                        <i className="icon-instagram-with-circle"></i>
                      </a>
                      <a href="/">
                        <i className="icon-linkedin-with-circle"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* <!-- END fh5co-page --> */}
      </div>

      <script src="assets/js/jquery-2.1.4.min.js"></script>

      <script src="assets/js/hoverIntent.js"></script>
      <script src="assets/js/superfish.js"></script>

      <script src="assets/js/bootstrap.min.js"></script>

      <script src="assets/js/jquery.waypoints.min.js"></script>

      <script src="assets/js/jquery.countTo.js"></script>

      <script src="assets/js/jquery.stellar.min.js"></script>

      <script src="assets/js/owl.carousel.min.js"></script>

      <script src="assets/js/bootstrap-datepicker.min.js"></script>

      <script src="assets/js/classie.js"></script>
      <script src="assets/js/selectFx.js"></script>

      <script src="assets/js/jquery.flexslider-min.js"></script>

      <script src="assets/js/custom.js"></script>
    </>
  );
};

export default Hotel;
