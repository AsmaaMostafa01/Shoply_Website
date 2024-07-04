import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

import '../App.css';
import Breadcrumb from '../components/Breadcrumb';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
});
const [error, setError] = useState(null);


const { username, email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);
            console.log(res.data);
            setError(null);
        } catch (err) {
            console.error(err.response.data);
            setError(err.response.data.msg);
        }
    };
  return (
    <div>
      <Header />
      <Breadcrumb page="Sign Up " />
      <main> 
        <section className="content">
                <img src="/sign up.jpg" alt="Shopping"/>
                <div className="form-container">
                    <h2>Create an account</h2>
                    <p>Enter your details below</p>
                    <form onSubmit={onSubmit}>
                        <input 
                         type="text"
                         placeholder="Name"
                         required
                         name="username"
                         value={username}
                         onChange={onChange} />

                        <input 
                          type="email" 
                          placeholder="Email or Phone Number" 
                          name="email"
                          value={email}
                          onChange={onChange} 
                          required />

                        <input
                          type="password" 
                          placeholder="Password"  
                          name="password"
                          value={password}
                          onChange={onChange} 
                          required />

                        <button type="submit">Create Account</button>
                        <button className="google-signup"><img src="/google.png" alt="Google Icon" /> 
                            Sign up with Google</button>
                        {error && <p>{error}</p>} {/* Display error message */}
                    </form>
                    
                    <div className="login-link">
                        <span>Already have an account? <a href="#">Log In</a></span>
                    </div>
                </div>
            </section>
      </main>
      <Footer />
    </div>
  );
}

export default SignUp;
