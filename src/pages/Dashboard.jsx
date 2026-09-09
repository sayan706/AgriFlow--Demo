import React, { useEffect } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import MetricRibbon from '../components/layout/MetricRibbon';
import FieldMap from '../components/map/FieldMap';
import LiveTelemetryPanel from '../components/telemetry/LiveTelemetryPanel';
import AIAdvisoryPanel from '../components/advisory/AIAdvisoryPanel';
import WeatherIrrigationPanel from '../components/weather/WeatherIrrigationPanel';
import gsap from 'gsap';

const Dashboard = () => {
  useEffect(() => {
    // GSAP Reveal Animation similar to lp-view
    gsap.fromTo('.gs-reveal', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  return (
    <DashboardLayout title="Control Room" subtitle="Overview">
      <div className="welcome-card gs-reveal" style={{ marginBottom: '32px', background: 'linear-gradient(135deg, #fdfbf7 0%, #f4f6fa 100%)' }}>
        <div className="welcome-text">
          <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)', lineHeight: 1.2 }}>Smart Agriculture Control Room</h1>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Real-time field intelligence, telemetry, and automated irrigation management.</p>
        </div>
        <div className="illustration-container">
          <div className="blob"></div>
        </div>
      </div>

      <MetricRibbon />

      <div className="content-layout gs-reveal">
        <div className="left-col">
          <FieldMap />
        </div>
        <div className="right-col-container" style={{ gap: '24px' }}>
          <LiveTelemetryPanel />
          <AIAdvisoryPanel />
          <WeatherIrrigationPanel />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
