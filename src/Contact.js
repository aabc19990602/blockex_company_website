import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs3() {
    function formSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");

        // Show success toast
        toast.success('Subscription activated', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        // Optional: reset form
        e.target.reset();
    }

    return (
        <section className="contactus" id="contactus">
            <section className="contactUsBg">
                <div className="container">
                    <div className="borderSection">
                        <div className="d-flex flex-wrap justify-content-around align-items-center">
                            <div className="part1">
                                <h1 style={{ color: "rgb(10, 11, 13)" }}>Newsletter</h1>
                                <p style={{ color: "rgba(10, 11, 13, 0.7)" }}>
                                    Subscribe to receive BlockEx Coin newsletter and get<br />
                                    the latest news, updates, and insights
                                </p>
                            </div>
                            <div className="part2">
                                <div className="row">
                                    <form onSubmit={formSubmit}>
                                        <div className="inputGroup">
                                            <input
                                                type="email"
                                                className="bg-transparent py-2 px-3 emailInput"
                                                placeholder="Email Here"
                                                name="email"
                                                required
                                            />
                                            <button
                                                className="btn BtnSubmit"
                                                style={{background:"#171717"}}
                                                type="submit"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Place ToastContainer once in your app — typically near root */}
            <ToastContainer />
        </section>
    );
}

export default ContactUs3;
