import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const Diagnostics = () => {
  return (
    <DashboardLayout title="Diagnostics" subtitle="Field & Irrigation">
      <div className="flex flex-col w-full gap-space-lg">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-low px-space-lg py-space-sm rounded-lg shadow-sm">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs text-primary font-telemetry-data text-telemetry-data">
<span className="material-symbols-outlined text-sm">satellite_alt</span>
<span className="font-label-caps text-label-caps tracking-widest text-on-surface-variant uppercase">SENTINEL-2 &amp; SOILNET TELEMETRY</span>
</div>
<span className="text-outline-variant font-telemetry-data text-telemetry-data">•</span>
<div className="flex items-center gap-space-xs text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-primary glow-pass"></span>
<span className="font-telemetry-data text-telemetry-data">GATEWAY #09 LORAWAN: 99.8% PACKET INGEST</span>
</div>
<span className="hidden xl:inline text-outline-variant font-telemetry-data text-telemetry-data">•</span>
<span className="hidden xl:inline font-telemetry-data text-telemetry-data text-outline">LAST SYNC: 14 SECONDS AGO</span>
</div>

<div className="flex items-center bg-surface-container-lowest p-space-2xs rounded">
<button className="flex items-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container-high text-primary font-telemetry-data text-telemetry-data shadow-sm" type="button">
<span className="material-symbols-outlined text-xs">monitoring</span>
<span className="font-label-caps text-label-caps tracking-wider">LIVE DIAGNOSTIC</span>
</button>
<a className="flex items-center gap-space-xs px-space-md py-space-xs rounded text-on-surface-variant hover:text-on-surface transition-colors" data-path="field-diagnostics-irrigation" href="#">
<span className="material-symbols-outlined text-xs">analytics</span>
<span className="font-label-caps text-label-caps tracking-wider">FIELD AGRONOMY ANALYTICS</span>
</a>
</div>
</div>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">AVERAGE FIELD MOISTURE</span>
<span className="w-2 h-2 rounded-full bg-primary glow-pass"></span>
</div>
<div className="flex items-baseline gap-space-sm my-space-xs">
<span className="font-metric-display-lg text-metric-display-lg text-on-surface tracking-tight">68.4</span>
<span className="font-telemetry-data text-telemetry-data text-outline">%</span>
<span className="ml-auto font-label-caps text-label-caps text-primary bg-primary/10 px-space-xs py-space-2xs rounded">TARGET 65-72%</span>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex flex-col">
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">24H VARIANCE</span>
<span className="font-telemetry-data text-telemetry-data text-primary">+1.8% CAPILLARY</span>
</div>

<svg className="w-24 h-6 text-primary" fill="none" viewBox="0 0 96 24">
<path d="M0 16 L12 15 L24 18 L36 12 L48 14 L60 8 L72 10 L84 6 L96 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
<path d="M0 16 L12 15 L24 18 L36 12 L48 14 L60 8 L72 10 L84 6 L96 4 L96 24 L0 24 Z" fill="currentColor" fill-opacity="0.08"></path>
</svg>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">NPK HEALTH COMPOSITE</span>
<span className="w-2 h-2 rounded-full bg-secondary glow-warn"></span>
</div>
<div className="flex items-baseline gap-space-sm my-space-xs">
<span className="font-metric-display-lg text-metric-display-lg text-on-surface tracking-tight">88.2</span>
<span className="font-telemetry-data text-telemetry-data text-outline">/100</span>
<span className="ml-auto font-label-caps text-label-caps text-secondary bg-secondary-container/20 text-secondary-fixed-dim px-space-xs py-space-2xs rounded">N ELEVATED</span>
</div>
<div className="grid grid-cols-3 gap-space-xs pt-space-xs text-center font-telemetry-data text-telemetry-data">
<div className="bg-surface-container-lowest py-space-2xs rounded">
<span className="text-error block">N 142</span>
<span className="text-outline text-body-sm">PPM</span>
</div>
<div className="bg-surface-container-lowest py-space-2xs rounded">
<span className="text-primary block">P 58</span>
<span className="text-outline text-body-sm">PPM</span>
</div>
<div className="bg-surface-container-lowest py-space-2xs rounded">
<span className="text-secondary block">K 185</span>
<span className="text-outline text-body-sm">PPM</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">7-DAY PRECIP PROBABILITY</span>
<span className="material-symbols-outlined text-primary text-sm">thunderstorm</span>
</div>
<div className="flex items-baseline gap-space-sm my-space-xs">
<span className="font-metric-display-lg text-metric-display-lg text-primary tracking-tight">85</span>
<span className="font-telemetry-data text-telemetry-data text-outline">%</span>
<span className="ml-auto font-label-caps text-label-caps text-primary bg-primary/10 px-space-xs py-space-2xs rounded">T-MINUS 18H</span>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex flex-col">
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">FORECAST ACCUM</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface">18.5 mm Front</span>
</div>
<div className="flex items-center gap-space-xs font-telemetry-data text-telemetry-data text-outline">
<span className="material-symbols-outlined text-sm text-secondary">compress</span>
<span>1008 hPa</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">SMART LINE STATUS</span>
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary glow-pass"></span>
</span>
</div>
<div className="flex flex-col my-space-xs">
<div className="font-headline-sm text-headline-sm text-on-surface truncate">ON HOLD</div>
<div className="font-telemetry-data text-telemetry-data text-primary">Rain Delay Active (24h)</div>
</div>
<div className="flex items-center justify-between pt-space-xs bg-surface-container-lowest px-space-sm py-space-2xs rounded">
<span className="font-label-caps text-label-caps text-outline uppercase">SAVINGS RUNTIME</span>
<span className="font-telemetry-data text-telemetry-data text-primary font-bold">14,200 L CONSERVED</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">

<div className="xl:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-md shadow-md">

<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg">grid_4x4</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Salinas Valley — Block 3B</span>
<span className="material-symbols-outlined text-outline text-sm cursor-pointer hover:text-on-surface">expand_more</span>
</div>
<span className="font-label-caps text-label-caps text-outline uppercase">CROP: RED SWEET ONIONS (LONG-DAY) • 120 HECTARES • SOIL: SANDY LOAM</span>
</div>
</div>
<div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-space-xs rounded">
<span className="material-symbols-outlined text-primary text-sm">sensors</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface font-semibold">18 Probes Active</span>
<span className="font-label-caps text-label-caps text-outline">| MESH CH-4</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-xs pt-space-xs bg-surface-container-lowest p-space-xs rounded">
<span className="font-label-caps text-label-caps text-outline px-space-xs">HEATMAP LAYER:</span>
<button className="px-space-sm py-space-2xs rounded bg-error/20 text-error font-telemetry-data text-telemetry-data font-semibold flex items-center gap-space-2xs shadow-sm" id="layer-n" type="button">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
            Nitrogen (N) [ACTIVE]
          </button>
<button className="px-space-sm py-space-2xs rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface font-telemetry-data text-telemetry-data transition-colors" id="layer-p" type="button">
            Phosphorus (P)
          </button>
<button className="px-space-sm py-space-2xs rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface font-telemetry-data text-telemetry-data transition-colors" id="layer-k" type="button">
            Potassium (K)
          </button>
<button className="px-space-sm py-space-2xs rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface font-telemetry-data text-telemetry-data transition-colors" id="layer-moist" type="button">
            Moisture %
          </button>
<button className="px-space-sm py-space-2xs rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface font-telemetry-data text-telemetry-data transition-colors" id="layer-ph" type="button">
            Soil pH (6.4)
          </button>
<button className="px-space-sm py-space-2xs rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface font-telemetry-data text-telemetry-data transition-colors" id="layer-temp" type="button">
            Soil Temp (18.2°C)
          </button>
</div>

<div className="relative w-full aspect-[16/10] bg-surface-container-lowest rounded-lg overflow-hidden flex items-center justify-center select-none group">

<div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity" alt="High altitude crisp satellite aerial view of agricultural parcel grid showing irrigated precision onion rows with subtle orthogonal coordinates and high precision technical raster overlay in dark slate and organic green tones" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsb_jrLfZkXUOL_IT4Nw6v07ZIiuBXt2zpRAPsoORA9VpF_BoTUQoIGRJgA-KJkhbm_hzApfWKTczznKzlXvZ0iT3-A7ZH4WF3lgWiDH3IDSSxn4JNHJOg2ZnjKUE60V7l1NiiWdZVc3lwO35dVKIoUOXWTZ0YYSivGmpT6kny0Ds7JU4Ltc4j5jQ12dWvucy_aal-jrzDO5p4DHG8XvV-XrDqi99_RCH-k2VOEvQuwgQNMyUimrtA')"}}></div>

