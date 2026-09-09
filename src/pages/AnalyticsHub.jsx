import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const AnalyticsHub = () => {
  return (
    <DashboardLayout title="Analytics Hub" subtitle="Executive Overview">
      <div className="flex flex-col w-full gap-space-lg">
<div className="flex flex-col gap-space-md mb-space-xl">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div>
<div className="flex items-center gap-space-xs mb-space-2xs">
<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">STRATEGIC LAYER 3 COCKPIT</span>
<span className="text-surface-container-highest">•</span>
<span className="font-telemetry-data text-telemetry-data text-outline">CROSS-DOMAIN CORRELATION ACTIVE</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Strategic Executive Analytics &amp; Agronomy-to-Factory Intelligence</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-4xl mt-space-2xs">
          Cross-correlated analytical streams spanning In-Situ Soil Micro-Telemetry, Optical SWIR Sorter Pipelines, In-Line Metrology Overfill Buffers, and Statutory Dispatch Logs.
        </p>
</div>
<div className="flex items-center gap-space-sm self-start lg:self-auto">
<button className="px-space-md py-space-sm rounded bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center gap-space-xs shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-base text-secondary">calendar_today</span>
<span className="font-body-sm text-body-sm font-medium">Schedule Weekly Sync</span>
</button>
<button className="px-space-md py-space-sm rounded bg-primary text-on-primary hover:bg-primary-fixed-dim flex items-center gap-space-xs shadow-md glow-pass transition-all" type="button">
<span className="material-symbols-outlined text-base">picture_as_pdf</span>
<span className="font-body-sm text-body-sm font-semibold">Export Executive Dossier</span>
</button>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-wrap items-center justify-between gap-space-md shadow-sm">
<div className="flex flex-wrap items-center gap-space-sm">
<div className="flex items-center bg-surface-container-lowest px-space-sm py-space-xs rounded">
<span className="material-symbols-outlined text-outline text-sm mr-space-xs">date_range</span>
<span className="font-label-caps text-label-caps text-outline uppercase mr-space-xs">Range:</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface">Last 30 Days (Harvest Season 2024)</span>
<span className="material-symbols-outlined text-outline text-xs ml-space-xs cursor-pointer">expand_more</span>
</div>
<div className="flex items-center bg-surface-container-lowest px-space-sm py-space-xs rounded">
<span className="material-symbols-outlined text-outline text-sm mr-space-xs">factory</span>
<span className="font-label-caps text-label-caps text-outline uppercase mr-space-xs">Facility:</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface">All (Valley #4, Desert #2)</span>
<span className="material-symbols-outlined text-outline text-xs ml-space-xs cursor-pointer">expand_more</span>
</div>
<div className="flex items-center bg-surface-container-lowest px-space-sm py-space-xs rounded">
<span className="material-symbols-outlined text-outline text-sm mr-space-xs">grass</span>
<span className="font-label-caps text-label-caps text-outline uppercase mr-space-xs">Variety:</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface">Red Sweet Onions</span>
<span className="material-symbols-outlined text-outline text-xs ml-space-xs cursor-pointer">expand_more</span>
</div>
<div className="flex items-center bg-surface-container-lowest px-space-sm py-space-xs rounded">
<span className="material-symbols-outlined text-outline text-sm mr-space-xs">verified</span>
<span className="font-label-caps text-label-caps text-outline uppercase mr-space-xs">Grade:</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface">All Export Tiers</span>
<span className="material-symbols-outlined text-outline text-xs ml-space-xs cursor-pointer">expand_more</span>
</div>
</div>
<div className="flex items-center gap-space-xs pl-space-sm">
<span className="w-2 h-2 rounded-full bg-primary glow-pass"></span>
<span className="font-label-caps text-label-caps text-primary tracking-wider">LIVE RECONCILIATION: 18 BLOCKS SYNCED</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Yield Conversion</span>
<span className="font-label-caps text-label-caps text-primary bg-primary/10 px-space-xs py-space-2xs rounded glow-pass">+4.2% YoY</span>
</div>
<div className="my-space-sm">
<div className="font-metric-display-lg text-metric-display-lg text-on-surface tracking-tight">88.6<span className="text-headline-sm text-outline font-normal">%</span></div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Grade A/B Premium Packout</p>
</div>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-telemetry-data text-telemetry-data text-primary">Soil NPK Optimized</span>
<span className="material-symbols-outlined text-outline text-sm">trending_up</span>
</div>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Predictive Durability</span>
<span className="font-label-caps text-label-caps text-secondary bg-secondary/10 px-space-xs py-space-2xs rounded">LWIR Verified</span>
</div>
<div className="my-space-sm">
<div className="font-metric-display-lg text-metric-display-lg text-on-surface tracking-tight">34.2 <span className="text-headline-sm text-outline font-normal">Days</span></div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Mean Cold Chain Shelf-Life</p>
</div>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">PLW Transit Retention: 98.2%</span>
<span className="material-symbols-outlined text-outline text-sm">timelapse</span>
</div>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Metrology Audit Rate</span>
<span className="font-label-caps text-label-caps text-primary bg-primary/10 px-space-xs py-space-2xs rounded glow-pass">0 Infractions</span>
</div>
<div className="my-space-sm">
<div className="font-metric-display-lg text-metric-display-lg text-on-surface tracking-tight">99.8<span className="text-headline-sm text-outline font-normal">%</span></div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Statutory OCR &amp; Weight Clear</p>
</div>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">420k Units Inspected</span>
<span className="material-symbols-outlined text-outline text-sm">verified_user</span>
</div>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary-fixed-dim/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Resource Stewardship</span>
<span className="font-label-caps text-label-caps text-primary bg-primary/10 px-space-xs py-space-2xs rounded">ET Smart Logic</span>
</div>
<div className="my-space-sm">
<div className="font-metric-display-lg text-metric-display-lg text-on-surface tracking-tight">184.2<span className="text-headline-sm text-outline font-normal">k L</span></div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Irrigation Conserved Cycle-to-Date</p>
</div>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-telemetry-data text-telemetry-data text-primary">-18.4% Pumping Power</span>
<span className="material-symbols-outlined text-outline text-sm">water_drop</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-md mb-space-xl">
<div className="xl:col-span-8 bg-surface-container-low p-space-lg rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs mb-space-md">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-caps text-label-caps text-secondary uppercase">Field-to-Factory Core Regression</span>
<span className="font-telemetry-data text-telemetry-data text-primary px-space-xs py-space-2xs bg-surface-container rounded">R² = 0.892</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-space-2xs">
            Nitrogen Application Level (Field) vs. Post-Harvest Internal Rot Ejection Rate (Plant Gantry SWIR)
          </h2>
</div>
<div className="flex items-center gap-space-xs self-start">
<span className="flex items-center gap-space-2xs text-xs font-telemetry-data text-outline">
<span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span> Optimal &lt;140ppm
          </span>
<span className="flex items-center gap-space-2xs text-xs font-telemetry-data text-outline ml-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-error inline-block glow-error"></span> High Risk &gt;160ppm
          </span>
</div>
</div>
<div className="relative w-full h-72 bg-surface-container-lowest rounded p-space-sm flex flex-col justify-between">
<div className="absolute inset-0 p-space-lg flex flex-col justify-between pointer-events-none opacity-20">
<div className="w-full border-b border-outline-variant"></div>
<div className="w-full border-b border-outline-variant"></div>
<div className="w-full border-b border-outline-variant"></div>
<div className="w-full border-b border-outline-variant"></div>
<div className="w-full border-b border-outline-variant"></div>
</div>
<svg className="w-full h-full overflow-visible z-10" preserveAspectRatio="none" viewBox="0 0 700 240">
<path className="text-secondary" d="M 40 210 Q 300 205 450 160 T 670 30" fill="none" stroke="currentColor" stroke-dasharray="4 2" stroke-width="2.5"></path>
<line className="text-error/40" stroke="currentColor" stroke-dasharray="2 2" stroke-width="1.5" x1="480" x2="480" y1="0" y2="220"></line>
<text className="text-error font-telemetry-data text-[10px]" fill="currentColor" x="485" y="20">CRITICAL THRESHOLD: 160 PPM</text>
<circle className="fill-primary" cx="65" cy="208" r="4.5"></circle>
<circle className="fill-primary" cx="95" cy="202" r="4.5"></circle>
<circle className="fill-primary" cx="140" cy="205" r="5"></circle>
<circle className="fill-primary" cx="180" cy="198" r="4.5"></circle>
<circle className="fill-primary" cx="210" cy="192" r="5"></circle>
<circle className="fill-primary" cx="245" cy="195" r="4.5"></circle>
<circle className="fill-primary" cx="280" cy="189" r="6"></circle>
<circle className="fill-primary" cx="310" cy="184" r="5"></circle>
<circle className="fill-secondary" cx="350" cy="178" r="4.5"></circle>
<circle className="fill-secondary" cx="390" cy="170" r="5.5"></circle>
<circle className="fill-secondary" cx="430" cy="155" r="5"></circle>
<circle className="fill-secondary" cx="465" cy="148" r="5.5"></circle>
<circle className="fill-error glow-error" cx="510" cy="118" r="6"></circle>
<circle className="fill-error glow-error" cx="540" cy="98" r="6.5"></circle>
<circle className="fill-error glow-error" cx="585" cy="74" r="6"></circle>
<circle className="fill-error glow-error" cx="620" cy="52" r="7"></circle>
<circle className="fill-error glow-error" cx="650" cy="38" r="7.5"></circle>
<circle className="fill-error glow-error" cx="665" cy="32" r="6"></circle>
</svg>
<div className="flex justify-between items-center text-outline font-telemetry-data text-body-sm pt-space-xs z-10">
<span>80 ppm (Low N)</span>
<span>120 ppm</span>
<span>160 ppm (Cutoff Baseline)</span>
<span>200 ppm</span>
<span>240 ppm (Excess N)</span>
</div>
</div>
<div className="mt-space-md p-space-md bg-surface-container rounded flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-xl mt-space-2xs">lightbulb</span>
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">Agronomic ROI Discovery</span>
<p className="font-body-sm text-body-sm text-on-surface mt-space-2xs">
              Fields with Nitrogen &gt; 150 ppm exhibit a <strong className="text-error font-semibold">3.4x surge</strong> in latent internal rot and soft neck decay detected under 1450nm SWIR. 
              Enforcing the N-application cutoff 21 days prior to harvest will recover an estimated <strong className="text-primary font-semibold">₹64,000</strong> in Grade A yield across Blocks 3B through 5A.
            </p>
</div>
</div>
<button className="px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-sm text-body-sm font-semibold shrink-0 transition-colors" type="button">
          Push Soil Protocol to Agronomy
        </button>
</div>
</div>
<div className="xl:col-span-4 bg-surface-container-low p-space-lg rounded-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-caps text-label-caps text-outline uppercase">Spectroscopy &amp; Optics</span>
<span className="font-telemetry-data text-telemetry-data text-primary">Cumulative 100%</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Multi-Sensor Defect Pareto</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">
          Breakdown of auto-ejections classified across sensor suites on Valley Line #4.
        </p>
<div className="flex flex-col gap-space-sm mt-space-md">
<div className="p-space-sm bg-surface-container rounded">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Peeling / Loose Outer Skin</span>
<span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high px-space-xs py-space-2xs rounded">RGB Surface</span>
</div>
<span className="font-telemetry-data text-telemetry-data text-on-surface">28%</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "28%"}}></div>
</div>
</div>
<div className="p-space-sm bg-surface-container rounded">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Internal Basal Rot</span>
<span className="font-label-caps text-label-caps text-error bg-error/10 px-space-xs py-space-2xs rounded">SWIR 1450nm</span>
</div>
<span className="font-telemetry-data text-telemetry-data text-error">24%</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-error h-full rounded-full glow-error" style={{width: "24%"}}></div>
</div>
</div>
<div className="p-space-sm bg-surface-container rounded">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Mechanical Scuffs &amp; Cuts</span>
<span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high px-space-xs py-space-2xs rounded">RGB Surface</span>
</div>
<span className="font-telemetry-data text-telemetry-data text-on-surface">18%</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{width: "18%"}}></div>
</div>
</div>
<div className="p-space-sm bg-surface-container rounded">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Core Moisture Pocket</span>
<span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high px-space-xs py-space-2xs rounded">NIR Spec</span>
</div>
<span className="font-telemetry-data text-telemetry-data text-on-surface">12%</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary-fixed-dim h-full rounded-full" style={{width: "12%"}}></div>
</div>
</div>
<div className="p-space-sm bg-surface-container rounded">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Double Bulbs / Misshapen</span>
<span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high px-space-xs py-space-2xs rounded">3D Morph</span>
</div>
<span className="font-telemetry-data text-telemetry-data text-on-surface">11%</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-surface-variant h-full rounded-full" style={{width: "11%"}}></div>
</div>
</div>
<div className="p-space-sm bg-surface-container rounded">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Hotspot Fermentation</span>
<span className="font-label-caps text-label-caps text-secondary bg-secondary/10 px-space-xs py-space-2xs rounded">LWIR Thermal</span>
</div>
<span className="font-telemetry-data text-telemetry-data text-secondary">7%</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary-fixed h-full rounded-full" style={{width: "7%"}}></div>
</div>
</div>
</div>
</div>
<div className="pt-space-md flex items-center justify-between text-body-sm text-outline">
<span className="font-telemetry-data text-telemetry-data">Pneumatic Ejectors Latency: 4.8ms</span>
<span className="material-symbols-outlined text-primary text-sm glow-pass">sync_saved_locally</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-md mb-space-xl">
<div className="xl:col-span-4 bg-surface-container-low p-space-lg rounded-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-caps text-label-caps text-outline uppercase">Dynamic Buffer ROI</span>
<span className="font-label-caps text-label-caps text-primary bg-primary/10 px-space-xs py-space-2xs rounded">Legal Compliant</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Legal Metrology &amp; Giveaway Optimization</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">
          Reconciling static overpack safety margins with ambient transit humidity to capture margin loss.
        </p>
