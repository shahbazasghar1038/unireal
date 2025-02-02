import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/footer";
import Header from "./components/header";
import ECL from "./pages/ESL/ESL";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <div className="w-full overflow-hidden">
                <Home />
              </div>
            }
          />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/ecl" element={<ECL />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