<div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-error/35 pointer-events-none"></div>
<div className="absolute top-4 right-10 w-72 h-44 bg-error/25 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-8 left-12 w-64 h-36 bg-primary/20 rounded-full blur-2xl pointer-events-none"></div>
<div className="absolute top-1/3 left-1/3 w-48 h-32 bg-secondary/15 rounded-full blur-xl pointer-events-none"></div>

<svg className="absolute inset-0 w-full h-full text-outline-variant/30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="48" id="gis-grid" patternUnits="userSpaceOnUse" width="48">
<path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" stroke-dasharray="2 4" stroke-width="0.75"></path>
</pattern>
</defs>
<rect fill="url(#gis-grid)" height="100%" width="100%"></rect>
</svg>

<div className="absolute top-2 left-3 font-label-caps text-label-caps text-outline/60">ZONE 3B-NW</div>
<div className="absolute top-2 right-3 font-label-caps text-label-caps text-error font-bold flex items-center gap-space-2xs bg-surface-container-lowest/80 px-space-xs rounded">
<span className="w-1.5 h-1.5 rounded-full bg-error glow-error animate-pulse"></span>
            ZONE 3B-NE [NITROGEN OVERLOAD]
          </div>
<div className="absolute bottom-2 left-3 font-label-caps text-label-caps text-outline/60">ZONE 3B-SW</div>
<div className="absolute bottom-2 right-3 font-label-caps text-label-caps text-outline/60">ZONE 3B-SE</div>


