import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const Packaging = () => {
  return (
    <DashboardLayout title="Packaging" subtitle="Metrology Hub">
      <div className="flex flex-col w-full gap-space-lg">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-low p-space-md rounded-xl">
<div className="flex flex-wrap items-center gap-space-md">
<div className="flex items-center gap-space-sm px-space-md py-space-xs bg-surface-container-highest rounded">
<span className="w-2.5 h-2.5 rounded-full bg-primary glow-pass animate-pulse"></span>
<span className="font-label-caps text-label-caps text-primary uppercase">STATION ACTIVE</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface font-bold">LINE #04</span>
</div>
<div className="h-4 w-px bg-surface-variant"></div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline uppercase">Active SKU</span>
<span className="font-body-md text-body-md font-semibold text-on-surface">Grade A Red Onions • 1.00 kg Retail Net Pack</span>
</div>
<div className="h-4 w-px bg-surface-variant hidden md:block"></div>
<div className="hidden md:flex items-center gap-space-xs px-space-sm py-space-2xs bg-surface-container rounded">
<span className="material-symbols-outlined text-secondary text-sm">verified_user</span>
<span className="font-telemetry-data text-telemetry-data text-secondary-fixed">Legal Metrology Pack Rules 2024</span>
</div>
</div>

<div className="flex items-center gap-space-2xs bg-surface-container-lowest p-space-2xs rounded">
<button className="px-space-md py-space-xs rounded bg-surface-container-high text-primary font-label-caps text-label-caps flex items-center gap-space-xs shadow-sm" type="button">
<span className="material-symbols-outlined text-xs">camera</span>
        LIVE PACKING &amp; OCR AUDIT
      </button>
<a className="px-space-md py-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-caps text-label-caps flex items-center gap-space-xs transition-colors" data-path="packaging-qc/analytics" href="#">
<span className="material-symbols-outlined text-xs">insights</span>
        METROLOGY ANALYTICS
      </a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase">Packaging Cadence</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary glow-pass"></span>
</div>
<div className="flex items-baseline gap-space-xs mt-space-sm">
<span className="font-metric-display-lg text-metric-display-lg text-on-surface">48</span>
<span className="font-telemetry-data text-telemetry-data text-outline">Bags/Min</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-space-sm overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "80%"}}></div>
</div>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase">Total Packed Today</span>
<span className="font-telemetry-data text-label-caps text-primary">SHIFT B</span>
</div>
<div className="flex items-baseline gap-space-xs mt-space-sm">
<span className="font-metric-display-lg text-metric-display-lg text-on-surface">12,840</span>
<span className="font-telemetry-data text-telemetry-data text-outline">Units</span>
</div>
<span className="font-telemetry-data text-body-sm text-secondary mt-space-xs">+4.2% vs target run</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase">QC Inspection Pass</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary glow-pass"></span>
</div>
<div className="flex items-baseline gap-space-xs mt-space-sm">
<span className="font-metric-display-lg text-metric-display-lg text-primary">99.1%</span>
<span className="font-telemetry-data text-telemetry-data text-outline">Passed</span>
</div>
<div className="flex items-center gap-space-xs mt-space-xs">
<span className="font-label-caps text-label-caps text-outline">Rejects:</span>
<span className="font-telemetry-data text-label-caps text-error">116 units (0.9%)</span>
</div>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase">Statutory Metrology</span>
<span className="px-space-xs py-space-2xs bg-primary/10 text-primary font-label-caps text-label-caps rounded">LEGAL CLEAR</span>
</div>
<div className="flex items-baseline gap-space-xs mt-space-sm">
<span className="font-metric-display-lg text-metric-display-lg text-primary">100%</span>
<span className="font-telemetry-data text-telemetry-data text-outline">Compliance</span>
</div>
<span className="font-telemetry-data text-body-sm text-primary flex items-center gap-space-2xs mt-space-xs">
<span className="material-symbols-outlined text-xs">gavel</span> Zero Penalty Risk
      </span>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-space-lg w-full">

