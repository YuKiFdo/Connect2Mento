import React from 'react';
import './DashboardCard.css';

function DashboardCard({ title, value }) {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <div className="value">{value}</div>
    </div>
  );
}

export default DashboardCard;