<div className="absolute top-[18%] left-[12%] flex flex-col items-center group/probe cursor-pointer" onclick="selectProbe('P-01', 67, 134, 6.5, 18.0)">
<span className="w-2.5 h-2.5 rounded-full bg-primary glow-pass"></span>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant bg-surface-container-lowest/90 px-1 py-0.5 rounded text-[10px] mt-0.5">P-01</span>
</div>

<div className="absolute top-[32%] left-[28%] flex flex-col items-center group/probe cursor-pointer" onclick="selectProbe('P-03', 68, 138, 6.3, 18.1)">
<span className="w-2.5 h-2.5 rounded-full bg-primary glow-pass"></span>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant bg-surface-container-lowest/90 px-1 py-0.5 rounded text-[10px] mt-0.5">P-03</span>
</div>

<div className="absolute bottom-[24%] left-[30%] flex flex-col items-center group/probe cursor-pointer" onclick="selectProbe('P-06', 64, 125, 6.2, 17.8)">
<span className="w-2.5 h-2.5 rounded-full bg-secondary glow-warn"></span>
<span className="font-telemetry-data text-telemetry-data text-secondary bg-surface-container-lowest/90 px-1 py-0.5 rounded text-[10px] mt-0.5">P-06</span>
</div>

<div className="absolute top-[28%] right-[38%] flex flex-col items-center group/probe cursor-pointer" onclick="selectProbe('P-08', 69, 152, 6.2, 18.3)">
<span className="w-2.5 h-2.5 rounded-full bg-secondary glow-warn"></span>
<span className="font-telemetry-data text-telemetry-data text-secondary bg-surface-container-lowest/90 px-1 py-0.5 rounded text-[10px] mt-0.5">P-08</span>
</div>

<div className="absolute top-[16%] right-[18%] flex flex-col items-center z-20 cursor-pointer" onclick="selectProbe('P-09', 71, 168, 6.1, 18.7)">
<span className="relative flex h-5 w-5 items-center justify-center">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-error glow-error"></span>
</span>
<span className="font-telemetry-data text-telemetry-data text-error font-bold bg-surface-container-lowest px-1.5 py-0.5 rounded shadow-md mt-0.5">P-09 [HOT]</span>

