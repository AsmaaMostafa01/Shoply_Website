import React from 'react';
import '../../css/Team.css';

const Team = () => {
  return (
    <section className="team">
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
