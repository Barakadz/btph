import Contactinformation from "../../component/contactinformation/contactinformation";
import Footer from "../../component/footer/footer";
import Main from "../../component/main/main";
import NavBar from "../../component/navbar/navbar";
import Topbar from "../../component/topbar/topbar";


const Contact=()=>{
    const contact="Nous contacter";
    const image="url('1.jpg')";
return(
    <div>
        <Topbar/>
        <NavBar/>
        <Main name={contact} image={image} />
        <Contactinformation/>
        <Footer/>
    </div>
)


}

export default Contact;