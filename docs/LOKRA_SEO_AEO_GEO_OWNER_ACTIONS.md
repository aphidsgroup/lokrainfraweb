# Lokra Infra — Owner Actions for SEO / AEO / GEO

This codebase now handles geographic accuracy, entity markup, non-PII click
analytics, and honest mailto-based form submission truthfully in source.
The items below **cannot be completed truthfully from source code alone** —
they require access to accounts, infrastructure, or real-world verification
that only the business owner or an authorized operator holds. No credentials
or placeholder secrets are included here; each item lists what to configure
and how to confirm it worked.

## 1. Server-side form delivery
The contact and JV forms currently open a prefilled `mailto:` draft in the
visitor's own email app — the inquiry is only sent once the visitor sends
that email themselves. To receive inquiries reliably without depending on
every visitor having a configured email client:
- Stand up a server-side endpoint (API route, form service, or CRM webhook)
  that accepts form submissions and delivers them to a monitored inbox/CRM.
- Send a real test submission end-to-end and confirm it arrives.
- Only after that endpoint is live and verified should the UI copy change
  to claim the inquiry was received by Lokra Infra.

## 2. GA4 conversion marking and verification
- In the GA4 property, mark `contact_form_submit_attempt`,
  `jv_inquiry_submit_attempt`, `contact_phone_click`, `contact_email_click`,
  and `contact_whatsapp_click` as key events (conversions) if desired.
- Use GA4 DebugView or Realtime reports on a live deploy to confirm each
  event fires with the expected `page_path` / `link_location` parameters.

## 3. Google Business Profile
- Claim and verify a Google Business Profile for Lokra Infra.
- Ensure the listed Name, Address, and Phone (NAP) exactly match the
  main-office address and phone number used in this site's structured data:
  343, First Floor, Kundrathur Main Rd, Subam Nagar, KK Nagar, Mangadu,
  Chennai, Tamil Nadu 600122 / +91 93446 43324.
- Do not add a GBP URL, review rating, or opening hours to the site's
  LocalBusiness schema until they are live and accurate on the profile.

## 4. Consented project evidence
- Obtain explicit client/owner consent before publishing project photos,
  addresses, or identifying project details as proof of work.
- Only real, consented project evidence should be added to the Projects page.

## 5. Consented review workflow
- Set up a process to request reviews from real clients (e.g. via Google
  Business Profile) with their consent.
- Do not add review counts, star ratings, or testimonials to the site or
  schema until they come from this verified, consented workflow.

## 6. Search Console / GA4 data review
- Verify the domain in Google Search Console and confirm indexing status
  for key pages, including the new `/builders-in-omalur-chennai` redirect.
- Periodically export and review GSC + GA4 data to catch crawl errors,
  redirect issues, or drops in visibility.

## 7. Local citations
- Build citations (directory listings, industry associations, local
  business directories) using the exact verified NAP above.
- Avoid spammy or low-quality directory submissions — they can hurt local
  trust signals rather than help them.

## No guarantees
No source-code change can guarantee a #1 search ranking or guarantee
citation/inclusion by an LLM-based answer engine (AEO/GEO). This document
only tracks the prerequisites that make truthful, verifiable progress
possible — actual ranking and citation outcomes depend on factors outside
this repository (competition, ongoing content, backlinks, and platform
algorithms).
