import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AboutContent from '../components/About/AboutContent';
import Stats from '../components/About/Stats';
import Team from '../components/About/Team';
import Services from '../components/About/Services'; // استيراد المكون الجديد
import '../css/About.css';
import '../css/Stats.css';
import '../css/Team.css';
import '../css/Services.css'; // استيراد ملف CSS الجديد

const About = () => {
  return (
    <div>
      
    <div className="about-page">
      
      <AboutContent />
      <Stats />
      <Team />
      <Services /> {/* إضافة المكون الجديد هنا */}
      
    </div>
    
    </div>
  );
};

export default About;