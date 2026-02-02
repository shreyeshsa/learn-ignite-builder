

# Create New Standalone Static HTML File

## Problem Identified

The changes exist in `public/index-static.html`, but you may be viewing the **React app** at the root URL `/` instead of the **static HTML file** at `/index-static.html`.

**Current URLs:**
- `/` → React app (served by Vite/React)
- `/index-static.html` → Static HTML file (the one with all CSS changes)

---

## Solution: Create a New Clearly Named Static File

To avoid confusion, I will create a **new standalone static HTML/CSS file** with a clear name:

**New File**: `public/aasuri-landing.html`

This file will contain:
1. Complete HTML structure (all sections from hero to footer)
2. All CSS embedded inline in `<style>` tags
3. Dark purple theme with all accent colors (green, orange, blue, teal, gold)
4. Fixed header navigation (always visible at top)
5. Mobile overflow fixes for testimonials
6. The logo and instructor images integrated

---

## File Structure

```text
public/
├── aasuri-landing.html   ← NEW complete standalone file
├── index-static.html     ← Existing (but user can't see it)
├── images/
│   ├── logo.png
│   └── shreyesh.png
└── ...
```

---

## What Will Be Included

### CSS Features:
- Dark purple background: `hsl(255, 30%, 7%)`
- Bright purple primary: `hsl(270, 90%, 65%)`
- Purple-to-pink gradients for CTAs
- Glassmorphism navigation with backdrop blur
- Accent colors: green, orange, blue, teal, gold
- Mobile-responsive design
- Fixed header at top

### HTML Sections:
1. Fixed Navigation Header
2. Hero Section (with video placeholder)
3. Highlights Row
4. Countdown Timer
5. Benefits Section (8 cards with colored icons)
6. Testimonials/Student Journeys
7. Instructor Section
8. Curriculum Section
9. Pricing Section
10. WhatsApp CTA
11. FAQ Section
12. Footer
13. Floating CTA (bottom bar)

### Images:
- Logo: `images/logo.png`
- Instructor: `images/shreyesh.png`

---

## How to View

After implementation, access the new file at:

**Preview URL**: `/aasuri-landing.html`

**Full URL example**: `https://id-preview--d7b233f8-1a7d-4d0f-9a98-54a8285a6656.lovable.app/aasuri-landing.html`

---

## Technical Notes

- The file is completely standalone (no JavaScript dependencies)
- All CSS is embedded in the `<head>` section
- Uses Google Fonts (Poppins) loaded via CDN
- Pure CSS interactivity for FAQ accordions and curriculum dropdowns
- No build step required - just upload and serve

