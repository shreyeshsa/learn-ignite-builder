

## HTML/CSS Fix Plan: Scroll-Triggered Navigation, Footer CTA & Mobile Overflow

This plan fixes three issues in `public/index-static.html` using only HTML and CSS (no JavaScript).

---

### Issue 1: Sticky Nav Always Visible at Top

**Problem**: The sticky navigation bar appears immediately when the page loads instead of appearing only when the user scrolls past the hero.

**Root Cause**: The nav is placed at the very beginning of `main-content-wrapper` with `position: sticky; top: 0;`. Sticky elements become "stuck" when their container reaches the viewport edge, but since the wrapper starts right after the hero, the nav appears immediately.

**Solution**: Add an invisible spacer element before the nav that pushes it below the viewport initially. When the user scrolls, the spacer scrolls away and the nav sticks to the top.

```css
.sticky-nav-spacer {
  height: 1px;
  margin-bottom: -1px;
}
```

However, a cleaner approach is to restructure the HTML so the sticky nav is placed AFTER the first content section (Benefits), not at the very start of the wrapper. This way:
- Hero displays without any nav
- User scrolls down, sees Benefits section
- Once past the first part of Benefits, the sticky nav appears and stays

**Alternative (simpler approach)**: Move the sticky nav to be a child of a section that starts below the fold. The nav will only become sticky when that section reaches the top of the viewport.

---

### Issue 2: Floating CTA Always Visible

**Problem**: The floating CTA at the bottom appears immediately instead of only when scrolling.

**Root Cause**: Same as above - `position: sticky; bottom: 0;` makes it visible from the start of the wrapper.

**Solution**: Move the floating CTA to the END of the `main-content-wrapper` (before the closing tag) so it only appears when the user has scrolled into the content area. Since it uses `position: sticky; bottom: 0;`, it will:
- Stay hidden while hero is in view (since the wrapper content hasn't scrolled into view yet)
- Appear and stick to the bottom while scrolling through content
- Scroll away naturally when reaching the footer (which is OUTSIDE the wrapper)

**Current Structure** (problematic):
```text
Hero
Main-Content-Wrapper
  ├── Sticky Nav      <-- Appears immediately
  ├── Benefits
  ├── Testimonials
  ├── ...other sections...
  ├── FAQ
  └── Floating CTA    <-- Appears immediately
Footer (outside wrapper)
```

**Fixed Structure**:
```text
Hero
Main-Content-Wrapper
  ├── Benefits (nav moves inside here)
  │     └── Sticky Nav (inside benefits wrapper)
  ├── Testimonials
  ├── ...other sections...
  ├── FAQ
  └── Floating CTA (stays at end, works correctly now)
Footer (outside wrapper)
```

---

### Issue 3: Student Journeys - Mobile Overflow

**Problem**: Student photos, stories, and artwork are going out of the box on mobile. The scroll option for the media carousel is not working.

**Root Cause**: Missing overflow containment and improper width constraints.

**Fixes Applied**:

| Element | Current Issue | Fix |
|---------|---------------|-----|
| `.story-card` | Content overflows | Add `overflow: hidden; width: 100%; max-width: 100vw;` |
| `.story-grid` | Grid allows overflow | Add `overflow: hidden; max-width: 100%;` |
| `.story-content` | Text overflows | Add `overflow: hidden; max-width: 100%; width: 100%;` |
| `.story-text` | Long text overflows | Add `word-break: break-word; overflow-wrap: anywhere;` |
| `.media-carousel` | Scroll not working | Ensure `overflow-x: auto; overflow-y: hidden; width: 100%; max-width: 100%;` with `-webkit-overflow-scrolling: touch;` |
| `.media-item` | Too wide on mobile | Reduce width to `5rem` on mobile |

**CSS Changes for Mobile**:
```css
@media (max-width: 767px) {
  .story-card {
    width: 100%;
    max-width: calc(100vw - 2rem);
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }
  
  .story-grid {
    display: block; /* Stack vertically on mobile */
    overflow: hidden;
  }
  
  .story-image {
    max-height: 200px;
  }
  
  .story-content {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    padding: 1rem;
    box-sizing: border-box;
  }
  
  .story-text {
    word-break: break-word;
    overflow-wrap: anywhere;
    hyphens: auto;
  }
  
  .media-carousel {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    display: flex;
    gap: 0.5rem;
    padding-bottom: 0.75rem;
    margin: 0;
  }
  
  .media-item {
    flex-shrink: 0;
    width: 5rem;
    height: 3.5rem;
    scroll-snap-align: start;
  }
}
```

---

### Implementation Summary

**File**: `public/index-static.html`

**Changes**:

1. **HTML Restructure** - Move sticky nav from the start of `main-content-wrapper` to inside the first section (Benefits). Add a wrapper div that enables the sticky behavior only after scrolling past the hero.

2. **CSS Updates for Sticky Nav**:
   - Create a `.sticky-nav-container` that wraps the nav
   - Adjust positioning so nav appears after initial scroll

3. **CSS Updates for Floating CTA**:
   - Already positioned at end of wrapper - verify positioning
   - Ensure `position: sticky; bottom: 0;` works as expected

4. **CSS Updates for Mobile Overflow**:
   - Add mobile-specific media queries (max-width: 767px)
   - Add overflow containment to all story card elements
   - Fix carousel scroll behavior
   - Reduce media item sizes

---

### Technical Notes

**Why pure CSS scroll detection is limited**:
- CSS cannot detect "scroll position > 600px" like JavaScript can
- `position: sticky` only works relative to the element's containing block
- The trick is to place sticky elements in containers that only reach the viewport edge after the desired scroll distance

**Mobile Overflow Root Causes**:
- Flexbox children can overflow their parent if not constrained
- `overflow-x: auto` requires explicit width constraints to work
- Touch scrolling needs `-webkit-overflow-scrolling: touch` on iOS

