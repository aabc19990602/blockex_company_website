import React, { useEffect } from 'react'
import Navbar from './common/navbar';
import Footer from './common/footer';

const AboutCompany = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar />
            <div className='roadMapBg'>

                <div className='container'>
                    <p className='mt-5 text-white'>Home  {'>>'} About Us</p>
                </div>
                <section className="Topkenomics" id="aboutcompany">
                    <h1 className="TopkenomicsH1">About Compnay</h1>
                    <p className="TopkenomicsP1">About BlockEx </p>
                    {/* <p className="TopkenomicsP2">This tokenomics is designed for sustainability and growth, ensuring a balanced<br /> supply and demand. With a strategic allocations</p> */}
                </section >
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-lg-6 col-md-8 col-12  order-md-1 order-2'>
                            <p className='text-white' style={{ fontSize: "18px", textAlign: "justify" }}>
                                Driven by this vision, we set out to create a comprehensive suite of payment solutions tailored to meet the diverse needs of businesses and individuals. At BlockEX, we're passionate about revolutionizing the way people transact in the digital age. Founded by a team of experienced professionals in both the financial and technological sectors, BlockEX is dedicated to making cryptocurrency payments simple, secure, and accessible to everyone, everywhere.

                                Our journey began with a simple yet powerful idea: to bridge the gap between traditional finance and the innovative world of blockchain technology. We recognized the immense potential of cryptocurrencies to transform global services and ideas by enabling instant, borderless transactions with unprecedented levels of security and transparency.

                                What sets us apart is our unwavering commitment to our community satisfaction and trust. We prioritize the security of your funds and personal data above all else. But we're not just a payment platform. We're a community of forward-thinkers, innovators, and changemakers united by a shared belief in the transformative power of cryptocurrencies. Through education, advocacy, and collaboration, we're empowering individuals and businesses to embrace the future of finance and participate in the decentralized economy.

                                Join us on this exciting journey as we redefine the way the world transacts, one block at a time.
                            </p>
                        </div>
                        <div className='col-lg-6 col-md-4 col-12 order-md-2 order-1'>
                            <img src="/assets/images/aboutImg.png" className="img-fluid " alt="img" />
                        </div>

                    </div>
                    <div className='row justify-content-center align-items-center mt-3'>
                        <div className='col-lg-6 col-md-4 col-12'>
                            <img src="/assets/images/aboutImg.png" className="img-fluid " alt="img" />
                        </div>
                        <div className='col-lg-6 col-md-8 col-12'>
                            <h2 className="aboutH2" style={{ paddingLeft: "0px" }}>Vission</h2>
                            <p className='text-white' style={{ fontSize: "18px", textAlign: "justify" }}>
                                Empowering transactions across borders with crypto freedom.
                            </p>
                        </div>


                    </div>
                    <div className='row justify-content-center align-items-center mt-3'>

                        <div className='col-lg-6 col-md-8 col-12 order-md-1 order-2'>
                            <h2 className="aboutH2" style={{ paddingLeft: "0px" }}>Mission</h2>
                            <p className='text-white ord' style={{ fontSize: "18px", textAlign: "justify" }}>
                                Empowering individuals and businesses globally, our payment-focused cryptocurrency aims to revolutionize transactions with seamless efficiency, security, and accessibility, driving financial empowerment and innovation.
                            </p>
                        </div>
                        <div className='col-lg-6 col-md-4 col-12 order-md-1 order-1'>
                            <img src="/assets/images/aboutImg.png" className="img-fluid" alt="img" />
                        </div>


                    </div>

                </div>
            </div>

            <Footer />


        </>
    )
}

export default AboutCompany
