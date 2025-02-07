import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/footer";
import Header from "./components/header";
import ECL from "./pages/ESL/ESL";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/product/ProductDetail/ProductDetail";
import CareersPage from "./pages/careers/CareersPage";
import ScrollToTop from "./components/ScrollToTop";
import ProductCategory from "./pages/product/ProductCategory/ProductCategory";
import Gemini from "./pages/gemini/Gemini";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
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
            path="/categories"
            element={
              <div className="w-full bg-white">
                <ProductCategory />
              </div>
            }
          />
          <Route
            path="/gemini"
            element={
              <div className="w-full bg-white">
                <Gemini />
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