<div className="my-space-lg flex flex-col gap-space-md">
<div className="p-space-md bg-surface-container rounded">
<span className="font-label-caps text-label-caps text-outline uppercase">Net Yield Savings This Quarter</span>
<div className="font-metric-display-lg text-metric-display-lg text-primary tracking-tight mt-space-2xs">
              +₹18,450
            </div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              Achieved by tapering standard +50g overpack to a dynamic +21.4g moisture-deficit compensated buffer.
            </p>
</div>
<div className="grid grid-cols-2 gap-space-sm">
<div className="p-space-sm bg-surface-container rounded">
<span className="font-label-caps text-label-caps text-outline uppercase">Mean Giveaway</span>
<div className="font-metric-display-md text-metric-display-md text-on-surface mt-space-2xs">+21.4 g</div>
<span className="font-telemetry-data text-telemetry-data text-primary">-57.2% vs baseline</span>
</div>
<div className="p-space-sm bg-surface-container rounded">
<span className="font-label-caps text-label-caps text-outline uppercase">Non-Conformities</span>
<div className="font-metric-display-md text-metric-display-md text-primary mt-space-2xs">0.00%</div>
<span className="font-telemetry-data text-telemetry-data text-outline">Across 420k Units</span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs text-outline font-telemetry-data text-body-sm">
<span className="material-symbols-outlined text-secondary text-sm">balance</span>
<span>Statutory OCR Cert: 2024-Q3 Verified</span>
</div>
</div>
<div className="xl:col-span-8 bg-surface-container-low p-space-lg rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-md">
<div>
<span className="font-label-caps text-label-caps text-outline uppercase">Dual-Axis Feedback</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-space-2xs">Dynamic PLW Overpack Curve vs. Monthly Savings</h2>
</div>
<div className="flex items-center gap-space-md font-telemetry-data text-body-sm">
<span className="flex items-center gap-space-2xs text-secondary">
<span className="w-3 h-0.5 bg-secondary inline-block"></span> Mean Giveaway (g)
          </span>
