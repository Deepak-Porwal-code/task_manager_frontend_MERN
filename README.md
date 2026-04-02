# Task Manager Frontend - MERN Stack

A modern, responsive task management application built with React, featuring a beautiful UI with Kanban boards, Pomodoro timer, and comprehensive task tracking.

## 🚀 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **State Management**: React Query (TanStack Query)
- **Notifications**: React Hot Toast
- **Icons**: React Icons
- **Styling**: CSS with custom design system

## ✨ Features

### Authentication
- User registration and login
- JWT token management
- Protected routes
- Persistent sessions
- Auto-redirect on auth changes

### Dashboard
- Personalized greeting based on time of day
- Productivity score tracking
- Weekly progress visualization
- Active projects overview
- Quick stats cards with gradients
- Achievement tracking
- Today's focus section

### Project Management
- Create, edit, delete projects
- Beautiful gradient project cards
- Progress bars for each project
- Task count tracking
- Archive/unarchive functionality
- Project detail view with Kanban board

### Task Management
- Full CRUD operations
- Kanban board with 4 columns (Todo, In Progress, In Review, Done)
- Drag and drop between columns
- Priority levels with visual indicators
- Status tracking
- Due dates with overdue warnings
- Tags with color coding (8 gradient colors)
- Time tracking (estimated vs actual)
- Detailed notes support
- Subtasks functionality
- Pomodoro timer integration

### Pomodoro Timer
- Built-in timer for each task
- Play/Pause controls
- Automatic time logging
- Visual timer display
- Time accumulation

### Visual Design
- Modern gradient UI
- Responsive design
- Mobile-friendly
- Smooth animations
- Color-coded priorities
- Beautiful cards and badges
- Custom scrollbars

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn
- Backend API running (see backend repository)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Deepak-Porwal-code/task_manager_frontend_MERN.git
cd task_manager_frontend_MERN
```

2. Install dependencies:
```bash
npm install
```

3. Configure API endpoint:

The frontend is configured to proxy API requests to `http://localhost:5000` in development. If your backend runs on a different port, update `vite.config.js`:

```javascript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:YOUR_PORT',
        changeOrigin: true
      }
    }
  }
})
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

The app will run on `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎯 Usage

### Login
1. Navigate to http://localhost:3000/login
2. Enter credentials:
   - Username: `john`
   - Password: `password123`
3. Click "Login"

### Register
1. Navigate to http://localhost:3000/register
2. Fill in:
   - Email (unique)
   - Username (unique)
   - Password (min 6 characters)
   - Full Name (optional)
3. Click "Register"

### Create Project
1. From Dashboard, click "New Project"
2. Enter project name and description
3. Click "Create Project"

### Manage Tasks
1. Click on a project to open Kanban board
2. Click "New Task" to create a task
3. Fill in task details:
   - Title (required)
   - Description
   - Priority (low, medium, high, urgent)
   - Status (todo, in_progress, in_review, done)
   - Estimated time (minutes)
   - Due date
   - Tags (add multiple)
   - Notes
4. Use drag & drop to move tasks between columns
5. Click play button to start Pomodoro timer
6. Click pause to stop and log time

## 📱 Pages

- `/` - Dashboard (protected)
- `/login` - Login page
- `/register` - Registration page
- `/projects/:id` - Project detail with Kanban board (protected)
- `/tasks` - All tasks view (protected)
- `/settings` - User settings (protected)

## 🎨 Features Showcase

### Dashboard Features
- **Productivity Score**: Track your productivity percentage
- **Active Projects**: See all active projects at a glance
- **Tasks Completed**: Monitor completion rate
- **Weekly Progress**: Track weekly goal progress
- **Today's Focus**: Quick access to today's tasks
- **Achievement Badges**: Celebrate streaks and milestones
- **Quick Actions**: Fast access to common tasks

### Task Features
- **Kanban Board**: Visual workflow management
- **Priority Badges**: Color-coded priority indicators
- **Status Columns**: 4-stage workflow
- **Tags**: Color-coded organization (8 gradient colors)
- **Pomodoro Timer**: Built-in time tracking
- **Due Dates**: Deadline management with overdue warnings
- **Time Tracking**: Estimated vs actual time
- **Notes**: Detailed task documentation
- **Drag & Drop**: Easy task movement

### Visual Elements
- **Gradient Cards**: Beautiful project cards with unique gradients
- **Progress Bars**: Visual progress tracking
- **Animated Stats**: Smooth number transitions
- **Responsive Design**: Works on all screen sizes
- **Custom Badges**: Priority and status indicators
- **Icon System**: Comprehensive icon usage

## 🎨 Color Scheme

### Gradients Used
1. Purple to Pink: `#667eea → #764ba2`
2. Pink to Red: `#f093fb → #f5576c`
3. Blue to Cyan: `#4facfe → #00f2fe`
4. Green to Cyan: `#43e97b → #38f9d7`
5. Pink to Yellow: `#fa709a → #fee140`
6. Cyan to Purple: `#30cfd0 → #330867`

### Priority Colors
- **Urgent**: Red (`#dc3545`)
- **High**: Orange (`#fd7e14`)
- **Medium**: Blue (`#007bff`)
- **Low**: Green (`#28a745`)

### Status Colors
- **Todo**: Gray (`#6c757d`)
- **In Progress**: Blue (`#17a2b8`)
- **In Review**: Orange (`#ffc107`)
- **Done**: Green (`#28a745`)

## 📦 Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   └── Layout.jsx       # Main layout wrapper
│   ├── context/
│   │   └── AuthContext.jsx  # Authentication context
│   ├── pages/
│   │   ├── Dashboard.jsx    # Main dashboard
│   │   ├── Login.jsx        # Login page
│   │   ├── Register.jsx     # Registration page
│   │   ├── ProjectDetail.jsx # Kanban board
│   │   ├── Tasks.jsx        # All tasks view
│   │   └── Settings.jsx     # User settings
│   ├── services/
│   │   └── api.js           # Axios configuration
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── vite.config.js
└── package.json
```

## 🔧 Configuration

### API Base URL
Update in `src/services/api.js`:
```javascript
const api = axios.create({
  baseURL: '/api'  // Proxied to backend in development
})
```

### Vite Proxy
Update in `vite.config.js`:
```javascript
server: {
  port: 3000,
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true
    }
  }
}
```

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Environment Variables
Set these in your deployment platform:
- `VITE_API_URL` - Backend API URL (if not using proxy)

## 🎯 Best Practices

- Uses React Query for efficient data fetching
- Implements proper error handling
- Responsive design for all screen sizes
- Optimistic UI updates
- Toast notifications for user feedback
- Protected routes with authentication
- Clean component structure
- Reusable components
- Proper state management

## 🐛 Troubleshooting

### API Connection Issues
- Ensure backend is running on port 5000
- Check proxy configuration in `vite.config.js`
- Verify CORS settings in backend

### Authentication Issues
- Clear localStorage and try again
- Check token expiration
- Verify backend JWT configuration

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for learning or production!

## 👤 Author

Deepak Porwal

## 🙏 Acknowledgments

- Built with React best practices
- Inspired by modern task management tools
- Uses industry-standard design patterns

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check the documentation

---

**Happy Task Managing!** 🎯
