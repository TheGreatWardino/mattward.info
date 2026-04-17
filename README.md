# mattward.info

A static HTML/CSS/JS site used as a personal CV and brand narrative page.

---

## Infrastructure

This site is hosted on **GitHub Pages**, with a custom domain managed through **Namecheap DNS**. There is no server, no build process, and no CDN configuration required — GitHub Pages handles all of that automatically.

### Hosting — GitHub Pages

- Repo: `github.com/TheGreatWardino/mattward.info`
- Files are served directly from the `main` branch root
- GitHub Pages is enabled under **Settings → Pages → Source: main / root**
- HTTPS is enforced via GitHub's automatic SSL certificate provisioning
- Deployments are automatic — every push to `main` updates the live site

### Custom Domain — Namecheap DNS

**A Records** (apex domain `mattward.info` → GitHub Pages IPs):

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**CNAME Record** (www subdomain):

| Type | Host | Value |
|------|------|-------|
| CNAME | www | TheGreatWardino.github.io |

### CNAME File

A `CNAME` file exists in the root of the repo containing:

```
mattward.info
```

This tells GitHub Pages which custom domain to serve the site on.

---

## How It All Connects

```
User visits mattward.info
        │
        ▼
Namecheap DNS resolves A record
        │
        ▼
GitHub Pages servers (185.199.x.x)
        │
        ▼
GitHub serves files from main branch of TheGreatWardino/mattward.info
        │
        ▼
HTTPS certificate auto-provisioned by GitHub via Let's Encrypt
```

---

## Deploying Changes

1. Make changes on a feature or hotfix branch
2. Open a PR and merge into `main`
3. GitHub Pages automatically rebuilds and deploys — no manual steps required

---

## Troubleshooting

**HTTPS not working / certificate error**
- Confirm all four A records are set correctly in Namecheap
- Check DNS propagation at [dnschecker.org](https://dnschecker.org)
- Once DNS is fully propagated, GitHub will auto-provision the certificate
- Go to Settings → Pages and enable "Enforce HTTPS" once the option is available

**Custom domain reset after push**
- Ensure the `CNAME` file exists in the root of the repo — GitHub reads this to persist the custom domain setting

**Site not updating after merge**
- Check the Actions tab in GitHub for any Pages deployment errors
- Confirm the source branch in Settings → Pages is set to `main`
