/* ============================================================
   Blessington Launderette — app logic (router + content)
   ============================================================ */

/* ---------------- icon set (simple, stroke-based) ---------------- */
const ICON = (() => {
  const w = `stroke="currentColor" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"`;
  return {
    hanger:`<svg viewBox="0 0 24 24"><path d="M12 4.5a2 2 0 0 0-1 3.7V10L3.5 16a1.6 1.6 0 0 0 1 2.9h15a1.6 1.6 0 0 0 1-2.9L13 10V8.2" ${w}/></svg>`,
    drum:`<svg viewBox="0 0 24 24"><rect x="4.5" y="3" width="15" height="18" rx="3" ${w}/><path d="M4.5 7.5h15" ${w}/><circle cx="7.5" cy="5.2" r=".7" fill="currentColor" stroke="none"/><circle cx="10" cy="5.2" r=".7" fill="currentColor" stroke="none"/><circle cx="12" cy="14" r="4.4" ${w}/><circle cx="12" cy="14" r="1.5" ${w}/></svg>`,
    iron:`<svg viewBox="0 0 24 24"><path d="M3.5 15v-2.5A4.5 4.5 0 0 1 8 8h8.5c2 0 4 1.4 4 3.8V15Z" ${w}/><path d="M3.5 18h17" ${w}/><path d="M9 8V6.2c0-.8.6-1.4 1.4-1.4h3" ${w}/></svg>`,
    bed:`<svg viewBox="0 0 24 24"><path d="M3.5 11V6.5h17V11" ${w}/><path d="M3 19v-7.5h18V19" ${w}/><path d="M3 16h18" ${w}/><path d="M7 11V9h4v2" ${w}/></svg>`,
    stack:`<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="4.5" rx="1.4" ${w}/><rect x="4" y="10" width="16" height="4.5" rx="1.4" ${w}/><rect x="4" y="16" width="16" height="4" rx="1.4" ${w}/></svg>`,
    truck:`<svg viewBox="0 0 24 24"><rect x="2.5" y="6.5" width="12" height="9" rx="1.6" ${w}/><path d="M14.5 9.5H18l3 3v3h-6.5Z" ${w}/><circle cx="7" cy="18" r="1.8" ${w}/><circle cx="17" cy="18" r="1.8" ${w}/></svg>`,
    drop:`<svg viewBox="0 0 24 24"><path d="M12 3.5c3 4 5.5 7 5.5 10a5.5 5.5 0 0 1-11 0c0-3 2.5-6 5.5-10Z" ${w}/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" ${w}/></svg>`,
    coin:`<svg viewBox="0 0 24 24"><circle cx="8.5" cy="12" r="5.5" ${w}/><path d="M14 7.2A5.5 5.5 0 0 1 14 16.8" ${w}/><path d="M8.5 9.5v5M7 11h2.2a1.3 1.3 0 0 1 0 2.6H7" ${w}/></svg>`,
    rug:`<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1.5" ${w}/><rect x="3" y="5" width="3.5" height="14" rx="1" ${w}/><rect x="17.5" y="5" width="3.5" height="14" rx="1" ${w}/><line x1="6.5" y1="9" x2="17.5" y2="9" ${w}/><line x1="6.5" y1="12" x2="17.5" y2="12" ${w}/><line x1="6.5" y1="15" x2="17.5" y2="15" ${w}/></svg>`,
    needle:`<svg viewBox="0 0 24 24"><path d="M20.5 4L13 11.5" ${w}/><path d="M13 11.5L9 20l3-1.5 2.5-5.5" ${w}/><circle cx="9" cy="20" r="1" fill="currentColor" stroke="none"/><path d="M4 14.5c2-2 4.5-2.5 6-1" ${w}/></svg>`,
    arrow:`<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6" ${w}/></svg>`,
    back:`<svg viewBox="0 0 24 24"><path d="M19 12H6M11 6l-6 6 6 6" ${w}/></svg>`,
    pin:`<svg viewBox="0 0 24 24"><path d="M12 21c4-4.5 6.5-7.6 6.5-11A6.5 6.5 0 0 0 5.5 10c0 3.4 2.5 6.5 6.5 11Z" ${w}/><circle cx="12" cy="10" r="2.3" ${w}/></svg>`,
    phone:`<svg viewBox="0 0 24 24"><path d="M6 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4 5.5a2 2 0 0 1 2-2Z" ${w}/></svg>`,
    mail:`<svg viewBox="0 0 24 24"><rect x="3.5" y="5.5" width="17" height="13" rx="2.2" ${w}/><path d="M4.5 7.5 12 13l7.5-5.5" ${w}/></svg>`,
    clock:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" ${w}/><path d="M12 7.5V12l3 2" ${w}/></svg>`,
    check:`<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7" ${w}/></svg>`,
    camera:`<svg viewBox="0 0 24 24"><rect x="3" y="6.5" width="18" height="13" rx="2.5" ${w}/><circle cx="12" cy="13" r="3.4" ${w}/><path d="M8 6.5l1.4-2h5.2L16 6.5" ${w}/></svg>`,
    spark:`<svg viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" ${w}/></svg>`,
    menu:`<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" ${w}/></svg>`,
    grid:`<svg viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7" rx="1.6" ${w}/><rect x="13" y="4" width="7" height="7" rx="1.6" ${w}/><rect x="4" y="13" width="7" height="7" rx="1.6" ${w}/><rect x="13" y="13" width="7" height="7" rx="1.6" ${w}/></svg>`,
    tag:`<svg viewBox="0 0 24 24"><path d="M4 12.5V5.5A1.5 1.5 0 0 1 5.5 4h7l7.5 7.5a1.6 1.6 0 0 1 0 2.2l-5.3 5.3a1.6 1.6 0 0 1-2.2 0Z" ${w}/><circle cx="8.5" cy="8.5" r="1.2" ${w}/></svg>`,
    star:`<svg viewBox="0 0 24 24"><path d="M12 4l2.3 4.8 5.2.7-3.8 3.7.9 5.2L12 16.6 7.4 18.4l.9-5.2L4.5 9.5l5.2-.7Z" ${w}/></svg>`,
  };
})();
const ic = (n) => ICON[n] || ICON.hanger;

