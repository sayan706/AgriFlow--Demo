import React from 'react';
import advisoriesData from '../../data/advisories.json';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

const getSeverityStyles = (severity) => {
  switch (severity) {
    case 'critical': return { bg: '#ffe6eb', color: '#ff0044', icon: <AlertTriangle size={18} /> };
    case 'warning': return { bg: '#fff5e6', color: '#ff8800', icon: <AlertCircle size={18} /> };
    case 'info': return { bg: '#e6f0ff', color: '#0055ff', icon: <Info size={18} /> };
    default: return { bg: '#f0f2f5', color: '#666', icon: <Info size={18} /> };
  }
};

const AIAdvisoryPanel = () => {
  return (
    <div style={{ background: 'var(--white)', borderRadius: 'var(--border-radius-lg)', padding: '24px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
      <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>AI Advisories</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {advisoriesData.map(advisory => {
          const styles = getSeverityStyles(advisory.severity);
          return (
            <div key={advisory.id} style={{ display: 'flex', gap: '16px', padding: '16px', background: 'var(--gray-bg)', borderRadius: '12px', borderLeft: `4px solid ${styles.color}` }}>
              <div style={{ background: styles.bg, color: styles.color, width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {styles.icon}
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)' }}>{advisory.title}</h4>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{advisory.timestamp}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '8px' }}>
                  {advisory.message}
                </p>
                <span style={{ fontSize: '11px', background: 'var(--white)', padding: '4px 8px', borderRadius: '4px', border: '1px solid #e0e0e0', fontWeight: 500 }}>
                  Block: {advisory.block}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIAdvisoryPanel;
