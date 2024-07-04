import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Contact.css';
import Breadcrumb from '../components/Breadcrumb';

const Contact = () => {
  return (
    <div>
      
      <Breadcrumb page="Contact Us"/>
      <main>
        
        <section className="contact-section">
        <aside className="contact-sidebar">
                <div className="contact-info">
                    <h3><i className="fas fa-phone-alt"></i> Call To Us</h3>
                    
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611122222</p>
                </div>
                <div className="contact-info">
                    <h3><i className="fas fa-envelope"></i> Write To Us</h3>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                </div>
            </aside>
            <div className="form-container">
                <h2>Contact Us</h2>
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Your Phone</label>
                            <input type="tel" id="phone" placeholder="Your Phone"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="save-btn">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
      </main>
      
    </div>
  );
}

export default Contact;
