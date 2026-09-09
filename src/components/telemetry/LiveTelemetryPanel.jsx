import React from 'react';
import telemetryData from '../../data/telemetry.json';
import { Activity } from 'lucide-react';

const LiveTelemetryPanel = () => {
  const averageTelemetry = {
    nitrogen: Math.round(telemetryData.probes.reduce((sum, p) => sum + p.nitrogen, 0) / telemetryData.probes.length),
    phosphorus: Math.round(telemetryData.probes.reduce((sum, p) => sum + p.phosphorus, 0) / telemetryData.probes.length),
    potassium: Math.round(telemetryData.probes.reduce((sum, p) => sum + p.potassium, 0) / telemetryData.probes.length),
    ph: (telemetryData.probes.reduce((sum, p) => sum + p.ph, 0) / telemetryData.probes.length).toFixed(1),
    soilTemp: (telemetryData.probes.reduce((sum, p) => sum + p.soilTemp, 0) / telemetryData.probes.length).toFixed(1),
  };

  return (
    <div style={{ background: 'var(--white)', borderRadius: 'var(--border-radius-lg)', padding: '24px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Activity size={20} /> LIVE TELEMETRY
        </h3>
        <span style={{ fontSize: '10px', background: '#e6ffe6', color: '#00aa00', padding: '4px 8px', borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00aa00', display: 'inline-block' }}></span> LIVE
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
        <div style={{ textAlign: 'center', background: 'var(--gray-bg)', padding: '12px', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>N</div>
          <div style={{ fontSize: '20px', fontWeight: 700 }}>{averageTelemetry.nitrogen}</div>
        </div>
        <div style={{ textAlign: 'center', background: 'var(--gray-bg)', padding: '12px', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>P</div>
          <div style={{ fontSize: '20px', fontWeight: 700 }}>{averageTelemetry.phosphorus}</div>
        </div>
        <div style={{ textAlign: 'center', background: 'var(--gray-bg)', padding: '12px', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>K</div>
          <div style={{ fontSize: '20px', fontWeight: 700 }}>{averageTelemetry.potassium}</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        <div style={{ textAlign: 'center', background: 'var(--gray-bg)', padding: '12px', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>pH</div>
          <div style={{ fontSize: '20px', fontWeight: 700 }}>{averageTelemetry.ph}</div>
        </div>
        <div style={{ textAlign: 'center', background: 'var(--gray-bg)', padding: '12px', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Soil Temp</div>
          <div style={{ fontSize: '20px', fontWeight: 700 }}>{averageTelemetry.soilTemp}°C</div>
        </div>
      </div>

      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '16px', textAlign: 'right' }}>
        Updated just now
      </div>
    </div>
  );
};

export default LiveTelemetryPanel;
