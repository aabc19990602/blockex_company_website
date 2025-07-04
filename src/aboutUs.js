import { useState } from "react";
// import { Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CountDown from "./common/timer";


function AboutUs() {
    const [isCopied, setIsCopied] = useState(false);
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('0xd244fd7DB9be910dA7E1c9670C6F9eF263aFf394');
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    return (
        <>

            <section className="aboutUs" style={{ background: "black" }} >
                <div className="outli m-0 p-0" style={{}}>
                    BlockEx
                </div>
                <div className="aboutSection1">
                    <h5 className="text-uppercase fw-bold m-0 p-0">Why choose our BlockEX Coin (XBE)
                    </h5>
                    <div className="container mt-5">
                        <div className="row justify-content-center align-items-center text-center text-white">
                            <div className="col-lg-4 col-md-4 col-12  150">
                                <div className="px-5 py-3">
                                    <div>
                                        <img src="/assets/images/WhyBlockEx/blockex_exchange.png" alt="" className="img-fluid" width={"150px"} />
                                    </div>
                                    <p style={{ fontSize: "20px" }} className="fw-bold text-capitalize">BlockEx Blockchain</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12  150">
                                <div className="px-5 py-3">
                                    <div>
                                        <img src="/assets/images/WhyBlockEx/Blocex.png" alt="" className="img-fluid" width={"150px"} />
                                    </div>
                                    <p style={{ fontSize: "20px" }} className="fw-bold text-capitalize">BlockEx Exchange</p>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-4 col-12  150">
                                <div className="px-5 py-3">
                                    <div>
                                        <img src="/assets/images/WhyBlockEx/Sercurity_&_Reliability.png" alt="" className="img-fluid" width={"150px"} />
                                    </div>
                                    <p style={{ fontSize: "20px" }} className="fw-bold text-capitalize">Security & Reliability</p>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-4 col-12  150">
                                <div className="px-5 py-3">
                                    <div>
                                        <img src="/assets/images/WhyBlockEx/Global_acceptance.png" alt="" className="img-fluid" width={"150px"} />
                                    </div>
                                    <p style={{ fontSize: "20px" }} className="fw-bold text-capitalize">Global Acceptance</p>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-4 col-12  150">
                                <div className="px-5 py-3">
                                    <div>
                                        <img src="/assets/images/WhyBlockEx/Transparency_and_trust.png" alt="" className="img-fluid" width={"150px"} />
                                    </div>
                                    <p style={{ fontSize: "20px" }} className="fw-bold text-capitalize">Transparency & trust</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 ">
                                <div className="px-5 py-3">
                                    <div>
                                        <img src="/assets/images/WhyBlockEx/Cross_border_payment_gateway.png" alt="" className="img-fluid" width={"150px"} />
                                    </div>
                                    <p style={{ fontSize: "20px" }} className="fw-bold text-capitalize">Cross  payment gateway </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <p>Join the BlockEx crypto presale 2025, engage with the project, and<br /> see your contribution grow to new heights.</p>
                    <h1>$500,000 Raised</h1>
                    <div className="d-flex flex-wrap justify-content-center">
                    
                        <a className="btn buyBtn">How to Buy?</a>
                    </div>
                    <div className="text-center 150">
                        <video height={150} width={150} autoPlay loop muted playsInline controls={false}>
                            <source src="https://blockex.s3.us-east-1.amazonaws.com/Final_Video-Black_screen0000-0158.mp4" type="video/mp4" />
                        </video>
                    </div> */}
                </div>

            </section>
        </>
    )
}
export default AboutUs