<span className="flex items-center gap-space-2xs text-primary">
<span className="w-3 h-3 bg-primary/40 inline-block rounded-xs"></span> Net Savings (₹k)
          </span>
</div>
</div>
<div className="relative w-full h-56 bg-surface-container-lowest rounded p-space-md flex flex-col justify-between">
<svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 650 160">
<rect className="fill-primary/20 hover:fill-primary/40 transition-colors" height="60" width="35" x="50" y="100"></rect>
<rect className="fill-primary/20 hover:fill-primary/40 transition-colors" height="75" width="35" x="150" y="85"></rect>
<rect className="fill-primary/30 hover:fill-primary/50 transition-colors" height="100" width="35" x="250" y="60"></rect>
<rect className="fill-primary/35 hover:fill-primary/50 transition-colors" height="115" width="35" x="350" y="45"></rect>
<rect className="fill-primary/40 hover:fill-primary/60 transition-colors" height="130" width="35" x="450" y="30"></rect>
<rect className="fill-primary/50 hover:fill-primary/70 transition-colors" height="145" width="35" x="550" y="15"></rect>
<path className="text-secondary" d="M 67 20 L 167 35 L 267 60 L 367 95 L 467 120 L 567 135" fill="none" stroke="currentColor" stroke-width="2.5"></path>
<circle className="fill-secondary" cx="67" cy="20" r="4"></circle>
<circle className="fill-secondary" cx="167" cy="35" r="4"></circle>
<circle className="fill-secondary" cx="267" cy="60" r="4"></circle>
<circle className="fill-secondary" cx="367" cy="95" r="4"></circle>
<circle className="fill-secondary" cx="467" cy="120" r="4"></circle>
<circle className="fill-secondary" cx="567" cy="135" r="4"></circle>
</svg>
<div className="flex justify-between items-center text-outline font-telemetry-data text-body-sm pt-space-xs">
<span>Week 32 (Static +50g)</span>
<span>Week 33</span>
<span>Week 34 (AI Intro)</span>
<span>Week 35</span>
<span>Week 36</span>
<span>Week 37 (Dynamic +21g)</span>
</div>
</div>
<div className="mt-space-md flex flex-wrap items-center justify-between text-body-sm text-on-surface-variant gap-space-sm pt-space-xs">
<span className="font-telemetry-data text-telemetry-data text-primary">Status: Metrology Scale Gantry Auto-Calibrated @ 12ms Interval</span>
<span className="font-telemetry-data text-telemetry-data text-outline">Target PLW buffer calibrated against Desert #2 ambient dry air sensor array</span>
</div>
</div>
</div>
<div className="bg-surface-container-low p-space-lg rounded-lg shadow-sm mb-space-xl">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-caps text-label-caps text-outline uppercase">Traceability Matrix</span>
<span className="font-telemetry-data text-telemetry-data text-primary bg-primary/10 px-space-xs py-space-2xs rounded">Audit-Ready</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-space-2xs">Batch Quality &amp; ROI League Table (Field Performance Ranking)</h2>
</div>
<div className="flex items-center gap-space-sm">
<input className="px-space-md py-space-xs bg-surface-container rounded text-body-sm text-on-surface placeholder:text-outline font-telemetry-data focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Filter Plot ID..." type="text" />
<button className="px-space-md py-space-xs rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-sm">filter_list</span>
<span>Filter</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-lowest text-outline font-label-caps text-label-caps uppercase tracking-wider">
<th className="py-space-sm px-space-md">Plot ID &amp; Variety</th>
<th className="py-space-sm px-space-md">Harvest Vol</th>
<th className="py-space-sm px-space-md">Soil NPK Score</th>
<th className="py-space-sm px-space-md">Gantry Optical Pass</th>
<th className="py-space-sm px-space-md">Grade A Packout</th>
<th className="py-space-sm px-space-md">Giveaway Var</th>
<th className="py-space-sm px-space-md">Compliance Docket</th>
<th className="py-space-sm px-space-md text-right">Profit Index</th>
<th className="py-space-sm px-space-md text-center">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-sm text-body-sm">
<tr className="hover:bg-surface-container/60 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-telemetry-data text-telemetry-data text-on-surface font-bold">BLOCK-3B (Valley)</span>
<span className="font-body-sm text-body-sm text-outline">Red Sweet Premium</span>
</div>
</td>
<td className="py-space-md px-space-md font-telemetry-data text-telemetry-data text-on-surface">142.4 Tons</td>
<td className="py-space-md px-space-md">
<span className="px-space-xs py-space-2xs rounded bg-primary/10 text-primary font-telemetry-data text-telemetry-data">118 ppm N [Nominal]</span>
</td>
<td className="py-space-md px-space-md font-telemetry-data text-telemetry-data text-primary">94.8%</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<div className="w-16 bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "91%"}}></div>
</div>
<span className="font-telemetry-data text-telemetry-data text-on-surface font-semibold">91.2%</span>
</div>
</td>
<td className="py-space-md px-space-md font-telemetry-data text-telemetry-data text-on-surface">+19.2 g</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-primary/10 text-primary font-label-caps text-label-caps">
<span className="material-symbols-outlined text-xs">verified</span> CLEARED
              </span>
