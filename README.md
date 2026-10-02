# Pathly

## What it does

Pathly is a private, browser-based career companion. Enter your professional information once to build a profile, create a CV, preview a portfolio, and receive practical local career guidance.

## Who it is for

Students and early-career professionals who want a calm, simple way to present their experience and decide on useful next career steps.

## Needs

A current web browser. Pathly has no login, backend, packages, external fonts, or internet requirement.

## How to run it

1. Open `index.html` by double-clicking it.
2. Choose **Build My Profile** and update any details.
3. Your data stays in this browser using local storage and is restored after refresh.
4. Switch language with **العربية / English** and use the theme button for light or dark mode.

## Try it with the sample data

Pathly opens with a fully made-up example profile. Select **Load example** at any time to restore it, or choose **Start blank profile** to enter your own details. The sample is defined in `sample-data/data.js` and loads through a normal script tag, so it works when the page is opened directly from a folder.

## CV, portfolio, and guidance

- The CV Builder provides three distinct layouts from the same local profile: **Classic** is a formal chronological single-column CV, **Modern** uses a contemporary profile rail for contact details and skills, and **Editorial** leads with projects beneath a strong typographic masthead. Each is designed to use A4 efficiently; longer profiles flow onto additional pages. Choose a named document accent color in the builder, then select **Print / Save as PDF** and choose **Save as PDF** in your browser print dialog. For the clearest color output, enable background graphics in the print dialog when it is available.
- The Portfolio Builder provides four distinct layouts: **Minimal** is spacious and typography-led, **Modern** is a project-card grid with a supporting rail, **Creative** uses an expressive featured-work composition, and **Professional** is a structured business-focused dossier. It has its own named accent-color choice. **Download portfolio HTML** creates a self-contained snapshot of the selected layout, accent, current language direction, and theme that you can open or host yourself. Browser-stored data is never automatically published.
- Career Advisor provides transparent, rule-based guidance from the profile and career goal you enter. It supports frontend, UX/UI, data, project coordination, software engineering, cybersecurity, data science, AI / machine learning, business analysis, project management, marketing, healthcare, graphic design, finance / accounting, and human resources. It recognizes common Arabic and English skill aliases, does not call an AI service, and does not invent experience, qualifications, or skills.
- Certification links appear as **View Credential** only when you enter a valid HTTP or HTTPS address. They are included in CVs, portfolio previews, and downloaded portfolio snapshots; all other profile data remains in your browser.

## Privacy

Pathly does not create accounts, collect analytics, or send profile information anywhere. Profile photos, if added, are resized and saved only in the current browser. Use **Clear local data** to remove Pathly data from this browser.

## Responsive and accessible design

The interface is designed for phone, tablet, laptop, desktop, and large screens. It supports full Arabic RTL layout, keyboard navigation, visible focus states, readable light/dark color themes, and print-friendly CV output. Its original **Waypoint Ascend** identity uses one local inline-SVG route mark: an origin point, three rising waypoints, and an up-right direction arrow. The shared full Pathly lockup is reused in headers, CVs, portfolios, and downloaded portfolios, while the landing uses the same route geometry as a low-opacity, mark-only decorative watermark in its own responsive space. This adds no external asset or network dependency. The logo stays visually LTR and untransformed in Arabic while surrounding content follows RTL; document palette choices affect document accents, not the Pathly logo. Template and palette choices stay only in the current browser alongside the saved profile.

Built with Claude Code during the KKU Claude Code hackathon

Started on 2026-10-01
