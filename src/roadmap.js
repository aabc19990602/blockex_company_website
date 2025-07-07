import "./roadmap.css";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import { useEffect } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Roadmap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      {/* <section className="roadMap" id="roadmap">
                <h1 className="roadMapH1">Roadmap</h1>
                <p className="roadMapP1">2025: Building the Future, Quarter by Quarter</p>
                <div className="container roadmapMTSlider">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider">
                                <div className="topIcon">
                                    <h1 className="point01">01</h1>
                                </div>
                                <h2 className="text-white roadMapH2">Foundation and Planning:</h2>
                                <ul className="text-white points">
                                    <li>Create Website</li>
                                    <li>Start Development on Blockchain</li>
                                    <li>Create All Social Media Accounts</li>
                                    <li>First ITO</li>
                                    <li>BlockEx Staking Mobile and Web App</li>
                                </ul>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slider">
                                <div className="topIcon">
                                    <h1 className="point02">02</h1>
                                </div>
                                <h2 className="text-white roadMapH2">Technical Development:</h2>
                                <ul className="text-white points">
                                    <li>Development on Blockchain</li>
                                    <li>Listing Coin with Exchange</li>
                                    <li>Tokenization Partnerships</li>
                                    <li>Marketing Collaborations</li>
                                </ul>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slider">
                                <div className="topIcon">
                                    <h1 className="point03">03</h1>
                                </div>
                                <h2 className="text-white roadMapH2">Prototype and Testing:</h2>
                                <ul className="text-white points">
                                    <li>Blockchain Testnet Launch</li>
                                    <li>More Exchange Listings</li>
                                    <li>Crypto Payment Gateway Development</li>
                                    <li>Tokenization Partnerships</li>
                                    <li>Marketing Collaborations</li>
                                </ul>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slider">
                                <div className="topIcon">
                                    <h1 className="point04">04</h1>
                                </div>
                                <h2 className="text-white roadMapH2">Pilot and Deployment:</h2>
                                <ul className="text-white points">
                                    <li>BlockEx Blockchain Mainnet Launch</li>
                                    <li>Crypto Payment Gateway Launch</li>
                                    <li>Tokenization Partnerships</li>
                                </ul>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section> */}
      <section className="roadMapBg">
        <div className="container">
          <p className="pt-5 text-white">Home {">>"} roadmap</p>
        </div>
        <h1 className="text-center roadmaph1" style={{ color: "#00F0FF" }}>
          Roadmap
        </h1>
        <p className="text-white text-center roadmapp1">
          2025-2026: Building the Future, Quarter by Quarter
        </p>
        <div className="timeline">
          <div className="container-timeline left">
            <div className="content">
              <h2 style={{ color: "#00F0FF" }}>2025 - QUARTER 3</h2>
              <ul>
                {/* <li style={{ listStyle: 'none', marginLeft: -20 + 'px' }}><i className="bi bi-check"></i> Create Website
                                </li> */}
                <li>Create Blockchain (testnet)</li>
                <li>Create All Social Media Accounts</li>
                <li>Initial Offering</li>
                <li>Create All Social Media Accounts</li>
                <li>BlockEX Staking Mobile and Web App</li>
              </ul>
            </div>
          </div>
          <div className="container-timeline right">
            <div className="content">
              <h2 style={{ color: "#00F0FF" }}>2025 - QUARTER 4</h2>
              <ul>
                <li>Start Development on Centralized Exchange</li>
                <li>Listing Our Coin with Exchange</li>
                <li>Partnerships and Collaborations</li>
              </ul>
            </div>
          </div>
          <div className="container-timeline left">
            <div className="content">
              <h2 style={{ color: "#00F0FF" }}>2026 - QUARTER 1</h2>
              <ul>
                <li>BlockEx DEX Launch</li>
                <li>BlockEx Centralized Exchange Launch</li>
                <li>Listing Coin in More exchanges</li>
                <li>BlockEx Mobile EVM Wallet</li>
              </ul>
            </div>
          </div>
          <div className="container-timeline right">
            <div className="content">
              <h2 style={{ color: "#00F0FF" }}>2026 - QUARTER 2</h2>
              <ul>
                <li>BlockEx Mastercard Launch</li>
                <li>BlockEx Card Platform Launch</li>
                <li>BlockEx Vendor Program</li>
              </ul>
            </div>
          </div>
          <div className="container-timeline left">
            <div className="content">
              <h2 style={{ color: "#00F0FF" }}>2026 - QUARTER 3</h2>
              <ul>
                <li>Crypto Payment Gateway</li>
                <li>Listing BlockEx coin in more Top exchange</li>
              </ul>
            </div>
          </div>
        </div>
        <section className="contactus" style={{ marginTop: 250 + "px" }}>
          <section
            style={{
              backgroundImage: "linear-gradient(to left, #00F0FF, #00C4F4)",
            }}
          >
            <div className="container">
              <div
                className="position-relative"
                style={{ paddingTop: 70 + "px", paddingBottom: 70 + "px" }}
              >
                <div className="d-flex flex-wrap">
                  <div className="part1">
                    <h1 style={{ color: "#000" }}>$500,000 Raised</h1>
                    <p style={{ color: "rgba(10, 11, 13, 0.6)" }}>
                      Join the BlockEx crypto presale, engage with the project,
                      <br /> and see your contribution grow to new heights.
                    </p>
                    {/* <button className='btn buyBtn'>Buy Now</button> */}
                    <a
                      href="https://exchangeblockex.com/launchpad"
                      target="_blank"
                      className="btn btnBuy m-0"
                      style={{background:"#171717"}}
                    >
                      Buy Now
                    </a>
                  </div>
                  <div className="part2">
                    <img
                      src="/assets/images/contact_coin.png"
                      className="img-fluid setImgPosition"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}
export default Roadmap;