</td>
<td className="py-space-md px-space-md text-right font-metric-display-md text-metric-display-md text-primary font-bold">1.24x</td>
<td className="py-space-md px-space-md text-center">
<button className="p-space-xs text-outline hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-base">receipt_long</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container/60 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-telemetry-data text-telemetry-data text-on-surface font-bold">BLOCK-1A (Valley)</span>
<span className="font-body-sm text-body-sm text-outline">Red Sweet Standard</span>
</div>
</td>
<td className="py-space-md px-space-md font-telemetry-data text-telemetry-data text-on-surface">118.0 Tons</td>
<td className="py-space-md px-space-md">
<span className="px-space-xs py-space-2xs rounded bg-primary/10 text-primary font-telemetry-data text-telemetry-data">132 ppm N [Nominal]</span>
</td>
<td className="py-space-md px-space-md font-telemetry-data text-telemetry-data text-primary">91.4%</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<div className="w-16 bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "87%"}}></div>
</div>
<span className="font-telemetry-data text-telemetry-data text-on-surface font-semibold">87.5%</span>
</div>
</td>
<td className="py-space-md px-space-md font-telemetry-data text-telemetry-data text-on-surface">+21.8 g</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-primary/10 text-primary font-label-caps text-label-caps">
<span className="material-symbols-outlined text-xs">verified</span> CLEARED
              </span>
