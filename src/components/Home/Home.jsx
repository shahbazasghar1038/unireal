import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        {/* <h1 className="hero-title">Smart Displays, Smarter Insights</h1>
        <p className="hero-subtitle">Redefining Engagement with AI</p>*/}
        <div className="hero-image-container">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bd3AJJhhvOxohHTsKdyNaPwY0QzKQy.png"
            alt="Smart Display Demo"
            className="hero-image"
          />
        </div>
        {/*
        <p className="hero-description">
          Effortless screen management - anytime, anywhere
        </p>
        */}
      </section>

      {/* Brands Section
      <section className="brands">
        <div className="brands-container">
          <img src="/coca-cola.png" alt="Coca Cola" className="brand-logo" />
          <img src="/premier.png" alt="Premier" className="brand-logo" />
          <img src="/lioncroft.png" alt="Lioncroft" className="brand-logo" />
          <img src="/united.png" alt="United" className="brand-logo" />
        </div>
      </section>
       */}

      {/* Digital Signage Section */}
      <section className="digital-signage">
        {/*
        <h2>Bring Your Brand to Life with</h2>
        <h3 className="gradient-text">Smart Digital Signage</h3>
        */}
        <div className="signage-demo">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rJS0Xm14SEBDHO2YbZVViquHTMA5v6.png"
            alt="Digital Signage Demo"
            className="demo-image"
          />
        </div>
        {/*
        <button className="learn-more">Learn more →</button>
        */}
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-image ai-image"></div>
          <h3>AI That Sees, Understands, and Helps You Engage Smarter.</h3>
          <button className="learn-more">Learn more</button>
        </div>
        <div className="feature-card">
          <div className="feature-image promo-image"></div>
          <h3>Promos That Captivate and Keep Them Coming Back for More</h3>
          <button className="learn-more">Learn more</button>
        </div>
      </section>

      {/* Dynamic Pricing Section */}
      <section className="dynamic-pricing">
        <h2>Dynamic Pricing, Instant Updates</h2>
        <div className="pricing-text">
          <span className="blue-text">Zero</span>
          <span className="purple-text">Paper</span>
          <span className="orange-text">Waste</span>
        </div>
        <div className="price-tags-image">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZWD6O5kJUcaanoyrpwuflSLKlfPCp5.png"
            alt="Digital Price Tags"
          />
        </div>
        <button className="learn-more">Learn more →</button>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/touch-screen-table.png" alt="Touch Screen Table" />
            <h3>Touch Screen Table</h3>
            <p>1 line Description</p>
          </div>
          <div className="product-card">
            <img src="/digital-poster.png" alt="Digital Posters" />
            <h3>Digital Posters</h3>
            <p>1 line Description</p>
          </div>
          <div className="product-card">
            <img src="/esl.png" alt="ESL" />
            <h3>ESL</h3>
            <p>1 line Description</p>
          </div>
        </div>
        <button className="see-all">See All</button>
      </section>
    </div>
  );
};

export default Home;
