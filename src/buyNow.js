import { Link, useNavigate  } from 'react-router-dom';
import './buyNow.css';
import { useConnect, useAccount, useDisconnect, useConfig } from 'wagmi';
import { useEffect } from 'react';
function BuyNow() {
    const { connectors, connect, status, error } = useConnect();
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const navigate = useNavigate();
    // Get the Wagmi config
    const config = useConfig();
    useEffect(()=> {
        if (isConnected){
            navigate('/dashboard/home');
        }
    })
    return (
        <div className="buyNowBg">
            <div className="loginBox">
                <div className='col-12 boxBG'>
                    <p className='text-center'><img src='/assets/images/dashboard/logoStar.png' width="300" height="60" /></p>
                    <h1 className='login_title'>Welcome to BlockEx Dashboard</h1>
                    <p className='login_p'>To reach dashboard connect your wallet first!</p>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <Link className='goHome' to='/'>Go Home</Link>
                        <Link
                           
                            onClick={() => connect({ connector: config.connectors[0] })}
                            disabled={status === 'pending'}
                            className="disabled:opacity-50 connectWallet"
                        >
                            {status === 'pending' ? 'Connecting...' : 'Connect MetaMask'}
                        </Link>
                    </div>
                    <p className='text-white'>{address}</p>
                </div>
            </div>
        </div>
    )
}
export default BuyNow