<div className="flex flex-col gap-space-lg">

<div className="flex items-center justify-between bg-surface-container-low px-space-md py-space-sm rounded-lg">
<div className="flex items-center gap-space-sm">
<div className="w-2 h-4 bg-primary rounded"></div>
<span className="font-headline-sm text-headline-sm text-on-surface">PHASE 4: Combination Weigher &amp; Tagging</span>
</div>
<span className="font-telemetry-data text-label-caps text-primary uppercase">Yamato 14-Head Multiline Active</span>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-md shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-base">dew_point</span>
<span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">Transit Physiological Loss of Weight (PLW) Buffer</span>
</div>
<span className="px-space-sm py-space-2xs bg-surface-container text-secondary font-telemetry-data text-label-caps rounded">48H LOGISTICS CYCLE</span>
</div>
<div className="grid grid-cols-3 gap-space-sm bg-surface-container-lowest p-space-md rounded-lg">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Retail Stated Net</span>
<span className="font-telemetry-data text-metric-display-md text-on-surface">1,000 g</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Statutory Minimum</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-secondary">PLW Evap Buffer (+2%)</span>
<span className="font-telemetry-data text-metric-display-md text-secondary">+20.0 g</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">RH 72% / 22°C calc</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-primary">Dynamic Target Setpoint</span>
<span className="font-telemetry-data text-metric-display-md text-primary font-bold">1,020.0 g</span>
<span className="font-body-sm text-body-sm text-primary/80">Active Sorter Target</span>
</div>
</div>

<div className="flex flex-col gap-space-xs bg-surface-container p-space-md rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant">OVER-PACK DRIFT DELTA METER</span>
<div className="flex items-center gap-space-xs">
<span className="font-telemetry-data text-telemetry-data text-primary font-bold">+21.4 g Avg</span>
<span className="font-body-sm text-body-sm text-outline">(Target: +20.0g • Dev: +1.4g)</span>
</div>
</div>
<div className="relative w-full h-5 bg-surface-container-lowest rounded overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-[25%] bg-error/20 flex items-center justify-center">
<span className="font-label-caps text-label-caps text-error text-[9px] uppercase tracking-tighter">&lt;1000g REJECT</span>
</div>

<div className="absolute left-[25%] top-0 bottom-0 w-[40%] bg-primary/20"></div>

<div className="absolute right-0 top-0 bottom-0 w-[35%] bg-secondary/15 flex items-center justify-end pr-space-xs">
<span className="font-label-caps text-label-caps text-secondary text-[9px] uppercase tracking-tighter">&gt;1040g PROFIT LEAK</span>
</div>

<div className="absolute left-[45%] top-0 bottom-0 w-0.5 bg-primary"></div>

<div className="absolute left-[48.5%] top-0 bottom-0 w-1.5 bg-on-surface glow-pass rounded-full shadow-md z-10"></div>
</div>
<div className="flex justify-between font-telemetry-data text-label-caps text-outline pt-space-2xs">
<span>990g</span>
<span className="text-error">1,000g (LSL)</span>
<span className="text-primary font-bold">1,020g (Target)</span>
<span className="text-secondary">1,040g (USL)</span>
<span>1,055g</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-md shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-base">grain</span>
<span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">Multi-Head Weigher Bucket Matrix (14 Heads)</span>
</div>
<div className="flex items-center gap-space-sm font-telemetry-data text-label-caps">
<span className="flex items-center gap-space-2xs text-primary"><span className="w-2 h-2 rounded bg-primary"></span> Firing (3)</span>
<span className="flex items-center gap-space-2xs text-secondary"><span className="w-2 h-2 rounded bg-secondary"></span> Weighing (8)</span>
<span className="flex items-center gap-space-2xs text-outline"><span className="w-2 h-2 rounded bg-surface-variant"></span> Taring (3)</span>
</div>
</div>

<div className="grid grid-cols-7 gap-space-xs">

