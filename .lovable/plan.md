

# Color Update Plan for public/index-static.html

## Summary

The dark purple theme and accent colors are **already implemented** in `public/index-static.html`. However, there are **18 remaining instances** of old brown text colors that need to be updated to match the new theme.

---

## Current Status

### Already Implemented
- Dark purple background: `hsl(255, 30%, 7%)`
- Bright purple primary: `hsl(270, 90%, 65%)`
- Purple-to-pink gradients for CTAs
- Accent color variables: green, orange, blue, teal, gold
- Fixed header navigation at top
- Colored icons in Benefits section (blue, teal, orange, green, gold)
- Colored icons in Hero highlights
- Green checkmarks in curriculum and pricing

### Remaining Issues Found
**18 instances** of old brown text color `rgba(35, 29, 24, ...)` in the testimonial section avatar names that need updating.

---

## Changes Required

### File: `public/index-static.html`

**Location**: Lines 3209-3302 (Testimonial avatar names)

| Line | Current (Old Brown) | New (Light Purple/White) |
|------|---------------------|--------------------------|
| 3209 | `color: rgba(35, 29, 24, 0.8)` | `color: var(--foreground)` |
| 3210 | `color: rgba(35, 29, 24, 0.6)` | `color: var(--muted-foreground)` |
| 3255 | `color: rgba(35, 29, 24, 0.8)` | `color: var(--foreground)` |
| 3256 | `color: rgba(35, 29, 24, 0.6)` | `color: var(--muted-foreground)` |
| 3301 | `color: rgba(35, 29, 24, 0.8)` | `color: var(--foreground)` |
| 3302 | `color: rgba(35, 29, 24, 0.6)` | `color: var(--muted-foreground)` |

**Summary**: Replace all `rgba(35, 29, 24, 0.8)` with `var(--foreground)` (white) and all `rgba(35, 29, 24, 0.6)` with `var(--muted-foreground)` (light purple-gray).

---

## How to View the Updated File

After implementation, navigate to:

**URL**: `/index-static.html`

**Full Preview URL**: `https://id-preview--d7b233f8-1a7d-4d0f-9a98-54a8285a6656.lovable.app/index-static.html`

The root URL `/` shows the React app, not the static HTML file.

---

## Visual Summary

The file already has these colors working:

| Element | Color | Hex |
|---------|-------|-----|
| Background | Dark purple-black | `#0D0B1E` |
| Primary accent | Bright purple | `#A855F7` |
| Success icons | Emerald green | `#22C55E` |
| Urgency elements | Vibrant orange | `#F97316` |
| Info icons | Sky blue | `#3B82F6` |
| Growth icons | Teal | `#14B8A6` |
| Achievement icons | Gold | `#FACC15` |
| CTA buttons | Purple-to-pink gradient | `#A855F7` to `#EC4899` |

