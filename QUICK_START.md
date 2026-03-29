# 🚀 Quick Start Guide

Get your Future School system up and running in 5 minutes!

## What's Been Created

✅ **Backend API** (Node.js + Express + MongoDB)
- Port: 3000
- Manages: News, Gallery, Staff, Applications
- Protected admin routes with JWT authentication

✅ **Admin Dashboard** (React + Vite + Tailwind)
- Port: 3001
- Separate from public site
- Super-Admin & Editor roles
- Full content management

✅ **Public Frontend** (Existing React app - Port 5173)
- Updated to consume API data
- Admission forms submit to backend
- Dynamic content from database

---

## 5-Minute Setup

### Terminal 1: Backend Server

```bash
cd backend
npm install
npm run seed
npm run dev
```

✓ Backend running on http://localhost:3000

### Terminal 2: Admin Dashboard

```bash
cd admin
npm install
npm run dev
```

✓ Admin dashboard on http://localhost:3001

### Terminal 3: Public Frontend (Keep original running)

```bash
npm run dev
```

✓ Frontend on http://localhost:5173

---

## First Login

**URL**: http://localhost:3001

```
Email: admin@futureschool.com
Password: Admin@123
```

---

## Quick Actions

### 1️⃣ Create News

- Dashboard → News → Create
- Add title, content, image
- Publish or save as draft

### 2️⃣ Upload Gallery Images

- Dashboard → Gallery → Upload
- Select category (events, campus, etc.)
- Add description

### 3️⃣ Add Staff Members

- Dashboard → Staff → Add
- Upload photo, add bio
- Mark as active

### 4️⃣ View Applications

- Dashboard → Applications
- See all admission/job apps
- Update status, add notes

### 5️⃣ Update Settings (Super-Admin)

- Dashboard → Settings
- School info, contact, social media
- Principal & Chairman details

---

## File Structure

```
amburrfutureschool/
├── backend/              ← NEW Backend API
│   ├── models/          ← Database schemas
│   ├── routes/          ← API endpoints
│   ├── server.js        ← Main app
│   └── .env             ← Configuration
│
├── admin/               ← NEW Admin Dashboard
│   ├── src/
│   │   ├── pages/       ← Login, Dashboard
│   │   ├── components/  ← Sidebar, Auth
│   │   └── context/     ← Auth state
│   └── vite.config.js
│
├── src/                 ← Existing Frontend
│   ├── pages/           ← Home, Gallery, etc.
│   ├── components/      ← Forms, Navigation
│   └── assets/
│
├── SETUP.md             ← Detailed setup guide
├── INTEGRATION.md       ← API integration guide
└── QUICK_START.md       ← This file
```

---

## API Endpoints Reference

### Public API (No Auth Required)

```bash
GET  /api/public/news              # Get published news
GET  /api/public/gallery           # Get gallery images
GET  /api/public/staff             # Get staff directory
GET  /api/public/settings          # Get school info
POST /api/public/applications      # Submit application
```

### Admin API (Requires JWT Token)

```bash
POST   /api/auth/login             # Admin login
POST   /api/admin/news             # Create news
PUT    /api/admin/news/:id         # Edit news
DELETE /api/admin/news/:id         # Delete news
GET    /api/admin/applications     # View applications
PATCH  /api/admin/applications/:id/status  # Update status
```

---

## Common Issues & Solutions

### ❌ "Cannot connect to MongoDB"
```bash
# Check MongoDB is running
# Windows: Services → MongoDB
# Or use MongoDB Atlas (cloud)
# Update MONGODB_URI in backend/.env
```

### ❌ "Admin login fails"
```bash
# Re-seed admin user
cd backend
npm run seed
```

### ❌ "CORS errors in console"
```bash
# Backend already configured
# If using different ports, update server.js CORS settings
```

### ❌ "Port 3000/3001 already in use"
```bash
# Kill process on that port or change in config
# Backend: PORT=3000 in .env
# Admin: --port 3001 in vite.config.js
```

---

## Next Steps

1. ✅ Backend running
2. ✅ Admin dashboard working
3. ⏭️ Update frontend components (see INTEGRATION.md)
4. ⏭️ Add more admins (Super-Admin → Admin Users)
5. ⏭️ Create content (News, Gallery, Staff)
6. ⏭️ Test applications submission
7. ⏭️ Deploy to production

---

## Database Collections

Your MongoDB will have these collections:

- `admins` - Admin user accounts
- `news` - News articles
- `galleries` - Gallery images
- `staffs` - Staff directory
- `applications` - Admission/job applications
- `settings` - School settings

---

## Admin Roles

**Super-Admin** 👑
- Full access to everything
- Manage other admins
- Change settings
- Everything else

**Editor** ✍️
- Manage content (news, gallery, staff)
- View applications
- Cannot access settings or admin management

---

## Security Tips

⚠️ **Before going live:**

1. Change default admin password
2. Use strong JWT_SECRET
3. Enable HTTPS
4. Add rate limiting
5. Back up your database regularly
6. Use strong MongoDB password

---

## Need More Help?

📖 **Documentation Files:**
- `SETUP.md` - Complete setup guide
- `INTEGRATION.md` - Connect frontend to API
- `backend/README.md` - Backend documentation
- `admin/README.md` - Admin dashboard docs

---

## Support Files

All these files were created for you:

✅ Backend
- server.js, package.json, .env
- Models: Admin, News, Gallery, Staff, Application, Settings
- Routes: auth, public, admin
- Middleware: Authentication & error handling
- Scripts: Seed admin user

✅ Admin Dashboard
- React + Vite + Tailwind setup
- Login page with validation
- Dashboard with statistics
- API integration (axios client)
- Authentication context

✅ Documentation
- SETUP.md (this guide)
- INTEGRATION.md (API integration)
- backend/README.md
- admin/README.md
- QUICK_START.md (this file)

---

**You're all set! Start coding! 🎓**

For questions, refer to the documentation files or check the backend/admin README files.

Happy managing! 🎉
