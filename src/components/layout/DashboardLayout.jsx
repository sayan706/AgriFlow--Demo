import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Menu } from 'lucide-react';

const DashboardLayout = ({ children, title, subtitle }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard">
        <Sidebar isMobileOpen={isMobileOpen} toggleMobileSidebar={toggleMobileSidebar} />

        <main className="main-content">
          {/* Mobile Navbar */}
          <div className="mobile-top-navbar">
            <div className="mobile-logo">
              <img src="/src/assets/images/logo.png" alt="AgriFlow Logo" />
              <div className="logo-text">
                <div className="logo-title">AgriFlow</div>
              </div>
            </div>
            <div className={`menu-toggle ${isMobileOpen ? 'active' : ''}`} onClick={toggleMobileSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <Header title={title} subtitle={subtitle} />
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
