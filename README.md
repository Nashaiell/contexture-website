# ConTexture Website

Marketing website for ConTexture — contextureapp.app

## Structure
- `index.html` — Homepage
- `features.html` — Features detail
- `about.html` — About the app and developer
- `privacy.html` — Privacy policy (required for App Store)
- `support.html` — Support / contact
- `blog/index.html` — Blog index
- `blog/posts/` — Individual blog posts
- `css/style.css` — All styles
- `js/main.js` — Navigation and form handling
- `icon.png` — App icon (add this file — copy from your Xcode assets)
- `CNAME` — Custom domain for GitHub Pages

## Deployment (GitHub Pages)
1. Create a repo named `contexture-website` (or any name)
2. Push all files
3. Go to repo Settings → Pages → Source: main branch, / (root)
4. Add custom domain: contextureapp.app
5. At Namecheap, add DNS records:
   - A records pointing to GitHub Pages IPs: 185.199.108.153 / .109.153 / .110.153 / .111.153
   - CNAME: www → yourusername.github.io

## Icon
Copy `AppIcon-1024.png` from your Xcode asset catalog and rename to `icon.png` in the website root.
