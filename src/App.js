import React from "react";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "../src/App.css";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeesBlog from "./pages/EmployeesBlog";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./components/ContactPage";
import FaqsPage from "./pages/FaqsPage";
import SerivecesPage from "./pages/SerivecesPage";
import PrivacypolicyPage from "./pages/PrivacypolicyPage";
import TermsandCondtionsPage from "./pages/TermsandCondtionsPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/"  element={<HomePage />} />
          <Route exact path="/home"  element={<HomePage />} />
          <Route exact path="/about"  element={<AboutPage />} />
          <Route exact path="/blogs"  element={<EmployeesBlog />} />
          <Route exact path="/careers"  element={ <CareersPage /> } />
          <Route exact path="/contactus"  element={ <ContactPage /> } />
          <Route exact path="/faqs"  element={ <FaqsPage /> } />
          <Route exact path="/services"  element={ <SerivecesPage /> } />
          <Route exact path="/privacypolicy"  element={ <PrivacypolicyPage /> } />
          <Route exact path="/termsandconditions"  element={ <TermsandCondtionsPage /> } />
          <Route exact path="*"  element={ <ErrorPage /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