<div className="absolute -top-32 right-[-80px] w-64 bg-surface-container-high p-space-sm rounded shadow-xl text-left pointer-events-auto">
<div className="flex items-center justify-between border-b border-surface-variant pb-space-2xs mb-space-xs">
<div className="flex items-center gap-space-2xs">
<span className="w-2 h-2 rounded-full bg-error glow-error"></span>
<span className="font-telemetry-data text-telemetry-data font-bold text-on-surface">PROBE P-09 (NE-SUB)</span>
</div>
<span className="font-label-caps text-label-caps text-error uppercase font-bold">EXCEEDS SPEC</span>
</div>
<div className="grid grid-cols-2 gap-space-xs font-telemetry-data text-telemetry-data">
<div className="text-outline">Depth Dual:</div>
<div className="text-right text-on-surface">15cm &amp; 45cm</div>
<div className="text-outline">Field Moisture:</div>
<div className="text-right text-primary">71.2% (Sat.)</div>
<div className="text-outline">Nitrogen (N):</div>
<div className="text-right text-error font-bold">168 ppm ▲</div>
<div className="text-outline">Soil pH:</div>
<div className="text-right text-secondary">6.1 (Acidic)</div>
</div>
<div className="mt-space-xs pt-space-2xs border-t border-surface-variant flex justify-between items-center text-[10px] text-outline font-telemetry-data">
<span>Drip Zone #4B</span>
<span className="text-error underline cursor-pointer">ISOLATE ROW</span>
</div>
</div>
</div>

<div className="absolute top-[48%] right-[16%] flex flex-col items-center group/probe cursor-pointer" onclick="selectProbe('P-12', 70, 161, 6.0, 18.5)">
<span className="w-2.5 h-2.5 rounded-full bg-error glow-error"></span>
<span className="font-telemetry-data text-telemetry-data text-error bg-surface-container-lowest/90 px-1 py-0.5 rounded text-[10px] mt-0.5">P-12</span>
</div>

<div className="absolute bottom-[36%] right-[22%] flex flex-col items-center group/probe cursor-pointer" onclick="selectProbe('P-15', 66, 140, 6.4, 18.2)">
<span className="w-2.5 h-2.5 rounded-full bg-primary glow-pass"></span>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant bg-surface-container-lowest/90 px-1 py-0.5 rounded text-[10px] mt-0.5">P-15</span>
</div>

<div className="absolute bottom-[18%] right-[40%] flex flex-col items-center group/probe cursor-pointer" onclick="selectProbe('P-17', 68, 137, 6.4, 18.1)">
<span className="w-2.5 h-2.5 rounded-full bg-primary glow-pass"></span>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant bg-surface-container-lowest/90 px-1 py-0.5 rounded text-[10px] mt-0.5">P-17</span>
</div>

<div className="absolute bottom-[14%] right-[12%] flex flex-col items-center group/probe cursor-pointer" onclick="selectProbe('P-18', 65, 135, 6.5, 17.9)">
<span className="w-2.5 h-2.5 rounded-full bg-primary glow-pass"></span>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant bg-surface-container-lowest/90 px-1 py-0.5 rounded text-[10px] mt-0.5">P-18</span>
</div>