</td>
<td className="py-space-md px-space-md text-right font-metric-display-md text-metric-display-md text-primary font-bold">1.12x</td>
<td className="py-space-md px-space-md text-center">
<button className="p-space-xs text-outline hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-base">receipt_long</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container/60 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-telemetry-data text-telemetry-data text-on-surface font-bold">BLOCK-4C (Desert #2)</span>
<span className="font-body-sm text-body-sm text-outline">Red Export Select</span>
</div>
</td>
<td className="py-space-md px-space-md font-telemetry-data text-telemetry-data text-on-surface">94.2 Tons</td>
<td className="py-space-md px-space-md">
<span className="px-space-xs py-space-2xs rounded bg-secondary/10 text-secondary font-telemetry-data text-telemetry-data">156 ppm N [Marginal]</span>
</td>
<td className="py-space-md px-space-md font-telemetry-data text-telemetry-data text-secondary">86.1%</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<div className="w-16 bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{width: "82%"}}></div>
</div>
<span className="font-telemetry-data text-telemetry-data text-on-surface font-semibold">82.1%</span>
</div>
</td>
<td className="py-space-md px-space-md font-telemetry-data text-telemetry-data text-on-surface">+24.0 g</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-secondary/10 text-secondary font-label-caps text-label-caps">
<span className="material-symbols-outlined text-xs">info</span> CONDITIONAL
              </span>
