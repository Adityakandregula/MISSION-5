## Kanban Task Board - Sprint 05 Submission

### Project Status: Phase 2 Complete ✅

This is a Trello-style Kanban task board built with React and Vite.

### Implementation Summary

**Phase 1: Base MVP (P0) - Complete**
- 3-column layout (To Do, In Progress, Done)
- Add task functionality with input field
- Delete task action on each card
- Move task buttons to transfer between columns

**Phase 2: UI/UX Polish (Priority 1) - Complete**
- Inline editing: Click task text to edit
- Priority system: High (Red), Medium (Yellow), Low (Green) with conditional border colors
- State persistence: All tasks saved to localStorage and restored on page refresh

### Technology Stack
- React 19.2.5 with hooks (useState, useEffect)
- Vite 8.0.11 for fast builds and dev server
- Native CSS with flexbox layout
- localStorage API for persistence

### Key Features
- Full state management with useState
- Side effects with useEffect for localStorage sync
- Conditional rendering based on priority
- Dynamic CSS styling based on task state
- Responsive 3-column layout

### How to Run
- `npm run dev` - Start development server at http://localhost:5174
- `npm run build` - Build for production in `dist/` folder
- `npm run preview` - Preview production build locally

### Deployment
Push to GitHub and deploy to Vercel for live URL submission.