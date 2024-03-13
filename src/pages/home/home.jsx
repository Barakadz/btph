import Actualite from "../../component/actualite/actualite";
import Chifre from "../../component/chifrescles/chifre";
import Contactinformation from "../../component/contactinformation/contactinformation";
import Experience from "../../component/experience/experience";
import Footer from "../../component/footer/footer";
import Projet from "../../component/projet/projet";
import Service from "../../component/service/service";
import Slide from "../../component/slide/slide";
import Testimoniales from "../../component/testimoniales/testimoniales";
import Certification from "../../component/certification/certification";
import NavBar from "../../component/navbar/navbar";
import Topbar from "../../component/topbar/topbar";

const Home=()=>{
  
    return(
        <div>
            
             <Topbar/>
            <NavBar/>
          <Slide/>
          
            <Experience/>  <Projet/>
            <Service/>
          
            <Chifre/>
            <Certification/>
            <Testimoniales/>
            <Actualite/>
    <Footer/>
        </div>
    )
}

export default Home;