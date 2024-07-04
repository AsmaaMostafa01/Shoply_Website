import React from 'react';
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
    </div>
  );
};

export default About;
