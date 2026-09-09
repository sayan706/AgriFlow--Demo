import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const DigitalTwin = () => {
  return (
    <DashboardLayout title="Digital Twin" subtitle="Plant Processing">
      <div className="flex flex-col w-full gap-space-lg">

<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md bg-surface-container-low p-space-md rounded-lg shadow-sm">
<div className="flex flex-wrap items-center gap-space-md">
<div className="flex items-center gap-space-xs bg-surface-container-highest px-space-sm py-space-2xs rounded">
<span className="font-label-caps text-label-caps text-outline uppercase">LINE ARCHITECTURE</span>
<span className="font-telemetry-data text-telemetry-data text-primary font-bold">LINE #02</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs">
          Main Optical Grading &amp; High-Speed Sorting Twin
          <span className="inline-flex items-center px-space-xs py-space-2xs rounded bg-primary-container/20 text-primary font-label-caps text-label-caps glow-pass">
<span className="w-1.5 h-1.5 rounded-full bg-primary mr-1 animate-pulse"></span> RUNNING NOMINAL
          </span>
</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">
          Batch: <span className="text-secondary font-semibold">#ON-2024-B3B-889</span> • Block 3B Salinas Valley • Allium cepa (Red Bulb Extra-Crisp)
        </span>
</div>
</div>

<div className="flex items-center gap-space-xs bg-surface-container-lowest p-space-2xs rounded">
<button className="flex items-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container-high text-primary font-telemetry-data text-telemetry-data font-semibold shadow-sm" type="button">
<span className="material-symbols-outlined text-sm">view_in_ar</span>
<span>Digital Twin Live</span>
</button>
<a className="flex items-center gap-space-xs px-space-md py-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors font-telemetry-data text-telemetry-data" data-path="plant-line-analytics" href="#">
<span className="material-symbols-outlined text-sm">query_stats</span>
<span>Plant Quality &amp; Sensor Analytics</span>
</a>
<div className="h-4 w-px bg-surface-container-highest mx-space-2xs"></div>
<button className="p-space-xs rounded text-outline hover:text-on-surface hover:bg-surface-container transition-colors" title="Calibration Matrix" type="button">
<span className="material-symbols-outlined text-sm">tune</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="flex flex-col justify-between bg-surface-container-low p-space-md rounded-lg shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-space-xs">
<span className="material-symbols-outlined text-xs text-primary">conveyor_belt</span>
          CONVEYOR SPEED CONTROL
        </span>
<span className="font-telemetry-data text-telemetry-data text-primary">SERVO SYNCED</span>
</div>
<div className="flex items-baseline gap-space-sm my-space-xs">
<span className="font-metric-display-lg text-metric-display-lg text-on-surface" id="speedDisplay">1.85</span>
<span className="font-telemetry-data text-telemetry-data text-outline">m/s</span>
<span className="font-label-caps text-label-caps text-secondary ml-auto">TARGET: 1.80 – 2.00 m/s</span>
</div>
<div className="flex flex-col gap-space-2xs">
<input className="w-full h-1.5 bg-surface-container-highest rounded appearance-none cursor-pointer accent-primary" id="speedSlider" max="2.4" min="1.4" step="0.01" type="range" value="1.85" />
<div className="flex justify-between font-label-caps text-label-caps text-outline">
<span>1.40 m/s</span>
<span className="text-primary font-bold">1.85 CALIBRATED</span>
<span>2.40 m/s</span>
</div>
</div>
</div>

<div className="flex flex-col justify-between bg-surface-container-low p-space-md rounded-lg shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-space-xs">
<span className="material-symbols-outlined text-xs text-secondary">weight</span>
          BELT LOAD &amp; MASS FLUX
        </span>
<span className="w-2 h-2 rounded-full bg-primary glow-pass"></span>
</div>
<div className="flex items-baseline justify-between my-space-xs">
<div>
<span className="font-metric-display-lg text-metric-display-lg text-on-surface">14.8</span>
<span className="font-telemetry-data text-telemetry-data text-outline">Tons/Hr</span>
</div>
<div className="text-right">
<span className="font-metric-display-md text-metric-display-md text-secondary">84%</span>
<span className="font-label-caps text-label-caps text-outline block">BELT OCCUPANCY</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded overflow-hidden">
<div className="bg-secondary h-full rounded transition-all duration-500" style={{width: "84%"}}></div>
</div>
<div className="flex justify-between font-label-caps text-label-caps text-outline mt-space-2xs">
<span>TARGET: 15.0 T/HR</span>
<span className="text-on-surface-variant">EFFICIENCY: 98.6%</span>
</div>
</div>

<div className="flex flex-col justify-between bg-surface-container-low p-space-md rounded-lg shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-space-xs">
<span className="material-symbols-outlined text-xs text-primary">thermostat</span>
          INTAKE CLIMATE TELEMETRY
        </span>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">BAY #04 SENSORS</span>
</div>
<div className="grid grid-cols-3 gap-space-xs my-space-xs text-center">
<div className="bg-surface-container p-space-xs rounded">
<span className="font-label-caps text-label-caps text-outline block">TEMP</span>
<span className="font-telemetry-data text-telemetry-data font-bold text-on-surface">16.4°C</span>
</div>
<div className="bg-surface-container p-space-xs rounded">
<span className="font-label-caps text-label-caps text-outline block">HUMIDITY</span>
<span className="font-telemetry-data text-telemetry-data font-bold text-on-surface">62% RH</span>
</div>
<div className="bg-surface-container p-space-xs rounded">
<span className="font-label-caps text-label-caps text-outline block">DEW PT</span>
<span className="font-telemetry-data text-telemetry-data font-bold text-primary">9.1°C</span>
</div>
</div>
<div className="flex items-center justify-between font-label-caps text-label-caps text-outline">
<span>ΔT (SKIN - DEW): +7.3°C</span>
<span className="text-primary">NO CONDENSATION</span>
</div>
</div>

<div className="flex flex-col justify-between bg-surface-container-low p-space-md rounded-lg shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-space-xs">
<span className="material-symbols-outlined text-xs text-primary-fixed-dim">air</span>
          SWEATING RISK &amp; VENTILATION
        </span>
<span className="inline-flex items-center px-space-xs py-space-2xs rounded bg-primary-container/10 text-primary font-label-caps text-label-caps">
          LOW RISK
        </span>
</div>
<div className="flex items-baseline justify-between my-space-xs">
<div>
<span className="font-metric-display-lg text-metric-display-lg text-primary">12%</span>
<span className="font-label-caps text-label-caps text-outline block">INDEX SCORE</span>
</div>
<div className="text-right flex flex-col items-end">
<div className="flex items-center gap-space-xs text-on-surface font-telemetry-data text-telemetry-data">
<span className="material-symbols-outlined text-sm text-primary animate-spin" style={{animationDuration: "4s"}}>rotate_right</span>
<span>85% CFM</span>
</div>
<span className="font-label-caps text-label-caps text-outline">4x AXIAL INDUCTION</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded overflow-hidden">
<div className="bg-primary h-full rounded" style={{width: "12%"}}></div>
</div>
<div className="flex justify-between font-label-caps text-label-caps text-outline mt-space-2xs">
<span>SKIN DRYNESS: OPTIMAL</span>
<span className="text-on-surface-variant">LAMINAR VELOCITY: 2.1 m/s</span>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-low rounded-lg p-space-lg shadow-sm">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm mb-space-md">
<div>
<div className="flex items-center gap-space-sm">
<span className="font-label-caps text-label-caps text-primary uppercase tracking-widest flex items-center gap-space-2xs">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            SYNCHRONIZED SCADA FEED
          </span>
<span className="text-outline font-telemetry-data text-telemetry-data">|</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">Chamber #02-GANTRY-OPTIQ</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-space-2xs">Conveyor Spatial Schematic &amp; High-Frequency Air Actuator Grid</h2>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs font-label-caps text-label-caps text-on-surface-variant">
<span className="w-2.5 h-2.5 rounded-sm bg-primary"></span> <span>Normal Pass</span>
<span className="w-2.5 h-2.5 rounded-sm bg-tertiary ml-space-sm"></span> <span>Internal Rot Eject</span>
<span className="w-2.5 h-2.5 rounded-sm bg-secondary ml-space-sm"></span> <span>Surface Defect</span>
</div>
<button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-space-sm py-space-xs rounded font-telemetry-data text-telemetry-data flex items-center gap-space-xs transition-colors" id="toggleAnimBtn" type="button">
<span className="material-symbols-outlined text-sm">pause</span>
<span>Hold Belt</span>
</button>
</div>
</div>

<div className="relative w-full bg-surface-container-lowest rounded-lg p-space-md overflow-hidden min-h-[220px] flex flex-col justify-between">

<div className="absolute inset-0 opacity-10 flex justify-between pointer-events-none px-4">
<div className="w-px h-full bg-outline"></div>
<div className="w-px h-full bg-outline"></div>
<div className="w-px h-full bg-outline"></div>
<div className="w-px h-full bg-outline"></div>
<div className="w-px h-full bg-outline"></div>
<div className="w-px h-full bg-outline"></div>
<div className="w-px h-full bg-outline"></div>
<div className="w-px h-full bg-outline"></div>
</div>

<div className="grid grid-cols-12 gap-space-xs relative z-10 text-center font-label-caps text-label-caps text-outline">
<div className="col-span-3 text-left pl-space-sm flex items-center gap-space-xs text-on-surface-variant">
<span className="material-symbols-outlined text-xs text-primary">login</span>
<span>ZONE 1: BULK INFEED HOPPER</span>
</div>
<div className="col-span-4 bg-surface-container-high/60 py-space-2xs rounded text-primary flex items-center justify-center gap-space-xs">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
<span>ZONE 2: MULTI-SPECTRAL OPTICAL GANTRY (240 FPS)</span>
</div>
<div className="col-span-2 bg-error-container/30 py-space-2xs rounded text-tertiary flex items-center justify-center gap-space-xs">
<span className="material-symbols-outlined text-xs">air</span>
<span>ZONE 3: REJECT ACTUATORS</span>
</div>
<div className="col-span-3 text-right pr-space-sm flex items-center justify-end gap-space-xs text-secondary">
<span>ZONE 4: LASER SIZING CHUTES (A/B/C)</span>
<span className="material-symbols-outlined text-xs">logout</span>
</div>
</div>

<div className="relative my-space-md h-24 bg-surface-container-high/40 rounded flex items-center px-space-md overflow-hidden">

<div className="absolute inset-x-0 top-3 h-0.5 bg-surface-container-highest"></div>
<div className="absolute inset-x-0 bottom-3 h-0.5 bg-surface-container-highest"></div>
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-surface-container-lowest"></div>

<div className="absolute left-[33%] top-0 bottom-0 w-32 bg-primary/10 border-l border-r border-primary/40 flex flex-col justify-between items-center py-1 pointer-events-none z-20">
<span className="font-label-caps text-label-caps text-primary tracking-widest">SCAN LINE</span>
<div className="w-full h-0.5 bg-primary shadow-[0_0_8px_#4edea3] animate-pulse"></div>
<span className="font-label-caps text-label-caps text-primary">SWIR • RGB • LWIR</span>
</div>

<div className="absolute left-[62%] top-0 bottom-0 w-20 bg-error-container/20 border-l border-r border-tertiary/30 flex flex-col justify-between items-center py-1 pointer-events-none z-20">
<span className="font-label-caps text-label-caps text-tertiary">VALVE BANK</span>
<div className="flex gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</div>
<span className="font-label-caps text-label-caps text-tertiary">12ms PULSE</span>
</div>

<div className="flex items-center justify-between w-full relative z-10" id="conveyorBeltItems">

<div className="flex flex-col items-center gap-1 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary relative">
<span className="material-symbols-outlined text-lg">circle</span>
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary glow-pass"></span>
</div>
<span className="font-label-caps text-label-caps text-outline">#9021-A</span>
</div>

<div className="flex flex-col items-center gap-1 group cursor-pointer">
<div className="w-11 h-11 rounded-full bg-surface-container-highest flex items-center justify-center text-primary relative">
<span className="material-symbols-outlined text-lg">circle</span>
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary glow-pass"></span>
</div>
<span className="font-label-caps text-label-caps text-outline">#9022-A</span>
</div>

<div className="flex flex-col items-center gap-1 group cursor-pointer scale-110 transition-transform">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary relative shadow-[0_0_12px_rgba(255,185,95,0.4)]">
<span className="material-symbols-outlined text-xl">lens_blur</span>
<span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-secondary animate-ping"></span>
</div>
<span className="font-label-caps text-label-caps text-secondary font-bold">#9023-B</span>
</div>

<div className="flex flex-col items-center gap-1 group cursor-pointer animate-bounce" style={{animationDuration: "2s"}}>
<div className="w-11 h-11 rounded-full bg-error-container/60 flex items-center justify-center text-tertiary relative glow-error">
<span className="material-symbols-outlined text-lg">close</span>
<span className="absolute -bottom-2 -left-1 px-1 bg-surface-container-lowest font-label-caps text-label-caps text-tertiary rounded">EJECT</span>
</div>
<span className="font-label-caps text-label-caps text-tertiary font-bold">ROT-NIR</span>
</div>

<div className="flex flex-col items-center gap-1 group cursor-pointer">
<div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-primary relative">
<span className="material-symbols-outlined text-base">circle</span>
<span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary glow-pass"></span>
</div>
<span className="font-label-caps text-label-caps text-outline">#9025-B</span>
</div>

<div className="flex flex-col items-center gap-1 group cursor-pointer">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary relative">
<span className="material-symbols-outlined text-xl">verified</span>
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary glow-pass"></span>
</div>
<span className="font-label-caps text-label-caps text-outline">#9026-A</span>
</div>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs text-on-surface-variant font-telemetry-data text-telemetry-data">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-xs text-primary">speed</span>
<span>Response Latency: <strong className="text-on-surface">11.8 ms</strong></span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-xs text-primary">compress</span>
<span>Air Pressure: <strong className="text-on-surface">6.8 Bar (Nominal)</strong></span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-xs text-secondary">tune</span>
<span>Active Ejection Nozzles: <strong className="text-secondary">64 Banks</strong></span>
</div>
</div>
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-xs">verified</span>
<span>Optical Encoder Precision: ±0.4mm</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-md">

<div className="xl:col-span-7 flex flex-col gap-space-md bg-surface-container-low p-space-lg rounded-lg shadow-sm">
<div className="flex items-center justify-between">
<div>
<span className="font-label-caps text-label-caps text-primary uppercase">GANTRY MULTI-SPECTRUM ENGINE</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Synchronized Sensor Feeds (240 FPS Hardware-Triggered)</h3>
</div>
<div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-space-2xs rounded">
<span className="w-2 h-2 rounded-full bg-primary glow-pass"></span>
<span className="font-telemetry-data text-telemetry-data text-on-surface">FRAME: #892,104</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="flex flex-col bg-surface-container-lowest rounded overflow-hidden shadow-sm">
<div className="flex items-center justify-between p-space-xs bg-surface-container">
<span className="font-label-caps text-label-caps text-on-surface flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> RGB VISIBLE
            </span>
<span className="font-telemetry-data text-telemetry-data text-outline">400–700nm</span>
</div>
<div className="relative h-44 w-full bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" alt="High-resolution industrial machine vision camera feed of purple red onions on a fast conveyor belt with bright neon bounding boxes detecting loose skins and surface blemishes against a dark background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8HwUQy5qcdcNaHIyx6beLeuE7E0N9q8XC2wE3n4-F6mpk8BPxPbFLOXxZ-kwBcUnQJjN-_taTN1Qb0z97CLUgtGFZwHrfNY3_WgUJl2JosdflPldNBnSFKVxCEMMwOOjmDtEXdstYxcskBLxhJkgnX_2tz2NBpmBYljOVe6RaGE4mCXTUCIZeTa8WCo1jwmSSgK3iok4IqNpemqarhldNy00TfNaCzG4OUYGFBAFuN8unF9RZczye" />

<div className="absolute inset-0 p-2 flex flex-col justify-between pointer-events-none">
<div className="self-start bg-primary/20 text-primary border border-primary px-1 font-label-caps text-label-caps rounded">
                CONFIDENCE: 98.4%
              </div>
<div className="self-end bg-secondary/80 text-on-secondary px-1 font-label-caps text-label-caps rounded">
                DEFECT: PEEL FLAP (1.4cm²)
              </div>
</div>
</div>
<div className="p-space-xs font-telemetry-data text-telemetry-data flex flex-col gap-1">
<div className="flex justify-between text-on-surface-variant">
<span>Skin Blemish Rate:</span>
<span className="text-on-surface font-semibold">3.8%</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Double / Splits:</span>
<span className="text-on-surface font-semibold">0.4%</span>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded overflow-hidden shadow-sm">
<div className="flex items-center justify-between p-space-xs bg-surface-container">
<span className="font-label-caps text-label-caps text-primary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> NIR / SWIR ROT
            </span>
<span className="font-telemetry-data text-telemetry-data text-outline">900–1700nm</span>
</div>
<div className="relative h-44 w-full bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" alt="Hyperspectral SWIR infrared inspection camera feed showing the translucent x-ray like interior density of onions, highlighting internal basal plate rot in vivid monochrome contrast with neon crosshairs." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC86m8mUOQB8gRx-OoaRwvGUtz7aGOaFpAHxGxtfyJhZNodVhekSjfxPhMOJF2ofu7X3qGW5DsyVPOjehRtwgGCDv4Vja8TDSsNDpLBPsqI08LrkZghr4DO-OmIggP4KwQz9QumaIIOi-kn04m45eXghvLZFsIpQXeYdvMvgymCnbFzCxAz_mi8Qqr9DSokk_npSEfC5C09857d-Q7Asz54I_xiKOTnnSSx-FG7WEiqaqvt9nrgK0__" />

<div className="absolute inset-0 p-2 flex flex-col justify-between pointer-events-none">
<div className="self-start bg-tertiary-container text-on-tertiary-container px-1 font-label-caps text-label-caps rounded">
                DECAY SIGNATURE: BASAL
              </div>
<div className="self-center flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-sm">filter_center_focus</span>
<span className="font-label-caps text-label-caps">CORE DENSITY: -38%</span>
</div>
</div>
</div>
<div className="p-space-xs font-telemetry-data text-telemetry-data flex flex-col gap-1">
<div className="flex justify-between text-on-surface-variant">
<span>Hidden Internal Rot:</span>
<span className="text-tertiary font-semibold">3.1% (CRITICAL)</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Avg Core Brix Equiv:</span>
<span className="text-on-surface font-semibold">11.2° Bx</span>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded overflow-hidden shadow-sm">
<div className="flex items-center justify-between p-space-xs bg-surface-container">
<span className="font-label-caps text-label-caps text-secondary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> THERMAL LWIR
            </span>
<span className="font-telemetry-data text-telemetry-data text-outline">8–14μm</span>
</div>
<div className="relative h-44 w-full bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" alt="Thermal imaging FLIR camera view of agricultural produce with pseudocolor heatmap showing localized warm fermentation hotspots on produce against cool ambient blue background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiJ4k9MFX5LpmBjpA5yjdGuH-RSIXDFcXGSHT2WO0v77JIHJk_g_IFOJrY5NdKyZ2QZP2KsBIM5jNggTK9-rln2TNGdT2ICxPMvtf5drxeWlgvsO5yWfvVf3n-UqPLkxsf_4nQgFWGgIOpTu5MXuGXMQzOqhK_GDc_JAnX0DbXGfGLTVZ936XeTHjiv0-S6HUvLxACB5qOrxUgwq_L3wGKbspthKXAXp9m4f4jRVZv4co7l3CUHsOp" />

<div className="absolute inset-0 p-2 flex flex-col justify-between pointer-events-none">
<div className="self-start bg-secondary text-on-secondary px-1 font-label-caps text-label-caps rounded">
                HOTSPOT: 24.8°C
              </div>
<div className="self-end bg-surface-container-lowest/80 text-on-surface px-1 font-label-caps text-label-caps rounded">
                AMBIENT: 16.4°C (Δ+8.4°C)
              </div>
</div>
</div>
<div className="p-space-xs font-telemetry-data text-telemetry-data flex flex-col gap-1">
<div className="flex justify-between text-on-surface-variant">
<span>Bacterial Soft Rot:</span>
<span className="text-secondary font-semibold">1.3% DETECTED</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Thermal Invariance:</span>
<span className="text-primary font-semibold">STABLE</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded overflow-hidden">
<div className="grid grid-cols-5 p-space-xs bg-surface-container font-label-caps text-label-caps text-outline">
<span>SAMPLE BULB</span>
<span>DEFECT CLASSIFIER</span>
<span>SENSOR SOURCE</span>
<span>SEVERITY</span>
<span className="text-right">ACTUATOR DISPATCH</span>
</div>
<div className="divide-y divide-surface-container">
<div className="grid grid-cols-5 p-space-xs font-telemetry-data text-telemetry-data items-center text-on-surface hover:bg-surface-container-high transition-colors">
<span className="font-semibold text-primary">#ON-889-4109</span>
<span>Basal Rot Decouple</span>
<span className="text-tertiary">SWIR (1450nm)</span>
<span className="text-tertiary font-bold">CRITICAL (74%)</span>
<span className="text-right text-tertiary font-semibold flex items-center justify-end gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Valve #18 (Ejected)
            </span>
</div>
<div className="grid grid-cols-5 p-space-xs font-telemetry-data text-telemetry-data items-center text-on-surface hover:bg-surface-container-high transition-colors">
<span className="font-semibold text-primary">#ON-889-4110</span>
<span>Microbial Heat Spike</span>
<span className="text-secondary">LWIR (24.8°C)</span>
<span className="text-secondary">HIGH (Δ8.4°C)</span>
<span className="text-right text-secondary font-semibold flex items-center justify-end gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Valve #22 (Ejected)
            </span>
</div>
<div className="grid grid-cols-5 p-space-xs font-telemetry-data text-telemetry-data items-center text-on-surface hover:bg-surface-container-high transition-colors">
<span className="font-semibold text-primary">#ON-889-4111</span>
<span>Outer Scale Split</span>
<span className="text-on-surface-variant">RGB Chromatic</span>
<span className="text-on-surface-variant">MODERATE (18%)</span>
<span className="text-right text-primary font-semibold flex items-center justify-end gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Diverted Grade C
            </span>
</div>
</div>
</div>
</div>

<div className="xl:col-span-5 flex flex-col gap-space-md bg-surface-container-low p-space-lg rounded-lg shadow-sm">
<div className="flex items-center justify-between">
<div>
<span className="font-label-caps text-label-caps text-tertiary uppercase">HIGH-SPEED KICK-OFF COUNTER</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Pneumatic Ejection Status</h3>
</div>
<span className="px-space-xs py-space-2xs bg-tertiary-container/20 text-tertiary font-label-caps text-label-caps rounded flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span> 12ms RESPONSE
        </span>
</div>

<div className="bg-surface-container-lowest p-space-md rounded flex items-center justify-between">
<div>
<span className="font-label-caps text-label-caps text-outline block">CUMULATIVE BATCH REJECTIONS</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-metric-display-lg text-metric-display-lg text-tertiary" id="ejectCounter">1,429</span>
<span className="font-telemetry-data text-telemetry-data text-outline">Bulbs Kicked</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant">6.4% TOTAL DEFECT DISPATCH (TARGET &lt;7.5%)</span>
</div>
<div className="text-right flex flex-col items-end">
<span className="font-label-caps text-label-caps text-primary block">CLEARED TO SIZING</span>
<span className="font-metric-display-md text-metric-display-md text-primary">20,899</span>
<span className="font-telemetry-data text-telemetry-data text-outline">93.6% Yield Rate</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-12 gap-space-md items-center bg-surface-container-lowest p-space-md rounded">

<div className="sm:col-span-5 flex flex-col items-center justify-center">
<div className="relative w-32 h-32">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">

<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="4.5"></path>

<path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="93.6, 100" stroke-width="4.5"></path>

<path className="text-tertiary" fill="none" stroke="currentColor" stroke-dasharray="6.4, 100" stroke-dashoffset="-93.6" stroke-width="5"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="font-telemetry-data text-telemetry-data font-bold text-on-surface">93.6%</span>
<span className="font-label-caps text-label-caps text-primary">PASS YIELD</span>
</div>
</div>
<span className="font-label-caps text-label-caps text-outline mt-space-xs text-center">PASS VS REJECT DELTA</span>
</div>

<div className="sm:col-span-7 flex flex-col gap-space-sm">

<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-caps text-label-caps">
<span className="text-tertiary flex items-center gap-1">
<span className="w-2 h-2 rounded bg-tertiary"></span> Internal Basal Rot (NIR/SWIR)
              </span>
<span className="font-telemetry-data text-telemetry-data text-on-surface">48% (686 count)</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden">
<div className="bg-tertiary h-full rounded" style={{width: "48%"}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-caps text-label-caps">
<span className="text-secondary flex items-center gap-1">
<span className="w-2 h-2 rounded bg-secondary"></span> Surface Mold &amp; Peel (RGB)
              </span>
<span className="font-telemetry-data text-telemetry-data text-on-surface">32% (457 count)</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden">
<div className="bg-secondary h-full rounded" style={{width: "32%"}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-caps text-label-caps">
<span className="text-primary-fixed-dim flex items-center gap-1">
<span className="w-2 h-2 rounded bg-primary-fixed-dim"></span> Bacterial Heatspots (LWIR)
              </span>
<span className="font-telemetry-data text-telemetry-data text-on-surface">20% (286 count)</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden">
<div className="bg-primary-fixed-dim h-full rounded" style={{width: "20%"}}></div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between p-space-sm bg-surface-container rounded font-telemetry-data text-telemetry-data">
<div className="flex items-center gap-space-xs text-on-surface">
<span className="material-symbols-outlined text-sm text-primary">valve</span>
<span>Nozzle Bank Air Flow: <strong>42.4 SCFM</strong></span>
</div>
<button className="text-secondary hover:text-secondary-fixed flex items-center gap-1 font-label-caps text-label-caps uppercase transition-colors" type="button">
<span className="material-symbols-outlined text-xs">restart_alt</span> Trigger Purge Test
        </button>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-low rounded-lg p-space-lg shadow-sm">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-sm mb-space-md">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-caps text-label-caps text-primary uppercase">PHASE 3: VOLUMETRIC METROLOGY</span>
<span className="text-outline font-telemetry-data text-telemetry-data">•</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">3D Optical Triangulation Laser Array</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-2xs">Real-Time Sizing Sorter Breakdown &amp; Gaussian Caliper Distribution</h3>
</div>
<div className="flex items-center gap-space-md">
<span className="font-label-caps text-label-caps text-outline">TOTAL SORTED: 29,520 UNITS</span>
<div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-space-xs rounded">
<span className="material-symbols-outlined text-sm text-primary">view_timeline</span>
<span className="font-telemetry-data text-telemetry-data text-primary">TOLERANCE: ±0.5 mm</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-lg">

<div className="bg-surface-container-lowest p-space-md rounded flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-primary flex items-center gap-1">
<span className="w-2 h-2 rounded bg-primary"></span> GRADE A (&gt;55 mm)
          </span>
<span className="px-space-xs py-space-2xs bg-primary-container/20 text-primary font-label-caps text-label-caps rounded">
            RETAIL EXPORT
          </span>
</div>
<div className="my-space-sm">
<div className="flex items-baseline justify-between">
<span className="font-metric-display-md text-metric-display-md text-on-surface">62.4%</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">18,420 Bulbs</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden mt-space-xs">
<div className="bg-primary h-full rounded" style={{width: "62.4%"}}></div>
</div>
</div>
<div className="flex justify-between font-label-caps text-label-caps text-outline">
<span>DESTINATION: CHUTE #01 (PACK 10KG)</span>
<span className="text-primary font-bold">PREMIUM REVENUE</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-secondary flex items-center gap-1">
<span className="w-2 h-2 rounded bg-secondary"></span> GRADE B (40–55 mm)
          </span>
<span className="px-space-xs py-space-2xs bg-secondary-container/20 text-secondary font-label-caps text-label-caps rounded">
            FOOD SERVICE
          </span>
</div>
<div className="my-space-sm">
<div className="flex items-baseline justify-between">
<span className="font-metric-display-md text-metric-display-md text-on-surface">29.1%</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">8,590 Bulbs</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden mt-space-xs">
<div className="bg-secondary h-full rounded" style={{width: "29.1%"}}></div>
</div>
</div>
<div className="flex justify-between font-label-caps text-label-caps text-outline">
<span>DESTINATION: CHUTE #02 (BULK BINS)</span>
<span className="text-secondary font-bold">COMMERCIAL STANDARD</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
<span className="w-2 h-2 rounded bg-outline"></span> GRADE C (&lt;40 mm)
          </span>
<span className="px-space-xs py-space-2xs bg-surface-container-highest text-on-surface font-label-caps text-label-caps rounded">
            DEHYDRATION
          </span>
</div>
<div className="my-space-sm">
<div className="flex items-baseline justify-between">
<span className="font-metric-display-md text-metric-display-md text-on-surface">8.5%</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">2,510 Bulbs</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden mt-space-xs">
<div className="bg-outline h-full rounded" style={{width: "8.5%"}}></div>
</div>
</div>
<div className="flex justify-between font-label-caps text-label-caps text-outline">
<span>DESTINATION: CHUTE #03 (PICKLE LINE)</span>
<span className="text-on-surface-variant">VALUE SALVAGE</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-primary">stacked_bar_chart</span>
          CONTINUOUS CALIPER DISTRIBUTION SPECTRUM (30mm TO 80mm BANDS)
        </span>
<div className="flex items-center gap-space-md font-telemetry-data text-telemetry-data text-outline">
<span>Median Caliper: <strong className="text-primary font-bold">58.2 mm</strong></span>
<span>Standard Deviation: <strong className="text-on-surface">±6.4 mm</strong></span>
</div>
</div>

<div className="relative w-full h-44 flex items-end pt-4 pb-6">

<svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 120">
<defs>
<linearGradient id="gaussianGrad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#4edea3" stop-opacity="0.35"></stop>
<stop offset="100%" stop-color="#4edea3" stop-opacity="0.0"></stop>
</linearGradient>
</defs>

<line stroke="#262a33" stroke-dasharray="4,4" stroke-width="1" x1="0" x2="1000" y1="30" y2="30"></line>
<line stroke="#262a33" stroke-dasharray="4,4" stroke-width="1" x1="0" x2="1000" y1="60" y2="60"></line>
<line stroke="#262a33" stroke-dasharray="4,4" stroke-width="1" x1="0" x2="1000" y1="90" y2="90"></line>


<line stroke="#86948a" stroke-dasharray="3,3" stroke-width="1" x1="200" x2="200" y1="0" y2="120"></line>

<line stroke="#ffb95f" stroke-dasharray="3,3" stroke-width="1.5" x1="500" x2="500" y1="0" y2="120"></line>

<path d="M 0 120 Q 150 118 200 105 T 350 70 T 500 25 T 600 15 T 700 35 T 850 95 T 1000 120 Z" fill="url(#gaussianGrad)"></path>

<path d="M 0 120 Q 150 118 200 105 T 350 70 T 500 25 T 600 15 T 700 35 T 850 95 T 1000 120" fill="none" stroke="#4edea3" stroke-width="2.5"></path>

<circle cx="580" cy="15" fill="#4edea3" r="4"></circle>
<line stroke="#4edea3" stroke-width="1" x1="580" x2="580" y1="15" y2="120"></line>
</svg>

<div className="absolute bottom-0 inset-x-0 flex justify-between font-label-caps text-label-caps text-outline pt-1">
<span>30mm</span>
<span>35mm</span>
<span className="text-on-surface-variant font-bold">40mm (Grade C/B Split)</span>
<span>45mm</span>
<span>50mm</span>
<span className="text-secondary font-bold">55mm (Grade B/A Split)</span>
<span className="text-primary font-bold">58mm (Distribution Peak)</span>
<span>65mm</span>
<span>70mm</span>
<span>75mm</span>
<span>80mm</span>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs text-on-surface-variant font-telemetry-data text-telemetry-data">
<div className="flex items-center gap-space-lg">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-outline"></span>
<span>Grade C (&lt;40mm): <strong>8.5%</strong></span>
</div>
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Grade B (40–55mm): <strong>29.1%</strong></span>
</div>
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span>Grade A (&gt;55mm): <strong>62.4%</strong></span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-space-xs bg-surface-container hover:bg-surface-container-high rounded text-on-surface font-label-caps text-label-caps uppercase transition-colors" type="button">
            Export LAS Point Cloud
          </button>
<button className="px-space-sm py-space-xs bg-primary text-on-primary hover:bg-primary-fixed-dim rounded font-label-caps text-label-caps uppercase font-bold transition-colors" type="button">
            Recalibrate Sizing Gates
          </button>
</div>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default DigitalTwin;
