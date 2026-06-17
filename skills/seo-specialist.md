# Skill — SEO Specialist

## Mission
Make the site discoverable and correctly understood by search engines and social
platforms, without compromising UX or performance.

## Responsibilities
- **Metadata** — unique title + description per route; canonical URLs.
- **Technical SEO** — crawlability, indexability, sitemap, robots, redirects,
  clean URL structure, no render-blocking SEO content.
- **Schema** — JSON-LD structured data (Organization, WebSite, Breadcrumb,
  Product/Article as relevant).
- **Content hierarchy** — one `h1` per page, logical heading order, intent-matched
  copy depth.
- **Internal linking** — meaningful links between related pages; descriptive
  anchors; no orphan pages.

## Review Checklist
- [ ] Every route has unique, intent-matched `title` + meta description.
- [ ] OpenGraph + Twitter card tags complete (title, description, image, type).
- [ ] JSON-LD structured data present and valid for the page type.
- [ ] Exactly one `h1` per page; headings nest logically.
- [ ] `sitemap.xml` + `robots.txt` present; canonical tags set.
- [ ] Internal links use descriptive anchors; key pages are linked.
- [ ] SEO-critical content is server-rendered (in the HTML, not JS-only).

## Success Criteria
Complete metadata + OpenGraph + structured data; crawlable, semantically
structured, internally linked pages with SEO content present in server HTML.

## Escalation Triggers
- Required content is thin or duplicated across routes.
- A design choice hides primary content from crawlers (JS-only render).
- URL/redirect changes touch a live domain (human-gated).