<div className="bg-primary text-on-primary p-space-xs rounded flex flex-col items-center justify-between h-14 shadow-sm">
<span className="font-label-caps text-label-caps font-bold">H01</span>
<span className="font-telemetry-data text-label-caps font-bold">342g</span>
<span className="material-symbols-outlined text-xs">south</span>
</div>

<div className="bg-surface-container-high text-on-surface p-space-xs rounded flex flex-col items-center justify-between h-14">
<span className="font-label-caps text-label-caps text-outline">H02</span>
<span className="font-telemetry-data text-label-caps">298g</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>

<div className="bg-primary text-on-primary p-space-xs rounded flex flex-col items-center justify-between h-14 shadow-sm">
<span className="font-label-caps text-label-caps font-bold">H03</span>
<span className="font-telemetry-data text-label-caps font-bold">384g</span>
<span className="material-symbols-outlined text-xs">south</span>
</div>

<div className="bg-surface-container-high text-on-surface p-space-xs rounded flex flex-col items-center justify-between h-14">
<span className="font-label-caps text-label-caps text-outline">H04</span>
<span className="font-telemetry-data text-label-caps">312g</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>

<div className="bg-surface-container-high text-on-surface p-space-xs rounded flex flex-col items-center justify-between h-14">
<span className="font-label-caps text-label-caps text-outline">H05</span>
<span className="font-telemetry-data text-label-caps">330g</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>

<div className="bg-primary text-on-primary p-space-xs rounded flex flex-col items-center justify-between h-14 shadow-sm">
<span className="font-label-caps text-label-caps font-bold">H06</span>
<span className="font-telemetry-data text-label-caps font-bold">295g</span>
<span className="material-symbols-outlined text-xs">south</span>
</div>

<div className="bg-surface-variant text-outline p-space-xs rounded flex flex-col items-center justify-between h-14">
<span className="font-label-caps text-label-caps">H07</span>
<span className="font-telemetry-data text-label-caps">0.0g</span>
<span className="material-symbols-outlined text-xs">sync</span>
</div>

<div className="bg-surface-container-high text-on-surface p-space-xs rounded flex flex-col items-center justify-between h-14">
<span className="font-label-caps text-label-caps text-outline">H08</span>
<span className="font-telemetry-data text-label-caps">270g</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<div className="bg-surface-container-high text-on-surface p-space-xs rounded flex flex-col items-center justify-between h-14">
<span className="font-label-caps text-label-caps text-outline">H09</span>
<span className="font-telemetry-data text-label-caps">305g</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<div className="bg-surface-variant text-outline p-space-xs rounded flex flex-col items-center justify-between h-14">
<span className="font-label-caps text-label-caps">H10</span>
<span className="font-telemetry-data text-label-caps">0.0g</span>
<span className="material-symbols-outlined text-xs">sync</span>
</div>
<div className="bg-surface-container-high text-on-surface p-space-xs rounded flex flex-col items-center justify-between h-14">
<span className="font-label-caps text-label-caps text-outline">H11</span>
<span className="font-telemetry-data text-label-caps">316g</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<div className="bg-surface-container-high text-on-surface p-space-xs rounded flex flex-col items-center justify-between h-14">
<span className="font-label-caps text-label-caps text-outline">H12</span>
<span className="font-telemetry-data text-label-caps">288g</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<div className="bg-surface-container-high text-on-surface p-space-xs rounded flex flex-col items-center justify-between h-14">
<span className="font-label-caps text-label-caps text-outline">H13</span>
<span className="font-telemetry-data text-label-caps">321g</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<div className="bg-surface-variant text-outline p-space-xs rounded flex flex-col items-center justify-between h-14">
<span className="font-label-caps text-label-caps">H14</span>
<span className="font-telemetry-data text-label-caps">0.0g</span>
<span className="material-symbols-outlined text-xs">sync</span>
</div>
</div>
<div className="p-space-xs bg-surface-container-lowest rounded flex items-center justify-between font-telemetry-data text-label-caps">
<span className="text-on-surface-variant">Active Firing Combo: H01 + H03 + H06</span>
<span className="text-primary font-bold">= 1,021.0 g (Δ +1.0g from setpoint)</span>
</div>

