import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/MyAccount.css';
import Breadcrumb from '../components/Breadcrumb';



const MyAccount = () => {
  return (
    <div>
      
      <Breadcrumb  page="My Account"/>
      <main>
        
        <section className="account-section">
            <aside className="sidebar">
                <h3>Manage My Account</h3>
                <ul>
                    <li><a href="#" className="active">My Profile</a></li>
                    <li><a href="#">Address Book</a></li>
                    <li><a href="#">My Payment Options</a></li>
                </ul>
                <h3>My Orders</h3>
                <ul>
                    <li><a href="#">My Returns</a></li>
                    <li><a href="#">My Cancellations</a></li>
                </ul>
                <h3>My Wishlist</h3>
            </aside>
            <div className="form-container">
                <h2>Edit Your Profile</h2>
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" placeholder="Md"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" placeholder="Rimel"/>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="rimel111@gmail.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" placeholder="Kingston, 5236, United States"/>
                    </div>
                    <h3>Password Changes</h3>
                    <div className="form-group">
                        <label htmlFor="current-password"></label>
                        <input type="password" id="current-password" placeholder="Current Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-password"></label>
                        <input type="password" id="new-password" placeholder="New Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password"></label>
                        <input type="password" id="confirm-password" placeholder="Confirm New Password"/>
                    </div>
                    <div className="form-actions">
                        <button type="button" id="cancel-btn">Cancel</button>
                        <button type="submit" className="save-btn">Save Changes</button>
                    </div>
                </form>
            </div>
        </section>
      </main>
      
    </div>
  );
}

export default MyAccount;
