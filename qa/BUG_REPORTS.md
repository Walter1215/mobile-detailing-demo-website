# Bug Reports

This document records defects identified while developing and testing the Cuadra's Mobile Detailing demo website.

## Severity Definitions

- **High:** Significantly affects functionality, privacy, or the user experience
- **Medium:** Causes incorrect or inconsistent behavior but does not block the website
- **Low:** Minor cosmetic or usability issue

## BUG-01: Service-card styles were not applied

- **Severity:** High
- **Priority:** High
- **Environment:** Local development
- **Status:** Fixed and retested

### Description

The service cards appeared as unstyled text instead of separate white cards.

### Steps to Reproduce

1. Open the website locally.
2. Scroll to the Our Services section.
3. Observe the service content.

### Expected Result

Each service should appear inside a white card with padding, rounded corners, spacing, and a shadow.

### Actual Result

The service information appeared directly on the page without the intended card styling.

### Root Cause

Closing braces were missing from the CSS rules, causing the browser to interpret the stylesheet incorrectly.

### Resolution

The missing closing braces were added and the CSS structure was corrected.

### Retest Result

Passed. All service-card styles displayed correctly.

## BUG-02: Personal telephone number appeared in the demo

- **Severity:** High
- **Priority:** High
- **Environment:** Local development
- **Status:** Fixed and retested

### Description

The fictional website displayed a personal telephone number in the contact section.

### Steps to Reproduce

1. Open the website.
2. Scroll to the Book Your Detail section.
3. Review the displayed telephone number and its link.

### Expected Result

A fictional demo should use a reserved example telephone number and matching `tel:` link.

### Actual Result

A personal telephone number was visible in the website content.

### Risk

Publishing the website could expose personal contact information and cause unintended calls or messages.

### Resolution

The personal number was replaced with the fictional number `(305) 555-0123`, and the link was updated to `tel:+13055550123`.

### Retest Result

Passed. The fictional number appears correctly in both the visible content and the telephone link.

## BUG-03: Full Detail service card was missing

- **Severity:** Medium
- **Priority:** Medium
- **Environment:** Local development
- **Status:** Fixed and retested

### Description

The services section displayed only Exterior Wash and Interior Detail. The Full Detail option was not available.

### Steps to Reproduce

1. Open the website.
2. Navigate to the Our Services section.
3. Count and review the displayed service cards.

### Expected Result

The section should display three service options: Exterior Wash, Interior Detail, and Full Detail.

### Actual Result

Only two service cards were displayed.

### Resolution

A third `<article>` element was added for the Full Detail service, including its description and starting price.

### Retest Result

Passed. All three service cards appear with the correct information.

## BUG-04: Service cards had inconsistent widths in production

- **Severity:** Medium
- **Priority:** Medium
- **Environment:** Cloudflare Pages production deployment
- **Status:** Fixed and retested

### Description

The Exterior Wash card appeared narrower than the Interior Detail and Full Detail cards.

### Steps to Reproduce

1. Open the production website.
2. Navigate to the Our Services section.
3. Compare the widths of the three service cards.

### Expected Result

All three cards should have equal widths and heights.

### Actual Result

The Exterior Wash card was approximately `344px` wide, while the other cards were approximately `353px` wide.

### Root Cause

A more specific `#services article` CSS rule applied `max-width: 500px` and content-box sizing to the cards.

### Resolution

A more specific rule was added for service-grid cards:

```css
#services .service-grid article {
    width: 100%;
    max-width: none;
    min-width: 0;
    margin: 0;
    box-sizing: border-box;
}