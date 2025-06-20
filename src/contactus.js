import Swal from 'sweetalert2'
function ContactUs() {
    function formSubmit(formData) {
        const query = formData.get("email");
        Swal.fire('Subscription activated');
    }
    return (
        <section className="contactus">
            <section className="contactUsBg2">
                <div className="container">
                    <div className="borderSection position-relative">
                        <div className="d-flex flex-wrap">
                            <div className="part1">
                                <h1>$500,000 Raised</h1>
                                <p>Join the BlockEx crypto presale, engage with the project,<br /> and see your contribution grow to new heights.</p>
                                <button className='btn buyBtn'>Buy Now</button>
                                <button className='btn howToBuy'>How to Buy?</button>
                            </div>
                            <div className='part2'>
                                 <img src='/assets/images/contact_coin.png' className='img-fluid setImgPosition' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default ContactUs