<div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-space-xs rounded flex flex-col gap-space-2xs">
<span className="font-label-caps text-label-caps text-outline uppercase">NITROGEN THRESHOLD DENSITY (PPM)</span>
<div className="flex items-center gap-space-xs">
<span className="font-telemetry-data text-telemetry-data text-primary">80</span>
<div className="w-32 h-2 rounded bg-gradient-to-r from-primary via-secondary to-error"></div>
<span className="font-telemetry-data text-telemetry-data text-error">180+</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<button className="w-6 h-6 rounded bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-sm">play_arrow</span>
</button>
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">HISTORICAL REPLAY (T-24H TO PRESENT)</span>
</div>
<span className="font-telemetry-data text-telemetry-data text-primary font-bold">14:00 REALTIME SYNC</span>
</div>
<div className="relative flex items-center w-full py-1">
<input className="w-full h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary" max="24" min="0" type="range" value="24" />
</div>
<div className="flex justify-between font-telemetry-data text-telemetry-data text-outline text-[11px]">
<span>-24h (08:00 Yesterday)</span>
<span>-18h</span>
<span>-12h (Dusk Flush)</span>
<span>-6h (Dew Point)</span>
<span className="text-primary font-semibold">NOW (Live Telemetry)</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
<div className="bg-surface-container-low p-space-sm rounded flex items-center gap-space-sm">
<div className="w-9 h-9 rounded bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined">layers</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-caps text-label-caps text-outline uppercase truncate">ROOT ZONE (15-30CM)</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface font-bold">Hydraulic Head: 4.8 kPa</span>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded flex items-center gap-space-sm">
<div className="w-9 h-9 rounded bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">thermostat</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-caps text-label-caps text-outline uppercase truncate">BULB MATURATION HEAT</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface font-bold">18.2°C (Optimal Curing)</span>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded flex items-center gap-space-sm">
<div className="w-9 h-9 rounded bg-surface-container flex items-center justify-center text-error">
<span className="material-symbols-outlined">science</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-caps text-label-caps text-outline uppercase truncate">LEACHING POTENTIAL</span>
<span className="font-telemetry-data text-telemetry-data text-error font-bold">Elevated in NE Zone</span>
</div>
</div>
</div>
</div>

<div className="xl:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between pb-space-2xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-base">speed</span>
<span className="font-label-caps text-label-caps text-on-surface font-bold uppercase tracking-wider">SOIL TELEMETRY STATUS</span>
</div>
<span className="font-telemetry-data text-telemetry-data text-outline">P-09 FOCUS</span>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">

<div className="flex flex-col gap-space-2xs bg-surface-container-lowest p-space-xs rounded">
<div className="flex justify-between items-center font-telemetry-data text-telemetry-data">
<span className="text-on-surface font-medium">Nitrogen Content (N)</span>
<span className="text-error font-bold">168 ppm [HIGH]</span>
</div>
<div className="w-full h-2 bg-surface-container rounded overflow-hidden flex">
<div className="bg-primary h-full w-[45%]"></div>
<div className="bg-secondary h-full w-[25%]"></div>
<div className="bg-error h-full w-[30%]"></div>
</div>
<div className="flex justify-between text-[10px] font-telemetry-data text-outline">
<span>0</span>
<span>Nominal: 110-130 ppm</span>
<span>200</span>
</div>
</div>

<div className="flex flex-col gap-space-2xs bg-surface-container-lowest p-space-xs rounded">
<div className="flex justify-between items-center font-telemetry-data text-telemetry-data">
<span className="text-on-surface font-medium">Phosphorus (P)</span>
<span className="text-primary font-bold">58 ppm [BALANCED]</span>
</div>
<div className="w-full h-2 bg-surface-container rounded overflow-hidden flex">
<div className="bg-secondary h-full w-[20%]"></div>
<div className="bg-primary h-full w-[60%]"></div>
<div className="bg-error h-full w-[20%]"></div>
</div>
<div className="flex justify-between text-[10px] font-telemetry-data text-outline">
<span>0</span>
<span>Nominal: 45-65 ppm</span>
<span>100</span>
</div>
</div>

<div className="flex flex-col gap-space-2xs bg-surface-container-lowest p-space-xs rounded">
<div className="flex justify-between items-center font-telemetry-data text-telemetry-data">
<span className="text-on-surface font-medium">Potassium (K)</span>
<span className="text-secondary font-bold">185 ppm [NEEDS ATTN]</span>
</div>
<div className="w-full h-2 bg-surface-container rounded overflow-hidden flex">
<div className="bg-secondary h-full w-[35%]"></div>
<div className="bg-primary h-full w-[45%]"></div>
<div className="bg-error h-full w-[20%]"></div>
</div>
<div className="flex justify-between text-[10px] font-telemetry-data text-outline">
<span>0</span>
<span>Target: 220-250 ppm</span>
<span>300</span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-xs">
<div className="bg-surface-container-lowest p-space-xs rounded flex flex-col">
<span className="font-label-caps text-label-caps text-outline">SOIL pH INDEX</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-metric-display-md text-metric-display-md text-secondary font-bold">6.1</span>
<span className="font-telemetry-data text-telemetry-data text-outline">Opt: 6.5</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-xs rounded flex flex-col">
<span className="font-label-caps text-label-caps text-outline">SOIL TEMP (ROOT DEPTH)</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-metric-display-md text-metric-display-md text-primary font-bold">18.2</span>
<span className="font-telemetry-data text-telemetry-data text-outline">°C Nominal</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between pb-space-2xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">psychology</span>
<span className="font-label-caps text-label-caps text-on-surface font-bold uppercase tracking-wider">AI HARVEST &amp; STORAGE ADVISORY</span>
</div>
<span className="font-label-caps text-label-caps bg-surface-container px-space-xs py-space-2xs text-outline rounded">ENGINE V4.2</span>
</div>

