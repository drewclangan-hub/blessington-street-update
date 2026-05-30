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

/* ---------------- services data — text from blessingtonstreetlaunderette.com.au only ---------------- */
const SERVICES = [
  { id:'self-service', name:'Self-Service Laundry', icon:'drum', img:'images/img-machines.jpg', from:'$6',
    blurb:'Melbourne\'s biggest self-service launderette. Open 24/7 for your convenience.',
    desc:'Enjoy 24-hour launderette access in St Kilda with secure keypad entry, 223182# so you can do your laundry whenever it suits you — early mornings, late nights, or anytime in between.',
    extra:'Pay with credit or debit card, Apple Pay, Google Pay, or cash — whatever works best for you. Our Service Hours: 7:30am – 7:00pm, 7 days a week.',
    chips:['Open 24/7','30 high-capacity Dexter washers','28 double-stack EXPRESS dryers','Credit card · Apple Pay · Google Pay · cash','Secure keypad entry 223182#','Clean, spacious & easy-to-use'],
    rows:[['5 kg Front Loader','$6'],['7 kg Front Loader','$7'],['16 kg Front Loader','$14 / Super wash $16'],['24 kg Front Loader','$16'],['28 kg Front Loader','$20']] },

  { id:'wash-dry-fold', name:'Wash, Dry & Fold', icon:'drum', img:'images/img-wash-dry-fold.jpg', from:'from $38',
    blurb:'Let us handle your everyday laundry — washed, dried and neatly folded, ready to go straight into your wardrobe.',
    desc:'Let us handle your everyday laundry. We wash, dry, and neatly fold your clothes — ready to go straight into your wardrobe. Clothes washed and dried with plain/colour separation.',
    extra:'Pick-up and delivery available. Ideal for families, busy professionals, and Airbnb hosts. Quality detergents that are kind to fabrics and colours. Free pick-up and drop off with every laundry order over $60.',
    chips:['Plain/colour separation','Neatly folded & ready to put away','Pick-up and delivery available','Ideal for families, busy professionals & Airbnb hosts','Quality detergents','Free pickup over $60'],
    rows:[['Wash, dry & fold','from $38'],['Doona cleaning (1)','$40'],['Doona cleaning (2)','$75'],['Doona cleaning (3)','$105'],['Free pickup & drop off','orders over $60']] },

  { id:'dry-cleaning', name:'Dry Cleaning', icon:'hanger', img:'images/img-dry-cleaning.jpg', from:'from $6.50',
    blurb:'Expert care for delicate fabrics, business wear, and special garments — cleaned with attention to detail.',
    desc:'Dry cleaning at Blessington Street Launderette is a cost-effective and highly recommended service for garments that require specialized care. Our expert dry cleaners treat each garment as if it were their own, ensuring that your clothing receives the best possible care. Same-day service available when dropped off by 9am.',
    extra:'Whether you choose to drop off your items in person or take advantage of our convenient pick-up service, we ensure a seamless experience from start to finish. We use the most sophisticated cleaning machinery and environmentally friendly solvents.',
    chipsGrid:true,
    chips:['<b>Business Attire</b><br><span style="font-size:11.5px;opacity:.7;font-weight:400;">suits, shirts, blouses</span>','<b>Evening Wear</b><br><span style="font-size:11.5px;opacity:.7;font-weight:400;">gowns, dresses, tuxedos</span>','<b>Outerwear</b><br><span style="font-size:11.5px;opacity:.7;font-weight:400;">coats, jackets, wool blends</span>','<b>Delicate Fabrics</b><br><span style="font-size:11.5px;opacity:.7;font-weight:400;">silk, cashmere & more</span>','<b>Specialty Items</b><br><span style="font-size:11.5px;opacity:.7;font-weight:400;">leather, suede & more</span>','<b>Same-day available</b><br><span style="font-size:11.5px;opacity:.7;font-weight:400;">drop off by 9am</span>'],
    rows:[['Shirt','$6.50'],['Trousers / skirt','$9.90'],['Two-piece suit','$19.90'],['Dress','from $16'],['Same-day (drop off by 9am)','available'],['Pick-up & delivery','available']] },

  { id:'rug-cleaning', name:'Rug Cleaning', icon:'rug', img:'images/img-rug.jpg', from:'by size',
    blurb:'Professional cleaning for wool, synthetic, and area rugs. Average 7-day turnaround.',
    desc:'Professional cleaning for wool, synthetic, and area rugs. From everyday rugs to treasured pieces, we give them the care they deserve. Clear pricing by size or square metre.',
    extra:'Pick-up and delivery for convenience. Average turnaround: 7 days. Free pick-up and drop off with every laundry order over $60.',
    chips:['Wool, synthetic & area rugs','Clear pricing by size or sq metre','Pick-up and delivery','Average 7-day turnaround','Free pickup over $60'],
    rows:[['Small rug (up to 1.5m²)','from $60'],['Medium rug (1.5–3m²)','from $90'],['Large rug (3m²+)','from $130'],['Pickup & delivery','free over $60'],['Average turnaround','7 days']] },

  { id:'business-shirts', name:'Business Shirts', icon:'hanger', img:'images/img-business-shirts.jpg', from:'$6 each / $25 for 5',
    blurb:'Sharp, Crisp & Always Fresh. 5 shirts professionally ironed for just $25.',
    desc:'Look Your Best with Blessington Street Launderette. Sharp, Crisp & Always Fresh. Our skilled team uses professional equipment and proven techniques to give shirts, blouses, trousers, and more a flawless finish every time. Need fresh, sharp shirts each week? Leave it to us — we\'ll have them looking crisp and ready to go.',
    extra:'Not Just Shirts — from curtains to bedding to those tricky fabrics that never sit flat — we handle it all. Our heavy-duty steam table makes light work of large or bulky items. Curtains & Upholstery: prices vary by size and fabric — just give us a call for a quote.',
    chips:['5 shirts for $25 ($5 each)','Shirts, blouses & trousers','Professional equipment & techniques','Crisp flawless finish','Curtains & bedding','Heavy-duty steam table'],
    rows:[['5 shirts wash & iron','$25 ($5.00 each)'],['Single shirt','$6'],['Got Something Special Coming Up?','Wedding, party or event — ask us']] },

  { id:'ironing', name:'Ironing & Pressing', icon:'iron', img:'images/img-ironing.jpg', from:'from $5',
    blurb:'Crisp, professional finish every time. Gentle care for delicate fabrics.',
    desc:'Need your clothes looking sharp? We\'ll press your shirts, uniforms, or formal wear to perfection. Crisp, professional finish every time. Gentle care for delicate fabrics. Perfect for busy workers, parents, and special occasions.',
    extra:'From curtains to bedding to those tricky fabrics that never sit flat — we handle it all. Our heavy-duty steam table makes light work of large or bulky items. Prices vary by size and fabric — just give us a call for a quote.',
    chips:['Crisp, professional finish every time','Gentle care for delicate fabrics','Perfect for busy workers, parents & special occasions','Curtains & bedding','Heavy-duty steam table'],
    rows:[['5 shirts wash & iron','$25 ($5.00 each)'],['Single shirt','$6'],['Curtains & upholstery','call for a quote']] },

  { id:'stain-removal', name:'Stain Removal', icon:'drop', img:'images/img-stain.jpg', from:'from $12',
    blurb:'Say Goodbye to Stubborn Marks. We\'ve seen it all, and we know just what to do.',
    desc:'Spilled wine on your favourite dress? Ink on your work shirt? Oil on your best jacket? Don\'t panic — we\'ve seen it all, and we know just what to do. At Blessington Street Launderette, we understand that no two stains are alike. From coffee and curry to lipstick, paint, or grease, each mark needs its own special approach.',
    extra:'We\'ll always do our best to give your clothes the greatest chance of a full recovery — and we\'ll be honest about what\'s possible before we begin.',
    chips:['Tailored Treatments — every stain & fabric gets the right method','Professional Care — proven techniques & quality cleaning solutions','Gentle on Fabrics — tough on stains, kind to your clothes','Save Your Favourites — don\'t write off that much-loved garment'],
    rows:[['Stain removal','from $12'],['Assessment','honest upfront'],['Add to wash order','yes']] },

  { id:'repairs-alterations', name:'Repairs & Alterations', icon:'needle', img:'images/img-alterations.jpg', from:'quoted in store',
    blurb:'Love Your Clothes for Longer. From simple hems to complete re-sizing.',
    desc:'Why say goodbye to your favourite clothes or shoes when they can be brought back to life? At Blessington Street Launderette, we believe in making the most of what you already love — saving you money and reducing waste while keeping you looking your best. From simple hems to complete re-sizing, our skilled alteration service can adjust your garments so they fit and feel just right.',
    extra:'Whether it\'s a formal dress, a business suit, or everyday wear, we\'ll make sure it flatters you perfectly. Whether it\'s fixing a tear, shortening sleeves, or giving your favourite garment a refresh, we treat every item with care and precision.',
    chips:['Save Money — restoring costs far less than buying new','Better for the Planet — reduce waste & keep quality materials in use','Keep the Comfort — already broken-in items are often more comfortable','Hold on to Memories — some items are simply irreplaceable'],
    rows:[['Clothing alterations','quoted in store'],['Simple hems to complete re-sizing','available'],['Repairs & alterations','quoted on inspection']] },

  { id:'doona-cleaning', name:'Doona Cleaning', icon:'bed', img:'images/img-doona.jpg', from:'from $40',
    blurb:'Doonas, quilts & blankets. 30 high-capacity machines for everything from everyday loads to doonas.',
    desc:'30 high-capacity Dexter washing machines for everything from everyday loads to doonas and blankets.',
    extra:'Free pick-up and drop off with every laundry order over $60. Biodegradable detergent is available.',
    chips:['Single doona $40','Two doonas $75','Three doonas $105','Free pickup over $60','Biodegradable detergent available'],
    rows:[['1 Doona','$40'],['2 Doonas','$75'],['3 Doonas','$105'],['Pickup & delivery','free over $60']] },

  { id:'commercial-laundry', name:'Commercial & Bulk', icon:'stack', img:'images/img-machines.jpg', from:'contact us',
    blurb:'Reliable, professional laundry solutions for restaurants, cafés, salons, gyms, Airbnbs, and more.',
    desc:'Our Commercial Laundry service, conveniently located at Blessington Street, is perfectly situated to cater to restaurants, hotels, and businesses throughout St Kilda and the surrounding areas. We understand that businesses need reliable, fast, and quality laundry services to keep operations running smoothly. We offer flexible delivery and collection times tailored to your needs.',
    extra:'Account facility is available upon request for commercial (pick-up & delivery) service.',
    chips:['Time and Cost Efficiency','Consistency and Quality','Increased Productivity','Flexibility and Convenience','Eco-Friendly Practices','No Job Too Big or Small'],
    rows:[['Towels / linen','from $3.50 / kg'],['Account billing','available on request'],['Delivery & collection','flexible, tailored to your needs']] },

  { id:'pickup-delivery', name:'Pickup & Delivery', icon:'truck', img:'images/img-truck.jpg', from:'from $60',
    blurb:'Too busy to come in? We\'ll collect your laundry, clean it, and deliver it back fresh and ready to use.',
    desc:'Too busy to come in? We\'ll collect your laundry, clean it, and deliver it back fresh and ready to use. Services starting from $60. Free pick-up and drop off with every laundry order over $60.',
    extra:'Blessington Street Launderette proudly serves customers across Melbourne, including St Kilda, Middle Park, Albert Park, Port Melbourne, Southbank, Elwood, South Yarra, Richmond, Fitzroy, Collingwood, Abbotsford, Brighton, Caulfield and Melbourne CBD.',
    chips:['Free pickup & drop off over $60','St Kilda · Middle Park · Albert Park','Port Melbourne · Southbank · Elwood','South Yarra · Richmond · Fitzroy','Brighton · Caulfield · Melbourne CBD','Services starting from $60'],
    rows:[['Services starting from','$60'],['Mastercard & Visa','accepted'],['Account facility','available on request']] },
];
const svcById = (id) => SERVICES.find(s => s.id === id) || SERVICES[0];

