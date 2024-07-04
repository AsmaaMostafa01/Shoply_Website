import React from 'react';
import '../../css/Team.css';
<<<<<<< HEAD
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
=======
>>>>>>> d36b320ec61b4955360bc19d6c74d8304a5ab7dd

const Team = () => {
  return (
    <section className="team">
<<<<<<< HEAD
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
=======
      <div className="team-member">
        <img src="/images/team1.jpg" alt="Tom Cruise" />
        <h4>Tom Cruise</h4>
        <p>Founder & Chairman</p>
      </div>
      <div className="team-member">
        <img src="/images/team2.jpg" alt="Emma Watson" />
        <h4>Emma Watson</h4>
        <p>Managing Director</p>
      </div>
      <div className="team-member">
        <img src="/images/team3.jpg" alt="Will Smith" />
        <h4>Will Smith</h4>
        <p>Product Designer</p>
      </div>
    </section>
  );
};

export default Team;
>>>>>>> d36b320ec61b4955360bc19d6c74d8304a5ab7dd