<div className="p-space-sm rounded bg-error-container/20 flex flex-col gap-space-xs shadow-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs text-error font-telemetry-data text-telemetry-data font-bold">
<span className="material-symbols-outlined text-base">error</span>
<span>HIGH NITROGEN ALERT (ZONE 3B-NE)</span>
</div>
<span className="font-label-caps text-label-caps bg-error text-on-error px-space-xs py-space-2xs rounded">CRITICAL</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
            Pause N application immediately. Excessive Nitrogen at this bulb curing phase elevates neck thickness by 34%, exponentially increasing post-harvest bacterial soft rot and Aspergillus black mold in cold storage.
          </p>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-telemetry-data text-telemetry-data text-error font-medium">Affected: Rows 14–28</span>
<button className="bg-error hover:bg-error-container text-on-error font-label-caps text-label-caps uppercase px-space-md py-space-xs rounded flex items-center gap-space-xs transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-sm">lock</span>
<span>LOCK N INJECTORS</span>
</button>
</div>
</div>

<div className="p-space-sm rounded bg-secondary-container/20 flex flex-col gap-space-xs shadow-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs text-secondary-fixed-dim font-telemetry-data text-telemetry-data font-bold">
<span className="material-symbols-outlined text-base">warning</span>
<span>LOW POTASSIUM DEFICIT</span>
</div>
<span className="font-label-caps text-label-caps bg-secondary text-on-secondary px-space-xs py-space-2xs rounded">WARNING</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
            Apply Potash dosage (42 kg/ha) to increase outer scale skin retention and mitigate mechanical bruising during high-throughput grading lines.
          </p>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-telemetry-data text-telemetry-data text-secondary">Est. Delivery: Dry Pellets</span>
<button className="bg-surface-container-high hover:bg-surface-variant text-secondary-fixed-dim font-label-caps text-label-caps uppercase px-space-md py-space-xs rounded flex items-center gap-space-xs transition-colors" type="button">
<span className="material-symbols-outlined text-sm">event</span>
<span>SCHEDULE FERTIGATION</span>
</button>
</div>
</div>

<div className="p-space-sm rounded bg-surface-container-lowest flex flex-col gap-space-xs shadow-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs text-primary font-telemetry-data text-telemetry-data font-bold">
<span className="material-symbols-outlined text-base">info</span>
<span>pH STABILIZATION DETECTED</span>
</div>
<span className="font-label-caps text-label-caps text-outline bg-surface-container px-space-xs py-space-2xs rounded">INFO</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Slight acidification detected in Sub-Block 3B-East (pH 5.9). Calcium nitrate buffering recommended on next irrigation schedule after rain event clears.
          </p>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-md shadow-md">

<div className="flex items-center justify-between pb-space-2xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-base">water_drop</span>
<span className="font-label-caps text-label-caps text-on-surface font-bold uppercase tracking-wider">SMART IRRIGATION CONTROLLER</span>
</div>
<div className="flex items-center gap-space-xs font-telemetry-data text-telemetry-data bg-surface-container-lowest px-space-sm py-space-2xs rounded">
<span className="text-outline">CALC ET:</span>
<span className="text-primary font-bold">4.2 mm/day</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps text-outline uppercase">METEOROLOGICAL OUTLOOK (SALINAS AIRSHED)</span>
<div className="grid grid-cols-7 gap-space-2xs text-center font-telemetry-data text-telemetry-data">

<div className="bg-surface-container-lowest p-space-xs rounded flex flex-col items-center">
<span className="text-outline text-[10px]">TODAY</span>
<span className="material-symbols-outlined text-sm text-secondary my-1">cloud</span>
<span className="text-on-surface font-semibold">22°</span>
<span className="text-primary text-[10px]">20%</span>
</div>

