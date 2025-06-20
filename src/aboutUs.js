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
                <div className="outli" style={{}}>
                    Presale
                </div>
                <div className="aboutSection1">
                    <h5>Ground-Breaking Crypto Presale 2025</h5>
                    <p>Join the BlockEx crypto presale 2025, engage with the project, and<br /> see your contribution grow to new heights.</p>
                    <h1>$500,000 Raised</h1>
                    <div className="d-flex flex-wrap justify-content-center">
                        {/* <a className="btn btnBuy">Join Presale</a> */}
                        <a className="btn buyBtn">How to Buy?</a>
                    </div>
                    <div className="text-center mt-5">
                        <video height={300} width={300} autoPlay loop muted playsInline controls={false}>
                            <source src="https://blockex.s3.us-east-1.amazonaws.com/Final_Video-Black_screen0000-0158.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

            </section>
        </>
    )
}
export default AboutUs