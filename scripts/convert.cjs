// Robust HTML-to-JSX converter for AgriFlow pages
const fs = require('fs');
const path = require('path');

const files = [
  { input: 'Field Diagonostic.html', output: 'src/pages/Diagnostics.jsx', componentName: 'Diagnostics', title: 'Diagnostics', subtitle: 'Field & Irrigation' },
  { input: 'Plant Digital.html', output: 'src/pages/DigitalTwin.jsx', componentName: 'DigitalTwin', title: 'Digital Twin', subtitle: 'Plant Processing' },
  { input: 'Packaging and Legal.html', output: 'src/pages/Packaging.jsx', componentName: 'Packaging', title: 'Packaging', subtitle: 'Metrology Hub' },
  { input: 'Bach Audit.html', output: 'src/pages/BatchAudit.jsx', componentName: 'BatchAudit', title: 'Batch Audit', subtitle: 'Dispatch & Logistics' },
  { input: 'Centralized Analytics Hub.html', output: 'src/pages/AnalyticsHub.jsx', componentName: 'AnalyticsHub', title: 'Analytics Hub', subtitle: 'Executive Overview' },
];

function extractMainContent(html) {
  // Find content between <main...> and </main>
  const mainStart = html.indexOf('<main');
  const mainTagEnd = html.indexOf('>', mainStart) + 1;
  const mainClose = html.lastIndexOf('</main>');
  if (mainStart === -1 || mainClose === -1) {
    console.error('Could not find <main> tags');
    return '';
  }
  let content = html.substring(mainTagEnd, mainClose);
  
  // Remove outermost wrapper div if present (the flex col wrapper)
  const firstDivEnd = content.indexOf('>');
  if (content.trim().startsWith('<div')) {
    // Find matching closing </div>
    content = content.trim();
    // Remove first <div...> and last </div>
    const openTag = content.substring(0, content.indexOf('>') + 1);
    content = content.substring(content.indexOf('>') + 1);
    // Remove last </div>
    const lastClose = content.lastIndexOf('</div>');
    content = content.substring(0, lastClose);
  }
  
  return content.trim();
}

function htmlToJsx(html) {
  let jsx = html;
  
  // Remove HTML comments
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
  
  // Remove <script> blocks
  jsx = jsx.replace(/<script[\s\S]*?<\/script>/g, '');
  
  // Convert class= to className= (but not within strings)
  jsx = jsx.replace(/\bclass="/g, 'className="');
  jsx = jsx.replace(/\bclass='/g, "className='");
  
  // Convert for= to htmlFor=
  jsx = jsx.replace(/\bfor="/g, 'htmlFor="');
  
  // Self-close void elements
  jsx = jsx.replace(/<(img|input|br|hr|meta|link|source|embed|wbr|area|base|col|param|track)(\s[^>]*?)?\s*>/gi, '<$1$2 />');
  
  // Fix data-alt to alt (some images use data-alt)
  jsx = jsx.replace(/data-alt="/g, 'alt="');
  
  // Convert inline style strings to JSX style objects
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleStr) => {
    if (!styleStr.trim()) return 'style={{}}';
    const pairs = [];
    styleStr.split(';').forEach(rule => {
      rule = rule.trim();
      if (!rule) return;
      const colonIdx = rule.indexOf(':');
      if (colonIdx === -1) return;
      let key = rule.substring(0, colonIdx).trim();
      let val = rule.substring(colonIdx + 1).trim();
      // Convert CSS property to camelCase
      key = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      // Handle numeric values
      if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(val)) {
        pairs.push(`${key}: "${val}"`);
      } else {
        pairs.push(`${key}: "${val}"`);
      }
    });
    return `style={{${pairs.join(', ')}}}`;
  });
  
  // Fix &amp; -> keep as &amp; (valid in JSX)
  // Fix &gt; &lt; etc - these are fine in JSX
  
  // Remove aria-current="page" (not needed in React, NavLink handles it)
  jsx = jsx.replace(/\s*aria-current="page"/g, '');
  
  return jsx;
}

function createComponent(jsx, componentName, title, subtitle) {
  return `import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const ${componentName} = () => {
  return (
    <DashboardLayout title="${title}" subtitle="${subtitle}">
      <div className="flex flex-col w-full gap-space-lg">
${jsx}
      </div>
    </DashboardLayout>
  );
};

export default ${componentName};
`;
}

const rootDir = path.resolve(__dirname, '..', '..');

files.forEach(({ input, output, componentName, title, subtitle }) => {
  const inputPath = path.join(rootDir, input);
  console.log(`Processing: ${input}`);
  
  if (!fs.existsSync(inputPath)) {
    console.error(`  File not found: ${inputPath}`);
    return;
  }
  
  const html = fs.readFileSync(inputPath, 'utf-8');
  const mainContent = extractMainContent(html);
  
  if (!mainContent) {
    console.error(`  Could not extract main content from ${input}`);
    return;
  }
  
  const jsx = htmlToJsx(mainContent);
  const component = createComponent(jsx, componentName, title, subtitle);
  
  const outputPath = path.join(rootDir, 'dashboard-app', output);
  fs.writeFileSync(outputPath, component, 'utf-8');
  
  // Verify tag balance
  const opens = (component.match(/<div\b/g) || []).length;
  const closes = (component.match(/<\/div>/g) || []).length;
  console.log(`  Written: ${output} (div opens: ${opens}, closes: ${closes}, diff: ${opens - closes})`);
});

console.log('\\nDone! All files converted.');
