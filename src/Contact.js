import Swal from 'sweetalert2'
function ContactUs3() {
    function formSubmit(formData) {
        const query = formData.get("email");
        Swal.fire('Subscription activated');
    }
    return (
        <section className="contactus" id="contactus">
            <section className="contactUsBg">
                <div className="container">
                    <div className="borderSection">
                        <div className="d-flex flex-wrap justify-content-around align-items-center">
                            <div className="part1">
                                <h1 style={{ color: "rgb(10, 11, 13)" }}>Contact Us!</h1>
                                <p style={{ color: "rgba(10, 11, 13, 0.7)" }}>Subscribe to receive BlockEx COIN newsletter and get<br /> the latest news, updates, and insights</p>
                            </div>
                            <div className="part2">
                                <div className="row">
                                    <form action={formSubmit}>
                                        <div className="inputGroup">
                                            <input
                                                type="email"
                                                className="bg-transparent py-2 px-3"
                                                placeholder="Email Here"
                                                name="email"
                                                required
                                            />
                                            <button
                                                className="btn BtnSubmit"
                                                type="submit"
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default ContactUs3