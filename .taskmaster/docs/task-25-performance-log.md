# Task 25: Performance Optimization - Decision Log

## Performance Budget Targets

- **Initial JS Bundle**: < 200KB (gzipped)
- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FID/INP (Interaction to Next Paint)**: < 100ms
- **Total Blocking Time**: < 200ms

## Image Optimizations Log

| Image | Original Size | Optimized Size | Format | Priority | Notes |
|-------|--------------|----------------|--------|----------|-------|
| Hero profile image (`profile_pic.jpeg`) | 83 KB | TBD | JPEG | `priority=true` ✅ | Above fold, already optimized |
| Featured project hero (`dev_work.jpeg`) | 238 KB | TBD | JPEG | `priority=false` ✅ | Below fold, needs compression |
| Project thumbnails (various) | 160-710 KB | TBD | JPEG | `priority=false` ✅ | Lazy loaded, several need compression |
| **CRITICAL: Large unused images** | | | | | |
| `inspo_portfolio.png` | **2.1 MB** | **REMOVE/COMPRESS** | PNG | N/A | Not in use, should be removed or compressed |
| `staging_devices.jpeg` | **1.2 MB** | **COMPRESS** | JPEG | N/A | Available variant, compress if used |
| `Logo_Gabriel.png` | **1.1 MB** | **COMPRESS** | PNG | N/A | Should be SVG or compressed PNG |
| `fuji_work.jpeg` | **922 KB** | **COMPRESS** | JPEG | N/A | Profile variant, compress |
| `at_fuji.jpeg` | **859 KB** | **COMPRESS** | JPEG | N/A | Profile variant, compress |
| `mirrorpic.jpeg` | **726 KB** | **COMPRESS** | JPEG | N/A | Profile variant, compress |
| `profile_pic2.jpeg` | **710 KB** | **COMPRESS** | JPEG | N/A | Profile variant, compress |

**Format Decisions:**
- Use WebP with PNG fallback for compatibility
- Consider AVIF for modern browsers (Next.js auto-handles)
- Compress images offline before adding to public/assets/img

## Bundle Size Decisions

### Dynamic Imports Added
- [x] None required - Bundle sizes already within budget (167 KB home page, <200KB target)
- Note: ScrollToTop component could be dynamically imported (only appears after scroll) but impact would be minimal given current acceptable bundle sizes

### Libraries Removed/Replaced
- [ ] Removed: `[Library]` - Reason: [Why removed]
- [ ] Replaced: `[OldLib]` → `[NewLib]` - Reason: [Why replaced]

### Code Splitting Strategy
- [x] Route-based splitting: Next.js automatically handles route-based code splitting (all routes static)
- [x] Component-based splitting: Not required - bundle sizes acceptable
- [x] Third-party scripts: No blocking third-party scripts found (only EmailJS loaded dynamically when needed)

## Rendering Strategy

### Static Pages (SSG)
- [x] `/` (Home) - Confirmed static ✅ (167 KB First Load JS)
- [x] `/services` - Confirmed static ✅ (165 KB First Load JS)
- [x] `/_not-found` - Static (103 KB First Load JS)
- [x] `/api/cv` - Dynamic (function route, 102 KB)

### Dynamic Pages
- [ ] Route: [Route path] - Reason: [Why dynamic]
- [ ] ISR Configuration: [Settings if applicable]

### Client Components Converted to Server
- [x] No conversions needed - Appropriate separation already maintained:
  - Server components: Root layout, home page, services page (compose client components)
  - Client components: Hero, About, Services, Contact sections (need interactivity/animations)
  - UI components: Properly marked with "use client" where needed

## Third-Party Scripts

| Script | Loading Strategy | Impact | Notes |
|--------|------------------|--------|-------|
| Theme script (inline) | Blocking (head) | Low | Necessary for FOUC prevention, small size |
| JSON-LD Person schema | Inline (head) | None | Non-blocking structured data |
| JSON-LD CreativeWork schema | Inline (head) | None | Non-blocking structured data |
| EmailJS | Dynamic import | Low | Only loaded when contact form is used |
| Analytics | N/A | None | Not implemented (no tracking scripts) |

## Trade-offs Made

### Features Removed/Simplified
- [ ] Feature: [Name] - Reason: [Why removed/simplified]

### Animation/Lazy-loading Decisions
- [ ] Reduced animation complexity - Reason: Performance
- [ ] Lazy load images below fold - Implementation: [Details]

### UX vs Performance Compromises
- [ ] Decision: [Description] - Trade-off: [UX impact vs Performance gain]

## Performance Metrics (Before/After)

### Baseline (Before Optimization) - Date: 2026-01-10
- **Lighthouse Performance**: TBD (requires manual audit)
- **LCP**: TBD (requires manual audit)
- **CLS**: TBD (requires manual audit)
- **FID/INP**: TBD (requires manual audit)
- **TBT**: TBD (requires manual audit)
- **Bundle Size Analysis**:
  - Home page (`/`): **167 KB** First Load JS ✅ (within budget of <200KB)
  - Services page (`/services`): **165 KB** First Load JS ✅
  - Shared chunks: **102 KB**
  - Largest chunk: `chunks/4bd1b696-c023c6e3521b1417.js` (54.2 KB)
  - Second largest: `chunks/255-cb395327542b56ef.js` (45.9 KB)

**Build Output Summary:**
- All pages are statically generated (good for performance)
- No dynamic routes except `/api/cv` (expected)
- Bundle sizes are within acceptable range but could be optimized
- No obvious large dependencies identified in build output

**Critical Issues Found:**
1. **Large image files** (see Image Optimizations Log above)
2. **Need Lighthouse audit** to identify render-blocking resources and opportunities

### Target (After Optimization)
- Lighthouse Performance: > 90
- LCP: < 2.5s
- CLS: < 0.1
- FID/INP: < 100ms
- TBT: < 200ms
- Bundle Size: < 200KB

### Final Results
- Lighthouse Performance: [Score] (Date: [Date])
- LCP: [Time]
- CLS: [Score]
- FID/INP: [Time]
- TBT: [Time]
- Bundle Size: [Size]

## Notes

- Update this log as optimizations are made
- Reference this log when making future changes to respect performance budget
- Document any performance regressions and their causes

