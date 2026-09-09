import React from 'react';
import { Droplets, Activity, CloudRain, Power } from 'lucide-react';
import dashboardData from '../../data/dashboard.json';

const MetricRibbon = () => {
  const { 
    moistureAverage, moistureStatus, 
    npkHealthIndex, npkStatus, 
    rainProbability7Day, rainProbabilityStatus,
    irrigationStatus, irrigationMessage 
  } = dashboardData;

  return (
    <div className="filters-section metric-grid gs-reveal">
      
      <div className="stat-item">
        <div className="stat-icon blue"><Droplets size={20} /></div>
        <div className="stat-text">
          <span className="label">Avg Field Moisture</span>
          <span className="value" style={{ fontSize: '20px' }}>{moistureAverage}%</span>
          <span style={{ fontSize: '11px', color: 'var(--theme-primary)', marginTop: '4px' }}>{moistureStatus} range</span>
        </div>
      </div>

      <div className="stat-item">
        <div className="stat-icon orange"><Activity size={20} /></div>
        <div className="stat-text">
          <span className="label">NPK Health Index</span>
          <span className="value" style={{ fontSize: '20px' }}>{npkHealthIndex} / 100</span>
          <span style={{ fontSize: '11px', color: 'var(--theme-primary)', marginTop: '4px' }}>{npkStatus}</span>
        </div>
      </div>

      <div className="stat-item">
        <div className="stat-icon gray"><CloudRain size={20} /></div>
        <div className="stat-text">
          <span className="label">7-Day Rain Prob</span>
          <span className="value" style={{ fontSize: '20px' }}>{rainProbability7Day}%</span>
          <span style={{ fontSize: '11px', color: 'var(--theme-primary)', marginTop: '4px' }}>{rainProbabilityStatus}</span>
        </div>
      </div>

      <div className="stat-item" style={{ borderLeft: '4px solid #f28b46' }}>
        <div className="stat-icon" style={{ background: '#fff0e5', color: '#f28b46' }}><Power size={20} /></div>
        <div className="stat-text">
          <span className="label">Irrigation Status</span>
          <span className="value" style={{ fontSize: '20px' }}>{irrigationStatus}</span>
          <span style={{ fontSize: '11px', color: 'var(--theme-primary)', marginTop: '4px' }}>{irrigationMessage}</span>
        </div>
      </div>

    </div>
  );
};

export default MetricRibbon;
