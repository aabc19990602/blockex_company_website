import Swal from "sweetalert2";
function ContactUs() {
  function formSubmit(formData) {
    const query = formData.get("email");
    Swal.fire("Subscription activated");
  }
  return (
    <section className="contactus">
      <section className="contactUsBg2">
        <div className="container">
          <div className="borderSection position-relative">
            <div className="d-flex flex-wrap">
              <div className="part1">
                <h1> XBE Coin Trading</h1>

                <p>
                  {" "}
                  Trade smarter, faster, and safer with XBE <br />— the digital
                  asset engineered for growth.
                </p>
                {/* <p>Act now before you’re priced out.</p> */}
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
  );
}
export default ContactUs;
