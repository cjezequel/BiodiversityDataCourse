# My Site

Static site (plain HTML/CSS/JS, no dependencies) with a **Data** page organized into downloadable categories.

## Structure

```
.
├── index.html          # home page
├── data.html           # "Data" page: card grid + password gate + upload form
├── contact.html        # contact page
├── style.css           # all styles
├── script.js           # password gate + dropdown menu + card accordion
└── files/
    ├── datasets/
    ├── scripts/
    └── documents/
```

Each subfolder in `files/` contains an example file to replace with your real ones.

## Data page: password and upload form

The `data.html` page regroup all information:

- **Password screen**: all content is hidden behind a password form (`script.js`, variable `CORRECT_PASSWORD`, default value `data2026`). ⚠️ **This is not real security**: the password is visible in the page's source code (anyone can use "View Page Source"). It's just a cosmetic filter / to avoid accidental indexing, not protection against a serious access attempt. Never use it for sensitive or confidential data.
  - To change the password: open `script.js`, find the line `var CORRECT_PASSWORD = "data2026";`, and replace the value.
  - The password is only asked once per browsing session (`sessionStorage`).

- **File upload form** (at the bottom of `data.html`): uses the free [Formspree](https://formspree.io) service to receive files by email, with no backend to host.
  1. Create a free account at [formspree.io](https://formspree.io).
  2. Create a new form, copy the URL of the form (looks like `https://formspree.io/f/xxxxxxxx`).
  3. In `data.html`, replace `https://formspree.io/f/YOUR_FORMSPREE_ID` with that URL.
  4. Formspree's free plan has limits on file size and monthly submissions; check their current terms if you expect a lot of submissions.

## Customize

1. **Add a downloadable file**: drop the file into the right subfolder of `files/`, then in `data.html` add a line inside the matching `<ul class="file-list">`:
   ```html
   <li>
     <span>
       <span class="file-name">my-file.csv</span>
       <span class="file-meta">CSV · short description</span>
     </span>
     <a class="download-btn" href="files/datasets/my-file.csv" download>Download</a>
   </li>
   ```
2. **Add a category**: duplicate a `<section class="data-card" id="...">...</section>` block in `data.html`, change the `id`, the title, and add the matching link in the "Data" dropdown menu (present in `index.html`, `data.html`, `contact.html`).
3. **Text and name**: replace "First Last" and the placeholder text in `index.html` / `contact.html`.
4. **Colors / typography**: everything is set via the variables at the top of `style.css` (`:root { ... }`). Each card's accent color is set individually via its `style="--card-color:#..."` attribute.

## Publish with GitHub Pages

1. Create a new GitHub repository (e.g. `my-site`), or use an existing one.
2. Copy all these files to the root of the repository (or into a `docs/` folder if you prefer).
3. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "First deployment of the site"
   git branch -M main
   git remote add origin https://https://github.com/cjezequel/BiodiversityDataCourse.git
   git push -u origin main
   ```
4. On GitHub: **Settings → Pages** → under "Build and deployment", choose the `main` branch (and the `/ (root)` or `/docs` folder depending on where you placed the files) → **Save**.
5. After a minute or two, the site will be live at:
   `https://cjezequel.github.io/BiodiversityDataCourse/`

No build tool is needed (no R, no Node): these are static HTML/CSS/JS files, served as-is by GitHub Pages.

## Troubleshooting

If the password screen never goes away even with the right password:
- Make sure `data.html`, `style.css`, `script.js`, and the `files/` folder are all in the **same folder** (don't download `data.html` alone).
- Open the browser's developer console (right-click → Inspect → Console tab) to check for errors.
- The default password is `data2026` (case-sensitive, no spaces).
