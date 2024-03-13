import './navbar_admin.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
const Navbar_admin=()=>{
    return(
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type='text' placeholder='Search...'/>
                    <SearchIcon/>
                </div>
                <div className="items">
                    <div className="item">
<LanguageIcon className='icon'/> Français
                    </div>
                    <div className="item">
 <FullscreenExitOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
 <NotificationsNoneOutlinedIcon className='icon'/>
 <div className="counter">1</div>
                    </div>
                    <div className="item">
 <ChatBubbleOutlineIcon className='icon'/>
 <div className="counter">1</div>

                    </div>
                    <div className="item">
 <ListOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
<img src="logo.jpg" alt="" srcset=""  className='avatar'/>                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar_admin;