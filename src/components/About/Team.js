import React from 'react';
import '../../css/Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  {
    name: 'Tom Cruise',
    role: 'Founder & Chairman',
    imgSrc: '../member1.png',
    social: {
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Emma Watson',
    role: 'Managing Director',
    imgSrc: '../member2.png',
    social: {
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Emma Watson',
    role: 'Managing Director',
    imgSrc: '../member2.png',
    social: {
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Will Smith',
    role: 'Product Designer',
    imgSrc: '../member1.png',
    social: {
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  }
];

const Team = () => {
  return (
    <section className="team">
      {teamMembers.map((member, index) => (
        <div key={index} className="member">
          <img src={member.imgSrc} alt={member.name} className="member-img"/>
          <div className="member-info">
            <div className="name">{member.name}</div>
            <div className="role">{member.role}</div>
            <div className="social-icons">
              <a href={member.social.twitter}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={member.social.instagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href={member.social.linkedin}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Team;