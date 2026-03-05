import ButtonGradient from "./assets/svg/ButtonGradient";
// import Footerr from "./components/Footer1";
import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";
import Home from "./AppPages/Home";
import ProgramPage from "./AppPages/ProgramPage";
import AboutPage from "./AppPages/AboutPage";
import ContactPage from "./AppPages/ContactPage";
import StrategyPage from "./AppPages/StrategyPage";
import Gallery from "./AppPages/Gallery";
import DonationPage from "./AppPages/DonationPage";
import Footer from "./components/Footer";
import UrgentNeeds from "./AppPages/UrgentNeeds";
import MinistryReport from "./AppPages/MinistryReport";
import Vision from "./AppPages/Vision";
import Navbar from "./components/Navbarr/Navbar";
// import Headerr from "./components/Headerr";

const App = () => {
  return (
    <>
      <div>
        {/* <Header /> */}
        {/* <Navbar /> */}
        {/* <Headerr /> */}
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<ProgramPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/strategy" element={<StrategyPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donations" element={<DonationPage />} />
          <Route path="/urgentneeds" element={<UrgentNeeds />} />
          <Route path="/blog" element={<MinistryReport />} />
          <Route path="/vision-mission" element={<Vision />} />
        </Routes>
      </div>
      <ButtonGradient />
      {/* <Footerr /> */}
      <Footer />
    </>
  );
};

export default App;
