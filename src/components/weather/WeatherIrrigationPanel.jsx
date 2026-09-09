import React from 'react';
import weatherData from '../../data/weather.json';
import irrigationData from '../../data/irrigation.json';
import { CloudRain, Sun, Cloud, Droplets } from 'lucide-react';

const getWeatherIcon = (condition) => {
  switch(condition) {
    case 'rain': return <CloudRain size={24} style={{ color: '#5a85f5' }} />;
    case 'sunny': return <Sun size={24} style={{ color: '#f28b46' }} />;
    default: return <Cloud size={24} style={{ color: '#888' }} />;
  }
};

const WeatherIrrigationPanel = () => {
  return (
    <div style={{ background: 'var(--white)', borderRadius: 'var(--border-radius-lg)', padding: '24px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Weather & Irrigation Engine</h3>
        <div style={{ fontSize: '12px', background: '#f0f1f3', padding: '6px 12px', borderRadius: '16px', fontWeight: 600 }}>
          ET: {weatherData.et} mm/day
        </div>
      </div>

      {/* 7-Day Forecast Ribbon */}
      <div style={{ display: 'flex', overflowX: 'auto', gap: '8px', paddingBottom: '16px', borderBottom: '1px solid #f0f0f0', marginBottom: '20px' }}>
        {weatherData.forecast.map((day, index) => (
          <div key={index} style={{ flexShrink: 0, width: '60px', textAlign: 'center', background: 'var(--gray-bg)', padding: '12px 8px', borderRadius: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>{day.day}</div>
            <div style={{ marginBottom: '8px' }}>{getWeatherIcon(day.condition)}</div>
            <div style={{ fontSize: '14px', fontWeight: 700 }}>{day.temp}°</div>
            <div style={{ fontSize: '10px', color: '#5a85f5', marginTop: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
              <Droplets size={10} /> {day.rainProb}%
            </div>
          </div>
        ))}
      </div>

      {/* Command Box */}
      <div style={{ background: irrigationData.status === 'HOLD' ? '#fff5e6' : '#eef3ff', borderRadius: '12px', padding: '16px', border: `1px solid ${irrigationData.status === 'HOLD' ? '#ffe0b2' : '#d0e0ff'}` }}>
        <h4 style={{ fontSize: '14px', fontWeight: 700, color: irrigationData.status === 'HOLD' ? '#f28b46' : '#5a85f5', marginBottom: '8px' }}>
          {irrigationData.title}
        </h4>
        <p style={{ fontSize: '13px', color: 'var(--text-main)', marginBottom: '8px' }}>{irrigationData.reason}</p>
        <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--theme-primary)', marginBottom: '16px' }}>{irrigationData.decision}</p>
        
        {irrigationData.status === 'HOLD' ? (
          <button className="btn-outline" style={{ width: '100%', padding: '10px', background: 'var(--white)', border: '1px solid #e0e0e0', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
            View Forecast
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-black" style={{ flex: 1, padding: '10px', background: 'var(--theme-primary)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
              Execute
            </button>
            <button className="btn-outline" style={{ flex: 1, padding: '10px', background: 'var(--white)', border: '1px solid #e0e0e0', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
              Override
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default WeatherIrrigationPanel;
