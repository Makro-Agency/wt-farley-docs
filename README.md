# WT Farley Store Owner's Guide

A client-facing documentation hub that teaches the WT Farley team how to run their
Shopify store: editing normal and variant products, working with configurator products
and metaobjects, editing pages and menus, managing collections, and handling orders.

Built for a store administrator who is new to Shopify. Every task is written as numbered,
click-by-click steps.

## Files

| File | Section |
|------|---------|
| `index.html` | Welcome, how to use the guide, store overview, golden rules |
| `getting-started.html` | Shopify admin basics: login, admin tour, saving, publishing |
| `products.html` | Editing simple and variant products |
| `configurator.html` | Configurator products and the metaobject option engine |
| `pages-navigation.html` | Pages, policies, menus, and collections |
| `store-features.html` | SKU lookup, gas switcher, orders, customers, shipping, discounts |
| `glossary.html` | Plain-English glossary, configurator field names, and FAQ |
| `theme-editor.html` | The theme editor (customizer): sections, blocks, settings, theme settings |
| `page-home.html` | Homepage, section by section, every setting |
| `page-product.html` | Product page, block by block, plus configurator differences |
| `page-collection.html` | Collection and all-collections pages |
| `page-cart-search.html` | Cart, cart drawer, and search pages |
| `page-content.html` | Standard, About, Contact, FAQ, Dealer, and landing page layouts |
| `page-header-footer.html` | Header, announcement bar, side menu, and footer |
| `feature-custom.html` | Part-number lookup, gas switcher, image layering, specifications, reviews, B2B |
| `feature-widgets.html` | Marketing and utility sections you can add to any page |
| `section-catalog.html` | Reference table of all theme sections and where each is used |
| `assets/style.css` | Shared design system |
| `assets/nav.js` | Mobile menu toggle |

The page-by-page and section content is generated from the live theme (`wt-farley/main`),
so setting names and section lists match the store exactly at build time.

The site is fully static and self-contained. No build step and no external dependencies.

## Viewing locally

Open `index.html` in any web browser, or serve the folder:

```bash
cd wtfarley-docs
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Publishing to GitHub Pages

1. Create a new repository (for example `wtfarley-docs`) and push this folder's contents
   to the `main` branch.
2. In the repository, go to Settings, then Pages.
3. Under Build and deployment, set Source to "Deploy from a branch", choose `main` and the
   `/ (root)` folder, and Save.
4. After a minute the guide is live at
   `https://<your-org>.github.io/wtfarley-docs/`.

## Notes

This is the client-facing hub. It intentionally does not include internal build notes,
QA findings, or migration data. Those live separately in `../docs/`.
