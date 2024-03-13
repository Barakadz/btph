import Footer from "../../component/footer/footer";
import Main from "../../component/main/main";
import NavBar from "../../component/navbar/navbar";
import Topbar from "../../component/topbar/topbar";


const Produit=()=>{
    const contact="Explorez Notre Éventail de Solutions Innovantes";
    const image="url('btph_equipe.jpg')";
    return(
        <div>
            <Topbar/>
            <NavBar/>
            <Main name={contact} image={image} />
            <h2 className="text-center p-2">Nos produits</h2>
           <center><hr style={{width:'150px'}}/></center> 
            <p className="text-center">Au cours des 10 derniéres années, btph a developpé une large gamme de béton spécifique en réponse aux demandes des clients</p>
            <Footer/>
        </div>
    );
}

export default Produit;