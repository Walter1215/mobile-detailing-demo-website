# QA Case Study: Mobile Detailing Demo Website

## Project Overview

This case study documents the manual quality assurance testing performed on a responsive website for a fictional mobile detailing business.

The purpose of testing was to verify that the website:

- Functions correctly on desktop and mobile screens
- Provides working navigation and contact links
- Uses a consistent responsive layout
- Supports keyboard navigation
- Displays accurate page content and metadata

## Application Under Test

- **Application:** Cuadra's Mobile Detailing
- **Type:** Responsive single-page website
- **Live URL:** https://mobile-detailing-demo-website.pages.dev/
- **Technologies:** HTML5, CSS3, JavaScript
- **Hosting:** Cloudflare Pages

## Testing Scope

### Included

- Page content and heading structure
- Navigation links
- Smooth scrolling
- Service cards and pricing
- Click-to-call contact link
- Keyboard navigation and focus indicators
- Desktop and mobile layouts
- Page title and meta description
- Production deployment

### Not Included

- Payment processing
- Online appointment scheduling
- User accounts
- Database testing
- Automated testing

## Testing Approach

Testing was performed manually using functional, responsive, usability, accessibility, and regression testing techniques.

The process included:

1. Reviewing the website requirements and expected behavior
2. Creating test cases for the main website features
3. Testing the local development version
4. Recording and correcting discovered defects
5. Publishing the website to Cloudflare Pages
6. Retesting the production version
7. Performing regression testing after fixes

## Test Environment

| Category | Environment |
| --- | --- |
| Operating system | macOS |
| Development editor | Visual Studio Code |
| Local server | VS Code Live Server |
| Production hosting | Cloudflare Pages |
| Desktop browser | Google Chrome |
| Mobile testing | Chrome responsive device mode |
| Version control | Git and GitHub |

## Defect Summary

| ID | Defect | Severity | Status |
| --- | --- | --- | --- |
| BUG-01 | Missing CSS closing braces prevented service-card styling from applying correctly | High | Fixed |
| BUG-02 | A personal phone number was displayed in the fictional demo | High | Fixed |
| BUG-03 | The Full Detail service card was missing | Medium | Fixed |
| BUG-04 | Service cards displayed inconsistent widths in production | Medium | Fixed and retested |

## Test Results

The final production build passed the completed functional and visual checks.

Confirmed results included:

- The website loaded successfully over HTTPS
- The page title and meta description were correct
- Navigation links moved to the expected sections
- The click-to-call link used the correct telephone number
- Keyboard focus indicators were visible
- All three services and prices were displayed
- Service cards had consistent widths and heights
- No horizontal overflow appeared on the desktop layout
- The footer displayed the current year
- No website-generated console errors were observed

All documented defects were fixed and successfully retested.

## Skills Demonstrated

- Manual functional testing
- Responsive layout testing
- Accessibility and keyboard testing
- Defect identification and documentation
- Severity classification
- Retesting and regression testing
- HTML and CSS debugging
- Git and GitHub version control
- Production deployment verification

## Conclusion

Testing confirmed that the final website meets its current functional and responsive requirements. All identified defects were corrected and retested successfully.

Future improvements could include automated browser testing, an appointment form, form validation, and testing across additional browsers and physical mobile devices.