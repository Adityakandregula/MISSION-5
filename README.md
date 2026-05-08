# Kanban Task Board

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.5-blue)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-purple)](https://vitejs.dev)

A React-based Trello-style task management application built with Vite. Manage your tasks efficiently with an intuitive Kanban board featuring priority levels, inline editing, and persistent storage.

## 🎯 Features

### Phase 1: Base MVP & Component Logic ✅
- **3-Column Layout**: To Do, In Progress, Done
- **Add Task**: Create new tasks with text input
- **Delete Task**: Remove tasks from any column
- **Move Task**: Transfer tasks between columns with action buttons

### Phase 2: UI/UX Polish & Persistence ✅
- **Inline Editing**: Click task text to edit inline
- **Priority System**: High (Red), Medium (Yellow), Low (Green) with visual borders
- **State Persistence**: Tasks persist across page refreshes via localStorage

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/kanban-task-board.git
cd kanban-task-board

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5174/`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 📦 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| **React** | 19.2.5 | UI framework with hooks |
| **Vite** | 8.0.11 | Fast build tool and dev server |
| **JavaScript** | ES6+ | State management and logic |
| **CSS3** | Latest | Responsive styling with flexbox |
| **ESLint** | 10.2.1 | Code quality and style checking |

## 🏗️ Project Structure

```
kanban-task-board/
├── src/
│   ├── App.jsx           # Main component with task logic
│   ├── App.css           # Application styles
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint rules
├── .gitignore            # Git ignore file
├── LICENSE               # MIT License
├── README.md             # This file
└── CONTRIBUTING.md       # Contribution guidelines
```

## 💡 Key Concepts Demonstrated

- **State Management**: `useState` for task data and UI state
- **Side Effects**: `useEffect` for localStorage persistence and initialization
- **Component Composition**: Efficient component rendering with `.map()`
- **Event Handling**: `onClick`, `onChange`, `onKeyDown` handlers
- **Conditional Rendering**: Priority-based visual styling
- **Array Methods**: `map`, `filter` for task operations
- **Local Storage API**: Data persistence across sessions

## 📖 How to Use

1. **Add a Task**:
   - Enter task text in the input field
   - Select priority level (High/Medium/Low)
   - Click "Add Task" or press Enter

2. **Edit a Task**:
   - Click on task text to enable inline editing
   - Make changes and press Enter to save
   - Or click outside to cancel

3. **Move Tasks**:
   - Use action buttons to move tasks between columns
   - Drag and drop support coming soon

4. **Delete a Task**:
   - Click the delete button on any task card
   - Task is removed permanently

5. **Data Persistence**:
   - All tasks are automatically saved to browser localStorage
   - Tasks persist across page refreshes and browser sessions

## 🔗 Priority System

| Priority | Color  | Use Case |
|----------|--------|----------|
| High     | 🔴 Red | Urgent tasks, deadlines |
| Medium   | 🟡 Yellow | Standard tasks |
| Low      | 🟢 Green | Nice-to-have, can wait |

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Vite configuration and deploy

### Deploy to Netlify

1. Push code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add New Site" → "Import an Existing Project"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### Deploy to GitHub Pages

1. Update `vite.config.js` with base path
2. Run `npm run build`
3. Push `dist` folder to `gh-pages` branch
4. Enable GitHub Pages in repository settings

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [CSS Flexbox Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

## 🐛 Issues & Feedback

Found a bug? Have a feature request? [Open an issue](https://github.com/yourusername/kanban-task-board/issues) on GitHub.

## ✨ Future Enhancements

- [ ] Drag-and-drop task reordering
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Dark mode theme
- [ ] Export/import functionality
- [ ] Task attachments
- [ ] Collaborative editing
- [ ] Mobile app version

---

**Made with ❤️ by Murali**