<div className="flex flex-col gap-space-xs mt-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant">LAST 30 PACKS NET WEIGHT RUN CHART</span>
<span className="font-telemetry-data text-label-caps text-primary">Cpk: 1.68 • High Precision</span>
</div>

<div className="w-full h-24 bg-surface-container-lowest rounded p-space-xs relative overflow-hidden">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 90">

<line className="text-secondary" opacity="0.6" stroke="currentColor" stroke-dasharray="3,3" stroke-width="1" x1="0" x2="400" y1="15" y2="15"></line>

<line className="text-primary" opacity="0.8" stroke="currentColor" stroke-width="1.2" x1="0" x2="400" y1="45" y2="45"></line>

<line className="text-error" opacity="0.6" stroke="currentColor" stroke-dasharray="3,3" stroke-width="1" x1="0" x2="400" y1="75" y2="75"></line>

<rect className="text-primary" fill="currentColor" height="60" opacity="0.04" width="400" x="0" y="15"></rect>

<polyline className="text-primary" fill="none" points="
                0,46 15,43 30,48 45,41 60,45 75,44 90,40 105,47 120,44 135,42 
                150,49 165,43 180,45 195,38 210,46 225,43 240,44 255,41 270,47 
                285,44 300,42 315,46 330,45 345,43 360,40 375,44 390,43 400,44
              " stroke="currentColor" stroke-width="2"></polyline>

<circle className="fill-primary" cx="270" cy="47" r="2.5"></circle>
<circle className="fill-primary" cx="345" cy="43" r="2.5"></circle>
<circle className="fill-primary glow-pass animate-ping" cx="390" cy="43" r="3"></circle>
<circle className="fill-on-surface" cx="390" cy="43" r="3"></circle>
</svg>
<div className="absolute left-2 top-1 font-telemetry-data text-[9px] text-secondary">USL 1,040g</div>
<div className="absolute left-2 top-8 font-telemetry-data text-[9px] text-primary">TARGET 1,020g</div>
<div className="absolute left-2 bottom-1 font-telemetry-data text-[9px] text-error">LSL 1,005g</div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-md shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-base">print</span>
<span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">Thermal Transfer Tag Engine Preview</span>
</div>
<span className="px-space-xs py-space-2xs bg-surface-container font-telemetry-data text-label-caps text-on-surface-variant">Zebra 220Xi4 Direct</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">

<div className="md:col-span-8 bg-surface-bright text-surface-container-lowest p-space-md rounded shadow-md flex flex-col gap-space-xs font-telemetry-data">
<div className="flex items-start justify-between border-b border-surface-container-lowest/30 pb-space-xs">
<div className="flex flex-col">
<span className="text-xs font-bold font-headline-sm uppercase tracking-tight text-surface-container-lowest">PREMIUM SWEET RED ONIONS</span>
<span className="text-[10px] text-surface-container-high">Valley Produce Packing Co. • Packed in CA, USA</span>
</div>
<div className="flex flex-col text-right">
<span className="text-[11px] font-bold">GRADE A RETAIL</span>
<span className="text-[9px] bg-surface-container-lowest text-surface-bright px-1 rounded">MFR LIC: FSSAI/FDA#8812</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-space-2xs">
<div className="flex flex-col">
<span className="text-[9px] text-surface-container-highest uppercase">Net Quantity / Poids Net</span>
<span className="text-sm font-bold tracking-tight">1.00 kg (1020g at pack)</span>
</div>
<div className="flex flex-col text-right">
<span className="text-[9px] text-surface-container-highest uppercase">Unit Sale Price / MRP</span>
<span className="text-sm font-bold tracking-tight">₹3.99 (₹3.99 / kg)</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-xs text-[10px] pt-space-2xs border-t border-surface-container-lowest/20">
<div><span className="font-semibold">LOT/BATCH:</span> #ON-2024-B3B-889</div>
<div className="text-right"><span className="font-semibold">PACK DATE:</span> 24 OCT 2024 14:32</div>
</div>

