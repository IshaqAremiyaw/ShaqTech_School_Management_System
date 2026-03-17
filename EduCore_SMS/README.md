# ShaqTech International School — International School Management
## Final Year Project Documentation

---

## Project Overview
ShaqTech International School is a fully functional, browser-based International School Management built using HTML, CSS, and JavaScript only. All data is stored in the browser's LocalStorage — no backend or database required.

---

## Project Structure
```
school-management/
├── index.html          → Login Page
├── dashboard.html      → Main Dashboard
├── students.html       → Student Management (CRUD)
├── teachers.html       → Teacher Management (CRUD)
├── classes.html        → Class Management
├── subjects.html       → Subject Management
├── attendance.html     → Attendance Marking & Records
├── results.html        → Grades & Results
├── fees.html           → Fee Payment Management
├── announcements.html  → Notice Board
├── reports.html        → Analytics & Reports
├── style.css           → All Styles (Dark Mode, Responsive)
└── script.js           → All Shared Logic & Data Layer
```

---

## How to Run
1. Download or unzip the project folder
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge)
3. Login with:
   - **Username:** admin
   - **Password:** admin123
4. Sample data is auto-loaded on first login

> No internet connection is required after the fonts/icons load once.

---

## Features
- ✅ Login with validation & session management
- ✅ Dashboard with animated stats counters
- ✅ Student CRUD (Add, Edit, Delete, Search, Filter)
- ✅ Teacher CRUD with subject assignment
- ✅ Class management with teacher assignment
- ✅ Subject management with color coding & class assignment
- ✅ Attendance marking (Present/Absent) per class per date
- ✅ Results entry with auto grade calculation (A/B/C/D/F)
- ✅ Fee payment tracking with receipt numbers
- ✅ Announcements / Notice Board with categories
- ✅ Reports with grade distribution, top performers, fee collection
- ✅ CSV Export for Students, Teachers, Fees, Attendance
- ✅ Print functionality for results and reports
- ✅ Dark Mode toggle (persists across sessions)
- ✅ Confirmation dialog before deletions
- ✅ Toast notifications for all actions
- ✅ Responsive mobile layout
- ✅ Search and filter functionality on all modules

---

## Sample Login Credentials
| Role  | Username | Password |
|-------|----------|----------|
| Admin | admin    | admin123 |

---

## Grade Scale
| Average | Grade | Remark    |
|---------|-------|-----------|
| 80–100  | A     | Excellent |
| 70–79   | B     | Very Good |
| 60–69   | C     | Good      |
| 50–59   | D     | Pass      |
| 0–49    | F     | Fail      |

---

## Technologies Used
- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Flexbox, Grid, Animations
- **Vanilla JavaScript** — ES6 Modules pattern (IIFE)
- **LocalStorage** — Client-side data persistence
- **Font Awesome 6** — Icons
- **Google Fonts** — Syne (headings) + DM Sans (body)

---

---

## Deployment Requirements

### ✅ Minimum System Requirements

| Component | Requirement |
|-----------|-------------|
| Browser | Chrome 90+, Firefox 88+, Edge 90+, Safari 14+ |
| Screen Resolution | 1024 × 768 minimum (1366 × 768 recommended) |
| RAM | 512 MB minimum (1 GB recommended) |
| Storage | 5 MB browser LocalStorage quota (used for all data) |
| Internet | Only needed to load Google Fonts & Font Awesome icons on first use |
| JavaScript | Must be enabled in the browser |

---

### 🌐 Option 1 — Run Locally (No Server Needed)
This is the simplest method. No installation or server required.

**Steps:**
1. Extract `ShaqTech_SMS.zip` to any folder on your computer
2. Open the folder and double-click `index.html`
3. It opens directly in your default browser
4. Login with **admin / admin123**

> ⚠️ Some browsers (e.g. Chrome) may block LocalStorage when opening HTML files directly via `file://`. If data does not save, use Option 2 below.

---

### 🖥️ Option 2 — Run with a Local Server (Recommended for Development)

#### Using VS Code Live Server (Easiest)
1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension by Ritwick Dey
3. Open the project folder in VS Code
4. Right-click `index.html` → **"Open with Live Server"**
5. Browser opens at `http://127.0.0.1:5500/index.html`

#### Using Python (Built-in)
```bash
# Python 3
cd path/to/ShaqTech_SMS
python -m http.server 8080

# Then open in browser:
# http://localhost:8080
```

#### Using Node.js + npx serve
```bash
cd path/to/ShaqTech_SMS
npx serve .

# Then open in browser:
# http://localhost:3000
```

#### Using XAMPP / WAMP / LAMP
1. Copy the project folder into the `htdocs` (XAMPP) or `www` (WAMP) directory
2. Start Apache from the XAMPP/WAMP control panel
3. Open browser and go to `http://localhost/ShaqTech_SMS/`

---

### ☁️ Option 3 — Deploy to a Live Web Server (Online Hosting)

Since ShaqTech International School is a pure static website (HTML + CSS + JS only), it can be hosted on any static hosting platform for free.

#### GitHub Pages (Free)
1. Create a free account at [github.com](https://github.com)
2. Create a new repository (e.g. `educore-sms`)
3. Upload all 14 project files to the repository
4. Go to **Settings → Pages → Source → main branch → / (root)**
5. Your site will be live at:
   `https://yourusername.github.io/educore-sms/`

#### Netlify (Free — Drag & Drop)
1. Go to [netlify.com](https://netlify.com) and sign up free
2. From the dashboard, drag and drop the entire project folder onto the deploy area
3. Netlify instantly gives you a live URL like:
   `https://educore-sms.netlify.app`
4. Optional: connect a custom domain

#### Vercel (Free)
1. Go to [vercel.com](https://vercel.com) and sign up free
2. Click **"Add New Project"** → Import from GitHub or drag & drop
3. No build settings needed — deploy as static
4. Live at: `https://educore-sms.vercel.app`

#### Traditional Web Hosting (cPanel / FTP)
1. Purchase any shared hosting plan (e.g. Hostinger, Namecheap, Bluehost)
2. Log in to cPanel → **File Manager** → `public_html`
3. Upload all 14 files into `public_html` or a subdirectory
4. Access via your domain: `https://yourdomain.com`

> ⚠️ **Important Note on Data:** Since this project uses browser LocalStorage, data is stored per-browser per-device. If deployed online, each user/device will have their own separate data. For shared/multi-user data, a backend (Node.js, PHP, etc.) with a database would need to be added.

---

### 🔒 Security Notes for Deployment

| Issue | Note |
|-------|------|
| Login credentials | Currently hardcoded (`admin/admin123`). Change in `index.html` before going live. |
| LocalStorage | Not encrypted. Do not store sensitive real data without a backend. |
| HTTPS | Always use HTTPS when hosting publicly. GitHub Pages, Netlify, and Vercel provide this automatically. |
| Multi-user | Not supported natively. All users on the same device share the same data. |

---

### 📋 Pre-Deployment Checklist

- [ ] All 14 files are in the same folder (no subfolders)
- [ ] `style.css` and `script.js` are in the same directory as the HTML files
- [ ] JavaScript is enabled in the target browser
- [ ] Internet access available (for fonts/icons CDN) OR fonts cached from first load
- [ ] Login credentials updated if deploying for real use
- [ ] Tested in at least one modern browser before submission/demo

---

*ShaqTech International School — Built for academic demonstration purposes*