/* ---------------- shared business info — from blessingtonstreetlaunderette.com.au ---------------- */
const BIZ = {
  phone:'0417 579 143',
  phoneHref:'tel:+61417579143',
  phone2:'(03) 9534 2976',
  phone2Href:'tel:0395342976',
  addr:'22 Blessington Street, St Kilda',
  keypad:'223182#',
  payment:'We accept Mastercard and Visa. Account facility is available upon request for commercial (pick-up & delivery) service.',
};

const HOURS = [
  ['Monday','7:30am – 7:00pm'],['Tuesday','7:30am – 7:00pm'],['Wednesday','7:30am – 7:00pm'],
  ['Thursday','7:30am – 7:00pm'],['Friday','7:30am – 7:00pm'],['Saturday','7:30am – 7:00pm'],['Sunday','7:30am – 7:00pm'],
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
      <span class="eyebrow">22 Blessington Street, St Kilda</span>
      <h1>${T.headline}</h1>
      <p class="lede">Open 24/7 for Your Convenience. Our Service Hours: 7:30am – 7:00pm, 7 days a week.</p>
      <div class="cta-row">
        <a class="btn btn--primary" href="${BIZ.phoneHref}">${ic('phone')} ${BIZ.phone}</a>
        <a class="btn btn--ghost" data-go="pricing">See pricing</a>
      </div>
      <div class="trust"><span class="stars">★★★★★</span> Melbourne's Biggest Self-Service Launderette</div>
    </div>
    ${photo('images/img-home.jpg', 'Blessington Street Launderette', 'hero__photo')}
  </div>`;
}
function heroCompact(T) {
  return `
  <div class="hero hero--compact">
    <span class="eyebrow">22 Blessington Street, St Kilda</span>
    <h1>${T.headline}</h1>
    <p class="hero-tagline">Save time &amp; money with Melbourne's biggest self service coinless laundry</p>
    <p class="lede">Open 24/7 for Your Convenience &nbsp;·&nbsp; Service Hours: 7:30am – 7:00pm, 7 days a week</p>
  </div>`;
}
function bannerBlock() {
  return `
  <div class="banner">
    <div>
      <span class="pill" style="background:rgba(255,255,255,.16); color:#fff; border-color:rgba(255,255,255,.3);">${ic('truck')} Pickup &amp; Delivery</span>
      <h3 style="margin-top:12px;">Free pick-up and drop off with every laundry order over $60.</h3>
      <p>Too busy to come in? We'll collect your laundry, clean it, and deliver it back fresh and ready to use. Services starting from $60.</p>
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
  const cols = T.columns || 3;
  const hero = T.hero === 'hidden' ? '' : (T.hero === 'standard' ? heroStandard(T) : heroCompact(T));

  const rem = SERVICES.length % cols;
  const mainServices = rem ? SERVICES.slice(0, -rem) : SERVICES;
  const lastServices = rem ? SERVICES.slice(-rem) : [];

  const itemWidth = `calc((100% - ${cols - 1} * 18px) / ${cols})`;
  const lastRow = lastServices.length ? `
    <div class="svc-last-row" style="--item-w:${itemWidth}">
      ${lastServices.map(svcCard).join('')}
    </div>` : '';

  return `
  ${hero}
  <div class="sec-head">
    <div><h2>Services</h2></div>
  </div>
  <div class="svc-grid">
    ${mainServices.map(svcCard).join('')}
    ${lastRow}
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
    <div><h1 style="margin-top:8px;">${s.name}</h1></div>
  </div>
  <div class="detail-grid">
    <div class="detail-desc">
      ${photo(s.img, s.name, 'detail-hero')}
      <p>${s.desc}</p>
      <div class="${s.chipsGrid ? 'chips chips--grid' : 'chips'}">${s.chips.map(c => `<span class="chip${s.chipsGrid ? ' chip--grid' : ''}">${ic('check')} ${c}</span>`).join('')}</div>
      <p style="margin-top:22px; font-size:15px; color:var(--muted); line-height:1.55;">${s.extra}</p>
    </div>
    <aside class="pricebox">
      <h4>Pricing guide</h4>
      <div class="from"><b>${s.from}</b></div>
      ${s.rows.map(r => `<div class="prow"><span>${r[0]}</span><b>${r[1]}</b></div>`).join('')}
      <a class="btn btn--primary btn--block" data-go="contact">Contact Us</a>
      <a class="btn btn--ghost btn--block" style="margin-top:9px;" href="${BIZ.phoneHref}">${ic('phone')} ${BIZ.phone}</a>
      <div class="note">${ic('truck')} Free pick-up and drop off with every laundry order over $60.</div>
    </aside>
  </div>
  <div class="more">
    <div class="sec-head" style="margin:0 0 14px;"><h2 style="font-size:22px;">Services</h2></div>
    <div class="carousel-wrap">
      <button class="carousel-btn carousel-btn--prev" onclick="blCarousel('svc-carousel-${id}',-1)">${ic('back')}</button>
      <div class="carousel" id="svc-carousel-${id}">
        ${SERVICES.filter(s => s.id !== id).map(s => `
        <div class="carousel-item" data-link="${s.id}">
          <img src="${s.img}" alt="${s.name}">
          <div class="carousel-item__body">
            <div class="carousel-item__name">${s.name}</div>
            <div class="carousel-item__price">${s.from}</div>
          </div>
        </div>`).join('')}
      </div>
      <button class="carousel-btn carousel-btn--next" onclick="blCarousel('svc-carousel-${id}',1)">${ic('arrow')}</button>
    </div>
  </div>
  ${footer()}`;
}