<div className="flex items-center justify-between pt-space-xs mt-space-2xs border-t border-surface-container-lowest/30">
<div className="flex flex-col">

<div className="flex items-end h-7 gap-[2px]">
<div className="w-1 h-full bg-surface-container-lowest"></div>
<div className="w-0.5 h-full bg-surface-container-lowest"></div>
<div className="w-1.5 h-full bg-surface-container-lowest"></div>
<div className="w-0.5 h-full bg-surface-container-lowest"></div>
<div className="w-2 h-full bg-surface-container-lowest"></div>
<div className="w-0.5 h-full bg-surface-container-lowest"></div>
<div className="w-1 h-full bg-surface-container-lowest"></div>
<div className="w-1.5 h-full bg-surface-container-lowest"></div>
<div className="w-0.5 h-full bg-surface-container-lowest"></div>
<div className="w-2 h-full bg-surface-container-lowest"></div>
<div className="w-1 h-full bg-surface-container-lowest"></div>
<div className="w-0.5 h-full bg-surface-container-lowest"></div>
<div className="w-1.5 h-full bg-surface-container-lowest"></div>
<div className="w-2 h-full bg-surface-container-lowest"></div>
<div className="w-0.5 h-full bg-surface-container-lowest"></div>
<div className="w-1 h-full bg-surface-container-lowest"></div>
<div className="w-0.5 h-full bg-surface-container-lowest"></div>
<div className="w-2 h-full bg-surface-container-lowest"></div>
</div>
<span className="text-[8px] tracking-widest mt-0.5">(01)00849201948192(10)B3B889</span>
</div>

<div className="w-9 h-9 bg-surface-container-lowest p-1 rounded flex flex-col justify-between">
<div className="flex justify-between">
<div className="w-2 h-2 bg-surface-bright"></div>
<div className="w-2 h-2 bg-surface-bright"></div>
</div>
<div className="w-1 h-1 bg-surface-bright mx-auto"></div>
<div className="flex justify-between">
<div className="w-2 h-2 bg-surface-bright"></div>
<div className="w-1 h-1 bg-surface-bright"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col justify-between gap-space-sm bg-surface-container-lowest p-space-md rounded">
<div className="flex flex-col gap-space-2xs">
<span className="font-label-caps text-label-caps text-outline uppercase">Thermal Diagnostics</span>
<div className="flex items-center justify-between text-body-sm mt-space-xs">
<span className="text-on-surface-variant">Resin Ribbon:</span>
<span className="font-telemetry-data font-bold text-primary">74%</span>
</div>
<div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "74%"}}></div>
</div>
<div className="flex items-center justify-between text-body-sm mt-space-xs">
<span className="text-on-surface-variant">Printhead Crisp:</span>
<span className="font-telemetry-data font-bold text-primary">100%</span>
</div>
<div className="flex items-center justify-between text-body-sm mt-space-xs">
<span className="text-on-surface-variant">Burn Temp:</span>
<span className="font-telemetry-data font-bold text-secondary">185°C</span>
</div>
</div>
<button className="w-full py-space-xs bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-caps text-label-caps rounded flex items-center justify-center gap-space-xs transition-colors" type="button">
<span className="material-symbols-outlined text-xs">sync</span>
              CALIBRATE DENSITY
            </button>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-lg">

<div className="flex items-center justify-between bg-surface-container-low px-space-md py-space-sm rounded-lg">
<div className="flex items-center gap-space-sm">
<div className="w-2 h-4 bg-primary rounded"></div>
<span className="font-headline-sm text-headline-sm text-on-surface">PHASE 5: Machine-Vision &amp; Legal Metrology</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-primary glow-pass"></span>
<span className="font-telemetry-data text-label-caps text-primary uppercase">CAMERA CAM-04 SYNC</span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-base">videocam</span>
            OVERHEAD GANTRY OCR STREAM [CAM-04]
          </span>
