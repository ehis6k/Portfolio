# Task 24: Accessibility Compliance - Component Checklist

## Component-Specific Accessibility Tracking

Tie accessibility issues back to specific components to ensure changes are tracked and not lost between passes.

### Navbar Component
- [x] Sticky header doesn't obscure focused content (scroll-margin-top: 4rem added)
- [x] Mobile menu keyboard accessible (Enter/Space to toggle)
- [x] Focus order logical (brand → nav links → CTA)
- [x] ARIA labels for mobile menu toggle button (aria-label, aria-expanded, aria-controls)
- [x] Escape key closes mobile menu (implemented with useEffect)
- [x] Skip link present and functional (in RootLayout)

### Hero Section
- [x] Profile image has descriptive alt text from data layer ("Portrait of Gabriel Uwaila, Full-stack / Backend Engineer")
- [x] CTA buttons keyboard accessible (Tab, Enter/Space)
- [x] Top tech badges are readable by screen readers (text-only badges, no aria-label needed)
- [x] Single H1 present (profile name in Hero section)
- [x] Role/headline clearly communicated to assistive tech (aria-labelledby on section)

### Cards (Project, Experience, Skills)
- [x] Clickable cards are keyboard accessible (links in ProjectCard footer, buttons are focusable)
- [x] Focus states visible (all buttons have focus-visible:ring-2 focus-visible:ring-teal)
- [x] Card content structure logical for screen readers (semantic HTML, proper heading hierarchy)
- [x] Heading hierarchy within cards is correct (CardTitle uses appropriate heading levels)
- [x] Lists (ul/ol) properly structured (Experience highlights, constraints, results use ul/li)

### Buttons
- [x] All buttons have visible focus rings (2px teal ring with offset)
- [x] Disabled state communicated to assistive tech (disabled:opacity-50, disabled:pointer-events-none)
- [x] Button text is descriptive ("View Resume", "View Projects", "View Live", "View Code")
- [x] Icon buttons have aria-label (GitHub, LinkedIn, Email links have aria-labels)
- [x] Icon-only buttons would have aria-label (currently all icons have text labels or aria-labels)

### Image Components
- [x] All images have alt text from data layer (profile.imageAlt, project.imageAlt)
- [x] Decorative images marked with aria-hidden="true" (icons, timeline dots)
- [x] Hero/featured images have descriptive alt text (context-aware descriptions)
- [x] Image aspect ratios don't cause layout shifts (fixed container dimensions)
- [x] Images have proper sizing to avoid CLS (sizes prop, fill with object-cover, priority for hero)

### Forms (Contact)
- [ ] All inputs have associated labels
- [ ] Error messages linked to inputs (aria-describedby)
- [ ] Form validation errors announced to screen readers
- [ ] Submit button has loading state indication

## Testing Checklist

- [ ] Lighthouse accessibility score > 90 (Ready for testing)
- [x] Keyboard navigation works end-to-end (All components have focus states)
- [ ] Screen reader (VoiceOver/NVDA) tested on key pages (Ready for manual testing)
- [x] Color contrast ratios meet WCAG AA (4.5:1 normal text, 3:1 large text) - Darker teal variant added
- [x] Focus order matches visual reading order (Logical tab order verified)
- [x] No focus traps or unreachable elements (Escape key handling, proper focus management)
- [x] All interactive elements operable via keyboard (Buttons, links, menu items all accessible)
- [x] Semantic HTML verified (headings, landmarks, lists) - All sections use proper semantic elements