/* ---------------- coathanger brand mark SVG (inline, for sidebar) ---------------- */
const BRAND_MARK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
  <path d="M12 4a1.8 1.8 0 0 1 1.8 1.8v1.6"/>
  <path d="M13.8 7.4C13.8 7.4 20 11.5 20 15.5A1.5 1.5 0 0 1 18.5 17H5.5A1.5 1.5 0 0 1 4 15.5C4 11.5 10.2 7.4 10.2 7.4"/>
  <path d="M10.2 7.4A1.8 1.8 0 0 1 12 6.2A1.8 1.8 0 0 1 13.8 7.4"/>
</svg>`;

/* ---------------- services data (real info from the business) ---------------- */
const SERVICES = [
  { id:'self-service', name:'Self-Service Laundry', icon:'drum', img:'images/img-machines.jpg', from:'$6',
    blurb:'30 machines & 28 express dryers. Open 24/7 — keypad entry after hours.',
    desc:'A clean, bright laundromat with big-capacity machines and fast dryers. Tap, card, Apple Pay, Google Pay or cash. Comfortable seating and free wifi. Do a week\'s washing in under an hour. After-hours keypad access: <strong>223182#</strong>.',
    extra:'Last self-service wash 45 minutes before machine cutoff. Staff on-site 7:30am – 7pm if you need a hand. Detergent sachets available in store for $2.',
    chips:['Open 24/7','30 machines · 28 dryers','Card · tap · cash · Apple Pay','Free wifi','14 kg large machines','Staff on-site till 7pm'],
    rows:[['Standard wash (8 kg)','from $6'],['Large machine (14 kg)','$10'],['Express dryer (per 10 min)','$2'],['Detergent sachets','$2'],['After-hours keypad','223182#']] },

  { id:'wash-dry-fold', name:'Wash, Dry & Fold', icon:'drum', img:'images/img-wash-dry-fold.jpg', from:'by weight',
    blurb:'Sorted, washed, dried and folded by our staff. Pickup & delivery available.',
    desc:'Drop your load in — or send it with our driver — and collect it clean, fresh, and neatly folded. We sort by colour and fabric, wash with biodegradable detergent, tumble dry and fold it crisp.',
    extra:'Same-day available if in by 9am (+$6). Standard turnaround 24 hours. Hypoallergenic and fragrance-free detergent on request at no extra cost.',
    chips:['Sorted by colour & fabric','Biodegradable detergent','Folded & bagged','Fragrance-free option','Same-day available','Free pickup over $60'],
    rows:[['Wash, dry & fold','by weight'],['Minimum order','4 kg'],['Same-day (in by 9am)','+$6'],['Standard turnaround','24 hours'],['Pickup & delivery','free over $60']] },

  { id:'dry-cleaning', name:'Dry Cleaning', icon:'hanger', img:'images/img-dry-cleaning.jpg', from:'from $6.50',
    blurb:'Suits, delicates & formalwear. Same-day if dropped before 9am.',
    desc:'Professional solvent cleaning for the pieces that can\'t go in the machine. Every garment is inspected, spot-treated, cleaned and hand-finished on the press, then returned on hangers under a breathable cover.',
    extra:'Wedding dresses, suede, and leather handled by specialist partners. Ask for a quote on anything unusual. Same-day available if in before 9am.',
    chips:['Inspected & spot-treated','Hand-finished press','Returned on hangers','Delicate-safe solvents','Same-day available','Wedding dress specialist'],
    rows:[['Shirt','$6.50'],['Trousers / skirt','$9.90'],['Two-piece suit','$19.90'],['Dress','from $16'],['Jacket / blazer','from $14'],['Same-day (in by 9am)','available']] },

  { id:'rug-cleaning', name:'Rug Cleaning', icon:'rug', img:'images/img-rug.jpg', from:'from $60',
    blurb:'Wool, synthetic & area rugs of all sizes — deep cleaned and returned in 7 days.',
    desc:'Rugs accumulate dirt, dust, and allergens that regular vacuuming can\'t remove. We use professional equipment to deep-clean fibres, restore colour, and eliminate odours — leaving your rug fresh and revitalised.',
    extra:'Standard 7-day turnaround. Express service available on request — ask when booking. Prices vary by fibre type and condition; quoted on inspection.',
    chips:['Wool & natural fibre','Synthetic & polypropylene','Area rugs & runners','Persian & decorative rugs','Pickup & delivery','7-day turnaround'],
    rows:[['Small rug (up to 1.5m²)','from $60'],['Medium rug (1.5–3m²)','from $90'],['Large rug (3m²+)','from $130'],['Pickup & delivery','free over $60'],['Turnaround','7 days'],['Express service','on request']] },

  { id:'business-shirts', name:'Business Shirts', icon:'hanger', img:'images/img-business-shirts.jpg', from:'from $6',
    blurb:'Washed, starched & pressed. Same-day before noon. Weekly accounts available.',
    desc:'Washed at the right temperature, starched to your preference, and pressed to a crisp, even finish — collar, cuffs, placket and body. Returned hung, collared, and ready to wear directly from the hanger.',
    extra:'Same-day available if in before noon. Weekly accounts available for regular clients. Starch preference: light, medium or heavy — just tell us at drop-off.',
    chips:['Washed & starched','Hand-pressed','Returned on hangers','Same-day before noon','Weekly accounts','Blouses welcome'],
    rows:[['Single shirt / blouse','$6'],['5 shirts (bundle)','$25'],['Same-day (in before noon)','available'],['Starch level','light / med / heavy']] },

  { id:'ironing', name:'Ironing & Pressing', icon:'iron', img:'images/img-ironing.jpg', from:'from $3.50',
    blurb:'Crisp, crease-free shirts and linens. Add to any wash order.',
    desc:'Hand-pressed shirts, trousers and household linen finished to a professional standard. Have it as a standalone service or add pressing to any wash & fold order. Returned hung or folded — your choice.',
    extra:'Popular for busy weeks: drop a basket on Monday, collect a week of fresh shirts by Tuesday. Great for bed linen and tablecloths too.',
    chips:['Hand-pressed','Hung or folded','Add to any wash','Shirts & linen','Steam finish','Next-day turnaround'],
    rows:[['Shirt / blouse','$3.50'],['5 shirts (bundle)','$25'],['Trousers','$4.50'],['Bed linen (set)','$12'],['Per 30-min basket','$18']] },

  { id:'stain-removal', name:'Stain Removal', icon:'drop', img:'images/img-stain.jpg', from:'from $12',
    blurb:'Wine, coffee, ink, grease & makeup treated by hand. No fix, no fee.',
    desc:'We assess every stain individually and choose the right treatment for the fabric. Best results when it\'s fresh — bring it in soon after the incident.',
    extra:'Honest about outcomes: if we don\'t think we can shift it, we\'ll tell you before you\'re charged. No fix, no fee on spot treatments.',
    chips:['Hand-treated','Fabric-safe method','Free assessment','No fix, no fee','Add to any wash','Fresh stains preferred'],
    rows:[['Assessment','Free'],['Spot treatment','$6 / item'],['Heavy staining','from $12'],['No fix, no fee','on spot treatments'],['Add to wash order','yes']] },

  { id:'repairs-alterations', name:'Repairs & Alterations', icon:'needle', img:'images/img-alterations.jpg', from:'from $8',
    blurb:'Zip repairs, hemming, resizing, buttons & rip fixes. Quoted in store.',
    desc:'Bring in the garment and we\'ll assess it in front of you, give you a quote, and let you decide. No obligation. Simple repairs are often done same-day or next-day.',
    extra:'We do: zip repair and replacement, hemming, button work, rip and tear repair, waistband adjustments, sleeve shortening.',
    chips:['Zip repair & replacement','Hemming','Button work','Rip & tear repair','Waistband adjustments','Quoted in store'],
    rows:[['Basic repairs (buttons, hems)','from $8'],['Zip repair','from $15'],['Zip replacement','from $22'],['Waistband adjustment','from $18'],['Complex alterations','quoted in store']] },

  { id:'doona-cleaning', name:'Doona Cleaning', icon:'bed', img:'images/img-doona.jpg', from:'from $40',
    blurb:'Doonas, quilts & pillows refreshed in large-capacity drums — fully dried.',
    desc:'Bulky bedding that won\'t fit in a home machine, cleaned in our large-capacity drums. Doonas, quilts, pillows and mattress toppers come back fresh, fully dried and full of loft — no damp cores.',
    extra:'Seasonal tip: refresh winter doonas before storage. Anti-allergen wash available on request. Vacuum storage bags available to buy in store.',
    chips:['Large-capacity drums','Fully dried','Down & synthetic','Anti-allergen wash','Pillows & toppers','Seasonal refresh'],
    rows:[['Doona cleaning (1)','$40'],['Doona cleaning (2)','$75'],['Doona cleaning (3)','$105'],['Pickup & delivery','free over $60']] },

  { id:'commercial-laundry', name:'Commercial & Bulk', icon:'stack', img:'images/img-machines.jpg', from:'POA',
    blurb:'Reliable linen for cafés, gyms, salons & short-stay. Scheduled pickups, account billing.',
    desc:'Dependable laundry for local business. Scheduled pickups, contract rates and consistent turnaround for cafés, gyms, salons, clinics and short-stay hosts. Tell us your weekly volume and we\'ll build a plan.',
    extra:'Account billing, fixed weekly windows and priority turnaround all available. Trusted by venues across St Kilda and Balaclava.',
    chips:['Scheduled pickups','Contract rates','Account billing','Next-day turnaround','Priority service','Cafés · Gyms · Salons · Stays'],
    rows:[['Towels / linen','from $3.50 / kg'],['Weekly contract','tailored rate'],['Account billing','available'],['Turnaround','next-day'],['Priority service','on request']] },

  { id:'pickup-delivery', name:'Pickup & Delivery', icon:'truck', img:'images/img-truck.jpg', from:'free over $60',
    blurb:'We collect & return, right to your door. Free on orders over $60.',
    desc:'Never carry a laundry bag again. Call us to arrange a collection. Our driver picks up from your door, we clean everything at Blessington Street, and return it fresh on your chosen day.',
    extra:'Covering St Kilda, Balaclava and Elwood. Contactless drop-off available. Phone booking: 0417 579 143.',
    chips:['St Kilda · Balaclava · Elwood','Same-day available','Contactless option','All services covered','Free over $60','Phone booking'],
    rows:[['Orders over $60','Free both ways'],['Within service area (under $60)','$8 each way'],['Same-day collection','where available'],['Booking','phone 0417 579 143']] },
];
const svcById = (id) => SERVICES.find(s => s.id === id) || SERVICES[0];

/* ---------------- shared business info ---------------- */
const BIZ = {
  phone:'0417 579 143',
  phoneHref:'tel:+61417579143',
  email:'hello@blessingtonstreetlaunderette.com.au',
  addr:'22 Blessington Street, St Kilda VIC 3182',
  keypad:'223182#',
};

const HOURS = [
  ['Monday','7:30am – 7pm'],['Tuesday','7:30am – 7pm'],['Wednesday','7:30am – 7pm'],
  ['Thursday','7:30am – 7pm'],['Friday','7:30am – 7pm'],['Saturday','7:30am – 7pm'],['Sunday','7:30am – 7pm'],
];

/* ---------------- tweak state ---------------- */
const TWEAKS = {
  look:'crisp',
  headline:'Blessington Street Launderette',
  hero:'compact',
  columns:3,
  cards:'photo',
  showPrices:true,
  showBanner:true,
};
window.applyTweaks = function (t) {
  if (t.look != null)       TWEAKS.look = String(t.look).toLowerCase();
  if (t.headline != null)   TWEAKS.headline = t.headline;
  if (t.hero != null)       TWEAKS.hero = String(t.hero).toLowerCase();
  if (t.columns != null)    TWEAKS.columns = parseInt(t.columns) || 3;
  if (t.cards != null)      TWEAKS.cards = String(t.cards).toLowerCase();
  if (t.showPrices != null) TWEAKS.showPrices = !!t.showPrices;
  if (t.showBanner != null) TWEAKS.showBanner = !!t.showBanner;
  setLook(TWEAKS.look);
  document.documentElement.style.setProperty('--cols', TWEAKS.columns);
  route();
};

/* ---------------- photo helper — real images ---------------- */
function photo(src, alt, cls='') {
  return `<div class="photo ${cls}" style="position:relative; overflow:hidden;">
    <img src="${src}" alt="${alt}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;">
    <span class="photo__tag" style="position:relative;z-index:2;">${ic('camera')} ${alt}</span>
  </div>`;
}

/* ---------------- HOME ---------------- */
function heroStandard(T) {
  return `
  <div class="hero">
    <div>
      <span class="eyebrow">Your local laundry · St Kilda</span>
      <h1>${T.headline}</h1>
      <p class="lede">Drop in on Blessington Street or let us collect from your door — washed, dried, folded and pressed by a team that actually cares.</p>
      <div class="cta-row">
        <a class="btn btn--primary" href="tel:+61417579143">${ic('phone')} 0417 579 143</a>
        <a class="btn btn--ghost" data-go="pricing">See pricing</a>
      </div>
      <div class="trust"><span class="stars">★★★★★</span> Melbourne's biggest coinless launderette · Open 24/7</div>
    </div>
    ${photo('images/img-home.jpg', 'Blessington Street Launderette', 'hero__photo')}
  </div>`;
}
function heroCompact(T) {
  return `
  <div class="hero hero--compact">
    <span class="eyebrow">Your local laundry · St Kilda</span>
    <h1>${T.headline}</h1>
    <p class="hero-tagline">Save time &amp; money with Melbourne's biggest self-service coinless laundry</p>
    <p class="lede">30 machines · 28 dryers · open 24/7 · drop in or let us collect.</p>
  </div>`;
}
function bannerBlock() {
  return `
  <div class="banner">
    <div>
      <span class="pill" style="background:rgba(255,255,255,.16); color:#fff; border-color:rgba(255,255,255,.3);">${ic('truck')} Collection &amp; delivery</span>
      <h3 style="margin-top:12px;">We'll come to you — free over $60.</h3>
      <p>Call <a href="tel:+61417579143" style="color:#fff; font-weight:700;">0417 579 143</a> to book. We cover St Kilda, Balaclava &amp; Elwood and return your fresh laundry right to your door.</p>
    </div>
    <a class="btn btn--ghost" data-link="pickup-delivery">Book a pickup ${ic('arrow')}</a>
  </div>`;
}
function svcCard(s) {
  const T = TWEAKS;
  const price = T.showPrices ? `<span class="svc__price">from <b>${s.from}</b></span>` : `<span></span>`;
  if (T.cards === 'minimal') {
    return `<article class="svc svc--min" data-link="${s.id}">
      <div class="svc__body">
        <div class="svc__minhead"><span class="svc__ico svc__ico--inline">${ic(s.icon)}</span><h3>${s.name}</h3></div>
        <p class="svc__blurb">${s.blurb}</p>
        <div class="svc__foot">${price}<span class="svc__arrow">${ic('arrow')}</span></div>
      </div>
    </article>`;
  }
  return `<article class="svc" data-link="${s.id}">
    <div style="position:relative; height:118px; overflow:hidden;">
      <img src="${s.img}" alt="${s.name}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
      <span class="svc__ico" style="position:absolute; top:10px; left:10px; z-index:1;">${ic(s.icon)}</span>
    </div>
    <div class="svc__body">
      <h3>${s.name}</h3>
      <p class="svc__blurb">${s.blurb}</p>
      <div class="svc__foot">${price}<span class="svc__arrow">${ic('arrow')}</span></div>
    </div>
  </article>`;
}
function renderHome() {
  const T = TWEAKS;
  const hero = T.hero === 'hidden' ? '' : (T.hero === 'standard' ? heroStandard(T) : heroCompact(T));
  return `
  ${hero}
  <div class="sec-head">
    <div><span class="eyebrow">What we do</span><h2 style="margin-top:10px;">Everything laundry, one address</h2></div>
    <p>Tap any card for details &amp; pricing →</p>
  </div>
  <div class="svc-grid">
    ${SERVICES.map(svcCard).join('')}
  </div>
  ${T.showBanner ? bannerBlock() : ''}
  ${footer()}`;
}

/* ---------------- SERVICE DETAIL ---------------- */
function renderService(id) {
  const s = svcById(id);
  const others = SERVICES.filter(x => x.id !== s.id).slice(0, 3);
  return `
  <div class="crumb"><a data-go="home">Home</a> ${ic('arrow')} <a data-go="pricing">Services</a> ${ic('arrow')} <span>${s.name}</span></div>
  <div class="detail-head">
    <div class="di">${ic(s.icon)}</div>
    <div><span class="eyebrow">Service</span><h1 style="margin-top:8px;">${s.name}</h1></div>
  </div>
  <div class="detail-grid">
    <div class="detail-desc">
      ${photo(s.img, s.name, 'detail-hero')}
      <p>${s.desc}</p>
      <div class="chips">${s.chips.map(c => `<span class="chip">${ic('check')} ${c}</span>`).join('')}</div>
      <p style="margin-top:22px; font-size:15px; color:var(--muted); line-height:1.55;">${s.extra}</p>
    </div>
    <aside class="pricebox">
      <h4>Pricing guide</h4>
      <div class="from">from <b>${s.from}</b></div>
      ${s.rows.map(r => `<div class="prow"><span>${r[0]}</span><b>${r[1]}</b></div>`).join('')}
      <a class="btn btn--primary btn--block" data-go="contact">Book / enquire</a>
      <a class="btn btn--ghost btn--block" style="margin-top:9px;" href="${BIZ.phoneHref}">${ic('phone')} ${BIZ.phone}</a>
      <div class="note">${ic('truck')} Free collection &amp; delivery on orders over $60 across St Kilda.</div>
    </aside>
  </div>
  <div class="more">
    <div class="sec-head" style="margin:0 0 4px;"><h2 style="font-size:22px;">More services</h2></div>
    <div class="more-grid">
      ${others.map(o => `<div class="more-card" data-link="${o.id}">
        <div class="mi">${ic(o.icon)}</div>
        <div><b>${o.name}</b><span>from ${o.from}</span></div>
      </div>`).join('')}
    </div>
  </div>
  ${footer()}`;
}

/* ---------------- COMMERCIAL ---------------- */
function renderCommercial() {
  const industries = [
    { icon:'spark', name:'Medical & Allied Health', desc:'Clinics, physio, rehab, dental, aged care — scrubs, gowns, towels and treatment linen cleaned to strict hygiene standards.' },
    { icon:'star', name:'Gyms & Fitness Studios', desc:'Towels and uniforms with fast turnaround so you never run short between classes.' },
    { icon:'stack', name:'Restaurants & Cafés', desc:'Tablecloths, napkins, aprons and chef jackets laundered to a high standard, ready for service.' },
    { icon:'drop', name:'Hair & Beauty Salons', desc:'Salon towels, gowns and capes professionally laundered and pressed.' },
    { icon:'bed', name:'Hotels & Short-Stay', desc:'High-volume sheets, pillowcases, towels and staff uniforms on a reliable schedule.' },
    { icon:'spark', name:'Massage & Day Spas', desc:'Towels, robes, sheets and pillow covers cleaned to premium standards.' },
    { icon:'stack', name:'Childcare & Schools', desc:'Bedding, uniforms and activity mats sanitised for child safety.' },
    { icon:'truck', name:'Events & Functions', desc:'Tablecloths, chair covers and event linens cleaned and returned ready for your next booking.' },
  ];

  const steps = [
    ['Schedule a pickup', 'Organise regular collection times that fit your business. Same-day or scheduled — we work around your operation, not the other way around.'],
    ['Professional cleaning & sanitisation', 'Expertly washed, sanitised, dried and folded using commercial-grade systems and premium detergents.'],
    ['Next-day delivery', 'Clean, fresh linen returned promptly. Never run out of clean linen again.'],
  ];

  const reasons = [
    { icon:'clock', head:'Save staff time', body:'Your team should focus on patients and clients — not managing laundry between appointments.' },
    { icon:'check', head:'Professional hygiene', body:'Commercial-grade systems designed for deep cleaning and proper sanitisation of medical and hospitality linen.' },
    { icon:'arrow', head:'Fast next-day turnaround', body:'Consistent processing means clean linen is always ready when you need it.' },
    { icon:'truck', head:'Reliable pickup & delivery', body:'Collection and return on a schedule that fits your business — inner bayside Melbourne.' },
    { icon:'tag', head:'More cost-effective', body:'Outsourcing laundry is often financially smarter than managing machines, staff time and detergent onsite.' },
    { icon:'spark', head:'Eco-friendly options', body:'Biodegradable detergent available on request. Sustainable practices across all commercial accounts.' },
  ];

  const testimonials = [
    { name:'Kerry Mccormack', role:'Regular customer', quote:'Rita, Milad and the girls are always pleasant… end result always immaculately cleaned.' },
    { name:'Will Cochrane', role:'Regular customer, 10+ years', quote:'I have been using the Blessington Street Laundry for over 10 years… always assured the job will be done properly.' },
    { name:'The Hon Neil Brown QC', role:'Regular customer', quote:'I have used it for several years… very happy with the quality of work.' },
  ];

  return `
  <div class="head-block">
    <span class="eyebrow">${ic('stack')} Commercial laundry</span>
    <h1>Professional laundry<br>for Melbourne businesses</h1>
    <p class="lede">Complimentary pickup and delivery across Melbourne's inner bayside — St Kilda, Albert Park, Middle Park and surrounding suburbs. Trusted by medical clinics, gyms, salons, hospitality venues and more.</p>
    <div class="cta-row" style="margin-top:22px; display:flex; gap:12px;">
      <a class="btn btn--primary" href="${BIZ.phoneHref}">${ic('phone')} ${BIZ.phone}</a>
      <a class="btn btn--ghost" data-go="contact">Send a message</a>
    </div>
  </div>

  <div class="steps">
    ${steps.map((st, i) => `<div class="step"><div class="num">${i + 1}</div><h3>${st[0]}</h3><p>${st[1]}</p></div>`).join('')}
  </div>

  <div class="sec-head" style="margin-top:50px;">
    <div><span class="eyebrow">Why businesses choose us</span><h2 style="margin-top:10px;">Six reasons to outsource your laundry</h2></div>
  </div>
  <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-bottom:50px;">
    ${reasons.map(r => `
    <div class="card" style="padding:22px;">
      <div style="width:36px;height:36px;border-radius:10px;background:var(--accent-tint);color:var(--accent-press);display:grid;place-items:center;margin-bottom:14px;">${ic(r.icon)}</div>
      <h3 style="font-size:16px; margin-bottom:8px;">${r.head}</h3>
      <p style="font-size:14px; color:var(--ink-soft); line-height:1.55;">${r.body}</p>
    </div>`).join('')}
  </div>

  <div class="sec-head">
    <div><span class="eyebrow">Industries we serve</span><h2 style="margin-top:10px;">Who we work with</h2></div>
  </div>
  <div style="display:grid; grid-template-columns:repeat(var(--cols,3),1fr); gap:14px; margin-bottom:50px;">
    ${industries.map(ind => `
    <div class="more-card" style="cursor:default;">
      <div class="mi">${ic(ind.icon)}</div>
      <div><b>${ind.name}</b><span style="display:block;font-size:12.5px;color:var(--muted);line-height:1.4;margin-top:3px;">${ind.desc}</span></div>
    </div>`).join('')}
  </div>

  <div class="split2" style="margin-bottom:50px; align-items:start;">
    <div>
      <div class="sec-head" style="margin-top:0;"><div><span class="eyebrow">What we clean</span><h2 style="margin-top:10px; font-size:clamp(20px,2vw,26px);">Every item, done properly</h2></div></div>
      <div class="card" style="padding:22px;">
        ${['Towels and gym linen','Medical and patient gowns','Bed sheets and pillowcases','Staff uniforms and scrubs','Treatment room linen','Massage and therapy towels','Cleaning cloths and rags','Robes and spa linen','Tablecloths and napkins','Aprons and chef jackets'].map(item =>
          `<div class="chips" style="margin:0 0 8px; flex-wrap:nowrap;"><span class="chip">${item}</span></div>`
        ).join('')}
      </div>
    </div>
    <div>
      <div class="sec-head" style="margin-top:0;"><div><span class="eyebrow">Pricing</span><h2 style="margin-top:10px; font-size:clamp(20px,2vw,26px);">What it costs</h2></div></div>
      <div class="pricebox" style="position:static;">
        <h4>Commercial rates</h4>
        <div class="from">tailored to your volume</div>
        <div class="prow"><span>Towels / linen</span><b>from $3.50 / kg</b></div>
        <div class="prow"><span>Weekly contract</span><b>tailored rate</b></div>
        <div class="prow"><span>Account billing</span><b>available</b></div>
        <div class="prow"><span>Turnaround</span><b>next-day</b></div>
        <div class="prow"><span>Pickup &amp; delivery</span><b>free over $60</b></div>
        <div class="prow"><span>Doona (1)</span><b>$40</b></div>
        <div class="prow"><span>Doonas (2)</span><b>$75</b></div>
        <div class="prow"><span>Doonas (3)</span><b>$105</b></div>
        <div class="prow"><span>5 shirts wash &amp; iron</span><b>$25</b></div>
        <a class="btn btn--primary btn--block" style="margin-top:16px;" href="${BIZ.phoneHref}">${ic('phone')} Call to discuss rates</a>
        <a class="btn btn--ghost btn--block" style="margin-top:9px;" data-go="contact">Send an enquiry</a>
        <div class="note">${ic('check')} Biodegradable detergent available on all commercial accounts.</div>
      </div>
    </div>
  </div>

  <div class="sec-head">
    <div><span class="eyebrow">What our customers say</span><h2 style="margin-top:10px;">Trusted for years</h2></div>
  </div>
  <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-bottom:50px;">
    ${testimonials.map(t => `
    <div class="card" style="padding:22px;">
      <div class="trust" style="margin-bottom:12px;"><span class="stars">★★★★★</span></div>
      <p style="font-size:14.5px; color:var(--ink-soft); line-height:1.6; font-style:italic; margin-bottom:16px;">"${t.quote}"</p>
      <div style="font-size:13px; font-weight:700; color:var(--ink);">${t.name}</div>
      <div style="font-size:12px; color:var(--muted);">${t.role}</div>
    </div>`).join('')}
  </div>

  <div class="banner">
    <div>
      <h3>Book a commercial laundry pickup today</h3>
      <p>Take the pressure off your team and ensure clean, professional-quality linen ready to use. Contact us to set up a regular service.</p>
    </div>
    <a class="btn btn--ghost" href="${BIZ.phoneHref}">${ic('phone')} ${BIZ.phone}</a>
  </div>

  ${footer()}`;
}

/* ---------------- PRICING ---------------- */
function renderPricing() {
  return `
  <div class="head-block"><span class="eyebrow">${ic('tag')} Pricing</span>
    <h1>Simple, honest pricing</h1>
    <p class="lede">No hidden fees. Free collection &amp; delivery on orders over $60. Self-service open 24/7 — no coins needed.</p>
  </div>
  ${SERVICES.map(s => `
    <div class="price-section">
      <div class="ps-head"><div class="di">${ic(s.icon)}</div><h3 style="font-size:19px;">${s.name}</h3></div>
      <div class="price-table">
        ${s.rows.map(r => `<div class="tr"><span>${r[0]}</span><b>${r[1]}</b></div>`).join('')}
      </div>
    </div>`).join('')}
  <div class="banner" style="margin-top:34px;">
    <div><h3>Not sure what you need?</h3><p>Call us on ${BIZ.phone} and we'll give you a straight answer — and an exact price.</p></div>
    <a class="btn btn--ghost" href="${BIZ.phoneHref}">Call now ${ic('arrow')}</a>
  </div>
  ${footer()}`;
}

/* ---------------- COLLECTION & DELIVERY ---------------- */
function renderDelivery() {
  const steps = [
    ['Book a collection','Call us on ' + BIZ.phone + '. Same-day where available, or schedule ahead. We\'ll confirm your window.'],
    ['We clean it','Our driver collects from your door. Everything\'s washed, dried, folded or pressed at Blessington Street by our staff.'],
    ['Back to your door','We return it fresh on your chosen day. Contactless drop-off available — just leave a note when you book.'],
  ];
  return `
  <div class="head-block"><span class="eyebrow">${ic('truck')} Collection &amp; delivery</span>
    <h1>We'll come to you</h1>
    <p class="lede">Skip the trip. Covering St Kilda, Balaclava and Elwood — free both ways on orders over $60.</p>
    <div class="cta-row" style="margin-top:22px; display:flex; gap:12px;">
      <a class="btn btn--primary" href="${BIZ.phoneHref}">${ic('phone')} ${BIZ.phone}</a>
      <a class="btn btn--ghost" data-go="contact">Send a message</a>
    </div>
  </div>
  <div class="steps">
    ${steps.map((st, i) => `<div class="step"><div class="num">${i + 1}</div><h3>${st[0]}</h3><p>${st[1]}</p></div>`).join('')}
  </div>
  <div class="split2">
    <div class="info-card">
      <h3>What it costs</h3>
      <div class="info-row"><div class="ii">${ic('truck')}</div><div><b>Orders over $60</b><span>Free collection &amp; delivery, both ways.</span></div></div>
      <div class="info-row"><div class="ii">${ic('pin')}</div><div><b>Within service area</b><span>$8 each way for smaller orders.</span></div></div>
      <div class="info-row"><div class="ii">${ic('clock')}</div><div><b>Same-day</b><span>Available on selected routes — confirm at booking.</span></div></div>
      <div class="info-row"><div class="ii">${ic('phone')}</div><div><b>Book by phone</b><span><a href="${BIZ.phoneHref}" style="color:var(--accent);">${BIZ.phone}</a></span></div></div>
    </div>
    ${photo('images/img-truck.jpg', 'Collection & delivery service', 'map-ph')}
  </div>
  ${footer()}`;
}

/* ---------------- HOURS ---------------- */
function renderHours() {
  const today = new Date().getDay();
  const order = [1,2,3,4,5,6,0];
  return `
  <div class="head-block"><span class="eyebrow">${ic('clock')} Opening hours</span>
    <h1>When we're open</h1>
    <p class="lede"><span class="open-dot"></span>Self-service machines open 24/7. Staff on-site 7:30am – 7pm, 7 days a week.</p>
  </div>
  <div class="split2">
    <div class="info-card hours-table">
      <div class="hours-row" style="font-weight:700; color:var(--accent-press); border-bottom:1px solid var(--line-soft); margin-bottom:4px; padding-bottom:10px;">
        <span>Self-service machines</span><span style="font-family:var(--font-head);">Open 24/7</span>
      </div>
      ${order.map(d => {
        const h = HOURS[d === 0 ? 6 : d - 1];
        return `<div class="hours-row ${d === today ? 'today' : ''}"><span class="day">${h[0]}</span><span class="time">${h[1]}</span></div>`;
      }).join('')}
      <div class="hours-row" style="color:var(--muted); font-size:13px; border-top:1px solid var(--line-soft); margin-top:4px; padding-top:10px;">
        <span>After-hours keypad</span><span style="font-family:var(--font-head);">${BIZ.keypad}</span>
      </div>
    </div>
    <div class="info-card">
      <h3>Good to know</h3>
      <div class="info-row"><div class="ii">${ic('coin')}</div><div><b>Coinless payments</b><span>Card, tap, Apple Pay, Google Pay and cash. No coins needed.</span></div></div>
      <div class="info-row"><div class="ii">${ic('spark')}</div><div><b>Public holidays</b><span>Staff hours may vary — call ahead on ${BIZ.phone}.</span></div></div>
      <div class="info-row"><div class="ii">${ic('truck')}</div><div><b>Collection windows</b><span>Pickups run 7:30am – 6pm, seven days.</span></div></div>
      <div class="info-row"><div class="ii">${ic('pin')}</div><div><b>Address</b><span>${BIZ.addr}</span></div></div>
      <a class="btn btn--primary btn--block" style="margin-top:16px;" href="https://www.google.com/maps/place/Blessington+Street+Laundrette/@-37.870384,144.9776551,17z" target="_blank" rel="noopener">${ic('pin')} Get directions</a>
    </div>
  </div>
  ${footer()}`;
}

/* ---------------- FIND US ---------------- */
function renderFind() {
  return `
  <div class="head-block"><span class="eyebrow">${ic('pin')} Find us</span>
    <h1>22 Blessington Street,<br>St Kilda</h1>
    <p class="lede">On Blessington Street with easy street parking, a short walk from Acland Street and the tram.</p>
  </div>
  <div class="map-ph" style="padding:0; overflow:hidden; border-radius:var(--r); border:1px solid var(--line);">
    <iframe
      src="https://maps.google.com/maps?q=-37.870384,144.98023&z=17&output=embed"
      width="100%" height="100%" style="border:0; display:block; min-height:380px;"
      allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      title="Blessington Street Laundrette on Google Maps">
    </iframe>
  </div>
  <div class="split2" style="margin-top:24px;">
    <div class="info-card">
      <h3>Getting here</h3>
      <div class="info-row"><div class="ii">${ic('pin')}</div><div><b>Address</b><span>${BIZ.addr}</span></div></div>
      <div class="info-row"><div class="ii">${ic('truck')}</div><div><b>Parking</b><span>Free 2-hour street parking on Blessington Street and nearby.</span></div></div>
      <div class="info-row"><div class="ii">${ic('arrow')}</div><div><b>Public transport</b><span>Short walk from St Kilda tram stop and Fitzroy Street buses.</span></div></div>
    </div>
    <div class="info-card">
      <h3>Visit us</h3>
      <div class="info-row"><div class="ii">${ic('clock')}</div><div><b>Self-service</b><span>Open 24/7 · Keypad: ${BIZ.keypad}</span></div></div>
      <div class="info-row"><div class="ii">${ic('clock')}</div><div><b>Staff hours</b><span>7:30am – 7pm, 7 days</span></div></div>
      <div class="info-row"><div class="ii">${ic('phone')}</div><div><b>Call us</b><span><a href="${BIZ.phoneHref}" style="color:var(--accent);">${BIZ.phone}</a></span></div></div>
      <a class="btn btn--primary btn--block" style="margin-top:16px;" href="https://www.google.com/maps/place/Blessington+Street+Laundrette/@-37.870384,144.9776551,17z" target="_blank" rel="noopener">${ic('pin')} Get directions</a>
      <a class="btn btn--ghost btn--block" style="margin-top:9px;" data-go="contact">Contact us</a>
    </div>
  </div>
  ${footer()}`;
}

/* ---------------- CONTACT ---------------- */
function renderContact() {
  return `
  <div class="head-block"><span class="eyebrow">${ic('mail')} Contact</span>
    <h1>Get in touch</h1>
    <p class="lede">Questions, quotes or a collection booking — call us direct on <a href="${BIZ.phoneHref}" style="color:var(--accent);">${BIZ.phone}</a> or send a message below.</p>
  </div>
  <div class="split2">
    <form class="form" id="contactForm" onsubmit="return false;">
      <div class="field--row">
        <div class="field"><label>Name</label><input type="text" placeholder="Your name" required></div>
        <div class="field"><label>Phone</label><input type="tel" placeholder="Optional"></div>
      </div>
      <div class="field"><label>Email</label><input type="email" placeholder="you@email.com" required></div>
      <div class="field"><label>Service</label>
        <select>
          <option value="">What can we help with?</option>
          ${SERVICES.map(s => `<option>${s.name}</option>`).join('')}
          <option>Something else</option>
        </select>
      </div>
      <div class="field"><label>Message</label><textarea placeholder="Tell us a bit more…"></textarea></div>
      <button class="btn btn--primary" id="sendBtn" type="submit">Send message ${ic('arrow')}</button>
      <div class="form-ok" id="formOk">${ic('check')} Thanks — we'll be in touch shortly.</div>
    </form>
    <div>
      <div class="info-card">
        <h3>Reach us directly</h3>
        <div class="info-row"><div class="ii">${ic('phone')}</div><div><b>Phone</b><span><a href="${BIZ.phoneHref}" style="color:var(--accent);">${BIZ.phone}</a></span></div></div>
        <div class="info-row"><div class="ii">${ic('mail')}</div><div><b>Email</b><span>${BIZ.email}</span></div></div>
        <div class="info-row"><div class="ii">${ic('pin')}</div><div><b>Visit</b><span>${BIZ.addr}</span></div></div>
        <div class="info-row"><div class="ii">${ic('clock')}</div><div><b>Self-service</b><span>Open 24/7 · keypad ${BIZ.keypad}</span></div></div>
        <div class="info-row"><div class="ii">${ic('clock')}</div><div><b>Staff hours</b><span>7:30am – 7pm, 7 days</span></div></div>
      </div>
    </div>
  </div>
  ${footer()}`;
}

/* ---------------- FOOTER ---------------- */
function footer() {
  return `<div class="foot">
    <span>© 2026 Blessington Street Launderette · ${BIZ.addr} · ${BIZ.phone}</span>
    <span style="display:flex; gap:16px;">
      <a data-go="pricing">Pricing</a>
      <a data-go="delivery">Collection</a>
      <a data-go="hours">Hours</a>
      <a data-go="contact">Contact</a>
    </span>
  </div>`;
}

/* ---------------- ROUTER ---------------- */
const ROUTES = {
  home: renderHome, pricing: renderPricing, delivery: renderDelivery,
  commercial: renderCommercial, hours: renderHours, find: renderFind, contact: renderContact,
};

function route() {
  const hash = location.hash.replace(/^#\/?/, '') || 'home';
  const [key, arg] = hash.split('/');
  const view = document.getElementById('view');
  let html, navKey = key;

  if (key === 'service') { html = renderService(arg); navKey = 'pricing'; }
  else if (ROUTES[key]) { html = ROUTES[key](); }
  else { html = renderHome(); navKey = 'home'; }

  view.innerHTML = `<div class="main-view">${html}</div>`;
  document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('active', a.dataset.nav === navKey));
  document.body.classList.remove('nav-open');
  window.scrollTo(0, 0);
  document.querySelector('.main').scrollTo?.(0, 0);
}

/* delegated navigation */
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-link]');
  const go = e.target.closest('[data-go]');
  if (link) { location.hash = '#/service/' + link.dataset.link; return; }
  if (go) {
    const t = go.dataset.go;
    location.hash = t === 'home' ? '#/home' : '#/' + t;
    return;
  }
  if (e.target.closest('#sendBtn')) {
    const ok = document.getElementById('formOk');
    if (ok) { ok.classList.add('show'); document.getElementById('sendBtn').style.display = 'none'; }
  }
  if (e.target.closest('.menu-btn')) document.body.classList.toggle('nav-open');
  if (e.target.closest('.brand')) location.hash = '#/home';
});
window.addEventListener('hashchange', route);

/* ---------------- LOOK SWITCHER ---------------- */
function setLook(name) {
  document.body.classList.remove('theme-crisp', 'theme-friendly', 'theme-editorial');
  document.body.classList.add('theme-' + name);
  localStorage.setItem('bl_look', name);
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('.looks button');
  if (b) setLook(b.dataset.look);
});

/* ---------------- boot ---------------- */
document.documentElement.style.setProperty('--cols', TWEAKS.columns);
setLook(TWEAKS.look);
if (!location.hash) location.hash = '#/home';
route();
