import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";



function Footer() {
    return (
        <footer>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <img src="/assets/logo/logo.svg" className="img-fluid mb-4" alt="img" />
                        <p className="text-white" style={{ fontSize: "14px" }}><span className="fw-medium">Power your future with BlockEx.</span><br />
                            Seamless crypto transactions, top-tier security, and AI-powered performance you can trust.
                            Engineered for speed, innovation, and limitless growth..</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                        <h3 className="text-white mb-4" style={{ fontSize: "20px" }}>Quick Links</h3>
                        <div className="d-flex">
                            <div className="me-5">
                                <HashLink className="footerLink" to="/#aboutus">About</HashLink>
                                <Link className="footerLink" to="/tokenomics">Tokenomics</Link>
                            </div>
                            <div>
                                <Link className="footerLink" to="/roadmap">Roadmap</Link>
                                <HashLink className="footerLink" to="/#contactus">Contact us</HashLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 text-center borderLeft">
                        <h3 className="text-white mb-4" style={{ fontSize: "20px" }}>Join the BlockEx community</h3>
                        <div className="d-flex justify-content-center mb-4">
                            <div className="mx-2"><a href="https://x.com/xbeBlockex?t=Nn5NsnzwY-D9DMfoy3y-EQ&s=09" target="_blank"><FaXTwitter size={24} color="#fff" /></a></div>
                            <div className="mx-2"><a href="https://t.me/bllockex" target="_blank"><PiTelegramLogo size={24} color="#fff" /></a></div>
                            <div className="mx-2"><a href="https://www.instagram.com/xbeblockchain?igsh=MTB1azlvdGgyb2lwdA==" target="_blank"><IoLogoInstagram size={24} color="#fff" /></a></div>
                            <div className="mx-2"> <a href="https://www.facebook.com/share/16WGV3imvK/" target="_blank"><FaFacebookF size={24} color="#fff" /></a></div>
                        </div>
                        <p className="text-center text-white" style={{ fontSize: "14px" }}>Follow us for the latest updates, market insights, and blockchain breakthroughs.
                            Let’s shape the next generation of digital finance together.</p>
                    </div>
                </div>
            </div>
            <div className="borderBottom"></div>
            <div className="p-3">
                <p className="text-center text-white mb-0" style={{ fontSize: "14px" }}>Copyright © {new Date().getFullYear()} - All Rights Reserved</p>
            </div>
        </footer>
    )
}
export default Footer