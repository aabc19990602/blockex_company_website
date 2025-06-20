import './App.css';
import { Routes, Route } from 'react-router-dom';
import Publiclayout from './layouts/public-layout';
import BuyNowLayout from './layouts/buy-now';
import FirstPage from './default';
import BuyNow from './buyNow';
import Topkenomics from './tokenomics';
import Roadmap from './roadmap';
import Dashboardlayout from './layouts/dashboard';
import DashboardHome from './dashboard/home';
import AboutCompany from './AboutCompany';
function App() {
  return (
    <Routes>
      {/* Public routes with PublicLayout */}
      <Route element={<Publiclayout />}>
        <Route path="/" element={<FirstPage />} />
        <Route path="/tokenomics" element={<Topkenomics />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/aboutus" element={<AboutCompany />} />
      </Route>
      <Route element={<BuyNowLayout />}>
        <Route path="/BuyNow" element={<BuyNow />} />
      </Route>
      <Route element={<Dashboardlayout />}>
        <Route path="/dashboard/home" element={<DashboardHome />} />
      </Route>
      {/* Catch-all route */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
