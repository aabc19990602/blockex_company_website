import '../dashboard/dashboard.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../dashboard/common/navbar';
import SiderBar from '../dashboard/common/sideBar';
function Dashboardlayout() {
    return (
        <div className='dashboardBG'>
            <Navbar />
            <div className='d-flex'>
                <div>
                    <SiderBar />
                </div>
                <div className='flex-grow-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Dashboardlayout