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
                <h1> Listing Coming</h1>
                <h1>Soon</h1>
                <p>
                  {" "}
                  Be part of the next chapter in crypto innovation staking,{" "}
                  <br />
                  launchpad access, and more are just around the corner.
                </p>
                {/* <p>Act now before you’re priced out.</p> */}
                {/* <a href='https://exchangeblockex.com/launchpad' target="_blank" className='btn buyBtn'>Buy Now</a> */}
              </div>
              <div className="part2">
                <img
                  src="/assets/images/contact_coin.png"
                  className="img-fluid setImgPosition"
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
