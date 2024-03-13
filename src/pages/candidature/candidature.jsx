import Main from "../../component/main/main";
import NavBar from "../../component/navbar/navbar";
import Topbar from "../../component/topbar/topbar";


const Candidature=()=>{
    const name="Candidature spontanée";
    const image="url('rHB-1.jpg')";
    return(
        <div>
<Topbar/>
<NavBar/>
<Main name={name} image={image}/>
        </div>
    )
}

export default Candidature;