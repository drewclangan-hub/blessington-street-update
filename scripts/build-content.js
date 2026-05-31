#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const settings = JSON.parse(fs.readFileSync(path.join(root, '_content/settings.json'), 'utf8'));
const services = JSON.parse(fs.readFileSync(path.join(root, '_content/services.json'), 'utf8'));
const hours    = JSON.parse(fs.readFileSync(path.join(root, '_content/hours.json'), 'utf8'));

// Map settings JSON keys back to the BIZ shape the app expects
const biz = {
  phone:      settings.phone,
  phoneHref:  settings.phoneHref,
  phone2:     settings.phone2,
  phone2Href: settings.phone2Href,
  addr:       settings.address,
  addrFull:   settings.addressFull,
  keypad:     settings.keypad,
  payment:    settings.payment,
};

// Map services rows from [{label, value}] back to [[label, value]] arrays
// and preserve all other fields as-is
const svcMapped = services.map(s => {
  const out = Object.assign({}, s);
  if (Array.isArray(out.rows)) {
    out.rows = out.rows.map(r => {
      if (Array.isArray(r)) return r;
      return [r.label, r.value];
    });
  }
  return out;
});

// Map hours from [{day, hours}] back to [[day, hours]] arrays
const hoursMapped = hours.map(h => {
  if (Array.isArray(h)) return h;
  return [h.day, h.hours];
});

const out = `/* AUTO-GENERATED — do not edit by hand. Run: node scripts/build-content.js */
const BIZ = ${JSON.stringify(biz, null, 2)};

const SERVICES = ${JSON.stringify(svcMapped, null, 2)};

const HOURS = ${JSON.stringify(hoursMapped, null, 2)};
`;

fs.writeFileSync(path.join(root, 'assets/content.js'), out, 'utf8');
console.log('assets/content.js written successfully.');
