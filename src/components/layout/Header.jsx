import React from 'react';
import { Bell, MapPin } from 'lucide-react';

const Header = ({ title = "Dashboard", subtitle = "Overview" }) => {
  return (
    <header className="top-header">
      <div className="breadcrumb">
        <h2 style={{ fontSize: '18px', fontWeight: 600 }}>
          {title} › <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{subtitle}</span>
        </h2>
      </div>

      <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div className="org-profile" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>
          <MapPin size={18} style={{ color: 'var(--text-muted)' }} />
          AgriFlow Model Farm
        </div>
        <div style={{ width: '1px', height: '24px', background: '#e0e0e0', margin: '0 8px' }}></div>
        <Bell className="notification" size={24} style={{ cursor: 'pointer', color: 'var(--text-muted)' }} />
        <div className="profile">
          <div className="profile-text">
            <span className="name">Aanya Mehta</span>
            <span className="role">Farm Manager</span>
          </div>
          <img src="https://i.pravatar.cc/150?img=9" alt="Profile" className="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
