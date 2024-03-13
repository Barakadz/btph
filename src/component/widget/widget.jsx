import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
const Widget=({type})=>{
    let data;
    
    switch(type){
        case "actualites":
            data={
                    title:"Actualités",
                    isMoney:false,
                    link:"Voir tous les actualités",
                    icon:<PersonOutlineOutlinedIcon className='icon' style={{backgroundColor:'rgba(255,0,0,0.2)',color:'crimson'}}  />,
            }
            break
        case "candidature":
            data={
                title:"Candidature",
                isMoney:false,
                link:"Voir tous les candidatures",
                icon:<FilterFramesOutlinedIcon className='icon' style={{backgroundColor:'rgba(218,165,32,0.2)',color:'goldenrod'}}/>,
            }
            break
        case "projet":
            data={
                title:"Projet",
                isMoney:true,
                link:"Voir toutes les projets",
                icon:<MonitorOutlinedIcon className='icon' style={{backgroundColor:'rgba(0,128,0,0.2)',color:'green'}}/>,
                }
            break 
        case "contact":
            data={
                title:"contact",
                isMoney:true,
                link:"Voir toutes les contacts",
                icon:<AccountBalanceOutlinedIcon className='icon' style={{backgroundColor:'rgba(128,0,128,0.2)',color:'purple'}}/>,
                }
            break;
        default:
            break;
       
    }
    return(
        <div className='widget'>
            <div className="left">
                <span className='title text-uppercase'>{data.title}</span>
                <span className="counter">{data.isMoney && "$"} 10</span>
                <span className="link"> {data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive"><KeyboardArrowUpOutlinedIcon/>20 %</div>
{data.icon}        
    </div>
        </div>
    )
}

export default Widget;