/* ---------------- COMMERCIAL ---------------- */
function renderCommercial() {
  const whatWeClean = ['Towels and gym linen','Medical and patient gowns','Bed sheets and pillowcases','Staff uniforms','Treatment room linen','Massage and therapy towels','Cleaning cloths','Robes and spa linen'];
  const whoAndIndustries = [
    { name:'Medical Clinics & Doctor Surgeries', desc:'Scrubs, towels, uniforms cleaned to strict hygiene standards.' },
    { name:'Rehab Centres & Physiotherapy Clinics', desc:'Scrubs, towels, uniforms cleaned to strict hygiene standards.' },
    { name:'Dental Clinics & Medical Specialists', desc:'Scrubs, towels, uniforms cleaned to strict hygiene standards.' },
    { name:'Aged Care & Specialist Facilities', desc:'Scrubs, towels, uniforms cleaned to strict hygiene standards.' },
    { name:'Wellness Clinics & Day Spas', desc:'We clean towels, robes, sheets, and pillow covers to premium standards.' },
    { name:'Massage Therapists & Day Spas', desc:'We clean towels, robes, sheets, and pillow covers to premium standards.' },
    { name:'Fitness Centres & Gyms', desc:'Towel and uniform laundry with fast turnaround.' },
    { name:'Restaurants & Cafés', desc:'Tablecloths, napkins, aprons, chef jackets cleaned to high standard.' },
    { name:'Hair & Beauty Salons', desc:'Salon towels, gowns, capes professionally laundered and pressed.' },
    { name:'Hotels, Motels & Short-Stay Accommodation', desc:'High-volume laundry for sheets, pillowcases, towels, staff uniforms.' },
    { name:'Cleaning Companies', desc:'Uniforms, rags, mop heads, towels cleaned efficiently.' },
    { name:'Childcare Centres & Schools', desc:'Bedding, uniforms, activity mats sanitised for child safety.' },
    { name:'Event & Function Coordinators', desc:'Tablecloths, chair covers, event linens cleaned and returned flawlessly.' },
  ];
  const steps = [
    ['Schedule a Pickup', 'Organise regular collection times.'],
    ['Professional Cleaning & Sanitisation', 'Expertly washed, sanitised, dried, folded.'],
    ['Next-Day Delivery', 'Clean, fresh linen returned promptly.'],
  ];

  return `
  <div class="head-block">
    <span class="eyebrow">${ic('stack')} Commercial Laundry</span>
    <h1>Commercial Laundry Services Serving Melbourne</h1>
  </div>

  <div class="sec-head"><div><h2>How Our Commercial Laundry Service Works</h2></div></div>
  <div class="steps" style="margin-bottom:40px;">
    ${steps.map((st, i) => `<div class="step"><div class="num">${i + 1}</div><h3>${st[0]}</h3><p>${st[1]}</p></div>`).join('')}
  </div>

  <div class="sec-head"><div><h2>Who We Service</h2></div></div>
  <div class="grid-3" style="margin-bottom:40px;">
    ${whoAndIndustries.map(ind => `<div class="card" style="padding:18px;"><h3 style="font-size:14px; margin-bottom:6px;">${ind.name}</h3><p style="font-size:13px; color:var(--ink-soft); line-height:1.5;">${ind.desc}</p></div>`).join('')}
  </div>

  <div class="info-card" style="margin-bottom:40px;">
    <h3>What We Clean</h3>
    <div class="grid-2" style="gap:4px 24px;">
      ${whatWeClean.map(s => `<div class="info-row"><div class="ii">${ic('check')}</div><div><span>${s}</span></div></div>`).join('')}
    </div>
  </div>

  <div class="banner">
    <div>
      <h3>Book a Commercial Laundry Pickup Today</h3>
      <p>Take the pressure off your team and ensure clean, professional-quality linen ready to use. Contact Blessington Street Launderette to set up service.</p>
      <p style="margin-top:10px; color:rgba(255,255,255,.85);">We offer self-service laundry, commercial laundry, dry cleaning, pick-up &amp; delivery, and more across these areas. Looking for reliable, high-quality laundry services in your neighborhood? We've got you covered!</p>
    </div>
    <a class="btn btn--ghost" href="${BIZ.phoneHref}">${ic('phone')} ${BIZ.phone}</a>
  </div>

  ${footer()}`;
}