</td>
<td className="py-space-md px-space-md text-right font-metric-display-md text-metric-display-md text-on-surface font-bold">0.98x</td>
<td className="py-space-md px-space-md text-center">
<button className="p-space-xs text-outline hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-base">receipt_long</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container/60 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-telemetry-data text-telemetry-data text-on-surface font-bold">BLOCK-2D (Desert #2)</span>
<span className="font-body-sm text-body-sm text-outline">Red Early Season</span>
</div>
</td>
<td className="py-space-md px-space-md font-telemetry-data text-telemetry-data text-on-surface">82.5 Tons</td>
<td className="py-space-md px-space-md">
<span className="px-space-xs py-space-2xs rounded bg-error/10 text-error font-telemetry-data text-telemetry-data">194 ppm N [Excess]</span>
</td>
<td className="py-space-md px-space-md font-telemetry-data text-telemetry-data text-error">76.8%</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<div className="w-16 bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-error h-full rounded-full" style={{width: "71%"}}></div>
</div>
<span className="font-telemetry-data text-telemetry-data text-on-surface font-semibold">71.4%</span>
</div>
</td>
<td className="py-space-md px-space-md font-telemetry-data text-telemetry-data text-on-surface">+32.6 g</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-error/10 text-error font-label-caps text-label-caps">
<span className="material-symbols-outlined text-xs">error</span> AUDIT FLAGGED
              </span>
