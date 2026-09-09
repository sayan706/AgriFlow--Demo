import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Leaf, Cpu, Package, Truck, BarChart, Settings, LogOut } from 'lucide-react';
import gsap from 'gsap';

const Sidebar = ({ isMobileOpen, toggleMobileSidebar }) => {
  const location = useLocation();
  const sidebarRef = useRef(null);
  const desktopIndicatorRef = useRef(null);
  const navItemsRef = useRef(null);
  const isFirstRender = useRef(true);

  const moveIndicator = () => {
    if (!navItemsRef.current || !desktopIndicatorRef.current) return;

    const activeLink = navItemsRef.current.querySelector('.nav-link.active');
    if (!activeLink) return;

    // Get position relative to the nav-items container
    const containerRect = navItemsRef.current.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const targetTop = linkRect.top - containerRect.top;

    if (isFirstRender.current) {
      // On first render, snap immediately (no animation)
      gsap.set(desktopIndicatorRef.current, { top: targetTop });
      isFirstRender.current = false;
    } else {
      // Animate smoothly on subsequent navigations
      gsap.to(desktopIndicatorRef.current, {
        top: targetTop,
        duration: 0.35,
        ease: "power2.inOut"
      });
    }
  };

  // Use layoutEffect to measure before paint, then a small RAF delay for accuracy
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      moveIndicator();
    });
  }, [location.pathname]);

  return (
    <>
      <div className={`sidebar-overlay ${isMobileOpen ? 'active' : ''}`} onClick={toggleMobileSidebar}></div>
      <nav ref={sidebarRef} className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src="/src/assets/images/logo.png" alt="AgriFlow Logo" style={{ borderRadius: '8px', width: '100%', maxWidth: '80px', maxHeight: '80px', objectFit: 'contain' }} />
          <div className="logo-text" style={{ marginTop: '10px' }}>
            <div className="logo-title">AgriFlow</div>
            <div className="logo-subtitle">Smart Farming</div>
          </div>
        </div>

        <div ref={navItemsRef} className="nav-items">
          <div ref={desktopIndicatorRef} className="nav-indicator-desktop">
            <div className="curve-top"></div>
            <div className="curve-bottom"></div>
          </div>
          <div className="nav-indicator-mobile"></div>

          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end title="Overview">
            <LayoutDashboard size={24} />
            <span className="nav-label">Overview</span>
          </NavLink>
          
          <NavLink to="/diagnostics" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} title="Diagnostics">
            <Leaf size={24} />
            <span className="nav-label">Diagnostics</span>
          </NavLink>

          <NavLink to="/twin" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} title="Digital Twin">
            <Cpu size={24} />
            <span className="nav-label">Digital Twin</span>
          </NavLink>

          <NavLink to="/packaging" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} title="Packaging">
            <Package size={24} />
            <span className="nav-label">Packaging</span>
          </NavLink>

          <NavLink to="/audit" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} title="Batch Audit">
            <Truck size={24} />
            <span className="nav-label">Batch Audit</span>
          </NavLink>

          <NavLink to="/analytics" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} title="Analytics Hub">
            <BarChart size={24} />
            <span className="nav-label">Analytics Hub</span>
          </NavLink>

          <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} title="Settings">
            <Settings size={24} />
            <span className="nav-label">Settings</span>
          </NavLink>
        </div>

        <a href="#" className="nav-link logout">
          <LogOut size={24} />
          <span className="nav-label">Logout</span>
        </a>
      </nav>
    </>
  );
};

export default Sidebar;
