import { Link, useNavigate } from "react-router-dom"
import { useConnect, useAccount, useDisconnect } from 'wagmi';
function Navbar() {
    const route = useNavigate();
    const { disconnect } = useDisconnect();
    const { isConnected } = useAccount();
    if (!isConnected) {
        route('/BuyNow');
    }
    return (
        <div className="d-flex align-items-center paddingNavbar">
            <img src="/assets/logo/logo.svg" className="img-fluid" />
            <button className="btn btnToggle"><img src="/assets/images/dashboard/icons/arrow.svg" width={10} height={10} /></button>
            <div className="navbarContainer">
                <div>
                    <p className="dash_title">Sentos Dashboard v1</p>
                </div>
                <div className="d-flex">
                    <p className="options">Go Live</p>
                    <p className="options"><img src="/assets/images/dashboard/icons/bell.png" className="img-fluid" /> Notifications</p>
                    <p className="options"><img src="/assets/images/dashboard/icons/logout.png" className="img-fluid" /><a className="logout" onClick={() => disconnect()} >Logout</a></p>
                </div>
            </div>
        </div>
    )
}
export default Navbar