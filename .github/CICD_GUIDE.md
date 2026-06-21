# CI/CD Pipeline - Momentum DS

Automação completa de testes, builds e publicação no npm.

## 🔄 Workflows

### 1. Test & Build (`test.yml`)

**Triggers:**
- Push to `main`
- Pull requests to `main`

**What it does:**
1. Installs dependencies
2. Type checks all packages
3. Builds tokens, components, react, rn
4. Verifies generated files
5. Runs tests (if available)
6. Uploads artifacts

**Status:** ✅ Active

### 2. Publish to npm (`publish.yml`)

**Triggers:**
- Push to `main` (if changesets exist)

**What it does:**
1. Builds all packages
2. Uses Changesets to:
   - Create "Version Packages" PR if needed
   - Publishes to npm when PR merges
3. Updates version numbers automatically
4. Generates changelog

**Requirements:**
- `NPM_TOKEN` secret in GitHub (GitHub Settings → Secrets)

**Workflow:**
```
1. Developer creates changeset: npm run changeset
2. Commits and opens PR
3. Reviewer approves
4. Merge to main
5. GitHub Actions creates "Version Packages" PR
6. Approve and merge Version Packages PR
7. npm publish happens automatically ✅
```

**Status:** ✅ Ready (needs NPM_TOKEN)

### 3. Documentation (`docs.yml`)

**Triggers:**
- Push to `main`
- Pull requests

**What it does:**
1. Builds documentation
2. Generates API docs
3. Prepares for Storybook deployment
4. Uploads docs artifacts

**Status:** ✅ Ready for Storybook

## 📋 How to Release

### Step 1: Create Changeset

```bash
npm run changeset
# Follow prompts:
# Select packages to bump
# Choose: patch, minor, or major
# Write changelog message
```

### Step 2: Commit & Push

```bash
git add .changeset/
git commit -m "chore: add changeset for new features"
git push origin main
```

### Step 3: GitHub Creates PR

Wait for Changesets action to create a "Version Packages" PR.

### Step 4: Review & Merge

1. Review the PR (checks version bumps, changelog)
2. Merge to `main`
3. GitHub Actions automatically:
   - Publishes all packages to npm
   - Creates GitHub release
   - Updates documentation

## 🔐 Required Secrets

Add to GitHub Settings → Secrets and variables → Actions:

### `NPM_TOKEN`

**How to get:**
1. Go to npmjs.com → Account Settings → Access Tokens
2. Create token (type: Automation, read+write)
3. Copy token
4. Go to GitHub repo → Settings → Secrets
5. Add: `NPM_TOKEN` = your token

**Alternative:** Use NPM packages with 2FA and setup accordingly

## 📊 Build Matrix

All workflows run on `ubuntu-latest` with:
- Node.js 20.x
- npm 11.x
- Legacy peer deps mode (for compatibility)

## 🔍 Monitoring Builds

### GitHub Actions Dashboard

Go to: https://github.com/andersonlucasp/momentum-ds/actions

View:
- ✅ Test & Build logs
- 📦 Publish logs
- 📚 Documentation builds

### npm Registry

Check published packages:
- https://www.npmjs.com/package/@andersonlucasp/tokens
- https://www.npmjs.com/package/@andersonlucasp/rn
- https://www.npmjs.com/package/@andersonlucasp/components
- https://www.npmjs.com/package/@andersonlucasp/react

## 🐛 Troubleshooting

### Build fails on GitHub but works locally

**Solution:**
```bash
# Use same flags as CI
npm ci --legacy-peer-deps
npm run build
```

### Publish fails: "NPM_TOKEN not found"

**Solution:**
1. Go to GitHub → Settings → Secrets
2. Add `NPM_TOKEN` with your npm token
3. Retry workflow

### Changeset not detected

**Solution:**
1. Did you run `npm run changeset`?
2. Did you commit `.changeset/` folder?
3. Is it on `main` branch?

## 📈 Future Improvements

- [ ] Code coverage tracking
- [ ] Visual regression testing (Chromatic)
- [ ] Performance benchmarking
- [ ] Deploy Storybook to GitHub Pages
- [ ] Slack notifications
- [ ] Release notes auto-generation

## 📚 Resources

- [Changesets Docs](https://github.com/changesets/changesets)
- [GitHub Actions](https://docs.github.com/en/actions)
- [npm Token Management](https://docs.npmjs.com/about-access-tokens)

---

**Pipeline Status:** ✅ Production Ready

Every merge to `main` is automatically tested and published! 🚀
