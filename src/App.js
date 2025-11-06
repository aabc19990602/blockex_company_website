import "./App.css";
import { Routes, Route } from "react-router-dom";
import Publiclayout from "./layouts/public-layout";
import BuyNowLayout from "./layouts/buy-now";
import FirstPage from "./default";
import BuyNow from "./buyNow";
import Topkenomics from "./tokenomics";
import Roadmap from "./roadmap";
import Dashboardlayout from "./layouts/dashboard";
import DashboardHome from "./dashboard/home";
import AboutCompany from "./AboutCompany";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyComp from "./component/PrivacyPolicy";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import RiskComp from "./component/RiskComp";
import TermConditions from "./component/TermConditions";
import ScrollToTop from "./common/ScrollToTop";
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        {/* Public routes with PublicLayout */}
        <Route element={<Publiclayout />}>
          <Route path="/" element={<FirstPage />} />
          <Route path="/tokenomics" element={<Topkenomics />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/aboutus" element={<AboutCompany />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyComp />} />
          <Route path="/terms" element={<TermConditions />} />
          <Route path="/risk" element={<RiskComp />} />
        </Route>
        {/* <Route element={<BuyNowLayout />}>
          <Route path="/BuyNow" element={<BuyNow />} />
        </Route>
        <Route element={<Dashboardlayout />}>
          <Route path="/dashboard/home" element={<DashboardHome />} />
        </Route> */}
        {/* Catch-all route */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
