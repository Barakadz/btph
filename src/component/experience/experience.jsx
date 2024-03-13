 import { useSpring, animated } from 'react-spring';
 import ReactWOW from 'react-wow';

const Experience = () => {
  
    
    return(
        <div>   
       
       
     


        <div class="about-area about-style-2 py-115 "style={{zIndex:'-1'}}>
            <div class="container">
                <div class="section-title-area style-01 pb-70">
                    <div class="section-title-wrap">
                   <div class="section-title with-border text-lg-end">                 
                   <ReactWOW animation="fadeIn" delay="0.5s">     
                             <h1 class="mb-0">Nous construisons vos besoins</h1>
                             </ReactWOW>
                        </div>
                            <div class="section-desc">
                            <ReactWOW animation="fadeIn" delay="1s">     

                            <p class="font-size-20 mb-0">Issue de la société mère, la société par actions BTPH HASNAOUI est spécialisée et hautement qualifiée dans la réalisation du bâtiment et du génie civil.
                           </p></ReactWOW>

                        </div> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about-img-wrap">
                            <div class="about-pattern">
                            <ReactWOW animation="fadeIn" delay="0.5s"> 
                                 <img src="pattern.jpg" alt="Pattern"/>
                                 </ReactWOW>   
                            </div>
                            <div class="about-img">
                            <ReactWOW animation="fadeIn" delay="1s"> 
                                <img class="img-full" src="1-1.jpg" alt="About Banner"/>
                                </ReactWOW>  
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 align-self-center">
                        <div class="about-content">
                            <div class="experience style-2 text-primary">
                                <div class="experience-content">
                                    <span class="year">50</span>
                                    <h2 class="our-progress">années de<span>Experience</span></h2>
                                </div>
                                <div class="experience-img">
                                    <img src="avatar.png" alt="Avatar"/>
                                </div>
                            </div>
                            <ReactWOW animation="fadeIn" delay="1s"> 
                            <h3 class="sub-title mb-4">Fournir les meilleurs services de construction pour notre client avec leur satisfaction</h3>
                            </ReactWOW>
                            <p class="short-desc mb-7">Construction of itself, because it is pain, but because some are
                                proper style design occur in toil and pain pleasure we have a expert team some of the main
                                features..</p>
                            <ul class="list-item">
                                <li>
                                    <div class="list-icon">
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="list-text">
                                        <span>Construction of itself, because it is pain, but because
                                    proper style design occur in toil and pain pleasure</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-icon">
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="list-text">
                                        <span>Construction of itself, because it is pain, but because
                                    proper style design occur in toil and pain pleasure</span>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        </div>

    )
}
export default Experience;