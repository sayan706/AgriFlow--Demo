import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import fieldsData from '../../data/fields.json';
import telemetryData from '../../data/telemetry.json';
import { MapPin } from 'lucide-react';

// Fix Leaflet's default icon path issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Mock polygons for blocks
const blockPolygons = {
  "1A": [[51.505, -0.09], [51.509, -0.09], [51.509, -0.08], [51.505, -0.08]],
  "1B": [[51.505, -0.08], [51.509, -0.08], [51.509, -0.07], [51.505, -0.07]],
  "2A": [[51.501, -0.09], [51.505, -0.09], [51.505, -0.08], [51.501, -0.08]],
  "3B": [[51.501, -0.08], [51.505, -0.08], [51.505, -0.07], [51.501, -0.07]]
};

const FieldMap = () => {
  const [activeLayer, setActiveLayer] = useState("moisture");

  return (
    <div className="map-section" style={{ background: 'var(--white)', borderRadius: 'var(--border-radius-lg)', border: '1px solid #f0f0f0', overflow: 'hidden', display: 'flex', flexDirection: 'column', flexGrow: 1, minHeight: '600px' }}>
      <div style={{ padding: '20px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={20} /> GIS Field Map
        </h3>
        <div className="toggle" style={{ display: 'flex', flexWrap: 'wrap', background: '#f0f1f3', borderRadius: '20px', padding: '4px', gap: '4px' }}>
          {['N', 'P', 'K', 'Moisture', 'pH', 'Temp'].map(layer => (
            <button 
              key={layer}
              onClick={() => setActiveLayer(layer.toLowerCase())}
              style={{
                background: activeLayer === layer.toLowerCase() ? 'var(--theme-primary)' : 'transparent',
                color: activeLayer === layer.toLowerCase() ? 'var(--white)' : 'var(--text-muted)',
                border: 'none', padding: '4px 12px', fontSize: '11px', fontWeight: 600, borderRadius: '16px', cursor: 'pointer'
              }}
            >
              {layer}
            </button>
          ))}
        </div>
      </div>
      
      <div style={{ flexGrow: 1, height: '600px', position: 'relative', zIndex: 1 }}>
        <MapContainer center={[51.505, -0.08]} zoom={14} style={{ height: '100%', width: '100%', zIndex: 1 }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {fieldsData.blocks.map((block) => (
            <Polygon 
              key={block.id} 
              positions={blockPolygons[block.id]} 
              pathOptions={{ color: '#1f2937', weight: 2, fillOpacity: 0.2 }}
            >
              <Popup>
                <strong>{block.name}</strong><br/>Crop: {block.crop}
              </Popup>
            </Polygon>
          ))}
          {telemetryData.probes.map(probe => {
            // Simplified marker placement based on block polygons
            const pos = blockPolygons[probe.block][0]; 
            return (
              <Marker key={probe.id} position={[pos[0] + 0.002, pos[1] + 0.005]}>
                <Popup>
                  <strong>{probe.id} (Block {probe.block})</strong><br/>
                  Moisture: {probe.moisture}%<br/>
                  Temp: {probe.soilTemp}°C<br/>
                  N/P/K: {probe.nitrogen}/{probe.phosphorus}/{probe.potassium}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default FieldMap;
