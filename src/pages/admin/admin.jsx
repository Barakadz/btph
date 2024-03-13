
import { Table } from '@mui/material';
import Chart from '../../component/chart/chart';
import Featured from '../../component/featured/featured';
import Navbar_admin from '../../component/navbar_admin/navbar_admin';
import Sidebar from '../../component/sidebar/sidebar';
import Widget from '../../component/widget/widget';
import './admin.scss'
import Tablee from '../../component/table/table';

const Admin=()=>{

    return(
        <div className='home'>
<Sidebar/>
<div className='homeContainer'>
    <Navbar_admin/>
<div className="widgets">
    <Widget type="actualites"/>
    <Widget type="candidature"/>
    <Widget type="projet"/>
    <Widget type="contact"/>

</div>
<div className="charts">
    <Featured/>
    <Chart/>
</div>
<div className="listContainer">
    <div className="listTitle">Dernières Contact</div>
    <Tablee/>
</div>
</div>
        </div>
    );
}

export default Admin;