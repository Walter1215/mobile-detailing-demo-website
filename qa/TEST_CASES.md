# Manual Test Cases

## Test Execution Information

- **Application:** Cuadra's Mobile Detailing
- **Environment:** Production
- **URL:** https://mobile-detailing-demo-website.pages.dev/
- **Test type:** Manual functional and responsive testing

## Status Definitions

- **Pass:** Actual result matches the expected result
- **Fail:** Actual result does not match the expected result
- **Not Run:** Test has not been executed

## Functional Test Cases

| ID | Test Scenario | Steps | Expected Result | Status |
| --- | --- | --- | --- | --- |
| TC-01 | Load the production website | Open the live URL in Chrome | Website loads successfully over HTTPS | Pass |
| TC-02 | Verify Home navigation | Select the Home link | Page moves to the home section | Pass |
| TC-03 | Verify Services navigation | Select the Services link | Page moves to the services section | Pass |
| TC-04 | Verify Contact navigation | Select the Contact link | Page moves to the contact section | Pass |
| TC-05 | Verify View Services button | Select the View Services button | Page moves to the services section | Pass |
| TC-06 | Verify click-to-call link | Inspect or select the telephone button | Link uses the correct `tel:` telephone number | Pass |

## Content and Metadata Test Cases

| ID | Test Scenario | Steps | Expected Result | Status |
| --- | --- | --- | --- | --- |
| TC-07 | Verify service information | Review the services section | Exterior Wash, Interior Detail, and Full Detail are displayed | Pass |
| TC-08 | Verify service pricing | Review each service card | Each service displays its correct starting price | Pass |
| TC-09 | Verify page title | Open the page and inspect the browser tab | The descriptive page title is displayed | Pass |
| TC-10 | Verify meta description | Inspect the page metadata | The page contains an accurate description | Pass |
| TC-11 | Verify footer year | Scroll to the footer | The current year is displayed | Pass |

## Responsive and Accessibility Test Cases

| ID | Test Scenario | Steps | Expected Result | Status |
| --- | --- | --- | --- | --- |
| TC-12 | Verify desktop layout | View the website at desktop width | Content is readable and properly aligned without horizontal overflow | Pass |
| TC-13 | Verify mobile layout | View the website using Chrome responsive device mode | Content adapts to the smaller screen without horizontal overflow | Pass |
| TC-14 | Verify service-card consistency | Compare all three service cards | Cards have consistent widths and heights | Pass |
| TC-15 | Verify keyboard navigation | Press Tab repeatedly from the top of the page | Interactive elements receive focus in a logical order | Pass |
| TC-16 | Verify visible focus indicators | Use Tab to focus each link and button | A visible outline identifies the focused element | Pass |
| TC-17 | Verify heading structure | Inspect the page headings | The page uses one main heading followed by logical section headings | Pass |
| TC-18 | Check browser console | Open Chrome DevTools and review the Console | No website-generated errors appear | Pass |

## Execution Summary

| Metric | Result |
| --- | --- |
| Total test cases | 18 |
| Passed | 18 |
| Failed | 0 |
| Not run | 0 |
| Pass rate | 100% |

## Final Result

The production website passed all documented test cases after defect correction and regression testing.