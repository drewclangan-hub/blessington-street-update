# Blessington Street Launderette — Website Editing Guide

## How to Edit Your Website

Your website has a built-in content editor. You can update any text, price, phone number, opening hours or service description without touching any code.

---

## Step 1 — Open the Editor

Go to: **https://blessington-launderette.vercel.app/admin**

Click **"Login with GitHub"** and sign in with your GitHub account.

> You must be added as a collaborator on the GitHub repository to log in. The previous owner can add you at: github.com/drewclangan-hub/blessington-street-update → Settings → Collaborators.

---

## Step 2 — Choose What to Edit

Once logged in you will see three sections in the left sidebar:

| Section | What it controls |
|---|---|
| 📋 **Business Details** | Phone numbers, address, keypad code, payment info |
| 🕐 **Opening Hours** | Hours for each day of the week |
| 🧺 **Services** | Every service card, price table, and bullet points |

---

## Step 3 — Make Your Changes

Click any section, make your changes in the form fields, then click **"Save"** in the top right.

Your site will automatically update within about 30 seconds.

---

## What You Can Edit — Full Breakdown

### 📋 Business Details
> Affects: Contact Us page · Sidebar footer · All phone buttons · Banners

| Field | Example | Where it appears |
|---|---|---|
| Main Phone Number | (03) 9534 2976 | Every "Call us" button, Contact Us page |
| Main Phone Link | tel:0395342976 | Makes the button dialable on mobile |
| Secondary Phone | 0417 579 143 | Contact Us page, footer |
| Address (short) | 22 Blessington Street, St Kilda | Sidebar footer, page footer |
| Address (full) | 22 Blessington Street, St Kilda, VIC 3182 | Contact Us page |
| Door Keypad Code | 223182# | Self-Service page, Opening Hours page |
| Payment Info | We accept Mastercard and Visa... | Footer and pricing sections |

---

### 🕐 Opening Hours
> Affects: The "Opening Hours" page

Each row is one day of the week. Click a row to edit it.

| Field | Example |
|---|---|
| Day | Monday |
| Hours | 7:30am – 7:00pm |

To change hours for a day, simply click that day and update the hours field.

---

### 🧺 Services
> Affects: All Services grid · Each service detail page · Pricing page

Each service has these editable fields:

| Field | What it does |
|---|---|
| **Service Name** | The heading shown on the card and detail page (e.g. "Dry Cleaning") |
| **Short Description** | One sentence shown on the service card in the grid |
| **Starting Price** | Shown on the card (e.g. "from $6.50") |
| **Bullet Points** | The ticked pill items on the service detail page |
| **Pricing Table Rows** | Each row in the pricing box (label + value) |

#### Editing a Bullet Point (tick pill)
Click the service → scroll to "Bullet Points" → click a bullet to edit it, or click "Add" to add a new one.

#### Editing a Price Row
Click the service → scroll to "Pricing Table Rows" → click a row to edit the label (left column) and value (right column).

**Example:**
- Label: `Single Shirt` → Value: `$6`
- Label: `5 Shirts Wash & Iron` → Value: `$25 ($5 each)`

---

## What You CANNOT Edit Here

The following require a developer to change:

- **Page layout and design** (colours, fonts, spacing)
- **Navigation menu items** (adding/removing pages)
- **Service photos** (images are stored in the /images folder on GitHub)
- **The map** on the Find Us page

---

## Changing a Photo

Photos are stored in the `images/` folder of the GitHub repository.

To replace a photo:
1. Go to github.com/drewclangan-hub/blessington-street-update
2. Click the `images/` folder
3. Find the photo you want to replace (e.g. `img-dry-cleaning.jpg`)
4. Click it → click the three-dot menu → "Delete"
5. Upload a new photo with the **exact same filename**

> Keep filenames exactly the same (e.g. `img-dry-cleaning.jpg`) and the site will automatically use the new image.

---

## Tips

- **Changes take ~30 seconds** to go live after saving
- **Don't change the Service ID field** — it's used internally and changing it will break links
- If something looks wrong after saving, you can undo by going to the GitHub repository and reverting the last commit
- The editor works best on a desktop/laptop computer

---

## Need Help?

Contact the developer who built this site for any changes outside the above.
