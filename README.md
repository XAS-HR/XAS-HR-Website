# XAS-HR Website

**Xcelerate Advisory Solutions** — HR Consultancy

## Stack
- Pure HTML / CSS / JS — no build step, no dependencies
- Hosted on Netlify (free tier)
- Git repo on GitHub

## Project Structure
```
xas-hr-site/
├── index.html          # Main site
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Nav, form, scroll animations
├── images/
│   ├── logo.jpg        # Logo (replace with transparent PNG when available)
│   └── logo.svg        # Vector logo
├── netlify.toml        # Netlify deployment config
└── README.md
```

## Deploying

### First time
1. Push this repo to GitHub
2. Go to https://app.netlify.com → "Add new site" → "Import from Git"
3. Select your GitHub repo
4. Build command: *(leave blank)*
5. Publish directory: `.`
6. Click Deploy

### After that
Every `git push` to `main` auto-deploys. That's it.

## Connecting your domain
1. In Netlify: Site settings → Domain management → Add custom domain
2. Enter your domain (e.g. xcelerateadvisory.com)
3. Netlify gives you nameservers — point your domain registrar to these
4. SSL is automatic (Let's Encrypt)

## Updating content
Edit `index.html` for content changes.
Edit `css/style.css` for style changes.
Commit and push — live in ~30 seconds.

## Logo
Replace `images/logo.jpg` with a transparent PNG when you have one from your designer.
Update the `src` in both the nav and footer `<img>` tags.

## Contact form
Currently shows a success message on submit.
To receive emails, connect Netlify Forms (free, built-in):
1. Add `data-netlify="true"` to the `<form>` tag
2. Netlify automatically captures submissions
3. View them at app.netlify.com → Forms
4. Set up email notifications in Netlify settings

## Future: Adding a CMS (Decap CMS)
When non-technical editors need to update content:
See `/admin/` folder — add `config.yml` and `index.html` there.
Docs: https://decapcms.org
