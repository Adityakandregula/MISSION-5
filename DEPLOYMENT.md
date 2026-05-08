# Deployment Guide

This guide explains how to run the Kanban Task Board on a live server.

## 📦 Built Production Files

The production files are in the `dist/` folder and ready to deploy:
- `dist/index.html` - Main HTML file
- `dist/assets/` - CSS and JavaScript bundles

## 🚀 Local Server (Development)

### Option 1: Using Node.js Server (Included)

```bash
# Build the project
npm run build

# Start the server
npm run serve
```

Then open http://localhost:3000 in your browser.

**Change Port (if needed):**
```bash
PORT=8080 npm run serve
```

### Option 2: Quick Build & Serve
```bash
npm run start
```
This builds and serves in one command.

### Option 3: Python Simple Server

If you have Python installed:
```bash
cd dist
python -m http.server 8000
```
Then visit http://localhost:8000

### Option 4: Python 2
```bash
cd dist
python -m SimpleHTTPServer 8000
```

## ☁️ Cloud Deployment

### 1. Vercel (Recommended - Free Tier)

```bash
npm install -g vercel
vercel login
vercel
```

Or connect via GitHub:
1. Go to https://vercel.com
2. Click "Add New Project"
3. Select your GitHub repository
4. Vercel auto-detects and deploys

### 2. Netlify (Free Tier)

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

Or drag-and-drop:
1. Go to https://netlify.com/drop
2. Drag the `dist/` folder onto the page
3. Get a live URL instantly

### 3. GitHub Pages

1. **Update vite.config.js** (if repo name isn't the default):
```javascript
export default {
  base: '/repo-name/',  // Add this line
  // ... rest of config
}
```

2. **Rebuild:**
```bash
npm run build
```

3. **Create GitHub Actions workflow** - file already exists at `.github/workflows/ci.yml`

4. **Push to GitHub:**
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

5. **Enable Pages:**
   - Go to Settings → Pages
   - Select "Deploy from a branch" 
   - Select `main` branch and `/root` folder
   - Save

Your site will be live at: `https://yourusername.github.io/kanban-task-board`

### 4. AWS S3 + CloudFront

```bash
# Build the project
npm run build

# Upload to S3 bucket
aws s3 sync dist/ s3://your-bucket-name/

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

### 5. Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

Then deploy:
```bash
npm run build
firebase deploy
```

### 6. Heroku

1. Create `Procfile` in project root:
```
web: node server.js
```

2. Deploy:
```bash
heroku login
heroku create your-app-name
git push heroku main
```

## 🐳 Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "serve"]
```

### Build & Run

```bash
docker build -t kanban-board .
docker run -p 3000:3000 kanban-board
```

## 📋 Static File Hosting

You can host the `dist/` folder on any static hosting service:

- **Surge**: `npm install -g surge && surge dist/`
- **Now.sh**: `now dist/`
- **Fleek**: Connect GitHub repo
- **Render**: Connect GitHub repo
- **Railway**: Connect GitHub repo

## ✅ Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] `dist/` folder generated with files
- [ ] Tested locally with `npm run serve`
- [ ] No console errors in browser DevTools
- [ ] localStorage working (check browser DevTools → Application)
- [ ] All features tested:
  - [ ] Add tasks
  - [ ] Edit tasks
  - [ ] Move tasks between columns
  - [ ] Delete tasks
  - [ ] Priority colors displayed
  - [ ] Page refresh retains tasks

## 🆘 Troubleshooting

**Issue: "Cannot find module"**
```bash
rm -rf node_modules
npm install
npm run build
```

**Issue: Port already in use**
```bash
# Change port
PORT=8080 npm run serve

# Or kill existing process
# Windows: netstat -ano | findstr :3000
# macOS/Linux: lsof -i :3000
```

**Issue: localStorage not working**
- Ensure HTTPS on production (required for some browsers)
- Check browser privacy settings
- Verify localStorage is not disabled

**Issue: Styles/JS not loading**
- Check browser console for 404 errors
- Ensure assets are in `dist/assets/` folder
- Verify relative paths in vite.config.js

## 📞 Support

For issues or questions, open an issue on GitHub.