</td>
<td className="py-space-md px-space-md text-right font-metric-display-md text-metric-display-md text-error font-bold">0.82x</td>
<td className="py-space-md px-space-md text-center">
<button className="p-space-xs text-outline hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-base">receipt_long</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="relative rounded-lg overflow-hidden h-48 bg-surface-container-low shadow-sm group">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" alt="Industrial automated agricultural processing packhouse facility with advanced conveyor optical sorting lines illuminated by high-precision cyan and emerald laser telemetry beams, cinematic high-contrast lighting." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqZG00aXPT1ycdmSgrLoxhRLDgwY6xOOgA1etFvglcMZruRJtLb9U0Ie-fz_fki7yV1ybu1c3OO-okekv2uOthL3bTfRGbvXzVgg70Mq68FJZ08chVo_c1cZvviPDcet1P3W7Xi8F_S9H3h-3t26KaL9iLeF9VAVeTELHcPmyQrHTeq3FQhGoLxKcib_-DLXor6uvFHNriWNCg1yqHx7r5LhM1zHc6S3rLJgJYudiez_0ebmuCyh1S')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent p-space-md flex flex-col justify-end">
<span className="font-label-caps text-label-caps text-primary uppercase">Operations Overview</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Optoelectronic Line Health Nominal</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Valley #4 High-Speed NIR Sorters running at 240 FPS with zero dropped frame intervals.</p>
</div>
</div>
<div className="relative rounded-lg overflow-hidden h-48 bg-surface-container-low shadow-sm group">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" alt="Precision agronomy field with smart soil sensors, moisture probes, and drone spectral imaging mapping crop nitrogen levels at sunset under a dramatic industrial agricultural sky." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmbmVpuf6bR1IO-YbD7GwFXoPoNRs9_hBOjFWiJbd29cIhljlP6OTE37-_tmyX6UH_6dkNyY9aOsfrp9rJ26FCXVAmTqcT8DfcTIsDiWq6QjIrRTk-c3Ed78x21R0Xe7NQTIOG46SS0CoiB0us04WaSbHSOjHeTHSXlR8YDCYRu9QdEhmn70-yS4zIA-7t-RZSiB7PKljQIS3jjnYsqIQvPdq5KAuGL00hFjg2juKz_xJ4HZUXKa36')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent p-space-md flex flex-col justify-end">
<span className="font-label-caps text-label-caps text-secondary uppercase">Agronomy Integration</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Autonomous ET Irrigation Network</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Plot Blocks 1A through 5B synchronized with weather radar and localized sap-flow telemetry.</p>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsHub;
