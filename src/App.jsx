import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Diagnostics from './pages/Diagnostics';
import DigitalTwin from './pages/DigitalTwin';
import Packaging from './pages/Packaging';
import BatchAudit from './pages/BatchAudit';
import AnalyticsHub from './pages/AnalyticsHub';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/twin" element={<DigitalTwin />} />
        <Route path="/packaging" element={<Packaging />} />
        <Route path="/audit" element={<BatchAudit />} />
        <Route path="/analytics" element={<AnalyticsHub />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