/* ---------------- WHY CHOOSE US ---------------- */
function renderWhyChooseUs() {
  const whyUs = [
    { head:'Save Staff Time & Improve Productivity', body:'Your team should focus on patients and clients — not managing laundry.' },
    { head:'Professional Sanitisation & Hygiene', body:'Commercial-grade systems designed for deep cleaning and proper linen care.' },
    { head:'Fast, Next-Day Turnaround', body:'Never run out of clean linen again with efficient processing.' },
    { head:'Reliable Pick-Up & Delivery', body:'Same-day or scheduled collection and return on schedules fitting your business operations.' },
    { head:'More Cost-Effective Than In-House Laundry', body:'Outsourcing laundry is often financially smarter than managing onsite.' },
    { head:'Tailored Laundry Solutions', body:'Custom plans for business size, industry, schedule.' },
    { head:'Quality-First Approach', body:'Latest commercial laundry tech and premium detergents.' },
    { head:'Eco-Friendly Practices', body:'Biodegradable detergent options and sustainable methods.' },
  ];
  const testimonials = [
    { name:'Rachel Berger', role:'Comedian', quote:'I\'ve been a regular for over 20 years...the service is impeccable.' },
    { name:'Kerry Mccormack', role:'Regular Customer', quote:'Rita, Milad and the girls are always pleasant...end result always immaculately cleaned.' },
    { name:'Will Cochrane', role:'Regular Customer', quote:'I have been using the Blessington Street Laundry for over 10 years...always assured the job will be done properly.' },
    { name:'The Hon Neil Brown QC', role:'Regular Customer', quote:'I have used it for several years...very happy with the quality of work.' },
  ];

  return `
  <div class="head-block">
    <span class="eyebrow">${ic('star')} Why Choose Us</span>
    <h1>Why Businesses Choose Blessington Street Launderette</h1>
  </div>

  <div class="grid-4" style="margin-bottom:40px;">
    ${whyUs.map(w => `<div class="card" style="padding:22px;">
      <h3 style="font-size:15px; margin-bottom:8px;">${w.head}</h3>
      <p style="font-size:13.5px; color:var(--ink-soft); line-height:1.55;">${w.body}</p>
    </div>`).join('')}
  </div>

  <div class="sec-head"><div><h2>What Our Customers Say</h2></div></div>
  <div class="grid-2" style="margin-bottom:40px;">
    ${testimonials.map(t => `<div class="card" style="padding:22px;">
      <p style="font-size:14.5px; color:var(--ink-soft); line-height:1.6; font-style:italic; margin-bottom:16px;">"${t.quote}"</p>
      <div style="font-size:13px; font-weight:700; color:var(--ink);">${t.name}</div>
      <div style="font-size:12px; color:var(--muted);">${t.role}</div>
    </div>`).join('')}
  </div>

  ${footer()}`;
}

