# Future School Admin Dashboard

A comprehensive admin panel for managing school content, applications, and staff.

## Features

✨ **Content Management**
- Create, edit, publish/draft news articles
- Upload and organize gallery images by category
- Manage staff directory with detailed profiles
- Dynamic school settings management

📋 **Application Management**
- Track admission applications
- Handle job applications
- Update application status
- Add admin notes and comments

👥 **User Management**
- Role-based access control (Super-Admin, Editor)
- Create and manage multiple admin users
- Granular permission settings

🔒 **Security**
- JWT-based authentication
- Secure token storage
- Automatic logout on token expiration

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (port 3001)
npm run dev

# Build for production
npm build

# Preview production build
npm preview
```

## Login

```
Email: admin@futureschool.com
Password: Admin@123
```

## Pages & Features

### 🏠 Dashboard
- Overview statistics
- Quick access to all features
- System status information

### 📰 News Management
- Create articles with title, content, images
- Publish/draft articles
- View article statistics (views, engagement)
- Edit and delete articles
- Categorize articles

### 🖼️ Gallery Management
- Upload image galleries
- Organize by category (events, campus, activities, etc.)
- Add descriptions to images
- Delete unwanted images
- Responsive image display

### 👨‍💼 Staff Management
- Add staff profiles with photo
- Include qualifications and experience
- Assign departments and positions
- Mark staff as active/inactive
- Edit and update staff information

### 📧 Applications Management
- View all applications (admission & job)
- Filter by type and status
- Change application status (pending, reviewed, approved, rejected)
- Add admin notes
- Track application history
- Export application data

### ⚙️ Settings (Super-Admin Only)
- School information
- Contact details
- Social media links
- Principal and Chairman details
- School motto and establishment year

### 👤 Admin Users (Super-Admin Only)
- View all admin users
- Create new admin accounts
- Assign roles (super-admin, editor)
- Manage permissions
- Deactivate/reactivate accounts

## Architecture

```
┌─────────────────────────┐
│   React App (Admin)     │
│  (Port 3001, Vite)      │
└────────────┬────────────┘
             │
     ┌───────┴────────┐
     │ useAuth Hook   │
     │ API Client     │
     └───────┬────────┘
             │
    ┌────────▼──────────┐
    │  Backend API       │
    │  (Port 3000)       │
    │  Express + JWT     │
    └────────┬───────────┘
             │
    ┌────────▼──────────┐
    │  MongoDB           │
    │  Data Storage      │
    └────────────────────┘
```

## File Structure

```
admin/
├── src/
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── News.jsx (TODO)
│   │   ├── Gallery.jsx (TODO)
│   │   ├── Staff.jsx (TODO)
│   │   ├── Applications.jsx (TODO)
│   │   └── Settings.jsx (TODO)
│   │
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── utils/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## API Integration

All API calls go through the `apiClient` in `utils/api.js`:

```javascript
import apiClient from '../utils/api.js'

// Automatically includes JWT token in all requests
const fetchNews = async () => {
  const data = await apiClient.get('/admin/news')
  return data.news
}
```

## Authentication Flow

1. User enters credentials on login page
2. `useAuth().login()` sends request to backend
3. Backend returns JWT token
4. Token stored in localStorage
5. Token included in all subsequent requests
6. Protected routes check authentication status
7. Logout clears token and user data

## Styling

- **Framework**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Color Scheme**: Red (#dc2626) as primary, gray neutrals

## Environment Setup

```bash
# Development proxy (vite.config.js)
http://localhost:3001 → http://localhost:3000/api

# This allows API calls without full URL
fetch('/api/admin/news')  # Proxied to backend
```

## Responsive Design

- Mobile-first approach
- Hamburger menu on small screens
- Responsive grid layouts
- Touch-friendly buttons and inputs
- Optimized for all device sizes

## Error Handling

- Authentication errors → Redirect to login
- Network errors → User-friendly messages
- Validation errors → Form field hints
- 404 errors → Not found messages

## Performance Optimizations

- Code splitting with React.lazy (TODO)
- Image optimization
- Lazy loading of list items (TODO)
- API request caching (TODO)

## Future Enhancements

- [ ] News editing with rich text editor
- [ ] Bulk image upload
- [ ] Advanced search and filters
- [ ] Email notifications
- [ ] Activity logs
- [ ] Analytics dashboard
- [ ] Backup functionality
- [ ] Two-factor authentication

## Dependencies

```json
{
  "react": "^19.2.4",
  "react-router-dom": "^7.13.1",
  "axios": "^1.6.2",
  "tailwindcss": "^4.2.2",
  "lucide-react": "^0.577.0",
  "framer-motion": "^12.38.0"
}
```

## License

ISC

## Support

For issues or questions, contact the development team.

---

**Built with ❤️ for Future School CBSE**
