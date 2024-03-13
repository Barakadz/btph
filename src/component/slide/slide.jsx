import './slide.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
  
 const Slide =()=>{
    return(
<div >
        
<div className="slider-area">
      <Swiper
         className="main-slider swiper-arrow with-bg_white"
        
        navigation
        pagination={{ clickable: true }}
        modules= {[Navigation, Pagination,Autoplay]}
        autoplay={{ delay: 6000 }} 
      >
        <SwiperSlide className="swiper-slide animation-style-01">
          <div
            className="slide-inner bg-height"
            style={{
              backgroundImage: `url(1-122.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%',
              height: '300px' // Set the height as needed
            }}
          >
            <div className="container">
              <div className="slide-content">
                <span className="sub-title mb-1">Depuis 1974</span>
                <h2 className="title mb-3"> BTPH <span>HASNAOUI</span> 
 </h2>
                <p className="short-desc-2 font-size-20 mb-7">
                 Construction et rénovation n'ont jamais été aussi simples
                </p>
                <div className="button-wrap">
                  <a className="btn btn-custom btn-secondary btn-white-hover me-3" href="project.html">
                  En savoir plus
                                    </a>
                  <a className="btn btn-custom btn-primary btn-white-hover" href="contact.html">
                  Contactez-nous                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide animation-style-01">
          <div
            className="slide-inner bg-height"
            style={{
              backgroundImage: `url(Oncologic-Center-02.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%',
              height: '300px' // Set the height as needed
            }}
          >
            <div className="container">
              <div className="slide-content">
                <span className="sub-title mb-1">Depuis 1974</span>
                <h2 className="title mb-3">Travaux   <span>Spéciaux</span></h2>
                <p className="short-desc-2 font-size-20 mb-7">
                  La réalisation de travaux spéciaux avec précision par nos experts.
                </p>
                <div className="button-wrap">
                  <a className="btn btn-custom btn-secondary btn-white-hover me-3" href="project.html">
                  En savoir plus
                                    </a>
                  <a className="btn btn-custom btn-primary btn-white-hover" href="contact.html">
                  Contactez-nous                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide animation-style-01">
          <div
            className="slide-inner bg-height"
            style={{
              backgroundImage: `url(AlRiadh20.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%',
              height: '300px' // Set the height as needed
            }}
          >
            <div className="container">
              <div className="slide-content">
                <span className="sub-title mb-1">Depuis 1974</span>
                <h2 className="title mb-3">Nos <span>métiers</span></h2>
                <p className="short-desc-2 font-size-20 mb-7">
                  Nos experts vous accompagnent pour réaliser tous vos projets avec professionnalisme.
                </p>
                <div className="button-wrap">
                  <a className="btn btn-custom btn-secondary btn-white-hover me-3" href="project.html">
                  En savoir plus
                                    </a>
                  <a className="btn btn-custom btn-primary btn-white-hover" href="contact.html">
                  Contactez-nous                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide animation-style-01">
          <div
            className="slide-inner bg-height"
            style={{
              backgroundImage: `url(1-2.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%',
              height: '300px' // Set the height as needed
            }}
          >
            <div className="container">
              <div className="slide-content">
                <span className="sub-title mb-1">Depuis 1974</span>
                <h2 className="title mb-3">
                L'excellence en<br /> construction, c'est notre 
                   <span>Métier</span></h2>
                <p className="short-desc-2 font-size-20 mb-7">
                  Construction of itself, because it is pain, but because some proper style design
                  occur in which toil and pain pleasure.
                </p>
                <div className="button-wrap">
                  <a className="btn btn-custom btn-secondary btn-white-hover me-3" href="project.html">
                  En savoir plus
                                    </a>
                  <a className="btn btn-custom btn-primary btn-white-hover" href="contact.html">
                  Contactez-nous                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       </Swiper>
    </div>

</div>
    );
}
export default Slide;