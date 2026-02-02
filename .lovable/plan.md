
## HTML/CSS Fix Plan: Scroll-Triggered Navigation and Mobile Overflow

This plan fixes three issues in `public/index-static.html` using only HTML and CSS (no JavaScript).

---

### Issue 1: Sticky Nav Always Visible at Top

**Problem**: The sticky nav appears immediately at the top of the page instead of only when scrolling.

**Root Cause**: The sticky nav is placed after the hero in HTML, but it still appears at the top because `position: sticky` makes it stick when its container is scrolled, not when a specific scroll threshold is reached.

**Solution**: Create an invisible "trigger" element that the nav will stick to. The nav will be inside a wrapper that starts below the hero, so it only becomes visible when the user scrolls past the hero.

**Implementation**:
```css
.sticky-nav-wrapper {
  position: relative;
  /* This wrapper starts after the hero */
}

.sticky-nav {
  position: sticky;
  top: 0;
  z-index: 60;
  /* Nav will only be visible when this part of the page is scrolled into view */
}
```

The key is to ensure the sticky nav wrapper begins AFTER the hero content, so the nav only "sticks" when that wrapper reaches the top of the viewport.

---

### Issue 2: Floating CTA Always Visible on Mobile

**Problem**: The floating CTA at the bottom is always visible from page load, even before scrolling.

**Root Cause**: Using `position: fixed` makes it permanently attached to the viewport.

**Solution**: Convert to `position: sticky` with `bottom: 0` inside a wrapper that spans the main content area. This way:
- The CTA stays at the bottom of the viewport while scrolling through the content
- It naturally disappears when the user is at the very top (hero section)
- It disappears when reaching the footer

**Alternative Solution** (simpler): Since pure CSS cannot truly detect scroll position for fixed elements, make the floating CTA part of the page flow but always visible on mobile. Add a clear visual indicator that content is below.

**Recommended Approach**: Move the floating CTA inside a sticky container that only covers the main content sections (not the hero). The CTA will only be visible when scrolling through that container.

---

### Issue 3: Student Transformation - Content Overflow on Mobile

**Problem**: Images and text are going out of the card box on mobile, and scrolling doesn't work properly.

**Root Cause**: The media carousel and story content lack proper overflow containment.

**Fixes**:

| Element | Fix |
|---------|-----|
| `.story-card` | Add `overflow: hidden` and `width: 100%` |
| `.story-content` | Add `overflow: hidden`, `max-width: 100%`, `word-wrap: break-word` |
| `.media-carousel` | Add `width: 100%`, ensure `overflow-x: auto` works with proper touch handling |
| `.story-text` | Add `overflow-wrap: break-word` to prevent long words from overflowing |

```css
/* Mobile-specific overflow fixes */
@media (max-width: 767px) {
  .story-card {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }
  
  .story-content {
    padding: 1rem;
    overflow: hidden;
    max-width: 100%;
    box-sizing: border-box;
  }
  
  .media-carousel {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    padding-bottom: 0.5rem;
  }
  
  .media-item {
    flex-shrink: 0;
    width: 5.5rem;  /* Smaller for mobile */
    height: 4rem;
    scroll-snap-align: start;
  }
  
  .story-text {
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
}
```

---

### Implementation Summary

**File to modify**: `public/index-static.html`

**Changes**:

1. **Restructure HTML** - Wrap main content (everything after hero) in a `<div class="main-content-wrapper">` and place both the sticky nav and floating CTA strategically within this wrapper

2. **Update Sticky Nav CSS**:
   - Keep `position: sticky; top: 0`
   - The nav naturally appears only when its container scrolls into view

3. **Update Floating CTA CSS**:
   - Change from `position: fixed` to `position: sticky; bottom: 0`
   - Place it inside the main content wrapper so it only shows while scrolling through content
   - The CTA disappears when hero is in view (at top) or when footer is reached

4. **Fix Testimonials Section CSS**:
   - Add explicit width constraints
   - Ensure overflow hidden on containers
   - Add word-wrap for text
   - Reduce media item sizes on mobile
   - Ensure touch scrolling works with visible scrollbar

---

### Expected Behavior After Fix

| Element | Behavior |
|---------|----------|
| Hero Section | Visible at top, no nav or CTA overlays |
| Scroll down past hero | Sticky nav appears at top, floating CTA appears at bottom |
| Continue scrolling | Both nav and CTA remain visible |
| Reach footer | Floating CTA scrolls away with content |
| Mobile testimonials | Content stays within card, carousel scrollable with touch |

---

### Technical Notes

**CSS-only scroll detection limitations**:
- Pure CSS cannot detect arbitrary scroll positions (like "after 600px")
- The `position: sticky` trick works by making elements stick when their container reaches the viewport edge
- This approach requires restructuring HTML to place elements in the right containers

**Alternative considered**: Using CSS `:target` pseudo-selector, but this only works with URL fragment changes (clicking anchor links), not scroll position.
