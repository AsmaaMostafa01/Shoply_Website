import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import Breadcrumb from '../components/Breadcrumb';

const Login = () => {
  return (
    <div>
      <Header />
      <Breadcrumb page="Log In"/>
      <main>
        <section className="content">
            <img src="/sign up.jpg" alt="Shopping "/>
            <div className="form-container">
                <h2>Log In</h2>
                <p>Enter your credentials below</p>
                <form>
                    <input type="email" placeholder="Email or Phone Number" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Log In</button>
                    <button className="google-login"><img src="/google.png" alt="Google Icon"/>
                        Log in with Google</button>
                </form>
                <div className="signup-link">
                    <span>Don't have an account? <a href="#">Sign Up</a></span>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
