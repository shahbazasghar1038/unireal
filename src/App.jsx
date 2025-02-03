import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/footer";
import Header from "./components/header";
import ECL from "./pages/ESL/ESL";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/product/ProductDetail/ProductDetail";
import CareersPage from "./pages/careers/CareersPage";

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
          <Route path="/esl" element={<ECL />} />
          <Route path="/career" element={<CareersPage />} />
          <Route
            path="/products"
            element={
              <div className="w-full bg-white">
                <Product />
              </div>
            }
          />
          <Route
            path="/product/:id"
            element={
              <div className="w-full bg-white pt-[80px] !text-black">
                <ProductDetail />
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
