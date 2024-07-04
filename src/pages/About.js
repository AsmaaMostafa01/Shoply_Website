import React from 'react';
<<<<<<< HEAD
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
    
=======
import AboutContent from '../components/About/AboutContent';
import Stats from '../components/About/Stats';
import Team from '../components/About/Team';
import Services from '../components/About/Services';
import '../css/About.css';
import '../css/Stats.css';
import '../css/Team.css';
import '../css/Services.css';

const About = () => {
  return (
    <div className="about-page">
      <AboutContent />
      <Stats />
      <Team />
      <Services />
>>>>>>> d36b320ec61b4955360bc19d6c74d8304a5ab7dd
    </div>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> d36b320ec61b4955360bc19d6c74d8304a5ab7dd
