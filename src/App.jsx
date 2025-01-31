import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ECL from "./pages/ESL/ESL";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/ecl" element={<ECL />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
