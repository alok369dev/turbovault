# TurboVault

Static e-commerce storefront for supercars, muscle cars and racing cars. *Drive · Dream · Own.*

No build step. Plain HTML, CSS and JavaScript.

## Files
- `index.html` – page layout
- `style.css` – styling (light and dark mode)
- `app.js` – filter, search and photo viewer
- `products.js` – **your product list** (name, category, price, image)
- `images/` – product photos and hero banner

## Add or edit products
Open `products.js`, copy one block, change the values, and put the photo in `images/`. Set `price` to a number (e.g. `1499`) or `null` for "Price on request".

## Run locally
Open `index.html` in a browser, or run `npx serve .`

## Deploy
1. Push this folder to a GitHub repository.
2. In Vercel: Add New → Project → import the repo.
3. Framework Preset: **Other**. Leave build command and output directory empty. Click Deploy.

Every `git push` to `main` redeploys automatically.
