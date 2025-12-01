// import Navbar from "./common/navbar";
// import Footer from "./common/footer";
import { useEffect } from "react";
function Topkenomics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <div className="roadMapBg">
        <div className="container">
          <p className="mt-5 text-white">Home {">>"} Tokenomics</p>
        </div>
        <section className="" id="tokenomics">
          <h1 className="TopkenomicsH1">TOKENOMICS</h1>
          <p className="TopkenomicsP1">Tokenomics of BlocEx Coin</p>
          <p className="TopkenomicsP2">
            This tokenomics is designed for sustainability and growth, ensuring
            a balanced
            <br /> supply and demand. With a strategic allocations
          </p>

          <div className="container">
            <div className="row justify-content-center TopkenomicsPadding">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="d-flex flex-column">
                  <div className="place-end position-relative">
                    <div>
                      <h2 className="TopkenomicsH2">
                        <span className="box1"></span>Early Contribute
                        <span className="percentage">7.0%</span>
                      </h2>
                    </div>
                    <div>
                      <h2 className="TopkenomicsH2">
                        <span className="box2"></span>Series A Funding{" "}
                        <span className="percentage">10.0%</span>
                      </h2>
                    </div>
                    <div>
                      <h2 className="TopkenomicsH2">
                        <span className="box3"></span>Series B Funding{" "}
                        <span className="percentage">8.0%</span>
                      </h2>
                    </div>
                    <div>
                      <h2 className="TopkenomicsH2">
                        <span className="box4"></span>Exchange Liquidity{" "}
                        <span className="percentage">50.0%</span>
                      </h2>
                    </div>
                    <div>
                      <h2 className="TopkenomicsH2">
                        <span className="box5"></span>Staking Subsidies
                        <span className="percentage">10.0%</span>
                      </h2>
                    </div>
                    <div>
                      <h2 className="TopkenomicsH2">
                        <span className="box6"></span>Marketing{" "}
                        <span className="percentage">8.5%</span>
                      </h2>
                    </div>
                    <div>
                      <h2 className="TopkenomicsH2">
                        <span className="box7"></span>Company
                        <span className="percentage">3.5%</span>
                      </h2>
                    </div>
                    <div>
                      <h2 className="TopkenomicsH2">
                        <span className="box8"></span>Team{" "}
                        <span className="percentage">3.0%</span>
                      </h2>
                    </div>
                    {/* <div>
                                        <h2 className="TopkenomicsH2"><span className="box9"></span>Development : <span className="percentage">5%</span></h2>
                                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                <img
                  src="assets/images/pie-05.svg"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="contactus" id="contactus">
          <section className="contactUsBg">
            <div className="container">
              <div className="position-relative">
                <div className="d-flex flex-wrap">
                  <div className="part1">
                    <h1 style={{ color: "#000" }}>XBE Coin Trading</h1>
                    <p style={{ color: "rgba(10, 11, 13, 0.6)" }}>
                      {" "}
                      Trade smarter, faster, and safer with XBE <br />— the
                      digital asset engineered for growth.
                    </p>
                    {/* <button className='btn buyBtn'>Buy Now</button> */}
                    <a
                      href="https://exchangeblockex.com/"
                      target="_blank"
                      className="btn btnBuy m-0"
                      rel="noreferrer"
                      style={{ background: "#171717" }}
                    >
                      Trade Now
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
      </div>
      {/* <Footer /> */}
    </>
  );
}
export default Topkenomics;
