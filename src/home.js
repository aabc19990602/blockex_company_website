// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import CountDown from "./common/timer";
// import { Link } from 'react-router-dom';
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        // autoplay={false}
        autoplay={{
          delay: 2000, // Auto-slide every 3 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
      >
        <SwiperSlide>
          <section className="homeBg" id="home">
            <div className="row blackGradient">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="d-flex justify-content-center">
                  <div className="mainDiv">
                    <div className="pl">
                      <p className="homep01">WELCOME TO BlockEx</p>
                      <h1 className="homeH1">
                        Pioneering Blockchain Innovation in Real Estate.
                      </h1>
                      <p className="homep1">
                        Invest in the future of property with lightning-fast
                        crypto tech, fortified by top-tier security and
                        intelligent automation.
                      </p>
                      <p className="homep2">
                        Scalable, secure, and ahead of its time.
                      </p>
                      {/* <div className='d-flex'>
                                                <a href='/assets/app-release.apk' download className="homeBtn"><img src="/assets/images/google-store.svg" alt='play-store' /></a>
                                                <a className="homeBtn"><img src="/assets/images/apple-store.svg" alt='app store' /></a>
                                            </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-cneter">
                <div className="mainDiv">
                  <div className="pr">
                    {/* <img src="/assets/images/homeImg.png" className="img-fluid d-sm-None mt" /> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <div className='paymentMethods'>
                        <div className='d-flex flex-wrap'>
                            <div><p className='mb-0 mt-1 me-2'>Presale is Live</p></div>
                            <div className='payments-icons'>
                                <img src='/assets/images/home-slider4.png' className='img-fluid' alt='icon' />
                                <img src='/assets/images/home-slider5.png' className='img-fluid' alt='icon' />
                                <img src='/assets/images/home-slider6.png' className='img-fluid' alt='icon' />
                                <img src='/assets/images/home-slider7.png' className='img-fluid' alt='icon' />
                                <img src='/assets/images/home-slider1.png' className='img-fluid' alt='icon' />
                                <img src='/assets/images/home-slider2.png' className='img-fluid' alt='icon' />
                                <img src='/assets/images/home-slider3.png' className='img-fluid' alt='icon' />

                            </div>
                            <div>
                                <Link className='buyNowBtn' to='/'>Buy Now</Link>
                            </div>
                        </div>
                    </div> */}
        </SwiperSlide>

        <SwiperSlide>
          <section className="homeBg2 position-relative" id="home">
            <div className="row blackGradient position-relative">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="">
                  <div className="mainDiv">
                    <div className="pl2">
                      <h1 className="slider2_h1">
                        A New Era of <br /> Trading on <br /> BlockEx.
                      </h1>
                      <p className="slider2_p">Coming Soon</p>
                      <CountDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="homeBg5 position-relative" id="home">
            <div className="row blackGradient position-relative">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="">
                  <div className="mainDiv">
                    <div className="pl2">
                      <h1 className="slider2_h1">
                        We Give Back <br /> to the <br /> Community.
                      </h1>
                      <p className="slider2_p" style={{ fontSize: "18px" }}>
                        14% of Trading{" "}
                        <span
                        className="p-1 rounded"
                          style={{
                            background: "#00D8E6",
                            color:"black"
                          }}
                        >
                          Fees go back to you.
                        </span>
                      </p>
                      <CountDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="homeBg7 position-relative" id="home">
            <div className="row blackGradient position-relative">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="">
                  <div className="mainDiv">
                    <div className="pl2">
                      <h1 className="slider2_h1">
                        BlockEx <br /> Mobile App <br />
                      </h1>
                      <p className="slider2_p">Coming Soon</p>
                      {/* <CountDown /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="homeBg3 position-relative" id="home">
            <div className="blackGradient">
              <div className="mainDiv3">
                <div className="pl3 mt-0 mt-md-5">
                  <h1
                    className="slider2_h1 mt-0 mt-md-5"
                    style={{ fontSize: "90px" }}
                  >
                    A New Era of <br /> Trading on <br /> BlockEx.
                  </h1>
                  {/* <h1 className="slider2_h1" style={{ fontSize: "50px" }}>
                    ITO - Over Now
                  </h1> */}
                  <p className="slider2_p">Coming Soon</p>
                  {/* <a
                    href="https://exchangeblockex.com/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  > */}
                  {/* <p className='sliderp2_3 mt-2'>Buy Now XBE</p> */}
                  {/* </a */}
                  {/* <div className='d-flex justify-content-start'><div className='line'></div></div> */}
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Home;