/* ---------------- PRICING ---------------- */
function renderPricing() {
  return `
  <div class="head-block">
    <h1>Pricing</h1>
  </div>
  ${(() => {
    const pricingServices = SERVICES.filter(s => s.id !== 'pickup-delivery');
    const cols = 3;
    const rem = pricingServices.length % cols;
    const main = rem ? pricingServices.slice(0, -rem) : pricingServices;
    const last = rem ? pricingServices.slice(-rem) : [];
    const cardHtml = s => `
    <div class="price-card">
      <div class="price-card__head">
        <div class="price-card__ico">${ic(s.icon)}</div>
        <div>
          <div class="price-card__name">${s.name}</div>
          <div class="price-card__from">${s.from}</div>
        </div>
        <span class="price-card__toggle"><span class="price-card__toggle-label">See prices</span>${ic('arrow').replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" style="transform:rotate(90deg)"')}</span>
      </div>
      <div class="price-card__rows">
        ${s.rows.map(r => `<div class="price-card__row"><span>${r[0]}</span><b>${r[1]}</b></div>`).join('')}
      </div>
    </div>`;
    const itemWidth = `calc((100% - ${cols - 1} * 18px) / ${cols})`;
    const lastRow = last.length ? `
    <div class="price-last-row" style="--item-w:${itemWidth}">
      ${last.map(cardHtml).join('')}
    </div>` : '';
    return `<div class="price-grid">${main.map(cardHtml).join('')}${lastRow}</div>`;
  })()}
  <div class="banner" style="margin-top:10px;">
    <div><p>We offer self-service laundry, commercial laundry, dry cleaning, pick-up &amp; delivery, and more. We accept Mastercard and Visa. Account facility is available upon request for commercial (pick-up &amp; delivery) service.</p></div>
    <a class="btn btn--ghost" href="${BIZ.phoneHref}">${ic('phone')} ${BIZ.phone}</a>
  </div>
  ${footer()}`;
}

/* ---------------- COLLECTION & DELIVERY ---------------- */
function renderDelivery() {
  const areas = ['St Kilda','Middle Park','Albert Park','Port Melbourne','Southbank','Kew & Kew East','Abbotsford','Collingwood','Fitzroy','Richmond','Brighton','Caulfield & Caulfield South/East','South Yarra','Elwood','East Melbourne','Melbourne CBD (3004)'];
  return `
  <div class="head-block"><span class="eyebrow">${ic('truck')} Collection &amp; Delivery</span>
    <h1>Collection &amp; Delivery</h1>
  </div>
  <div class="split2">
    <div class="info-card">
      <h3>Pricing</h3>
      <div class="info-row"><div class="ii">${ic('truck')}</div><div><b>Services starting from</b><span>$60</span></div></div>
      <div class="info-row"><div class="ii">${ic('check')}</div><div><b>Free pick-up and drop off</b><span>With every laundry order over $60.</span></div></div>
    </div>
    <div class="info-card">
      <h3>Service Areas</h3>
      <p style="font-size:13px; color:var(--muted); margin-bottom:14px;">Blessington Street Launderette proudly serves customers across Melbourne, including:</p>
      <div class="chips" style="flex-wrap:wrap;">
        ${areas.map(a => `<span class="chip">${a}</span>`).join('')}
      </div>
    </div>
  </div>
  ${footer()}`;
}

/* ---------------- HOURS ---------------- */
function renderHours() {
  const today = new Date().getDay();
  const order = [1,2,3,4,5,6,0];
  return `
  <div class="head-block"><span class="eyebrow">${ic('clock')} Opening hours</span>
    <h1>Opening Hours</h1>
  </div>
  <div class="info-card hours-table">
    <div class="hours-row" style="font-weight:700; color:var(--accent-press); border-bottom:1px solid var(--line-soft); margin-bottom:4px; padding-bottom:10px;">
      <span>Self-service</span><span style="font-family:var(--font-head);">24 hours, 7 days — keypad ${BIZ.keypad}</span>
    </div>
    ${order.map(d => {
      const h = HOURS[d === 0 ? 6 : d - 1];
      return `<div class="hours-row ${d === today ? 'today' : ''}"><span class="day">${h[0]}</span><span class="time">${h[1]}</span></div>`;
    }).join('')}
  </div>
  ${footer()}`;
}

/* ---------------- CONTACT INFO ---------------- */
function renderContactInfo() {
  return `
  <div class="info-card" style="max-width:480px;">
    <div class="info-row"><div class="ii">${ic('phone')}</div><div><b>Phone</b><span><a href="${BIZ.phoneHref}" style="color:var(--accent);">${BIZ.phone}</a></span></div></div>
    <div class="info-row"><div class="ii">${ic('phone')}</div><div><b>Phone</b><span><a href="${BIZ.phone2Href}" style="color:var(--accent);">${BIZ.phone2}</a></span></div></div>
    <div class="info-row"><div class="ii">${ic('pin')}</div><div><b>Address</b><span>${BIZ.addr}</span></div></div>
  </div>
  ${footer()}`;
}

/* ---------------- FIND US ---------------- */
function renderFind() {
  return `
  <div class="head-block">
    <h1>22 Blessington Street, St Kilda</h1>
  </div>
  <div style="border:1px solid var(--line); border-radius:var(--r); overflow:hidden; box-shadow:var(--shadow-sm);">
    <iframe
      src="https://maps.google.com/maps?q=-37.870384,144.98023&z=17&output=embed"
      width="100%" height="460" style="border:0; display:block;"
      allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      title="Blessington Street Launderette on Google Maps">
    </iframe>
  </div>
  <div style="margin-top:16px;">
    <a class="btn btn--primary" href="https://www.google.com/maps/dir/?api=1&destination=Blessington+Street+Launderette,22+Blessington+St,St+Kilda+VIC+3182" target="_blank" rel="noopener">${ic('pin')} Get directions</a>
  </div>
  ${footer()}`;
}

/* ---------------- CONTACT ---------------- */
function renderContact() {
  return `
  <div class="head-block">
    <h1>Get In Touch</h1>
  </div>
  <div style="max-width:560px; margin:0 auto;">
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
      <div class="field"><label>Message</label><textarea></textarea></div>
      <button class="btn btn--primary" id="sendBtn" type="submit">Send message ${ic('arrow')}</button>
      <div class="form-ok" id="formOk">${ic('check')} Thanks — we'll be in touch soon.</div>
    </form>
  </div>
  ${footer()}`;
}

/* ---------------- FOOTER ---------------- */
function footer() {
  return `<div class="foot">
    <span>© 2026 Blessington Street Launderette · ${BIZ.addr} · ${BIZ.phone}</span>
    <span class="foot-links">
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
  commercial: renderCommercial, whychooseus: renderWhyChooseUs,
  hours: renderHours, find: renderFind, contact: renderContact,
  contactinfo: renderContactInfo,
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
  const anchor = e.target.closest('a[href]');
  if (anchor && (anchor.href.startsWith('http') || anchor.href.startsWith('tel') || anchor.href.startsWith('mailto'))) return;
  const link = e.target.closest('[data-link]');
  const go = e.target.closest('[data-go]');
  if (link) { location.hash = '#/service/' + link.dataset.link; return; }
  if (go) {
    const t = go.dataset.go;
    location.hash = t === 'home' ? '#/home' : '#/' + t;
    return;
  }
  const priceCard = e.target.closest('.price-card');
  if (priceCard && window.innerWidth < 860) { priceCard.classList.toggle('price-card--open'); return; }
  if (e.target.closest('#sendBtn')) {
    const ok = document.getElementById('formOk');
    if (ok) { ok.classList.add('show'); document.getElementById('sendBtn').style.display = 'none'; }
  }
  if (e.target.closest('.menu-btn')) { document.body.classList.toggle('nav-open'); return; }
  if (e.target.closest('.nav__close')) { document.body.classList.remove('nav-open'); return; }
  if (e.target.closest('.nav-overlay')) { document.body.classList.remove('nav-open'); return; }
  if (e.target.closest('.brand') && !document.body.classList.contains('nav-open')) location.hash = '#/home';
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

/* ---------------- carousel helper (infinite wrap, data-index tracked) ---------------- */
window.blCarousel = function(id, dir) {
  const el = document.getElementById(id);
  if (!el) return;
  const items = el.querySelectorAll('.carousel-item');
  if (!items.length) return;
  const total = items.length;
  const currentIdx = parseInt(el.dataset.idx || '0');
  const nextIdx = (currentIdx + dir + total) % total;
  el.dataset.idx = nextIdx;
  const itemW = items[0].offsetWidth + 16;
  el.scrollTo({ left: nextIdx * itemW, behavior: 'smooth' });
};

/* ---------------- boot ---------------- */
document.documentElement.style.setProperty('--cols', TWEAKS.columns);
setLook(TWEAKS.look);
if (!location.hash) location.hash = '#/home';
route();
