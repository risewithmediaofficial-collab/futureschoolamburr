# Future School Complete Setup Guide

This guide will help you set up and run the complete Future School system with backend API and admin dashboard.

## Prerequisites

- Node.js v18+ ([Download](https://nodejs.org/))
- MongoDB ([Local](https://www.mongodb.com/docs/manual/installation/) or [Atlas Cloud](https://www.mongodb.com/cloud/atlas))
- npm or yarn
- VS Code or any code editor

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  Public Frontend (Port 5173)    Admin Dashboard (Port 3001)  │
│  ├─ Home                        ├─ Login                      │
│  ├─ News                        ├─ Dashboard                  │
│  ├─ Gallery                     ├─ News Manager               │
│  ├─ Staff Directory             ├─ Gallery Manager            │
│  ├─ Apply/Admission Form        ├─ Staff Manager              │
│  └─ Contact                     ├─ Applications               │
│                                 └─ Settings (Super-Admin)    │
│                                                               │
│              ↓            ↓             ↓                     │
│  ┌──────────────────────────────────────────────────────────┐│
│  │    Backend API Server (Port 3000)                        ││
│  │    ├─ Authentication (/api/auth)                         ││
│  │    ├─ Public Routes (/api/public)                        ││
│  │    └─ Admin Routes (/api/admin) - Protected              ││
│  └──────────────────────────────────────────────────────────┘│
│                          ↓                                    │
│  ┌──────────────────────────────────────────────────────────┐│
│  │           MongoDB Database                               ││
│  │    ├─ Admin Users                                        ││
│  │    ├─ News                                               ││
│  │    ├─ Gallery Images                                     ││
│  │    ├─ Staff                                              ││
│  │    ├─ Applications (Admissions + Jobs)                   ││
│  │    └─ Settings                                           ││
│  └──────────────────────────────────────────────────────────┘│
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Installation Steps

### Step 1: MongoDB Setup

**Option A: Local MongoDB**

1. Download and install MongoDB Community Edition
2. Start MongoDB service:
   - **Windows**: Services → Start MongoDB
   - **Mac**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`

**Option B: MongoDB Atlas (Cloud)**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/future_school`

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your MongoDB URI
# MONGODB_URI=mongodb://localhost:27017/future_school
# Or for Atlas: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/future_school

# Seed initial admin user
npm run seed

# Start backend server
npm run dev
```

Backend will be running on: **http://localhost:3000**

### Step 3: Admin Dashboard Setup

```bash
# Navigate to admin directory
cd admin

# Install dependencies
npm install

# Start admin dashboard
npm run dev
```

Admin dashboard will be running on: **http://localhost:3001**

### Step 4: Public Frontend Setup (Optional)

```bash
# Navigate to root project directory
cd ../

# Install dependencies (if not already done)
npm install

# Start frontend (will run on port 5173)
npm run dev
```

Public frontend will be running on: **http://localhost:5173**

## First-Time Usage

### 1. Access Admin Dashboard

Open browser and go to: `http://localhost:3001`

### 2. Login with Default Credentials

- **Email**: `admin@futureschool.com`
- **Password**: `Admin@123`

### 3. Customize Settings

1. Go to **Settings** (for super-admin users)
2. Update school information:
   - School name
   - Address
   - Contact details
   - Social media links
   - Principal and Chairman names

### 4. Start Managing Content

- **Add News**: Dashboard → News → Create new
- **Upload Gallery**: Dashboard → Gallery → Upload images
- **Manage Staff**: Dashboard → Staff → Add staff members
- **Create Admins**: Dashboard → Admin Users (super-admin only)

## API Documentation

### Base URL
```
http://localhost:3000/api
```

### Authentication

**Login**
```bash
POST /auth/login
Content-Type: application/json

{
  "email": "admin@futureschool.com",
  "password": "Admin@123"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "admin": { ... }
}
```

### Public API (No Authentication Required)

```bash
# Get published news
GET /public/news

# Get gallery images
GET /public/gallery

# Get active staff
GET /public/staff

# Submit application
POST /public/applications
{
  "applicationType": "admission",
  "studentName": "...",
  "parentName": "...",
  "currentGrade": "...",
  "email": "...",
  "phone": "..."
}
```

### Admin API (Requires JWT Token)

```bash
# All requests need Authorization header
Authorization: Bearer <your_token>

# Examples:
GET /admin/news
POST /admin/news
PUT /admin/news/:id
DELETE /admin/news/:id

GET /admin/applications
PATCH /admin/applications/:id/status

GET /admin/staff
POST /admin/staff
PUT /admin/staff/:id

GET /admin/gallery
POST /admin/gallery
```

## Connecting Frontend to Backend

Update your frontend components to fetch from the backend:

```javascript
// Before: Hardcoded data
const news = [{ title: '...', content: '...' }]

// After: API call
const [news, setNews] = useState([])

useEffect(() => {
  fetch('http://localhost:3000/api/public/news')
    .then(res => res.json())
    .then(data => setNews(data.news))
}, [])
```

## Project Structure

```
amburrfutureschool/
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── scripts/
│   ├── uploads/
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── README.md
│
├── admin/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── src/ (Public frontend)
│   ├── pages/
│   ├── components/
│   ├── assets/
│   └── ...
│
└── package.json
```

## Troubleshooting

### Backend won't start
- Check if MongoDB is running
- Verify `.env` file has correct MongoDB URI
- Check if port 3000 is available

### Can't login to admin dashboard
- Verify backend is running (`http://localhost:3000/api/health`)
- Check if admin was seeded (`npm run seed`)
- Clear browser cache and try again

### Admin dashboard won't load
- Verify backend is running
- Check browser console for CORS errors
- Ensure port 3001 is available

### File uploads not working
- Check `/backend/uploads` folder exists
- Verify `UPLOAD_PATH` in `.env`
- Check file size limit (10MB default)

## Creating Additional Admins

**Via API** (requires super-admin token):
```bash
POST /api/auth/register
Authorization: Bearer <super_admin_token>

{
  "name": "Editor Name",
  "email": "editor@futureschool.com",
  "password": "SecurePassword123",
  "role": "editor"
}
```

## Admin Roles

- **Super-Admin**: Full access (all features, manage other admins, site settings)
- **Editor**: Content management only (news, gallery, staff, applications)

## Next Steps

1. ✓ Backend API setup
2. ✓ Admin dashboard setup
3. Update frontend components to use backend API
4. Deploy to production (Heroku, Vercel, or your hosting)
5. Set up email notifications for applications
6. Add analytics and reporting features

## Support & Documentation

- Backend API: [backend/README.md](backend/README.md)
- Admin Dashboard: [admin/README.md](admin/README.md)
- MongoDB: [Documentation](https://www.mongodb.com/docs/)

## Security Notes

- ⚠️ Change default admin password in production
- ⚠️ Use strong JWT_SECRET in `.env`
- ⚠️ Enable HTTPS before going live
- ⚠️ Implement rate limiting on public endpoints
- ⚠️ Use environment variables for sensitive data

---

**Happy Managing! 🎓**
