import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email} – thank you!`);
    setEmail('');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${contactName}. We’ll reply soon.`);
    setContactName('');
    setContactMessage('');
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">Café Lagos</div>
        <ul className="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
        </ul>
      </nav>

      {/* Hero Section with professional image */}
      <header className="hero">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Coffee and pastries" 
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1>Artisan Coffee & Patisserie</h1>
          <p>Experience the finest brews and delicate pastries in Lagos</p>
        </div>
      </header>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <h2>Our Selection</h2>
        <div className="menu-grid">
          {/* Coffee Items */}
          <div className="menu-category">
            <h3>Coffee</h3>
            <ul className="menu-items">
              <li><span>Espresso</span> <span>₦1,800</span></li>
              <li><span>Americano</span> <span>₦2,200</span></li>
              <li><span>Cappuccino</span> <span>₦2,800</span></li>
              <li><span>Latte</span> <span>₦3,000</span></li>
              <li><span>Mocha</span> <span>₦3,200</span></li>
            </ul>
          </div>
          {/* Pastry Items */}
          <div className="menu-category">
            <h3>Small Pastries</h3>
            <ul className="menu-items">
              <li><span>Croissant</span> <span>₦1,500</span></li>
              <li><span>Pain au Chocolat</span> <span>₦1,800</span></li>
              <li><span>Almond Danish</span> <span>₦2,200</span></li>
              <li><span>Blueberry Muffin</span> <span>₦1,900</span></li>
              <li><span>Raspberry Tartlet</span> <span>₦2,500</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact & Newsletter Forms */}
      <div className="forms-container" id="contact">
        <section className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleContactSubmit}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              required 
            />

            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              required 
            />

            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              rows="4"
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </section>

        <section className="newsletter-form" id="newsletter">
          <h2>Newsletter</h2>
          <p>Subscribe for exclusive offers and new arrivals</p>
          <form onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              placeholder="Your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Café Lagos. All rights reserved.</p>
        <p>📍 15 Awolowo Road, Ikoyi, Lagos</p>
      </footer>
    </div>
  );
}

export default App;