<div className="flex items-center gap-space-md font-telemetry-data text-label-caps">
<span className="text-on-surface-variant">FPS: <span className="text-primary font-bold">60.0</span></span>
<span className="text-on-surface-variant">Confidence: <span className="text-primary font-bold">99.8%</span></span>
</div>
</div>

<div className="relative w-full h-64 bg-surface-container-lowest rounded-lg overflow-hidden flex items-center justify-center">
<img className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Overhead machine vision industrial camera capture of a freshly sealed red onion mesh bag with a white printed header tag on a fast conveyor belt. Neon green digital bounding boxes overlay text areas and barcode under bright industrial strobe lighting in an automated packing facility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvBSgU0gG1XFhtqRf8JJZ5zmJy9Lio5U2pQYblfQWnR9VitpCXF13GiE12eOF0ZUCyo49DPAdhMlBbZ1BMmpaM9awBF3Pjm_RQStuRKoL3PQRlgJsaDFy08B8AjCci3P953z2i7EufVl94imPn-QP_tqzgcODVhJXXuUFD7l0V8tlGYCzjhcOafV5jJxhSbiDKUGAmR8AxCbEyV2zpYSTzBTZh1J3p0T3CatgQQKrMYQCAvZK1woKo" />

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
<div className="absolute w-full h-0.5 bg-primary/70 glow-pass animate-pulse" style={{top: "48%"}}></div>

<div className="absolute inset-0 p- space-md flex flex-col justify-center items-center pointer-events-none">
<div className="w-64 h-36 border border-primary/80 bg-primary/5 rounded relative flex flex-col p-2 justify-between">

<div className="border border-primary bg-primary/20 px-1 py-0.5 rounded flex items-center justify-between">
<span className="font-telemetry-data text-[9px] text-primary font-bold">OCR: SKU &amp; MFR (99.9%)</span>
<span className="font-label-caps text-[8px] text-primary">VERIFIED</span>
</div>

<div className="grid grid-cols-2 gap-1 my-auto">
<div className="border border-primary bg-primary/20 p-0.5 rounded">
<span className="font-telemetry-data text-[8px] text-primary block">WT: 1.0kg</span>
<span className="font-telemetry-data text-[8px] text-primary-fixed">PASS</span>
</div>
<div className="border border-primary bg-primary/20 p-0.5 rounded">
<span className="font-telemetry-data text-[8px] text-primary block">PRICE: ₹3.99</span>
<span className="font-telemetry-data text-[8px] text-primary-fixed">PASS</span>
</div>
</div>

<div className="border border-primary bg-primary/20 px-1 py-0.5 rounded flex items-center justify-between">
<span className="font-telemetry-data text-[9px] text-primary font-bold">GS1-128 SYMBOLOGY</span>
<span className="font-label-caps text-[8px] text-primary">GRADE A (98/100)</span>
</div>
</div>
</div>

<div className="absolute top-2 left-2 bg-surface-container-lowest/80 backdrop-blur px-2 py-1 rounded font-telemetry-data text-[10px] text-on-surface flex items-center gap-space-sm">
<span className="text-primary font-bold">REC ● LIVE</span>
<span>SHUTTER: 1/1200s</span>
<span>EXPOSURE: EV -0.3</span>
</div>
<div className="absolute bottom-2 right-2 bg-surface-container-lowest/80 backdrop-blur px-2 py-1 rounded font-telemetry-data text-[10px] text-primary">
            TRIGGER: PHOTOELECTRIC SENSOR #2 ACTIVE
          </div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-md shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-base">fact_check</span>
            AUTOMATED LEGAL METROLOGY AUDIT CHECKLIST
          </span>
<span className="font-telemetry-data text-label-caps text-primary">PACK RULES COMPLIANT</span>
</div>
<div className="flex flex-col gap-space-xs">

<div className="p-space-sm bg-surface-container-lowest rounded-lg flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-md">
<div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm">check_circle</span>
</div>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-semibold text-on-surface">Mandatory Declarations Check</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">FSSAI / FDA Lic, Pack Date, Batch ID, and Country of Origin detected.</span>
</div>
</div>
<span className="px-space-sm py-space-2xs bg-primary/10 text-primary font-label-caps text-label-caps rounded font-bold">PASS 100%</span>
</div>

