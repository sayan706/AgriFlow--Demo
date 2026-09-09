import React, { useEffect } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Settings as SettingsIcon } from 'lucide-react';
import gsap from 'gsap';

const Settings = () => {
  useEffect(() => {
    gsap.fromTo('.gs-reveal', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  return (
    <DashboardLayout title="Settings" subtitle="System Configuration">
      <div className="welcome-card gs-reveal" style={{ marginBottom: '32px', background: 'linear-gradient(135deg, #fdfbf7 0%, #f4f6fa 100%)' }}>
        <div className="welcome-text">
          <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)', lineHeight: 1.2 }}>
            Platform Settings & Calibrations
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            Manage organization preferences, user roles, and device calibrations.
          </p>
        </div>
      </div>

      <div className="content-layout gs-reveal">
        <div className="left-col" style={{ background: 'var(--white)', borderRadius: 'var(--border-radius-lg)', padding: '24px', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #f0f0f0' }}>
          <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
            <SettingsIcon size={48} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
            <p>System Preferences Panel</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
