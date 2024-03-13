import './sidebar.scss'
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import ArticleIcon from '@mui/icons-material/Article';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Sidebar=()=>{
    return(
        <div className='sidebar'>
            <div className="top">
                <Link to="/admin">
                    <span className="logo text-center">BTPH HASNAOUI ADMIN</span>
                </Link>
            </div><hr className='hr' />
            <div className="center">
                <ul>
                    <p className="title">Analyse cible</p>
                    <NavLink  to="/admin" activeClassName="activee" ><li><TroubleshootIcon className='icon' /><span>Statistique</span></li></NavLink>
                    <NavLink to="/users" activeClassName="activee" ><li><NotificationsNoneIcon className='icon' /><span>Notification</span></li></NavLink>

                    <p className="title">Main</p>

                    <li><ArticleIcon className='icon' /><span>Actualités</span></li>
                    <li><WorkOutlineIcon className='icon' /><span>Offres d'emplois</span></li>
                    <li><WorkOutlineIcon className='icon' /><span>Project</span></li>
                    <li><WorkOutlineIcon className='icon' /><span>Candidature Spontanée</span></li>
                    <li><WorkOutlineIcon className='icon' /><span>Demande de stage</span></li>
                    <li><ProductionQuantityLimitsIcon className='icon' /><span>Produit</span></li>
                    <li><ContactPageIcon className='icon' /><span>Contact</span></li>
                    <p className="title">User</p>

                    <li><AccountCircleIcon className='icon' /><span>Profil</span></li>
                    <li><LogoutIcon className='icon' /><span>Se déconnecter</span></li>


                </ul>
            </div>


            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
}

export default Sidebar;