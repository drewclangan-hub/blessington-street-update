# Blessington Street Launderette — Website

**Live site:** https://blessington-launderette.vercel.app

---

## 📦 What's Included in This Package

| Item | Details |
|---|---|
| Website code | This GitHub repository |
| Hosting | Vercel (free tier — no monthly cost) |
| Domain | blessington-launderette.vercel.app (custom domain can be added) |
| Content editor | Decap CMS at /admin |
| Deployment | Automatic — every save goes live in ~30 seconds |

---

## 🚀 Handover Checklist (Seller → Buyer)

### 1 — Transfer the GitHub Repository
1. Go to https://github.com/drewclangan-hub/blessington-street-update
2. Click **Settings → Danger Zone → Transfer**
3. Transfer to the buyer's GitHub account
4. Buyer accepts the transfer via email

### 2 — Transfer the Vercel Project
1. Go to https://vercel.com → open the `blessington-launderette` project
2. Click **Settings → Transfer Project** and transfer to the buyer's Vercel account
3. Or: buyer creates a free Vercel account, imports the GitHub repo, and deploys fresh (2 minutes)

### 3 — Activate the Contact Form ⚠️
The contact form shows a success message but does NOT send emails until this is done:
1. Create a free account at https://formspree.io
2. Click **New Form** → name it → copy the Form ID (e.g. `xabc1234`)
3. In `assets/app.js` find: `action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID"`
4. Replace `REPLACE_WITH_YOUR_FORM_ID` with your actual Form ID
5. Save and push — enquiries now arrive by email

### 4 — Activate the Content Editor (CMS)
1. **Create a GitHub OAuth App** at https://github.com/settings/developers → OAuth Apps → New
   - Homepage URL: `https://your-vercel-url.vercel.app`
   - Callback URL: `https://your-vercel-url.vercel.app/api/callback`
   - Copy the Client ID and Client Secret
2. **Add to Vercel environment variables** (Project → Settings → Environment Variables):
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
   - `SITE_URL` = your full site URL
3. Redeploy → go to `/admin` → Login with GitHub

---

## ✏️ How to Edit the Website

### Visual Editor (Recommended)

Go to **https://your-site-url.vercel.app/admin** and log in with GitHub.

---

#### 📋 Business Details
*Updates phone buttons, Contact Us page, sidebar, footer, banners*

| Field | Example |
|---|---|
| Main Phone Number (displayed) | (03) 9534 2976 |
| Main Phone Number (link) | tel:0395342976 — no spaces |
| Secondary Phone Number | 0417 579 143 |
| Secondary Phone Link | tel:+61417579143 |
| Address (short) | 22 Blessington Street, St Kilda |
| Address (full) | 22 Blessington Street, St Kilda, VIC 3182 |
| Door Keypad Code | 223182# |
| Payment Info | We accept Mastercard and Visa... |

---

#### 🕐 Opening Hours
*Updates the Opening Hours page*

Click any day to edit it:
- **Day:** Monday
- **Hours:** 7:30am – 7:00pm

---

#### 🧺 Services
*Updates service cards on homepage, each service detail page, and Pricing page*

Click any service to edit:

| Field | What it does |
|---|---|
| Service Name | Heading on card and detail page |
| Short Description | One-line text shown on the service card |
| Starting Price | e.g. from $6.50 — shown on card and pricing page |
| Bullet Points | The ticked pills on the service detail page |
| Pricing Table Rows | Label + value rows in the pricing box |

> ⚠️ Do NOT change the **Service ID** field — it will break links.

---

### Editing Directly on GitHub (Quick edits without logging into CMS)

1. Go to the GitHub repository
2. Open `_content/settings.json` (business info), `_content/hours.json` (hours), or `_content/services.json` (services)
3. Click the pencil ✏️ icon → edit → click **Commit changes**
4. Site updates automatically in ~30 seconds

---

## 🖼️ Changing a Photo

1. Go to the GitHub repository → click the `images/` folder
2. Upload a new photo with the **exact same filename** as the one you want to replace
3. The site uses the new image automatically

| Filename | Used on |
|---|---|
| img-home.jpg | Homepage hero image |
| img-machines.jpg | Self-Service Laundry |
| img-wash-dry-fold.jpg | Wash, Dry & Fold |
| img-dry-cleaning.jpg | Dry Cleaning |
| img-rug.jpg | Rug Cleaning |
| img-business-shirts.jpg | Business Shirts |
| img-ironing.jpg | Ironing & Pressing |
| img-stain.jpg | Stain Removal |
| img-alterations.jpg | Repairs & Alterations |
| img-doona.jpg | Doona Cleaning |
| img-truck.jpg | Pickup & Delivery |

---

## 📬 Contact Form

Once activated (see Step 3 above), enquiries go to your email via Formspree.

- Log in at https://formspree.io to view submissions and change the notification email
- Free tier: 50 submissions/month. Paid plans available for more volume.

---

## 🔒 Requires a Developer to Change

- Page layout, colours, fonts, spacing
- Adding or removing navigation pages
- The Google Map on Find Us page
- Adding new features

---

## 🛠️ Technical Notes

- **Stack:** Vanilla HTML / CSS / JS — no framework
- **Hosting:** Vercel (free tier)
- **CMS:** Decap CMS with GitHub backend
- **Content files:** `_content/*.json`
- **Build step:** `node scripts/build-content.js` runs on every Vercel deploy
- **Forms:** Formspree (free: 50/month)
- **Custom domain:** Add in Vercel → Project → Settings → Domains
