# Quick Start - Live Server Guide

## 🚀 METHOD 1: Open HTML File Directly (Easiest!)

**No server needed - just open and use!**

1. Open this file in your browser:
   ```
   kanban-standalone.html
   ```
   
   Or double-click the file in File Explorer

2. **Done!** The app is live in your browser

✅ All features work:
- ✓ Add tasks
- ✓ Edit tasks (click on text)
- ✓ Move between columns
- ✓ Delete tasks
- ✓ Priority colors (Red/Yellow/Green)
- ✓ Tasks save automatically to browser

---

## 🌐 METHOD 2: Run with Live Server (With npm)

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Start the Server
```bash
npm run serve
```

### Step 3: Open in Browser
Visit: **http://localhost:3000**

✅ **Done!** Your Kanban board is live!

---

## 📌 Quick Commands

| Command | Purpose |
|---------|---------|
| `npm run start` | Build + Serve in one command (localhost:3000) |
| `npm run serve` | Start production server (localhost:3000) |
| `npm run dev` | Development server with hot reload (localhost:5174) |
| `npm run build` | Create production files in `dist/` |

---

## 🌐 Cloud Deployment (One-Click Options)

### Vercel (Easiest)
1. Install: `npm install -g vercel`
2. Deploy: `vercel`
3. Follow prompts → Get live URL

### Netlify (Fastest)
1. Install: `npm install -g netlify-cli`
2. Deploy: `netlify deploy --prod --dir=dist`

### GitHub Pages (Free)
1. Push to GitHub
2. Go to Settings → Pages
3. Enable GitHub Pages
4. Live at: `https://yourusername.github.io/kanban-task-board`

---

## 📂 Production Files Location

All static files ready for deployment:
```
dist/
├── index.html        (Main app file)
├── assets/
│   ├── index-*.css   (Styles)
│   └── index-*.js    (JavaScript)
└── favicon.svg
```

Just upload the `dist/` folder to any web server!

---

## 🆘 Troubleshooting

**"Cannot find localhost:3000"**
- Make sure you ran `npm run build` first
- Check that you ran `npm run serve` 
- Try http://localhost:3000 (not https)

**"Port 3000 already in use?"**
```bash
PORT=8080 npm run serve
```
Then visit http://localhost:8080

**"Tasks not saving?"**
- Open DevTools (F12) → Application → localStorage
- Check if localStorage is enabled in browser
- Try the standalone HTML file instead

**"Build failing?"**
```bash
rm -rf node_modules
npm install
npm run build
```

---

## 📋 Two Ways to Use

### Option A: Standalone HTML (No Setup)
- File: `kanban-standalone.html`
- Just double-click to open
- No npm needed
- No server needed
- Perfect for quick testing

### Option B: Live Server (Better for Production)
- Uses `npm run serve`
- Serves from `dist/` folder
- Professional setup
- Ready for deployment
- Can share with others via URL

---

For detailed deployment options, see [DEPLOYMENT.md](DEPLOYMENT.md)