<div className="bg-primary/10 p-space-xs rounded flex flex-col items-center">
<span className="text-primary text-[10px] font-bold">D+1</span>
<span className="material-symbols-outlined text-sm text-primary my-1">rainy</span>
<span className="text-on-surface font-semibold">18°</span>
<span className="text-primary font-bold text-[10px]">85%</span>
</div>

<div className="bg-surface-container-lowest p-space-xs rounded flex flex-col items-center">
<span className="text-outline text-[10px]">D+2</span>
<span className="material-symbols-outlined text-sm text-outline my-1">partly_cloudy_day</span>
<span className="text-on-surface font-semibold">21°</span>
<span className="text-outline text-[10px]">10%</span>
</div>

<div className="bg-secondary-container/15 p-space-xs rounded flex flex-col items-center">
<span className="text-secondary text-[10px] font-bold">D+3</span>
<span className="material-symbols-outlined text-sm text-secondary my-1">wb_sunny</span>
<span className="text-secondary font-semibold">28°</span>
<span className="text-outline text-[10px]">0%</span>
</div>

<div className="bg-surface-container-lowest p-space-xs rounded flex flex-col items-center">
<span className="text-outline text-[10px]">D+4</span>
<span className="material-symbols-outlined text-sm text-outline my-1">sunny</span>
<span className="text-on-surface font-semibold">26°</span>
<span className="text-outline text-[10px]">0%</span>
</div>

<div className="bg-surface-container-lowest p-space-xs rounded flex flex-col items-center">
<span className="text-outline text-[10px]">D+5</span>
<span className="material-symbols-outlined text-sm text-outline my-1">wb_sunny</span>
<span className="text-on-surface font-semibold">25°</span>
<span className="text-outline text-[10px]">5%</span>
</div>

<div className="bg-surface-container-lowest p-space-xs rounded flex flex-col items-center">
<span className="text-outline text-[10px]">D+6</span>
<span className="material-symbols-outlined text-sm text-outline my-1">cloud</span>
<span className="text-on-surface font-semibold">23°</span>
<span className="text-outline text-[10px]">15%</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs text-primary font-telemetry-data text-telemetry-data font-semibold">
<span className="material-symbols-outlined text-sm">precision_manufacturing</span>
<span>AUTOMATED VALVE ENGINE INSTRUCTIONS</span>
</div>
<div className="flex flex-col gap-space-xs">
<div className="p-space-xs bg-surface-container rounded text-body-sm text-on-surface flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-sm mt-0.5">pause_circle</span>
<div>
<span className="font-bold text-on-surface">CURRENT DELAY COMMAND:</span> Moisture low (68%), but 85% precipitation forecasted within 24 hours (18.5 mm). Drip lines held in standby.
              </div>
</div>
<div className="p-space-xs bg-surface-container rounded text-body-sm text-on-surface flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-sm mt-0.5">update</span>
<div>
<span className="font-bold text-secondary">UPCOMING RECOMMENDATION:</span> Projected peak heat on Day +3 (28°C, 0% rain). Recommended pulse: <span className="font-telemetry-data text-telemetry-data font-bold text-primary">1,500 L / 45 mins</span> per sub-manifold.
              </div>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
<button className="opacity-50 cursor-not-allowed bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase px-space-md py-space-xs rounded flex items-center gap-space-xs shadow-none" disabled="" type="button">
<span className="material-symbols-outlined text-sm">bolt</span>
<span>EXECUTE PRESET PULSE (STANDBY)</span>
</button>
<button className="bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-caps text-label-caps uppercase px-space-md py-space-xs rounded flex items-center gap-space-xs transition-colors" type="button">
<span className="material-symbols-outlined text-sm">tune</span>
<span>MANUAL OVERRIDE</span>
</button>
<button className="text-outline hover:text-on-surface font-label-caps text-label-caps uppercase px-space-sm py-space-xs flex items-center gap-space-2xs transition-colors ml-auto" type="button">
<span className="material-symbols-outlined text-sm">history</span>
<span>VALVE LOGS</span>
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

export default Diagnostics;
