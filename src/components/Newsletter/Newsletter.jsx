import "./Newsletter.css";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-title">
          Stay ahead with exclusive announcements and updates!
        </h2>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