<div className="p-space-sm bg-surface-container-lowest rounded-lg flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-md">
<div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm">calculate</span>
</div>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-semibold text-on-surface">Price Math Statutory Verification</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Unit Sale Price = MRP / Net Wt (₹3.99 / 1.0kg = ₹3.99/kg exact match).</span>
</div>
</div>
<span className="px-space-sm py-space-2xs bg-primary/10 text-primary font-label-caps text-label-caps rounded font-bold">PASS VERIFIED</span>
</div>

<div className="p-space-sm bg-surface-container-lowest rounded-lg flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-md">
<div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm">format_size</span>
</div>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-semibold text-on-surface">Font Height Metrology Rule</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Detected lettering height: 4.2mm (Statutory requirement &gt;3.0mm for &gt;500g SKU).</span>
</div>
</div>
<span className="px-space-sm py-space-2xs bg-primary/10 text-primary font-label-caps text-label-caps rounded font-bold">PASS (4.2mm)</span>
</div>

<div className="p-space-sm bg-surface-container-lowest rounded-lg flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-md">
<div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm">qr_code_scanner</span>
</div>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-semibold text-on-surface">GS1-128 &amp; QR Scannability Grading</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">ISO/IEC 15415 verification score: 98/100 (Grade A contrast &amp; modulation).</span>
</div>
</div>
<span className="px-space-sm py-space-2xs bg-primary/10 text-primary font-label-caps text-label-caps rounded font-bold">GRADE A (98/100)</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-md shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-base">call_split</span>
<span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">High-Speed Ejection &amp; Conveyor Status</span>
</div>
<div className="flex items-center gap-space-xs font-telemetry-data text-label-caps text-primary">
<span className="material-symbols-outlined text-xs">bolt</span>
            SOLENOID READY (8.2 BAR)
          </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="p-space-md bg-surface-container-lowest rounded flex flex-col justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase">Last Package Status</span>
<div className="flex items-center gap-space-sm my-space-xs">
<div className="w-3 h-3 rounded-full bg-primary glow-pass"></div>
<span className="font-headline-sm text-headline-sm text-primary font-bold">PASSED &amp; RELEASED</span>
</div>
<span className="font-telemetry-data text-label-caps text-on-surface-variant">Dispatched downstream to Case Packer</span>
</div>
<div className="p-space-md bg-surface-container-lowest rounded flex flex-col justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase">Error Reject Queue</span>
<div className="flex items-baseline gap-space-xs my-space-xs">
<span className="font-metric-display-md text-metric-display-md text-on-surface font-bold">0</span>
<span className="font-body-sm text-body-sm text-outline">Units Pending Ejection</span>
</div>
<span className="font-telemetry-data text-label-caps text-primary">Pneumatic Diverter Armed</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
<button className="flex-1 min-w-[140px] px-space-md py-space-sm rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-sm text-body-sm font-semibold flex items-center justify-center gap-space-xs transition-colors" id="test-diverter-btn" type="button">
<span className="material-symbols-outlined text-base text-secondary">tune</span>
            Test Diverter Solenoid
          </button>
<button className="flex-1 min-w-[140px] px-space-md py-space-sm rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-sm text-body-sm font-semibold flex items-center justify-center gap-space-xs transition-colors" id="reprint-tag-btn" type="button">
<span className="material-symbols-outlined text-base text-primary">print</span>
            Reprint Last Tag
          </button>
<button className="flex-1 min-w-[140px] px-space-md py-space-sm rounded bg-tertiary-container/30 hover:bg-tertiary-container/50 text-tertiary font-body-sm text-body-sm font-semibold flex items-center justify-center gap-space-xs transition-colors" id="flag-sample-btn" type="button">
<span className="material-symbols-outlined text-base">flag</span>
            Override &amp; Flag Sample
          </button>
</div>
</div>
</div>
</div>


      </div>
    </DashboardLayout>
  );
};

export default Packaging;
