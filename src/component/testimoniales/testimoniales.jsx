import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
import React, { useRef } from 'react';
const Testimoniales = () => {
    return (
      
      <div>         <div className="testimonial-area">
      <div className="container">
          <div className="row">
              <div className="col-xl-5 col-lg-6 pb-2 pb-lg-0">
                  <div className="section-title-wrap-2">
                      <div className="section-title border-0">
                          <span>Témoignages</span>
                          <h2 className="mb-2">Les Voix de la Confiance : Nos Clients Parlent</h2>
                      </div>
                      <div className="section-desc pb-4">
                          <p className="font-size-20 mb-0"></p>
                      </div>
                    
                  </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                  <Swiper
                      className="testimonial-slider"
                  
                      breakpoints={{
                        // when window width is >= 320px
                        500: {
                          slidesPerView: 1,
                        },
                        // when window width is >= 480px
                        700: {
                          slidesPerView: 2,
                          spaceBetween:5

                        },
                        // when window width is >= 640px
                        950: {
                          slidesPerView: 2,
spaceBetween:10
                        },
                      }}
loop={true} 
navigation
pagination={{ clickable: true ,spaceBetween:50}}
modules= {[Navigation,Autoplay,Pagination]}
autoplay={{ delay: 3000 }}
                  >
                      <SwiperSlide>
                          <div className="testimonial-item">
                              <div className="testimonial-content">
                                  <p className="short-desc mb-3"><i className="quotation direction-left">“</i>la reusite c'est le fruit d'un effort contenu d'une volenté collectif.<i className="quotation direction-right">”</i></p>
                                  <div className="user-info">
                                      <div className="user-img">
                                          <img src="assets/images/testimonial/avatar/1-1-46x46.png" alt="Avatar" />
                                      </div>
                                      <div className="user-content">
                                          <h5 className="user-name text-primary mb-0">Amine Bettahar</h5>
                                          <span className="user-occupation">Client</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="testimonial-item">
                              <div className="testimonial-content">
                                  <p className="short-desc mb-3"><i className="quotation direction-left">“</i>C'est un acquis National pour Sidi-Bel-Abbes et l'Algerie<i className="quotation direction-right">”</i></p>
                                  <div className="user-info">
                                      <div className="user-img">
                                          <img src="assets/images/testimonial/avatar/1-2-46x46.png" alt="Avatar" />
                                      </div>
                                      <div className="user-content">
                                          <h5 className="user-name text-primary mb-0">Noureddine Chaib</h5>
                                          <span className="user-occupation">Client</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="testimonial-item">
                              <div className="testimonial-content">
                                  <p className="short-desc mb-3"><i className="quotation direction-left">“</i>L' Excellence est une affaire de famille<i className="quotation direction-right">”</i></p>
                                  <div className="user-info">
                                      <div className="user-img">
                                          <img src="assets/images/testimonial/avatar/1-2-46x46.png" alt="Avatar" />
                                      </div>
                                      <div className="user-content">
                                          <h5 className="user-name text-primary mb-0">Abdou Addani</h5>
                                          <span className="user-occupation">Client.</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </SwiperSlide>
                       
                  </Swiper>
                  <div className="testimonial-pagination d-md-none"></div>
                  <div className="testimonial-button-next"></div>
                  <div className="testimonial-button-prev"></div>
              </div>
          </div>
      </div>
  </div></div>
    );
};

export default Testimoniales;
