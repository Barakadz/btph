import React from "react";
import { NavLink } from 'react-router-dom';

import './navbar.css'
const NavBar = () => {
    const imageUrl = '1-122.jpg'; 
    return(
       <div>
         <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <img src="logo.jpg" alt="BTPH HASNAOUI" width="42" height="auto" class="d-indivne-block adivgn-top" />
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
            <div className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/">Accueil</NavLink>
                     </div>
                     
                   
                    <div class="nav-item">
                    <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/apropos">A propos</NavLink>
                    </div>
                    <div class="nav-item">
                         <NavLink  className="nav-link" activeClassName="active"   to="/produit">Services et Produits</NavLink>
                    </div>
                  
                    <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle " data-bs-toggle="dropdown" data-i18n="Services">Réalisations</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a href="gardiennage.html" class="dropdown-item" data-i18n="Gardiennage">Projets en cours</a>
                                <a href="escorte.html" class="dropdown-item" data-i18n="Escorte">Projets réalisés</a>
            
                            </div>
                        </div>

                        <div className="nav-item">
              <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/actualite">Actualités</NavLink>
            </div>
            
                   
                    <div class="nav-item dropdown">
                        
                            <a href="#" class="nav-link dropdown-toggle " data-bs-toggle="dropdown" data-i18n="Services">Carrières</a>
                            <div class="dropdown-menu rounded-0 m-0">
                            <NavLink className="dropdown-item"     to="/emplois">Offres d'emploi</NavLink>
                            <NavLink className="dropdown-item"     to="/candidature">Candidature spontanée</NavLink>
                            <NavLink className="dropdown-item"     to="/stage">Demande de stage</NavLink>
 
                              
                            </div>
                        </div>


                        <div className="nav-item">
              <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/contact">Contact</NavLink>
            </div>
            </div>
             <a href="" class="btn btn-secondary rounded-0 py-4 px-lg-5 d-none d-lg-block">Catalogue<i class="fa fa-arrow-right ms-3"></i></a>

        </div>
    </nav>
    {/*  
   <nav class="navbar navbar-expand-lg   sticky-top">
        <div class="container-fluid">
             <a class="mx-8" href="#">
                <img src="logo.jpg" alt="BTPH HASNAOUI" width="42" height="auto" class="d-indivne-block adivgn-top" />
                  
            </a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
             <div class="collapse navbar-collapse center-items" id="navbarNav">
                <div class="navbar-nav ">
                    <div className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/">Accueil</NavLink>
                     </div>
                     
                   
                    <div class="nav-item">
                        <a class="nav-link" href="#">A propos</a>
                    </div>
                    <div class="nav-item">
                        <a class="nav-link" href="#">Services et Produits</a>
                    </div>
                  
                    <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle " data-bs-toggle="dropdown" data-i18n="Services">Réalisations</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a href="gardiennage.html" class="dropdown-item" data-i18n="Gardiennage">Projets en cours</a>
                                <a href="escorte.html" class="dropdown-item" data-i18n="Escorte">Projets réalisés</a>
            
                            </div>
                        </div>

                        <div className="nav-item">
              <NavLink className="nav-link" activeClassName="active" aria-current="page" to="">Actualités</NavLink>
            </div>
            
                   
                    <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle " data-bs-toggle="dropdown" data-i18n="Services">Carrières</a>
                            <div class="dropdown-menu rounded-0 m-0">
                            <NavLink className="dropdown-item"     to="/emplois">Offres d'emploi</NavLink>
                            <NavLink className="dropdown-item"     to="/candidature">Candidature spontanée</NavLink>
                            <NavLink className="dropdown-item"     to="/stage">Demande de stage</NavLink>

                              
                            </div>
                        </div>


                        <div className="nav-item">
              <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/contact">Contact</NavLink>
            </div>
           
                  
                </div>
            </div>
        </div>
    </nav>
    
    
*/}
 


    
         </div> 
         
    );
}
export default NavBar;