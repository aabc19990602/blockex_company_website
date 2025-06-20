import Navbar from './common/navbar';
import Footer from './common/footer';
import Home from './home';
import AboutUs from './aboutUs';
import BlockChainSecurity from './blockChainSecurity';
import ContactUs from './contactus';
import AboutUs2 from './aboutUs2';
import MediaPartner from './media-partners';
import CompanyRegister from './company-register';
import ContactUs3 from './Contact';
function FirstPage() {
    return (
        <>
            <Navbar />
            <Home />
            <AboutUs />
            <BlockChainSecurity />
            <AboutUs2 />
            {/* <CompanyRegister /> */}
            <MediaPartner />
            <ContactUs />
            <ContactUs3 />
            <Footer />
        </>
    )
}
export default FirstPage