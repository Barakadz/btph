
 import Datatable from '../../component/datatable/datatable';
import Navbar_admin from '../../component/navbar_admin/navbar_admin';
import Sidebar from '../../component/sidebar/sidebar';
import './list.scss'
const List=()=>{
return (
    <div>
 <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar_admin/>
        <Datatable/>
       </div>
    </div>
    </div>
);
}
export default List;