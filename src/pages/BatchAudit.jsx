import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const BatchAudit = () => {
  return (
    <DashboardLayout title="Batch Audit" subtitle="Dispatch & Logistics">
      <div className="flex flex-col w-full gap-space-lg">
<div className="flex flex-col gap-space-lg mb-space-xl">
<div className="bg-surface-container-low rounded-xl p-space-lg shadow-xl relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-wrap items-center justify-between gap-space-md pb-space-md">
<div className="flex items-center gap-space-md">
<span className="inline-flex items-center justify-center w-10 h-10 rounded bg-primary/10 text-primary">
<span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
</span>
<div>
<div className="flex items-center gap-space-sm">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Batch In Review</span>
<span className="px-space-xs py-space-2xs rounded bg-surface-container-high font-telemetry-data text-telemetry-data text-primary font-bold">#ON-2024-B3B-889</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary glow-pass"></span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-2xs">Salinas Valley Block 3B • Red Sweet Onions</h1>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs bg-surface-container px-space-md py-space-sm rounded">
<span className="material-symbols-outlined text-secondary text-sm">rv_hookup</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline leading-none">Destination Gateway</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface leading-tight mt-space-2xs">Western Regional Hub (Cold Transit 48h)</span>
</div>
</div>
<div className="flex items-center gap-space-sm bg-primary/10 px-space-md py-space-sm rounded">
<div className="text-right">
<span className="font-label-caps text-label-caps text-primary leading-none uppercase">Compliance Index</span>
<div className="font-metric-display-md text-metric-display-md text-primary leading-none mt-space-2xs font-bold">99.4%</div>
</div>
<span className="material-symbols-outlined text-primary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>shield_with_heart</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-md">
<div className="bg-surface-container p-space-md rounded flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Total Batch Mass</span>
<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-metric-display-md text-metric-display-md text-on-surface">28.5</span>
<span className="font-telemetry-data text-telemetry-data text-outline">Metric Tons</span>
</div>
<span className="font-body-sm text-body-sm text-primary flex items-center gap-space-2xs mt-space-xs">
<span className="material-symbols-outlined text-xs">check_circle</span> Calibration Certified
          </span>
</div>
<div className="bg-surface-container p-space-md rounded flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Packaged Units</span>
<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-metric-display-md text-metric-display-md text-on-surface">24,150</span>
<span className="font-telemetry-data text-telemetry-data text-outline">Bags</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">1,000 Bags/Pallet avg</span>
</div>
<div className="bg-surface-container p-space-md rounded flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Cryptographic Integrity</span>
<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-telemetry-data text-telemetry-data text-primary truncate">SHA-256 Verified</span>
</div>
<span className="font-body-sm text-body-sm text-outline font-telemetry-data truncate mt-space-xs">0x8a99c4e2...f903</span>
</div>
<div className="bg-surface-container p-space-md rounded flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Dispatch Readiness</span>
<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-metric-display-md text-metric-display-md text-secondary">STAGE 6</span>
<span className="font-telemetry-data text-telemetry-data text-outline">91.6% Staged</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden mt-space-xs">
<div className="bg-secondary h-full rounded-full" style={{width: "91.6%"}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-xl">
<div className="xl:col-span-5 flex flex-col gap-space-xl">
<div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-xl">grid_view</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Phase 6: Staging Matrix</h2>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant">24 PALLETS TOTAL</span>
<span className="w-2 h-2 rounded-full bg-primary glow-pass"></span>
</div>
</div>
<div className="grid grid-cols-6 gap-space-xs bg-surface-container p-space-md rounded-lg">
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P01</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P02</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P03</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P04</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P05</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P06</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P07</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P08</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-primary/20 rounded p-space-xs flex flex-col items-center justify-between shadow-md" type="button">
<span className="font-label-caps text-label-caps text-primary font-bold">P09</span>
<span className="material-symbols-outlined text-primary text-sm">radio_button_checked</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P10</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P11</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P12</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P13</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P14</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P15</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P16</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P17</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P18</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P19</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P20</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P21</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-surface-container-high rounded p-space-xs flex flex-col items-center justify-between hover:bg-surface-bright transition-all group" type="button">
<span className="font-label-caps text-label-caps text-outline group-hover:text-on-surface">P22</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">check</span>
</button>
<button className="aspect-square bg-secondary/10 rounded p-space-xs flex flex-col items-center justify-between hover:bg-secondary/20 transition-all group" type="button">
<span className="font-label-caps text-label-caps text-secondary font-bold">P23</span>
<span className="font-telemetry-data text-[10px] text-secondary font-bold">82%</span>
</button>
<button className="aspect-square bg-error/10 rounded p-space-xs flex flex-col items-center justify-between hover:bg-error/20 transition-all group" type="button">
<span className="font-label-caps text-label-caps text-error font-bold">P24</span>
<span className="material-symbols-outlined text-error text-sm glow-warn">search</span>
</button>
</div>
<div className="flex items-center justify-between text-on-surface-variant pt-space-xs">
<div className="flex items-center gap-space-sm">
<span className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded bg-primary"></span><span className="font-label-caps text-label-caps">22 Ready</span></span>
<span className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded bg-secondary"></span><span className="font-label-caps text-label-caps">1 Packing (82%)</span></span>
<span className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded bg-error"></span><span className="font-label-caps text-label-caps">1 Staged QA</span></span>
</div>
<span className="font-label-caps text-label-caps text-outline">LANE #4 CONVERGENCE</span>
</div>
<div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="px-space-xs py-space-2xs bg-primary/20 text-primary font-telemetry-data text-telemetry-data rounded font-bold">PALLET #09 SELECTED</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">ID: PLT-889-09</span>
</div>
<span className="px-space-sm py-space-2xs bg-primary-container/20 text-primary rounded font-label-caps text-label-caps uppercase flex items-center gap-space-2xs">
<span className="w-1.5 h-1.5 rounded-full bg-primary glow-pass"></span> Verified Sealed
            </span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm mt-space-xs">
<div className="bg-surface-container-high p-space-sm rounded">
<span className="font-label-caps text-label-caps text-outline uppercase">Certified Mass</span>
<div className="font-telemetry-data text-telemetry-data text-on-surface font-semibold mt-space-2xs">1,024 kg</div>
</div>
<div className="bg-surface-container-high p-space-sm rounded">
<span className="font-label-caps text-label-caps text-outline uppercase">Unit Count</span>
<div className="font-telemetry-data text-telemetry-data text-on-surface font-semibold mt-space-2xs">1,000 Bags</div>
</div>
<div className="bg-surface-container-high p-space-sm rounded">
<span className="font-label-caps text-label-caps text-outline uppercase">Core Probe</span>
<div className="font-telemetry-data text-telemetry-data text-primary font-semibold mt-space-2xs flex items-center gap-space-2xs">
                3.8°C <span className="text-xs text-outline">/ 4.0°C Max</span>
</div>
</div>
<div className="bg-surface-container-high p-space-sm rounded">
<span className="font-label-caps text-label-caps text-outline uppercase">Assigned Chute</span>
<div className="font-telemetry-data text-telemetry-data text-secondary font-semibold mt-space-2xs">BAY 03</div>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs text-outline font-telemetry-data text-telemetry-data">
<span className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-sm text-primary">nfc</span> RFID UHF: 0xE280116060002934A83
            </span>
<span className="text-primary font-label-caps text-label-caps uppercase">Telemetry Validated</span>
</div>
</div>
</div>
<div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-xl">local_shipping</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Dispatch Manifest &amp; Gate Control</h2>
</div>
<span className="px-space-sm py-space-2xs bg-secondary-container/20 text-secondary rounded font-label-caps text-label-caps uppercase">Dock Staged</span>
</div>
<div className="space-y-space-sm bg-surface-container p-space-md rounded-lg">
<div className="flex justify-between items-center py-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">Logistics Provider</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface font-semibold">AgroCold Logistics Fleet #412</span>
</div>
<div className="flex justify-between items-center py-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">Reefer Unit Calibration</span>
<span className="font-telemetry-data text-telemetry-data text-primary">Set: 3.5°C • Current: 3.6°C</span>
</div>
<div className="flex justify-between items-center py-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">Assigned Driver ID</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface">DRV-US-99201 (R. Martinez)</span>
</div>
<div className="flex justify-between items-center py-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">Bill of Lading (e-BOL)</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface">BOL-2024-W-899128</span>
</div>
<div className="flex justify-between items-center py-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">Digital Seal Key</span>
<span className="font-telemetry-data text-telemetry-data text-primary">SEAL-CRYPT-7734-X</span>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-space-sm pt-space-xs">
<button className="flex-1 bg-primary hover:bg-primary-container text-on-primary font-body-sm text-body-sm font-semibold py-space-sm px-space-md rounded shadow-md flex items-center justify-center gap-space-xs transition-all" type="button">
<span className="material-symbols-outlined text-lg">door_open</span>
            Authorize Departure Gate Pass
          </button>
<button className="bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-sm text-body-sm font-semibold py-space-sm px-space-md rounded flex items-center justify-center gap-space-xs transition-all" type="button">
<span className="material-symbols-outlined text-lg">print</span>
            Print Slips
          </button>
</div>
</div>
<div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-outline text-xl">history</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Audit Archive</h3>
</div>
<span className="font-label-caps text-label-caps text-outline">LAST 48 HOURS</span>
</div>
<div className="space-y-space-xs">
<div className="flex items-center justify-between p-space-sm bg-surface-container rounded hover:bg-surface-container-high transition-colors">
<div className="flex flex-col">
<span className="font-telemetry-data text-telemetry-data font-semibold text-on-surface">#ON-2024-B3A-888</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Salinas 3A • 26.0 MT • In Transit</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="px-space-xs py-space-2xs bg-primary/20 text-primary rounded font-label-caps text-label-caps">99.8% PASS</span>
<button className="text-on-surface-variant hover:text-primary" type="button">
<span className="material-symbols-outlined text-lg">download</span>
</button>
</div>
</div>
<div className="flex items-center justify-between p-space-sm bg-surface-container rounded hover:bg-surface-container-high transition-colors">
<div className="flex flex-col">
<span className="font-telemetry-data text-telemetry-data font-semibold text-on-surface">#ON-2024-B2C-887</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pajaro Valley 2C • 31.2 MT • Delivered</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="px-space-xs py-space-2xs bg-primary/20 text-primary rounded font-label-caps text-label-caps">98.9% PASS</span>
<button className="text-on-surface-variant hover:text-primary" type="button">
<span className="material-symbols-outlined text-lg">download</span>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="xl:col-span-7 flex flex-col gap-space-xl">
<div className="bg-surface-container-low rounded-xl p-space-lg shadow-xl flex flex-col gap-space-lg relative">
<div className="flex items-center justify-between">
<div>
<span className="font-label-caps text-label-caps text-primary uppercase tracking-widest flex items-center gap-space-xs">
<span className="material-symbols-outlined text-sm">security</span> OFFICIAL VERIFICATION LEDGER
            </span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-2xs">Batch Audit Certificate Docket</h2>
</div>
<div className="flex items-center gap-space-xs">
<button className="p-space-xs bg-surface-container rounded hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors" title="Zoom In" type="button">
<span className="material-symbols-outlined text-lg">zoom_in</span>
</button>
<button className="p-space-xs bg-surface-container rounded hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors" title="Full View" type="button">
<span className="material-symbols-outlined text-lg">fullscreen</span>
</button>
</div>
</div>
<div className="bg-surface-container-lowest rounded-lg p-space-xl shadow-2xl relative overflow-hidden text-on-surface">
<div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center select-none">
<span className="font-telemetry-data text-9xl font-bold tracking-widest rotate-45 uppercase">VERIFIED</span>
</div>
<div className="flex flex-col gap-space-lg relative z-10">
<div className="flex flex-wrap items-start justify-between gap-space-md pb-space-lg bg-surface-container-low/40 p-space-md rounded">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">DEPARTMENT OF FOOD INTEGRITY &amp; INDUSTRIAL METROLOGY</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface mt-space-2xs">CERTIFICATE OF INSPECTION &amp; CONFORMANCE</span>
<span className="font-telemetry-data text-telemetry-data text-outline mt-space-2xs">DOC ID: CERT-ON-2024-B3B-889-V1</span>
</div>
<div className="flex items-center gap-space-md">
<div className="p-space-xs bg-surface-bright rounded text-center">
<svg className="w-16 h-16 text-on-surface" fill="currentColor" viewBox="0 0 24 24">
<path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h-2v2h2v-2zm-4-2h2v2h-2v-2zm4 4h2v2h-2v-2zm-2 2h-2v2h2v-2zm2 2h2v2h-2v-2zm-6-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
</svg>
<span className="font-label-caps text-[9px] text-outline block mt-1">CRYPT SEAL</span>
</div>
</div>
</div>
<div className="bg-surface-container p-space-md rounded flex items-center justify-between gap-space-md">
<div className="flex flex-col min-w-0">
<span className="font-label-caps text-label-caps text-outline uppercase">Tamper-Evident SHA-256 Digest</span>
<span className="font-telemetry-data text-telemetry-data text-primary truncate font-bold mt-space-2xs">
                  e7bf0c29a87d19e48950d6fef2c56a1b8c66e92f23b7a15180f983690d52a265
                </span>
</div>
<span className="material-symbols-outlined text-primary text-xl">lock</span>
</div>
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded bg-primary"></span>
<span className="font-label-caps text-label-caps text-on-surface uppercase font-bold">1. Field &amp; Agronomy Genesis</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm bg-surface-container-low p-space-md rounded text-telemetry-data text-telemetry-data">
<div>
<span className="font-label-caps text-label-caps text-outline block">PLOT BLOCK</span>
<span className="text-on-surface font-semibold">Salinas 3B (120 Ha)</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-outline block">SOIL NPK LOGS</span>
<span className="text-on-surface font-semibold">N:82 P:45 K:190</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-outline block">HARVEST MOISTURE</span>
<span className="text-primary font-semibold">68.4% (Optimal)</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-outline block">NITROGEN CLEARANCE</span>
<span className="text-primary font-semibold">Compliant (12d pre)</span>
</div>
</div>
</div>
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded bg-primary"></span>
<span className="font-label-caps text-label-caps text-on-surface uppercase font-bold">2. High-Speed Optical Gantry &amp; SWIR Diagnostics</span>
</div>
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-space-sm">
<div className="grid grid-cols-3 gap-space-sm text-telemetry-data text-telemetry-data">
<div>
<span className="font-label-caps text-label-caps text-outline block">SCANNED BULK</span>
<span className="text-on-surface font-semibold">24,150 kg</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-outline block">EJECTION RATE</span>
<span className="text-secondary font-semibold">6.4% (Rot Decoupled)</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-outline block">FOREIGN MATTER</span>
<span className="text-primary font-semibold">0.00% (X-Ray Clear)</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden flex mt-space-xs">
<div className="bg-primary h-full" style={{width: "93.6%"}} title="Passed: 93.6%"></div>
<div className="bg-tertiary-container h-full" style={{width: "6.4%"}} title="Rejected Rot: 6.4%"></div>
</div>
<div className="flex justify-between text-body-sm text-body-sm text-outline">
<span>Conforming Produce Passed: 93.6%</span>
<span>Ejected via Pneumatic Jet: 6.4%</span>
</div>
</div>
</div>
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded bg-primary"></span>
<span className="font-label-caps text-label-caps text-on-surface uppercase font-bold">3. Size &amp; Curvature Grading Classification</span>
</div>
<div className="bg-surface-container-low p-space-md rounded">
<div className="grid grid-cols-3 gap-space-md text-center">
<div className="p-space-sm bg-surface-container rounded">
<span className="font-label-caps text-label-caps text-outline">GRADE A (PREMIUM)</span>
<div className="font-metric-display-md text-metric-display-md text-primary mt-space-2xs">62.4%</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Dia: 75-90mm</span>
</div>
<div className="p-space-sm bg-surface-container rounded">
<span className="font-label-caps text-label-caps text-outline">GRADE B (STANDARD)</span>
<div className="font-metric-display-md text-metric-display-md text-on-surface mt-space-2xs">29.1%</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Dia: 60-74mm</span>
</div>
<div className="p-space-sm bg-surface-container rounded">
<span className="font-label-caps text-label-caps text-outline">GRADE C (PROCESSING)</span>
<div className="font-metric-display-md text-metric-display-md text-outline mt-space-2xs">8.5%</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Dia: 45-59mm</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded bg-primary"></span>
<span className="font-label-caps text-label-caps text-on-surface uppercase font-bold">4. Legal Metrology Conformance</span>
</div>
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-space-xs text-body-sm text-body-sm">
<div className="flex items-center justify-between py-space-2xs">
<span className="text-on-surface-variant">Package Declaration OCR Verification:</span>
<span className="text-primary font-telemetry-data font-semibold">100% Pass (Origin, Batch, PLU #4163)</span>
</div>
<div className="flex items-center justify-between py-space-2xs">
<span className="text-on-surface-variant">Barcode &amp; Typography Standards:</span>
<span className="text-primary font-telemetry-data font-semibold">Font Height &gt; 3.2mm • GS1 Databar Grade A</span>
</div>
<div className="flex items-center justify-between py-space-2xs">
<span className="text-on-surface-variant">Net Pack Mass Legal Tolerance:</span>
<span className="text-primary font-telemetry-data font-semibold">+20g PLW Target Buffer Satisfied</span>
</div>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-md bg-surface-container-low/40 p-space-md rounded">
<div className="flex items-center gap-space-md">
<img alt="Dr. Vance Signature Avatar" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJZqDoSnFG8AJStzld4Hz2wErYcivB4Kl6-dZHii0uAtpZZPW-u0DY0IAww3IFgdBd8h1YtMJg5_DbYL4nD9I0p4SWe8e3aiARi4dTVezDLyZ8pGNML09yXiq3ikoViAlXgkUSfZgQd_imhCDx_H36m-NixO_WufMih3JSFlwt-_RY1xKo-3YPpQZAXOOLWSlcpMB9LosHw_TySyPOY5odTo_H85ETCS8ko8726RUU_CwCj6mcHbDv" />
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-semibold">Dr. Elena Vance</span>
<span className="font-label-caps text-label-caps text-outline">Lead Operations Director • Agronomy QA</span>
</div>
</div>
<div className="flex flex-col text-right">
<span className="font-label-caps text-label-caps text-primary flex items-center justify-end gap-space-2xs">
<span className="material-symbols-outlined text-sm">done_all</span> CRYPTOGRAPHICALLY SIGNED
                </span>
<span className="font-telemetry-data text-telemetry-data text-outline mt-space-2xs">2024-10-24 14:48:12 UTC</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
<button className="bg-primary hover:bg-primary-container text-on-primary font-body-sm text-body-sm font-semibold py-space-sm px-space-xl rounded shadow-md flex items-center gap-space-xs transition-all" type="button">
<span className="material-symbols-outlined text-lg">download_for_offline</span>
            Download Digital Tamper-Evident PDF (1.8 MB)
          </button>
<div className="flex items-center gap-space-xs">
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm py-space-sm px-space-md rounded flex items-center gap-space-xs transition-colors" title="Push EDI" type="button">
<span className="material-symbols-outlined text-base text-secondary">cloud_upload</span>
              EDI Push
            </button>
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm py-space-sm px-space-md rounded flex items-center gap-space-xs transition-colors" title="Print Docket" type="button">
<span className="material-symbols-outlined text-base text-outline">print</span>
              Print Docket
            </button>
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm py-space-sm px-space-md rounded flex items-center gap-space-xs transition-colors" title="Copy Hash" type="button">
<span className="material-symbols-outlined text-base text-outline">content_copy</span>
              Copy Hash
            </button>
</div>
</div>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default BatchAudit;
