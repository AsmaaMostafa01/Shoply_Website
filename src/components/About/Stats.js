import React from 'react';
import '../../css/Stats.css';

const Stats = () => {
  const stats = [
    {
      value: '10.5k',
      label: 'Sellers active on our site',
      icon: '🏬'
    },
    {
      value: '33k',
      label: 'Monthly Product Sale',
      icon: '💵',
      highlight: true
    },
    {
      value: '45.5k',
      label: 'Customer active in our site',
      icon: '👥'
    },
    {
      value: '25k',
      label: 'Annual gross sale in our site',
      icon: '💰'
    }
  ];

  return (
    <section className="stats">
      {stats.map((stat, index) => (
        <div key={index} className={`stat ${stat.highlight ? 'highlight' : ''}`}>
          <div className="icon">{stat.icon}</div>
          <div className="value">{stat.value}</div>
          <div className="label">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}

export default Stats;
