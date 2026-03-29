# Future School Backend API

RESTful API built with Node.js, Express, and MongoDB for managing school operations.

## Features

- **Dual Authentication System**: Public API + Protected Admin Routes
- **Content Management**: News, Gallery, Staff Directory
- **Application Management**: Track admission and job applications
- **Admin Dashboard**: Full CRUD operations with role-based access
- **JWT Authentication**: Secure token-based authentication
- **File Uploads**: Local or cloud storage support

## Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your configuration:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `PORT`: Server port (default: 3000)

3. **Seed initial admin user**:
   ```bash
   npm run seed
   ```
   This creates a super-admin with credentials:
   - Email: `admin@futureschool.com`
   - Password: `Admin@123`

## Running the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

Server will run on `http://localhost:3000`

## API Endpoints

### Authentication (`/api/auth`)
- `POST /login` - Admin login
- `POST /register` - Register new admin (super-admin only)
- `GET /profile` - Get current admin profile

### Public API (`/api/public`)
- `GET /news` - Get published news
- `GET /news/:id` - Get single news
- `GET /gallery` - Get gallery images
- `GET /gallery/categories` - Get gallery categories
- `GET /staff` - Get active staff
- `GET /staff/:id` - Get single staff
- `GET /settings` - Get public settings
- `POST /applications` - Submit admission/job application

### Admin API (`/api/admin`) - Protected Routes

**News Management**:
- `GET /news` - List all news (draft + published)
- `POST /news` - Create news
- `PUT /news/:id` - Update news
- `DELETE /news/:id` - Delete news

**Gallery Management**:
- `GET /gallery` - List gallery images
- `POST /gallery` - Add image to gallery
- `DELETE /gallery/:id` - Delete gallery image

**Staff Management**:
- `GET /staff` - List all staff
- `POST /staff` - Add staff member
- `PUT /staff/:id` - Update staff
- `DELETE /staff/:id` - Delete staff

**Applications**:
- `GET /applications` - List all applications
- `GET /applications/:id` - Get specific application
- `PATCH /applications/:id/status` - Update application status

**Settings** (super-admin only):
- `GET /settings` - Get settings
- `PUT /settings` - Update settings

**Admin Management** (super-admin only):
- `GET /admins` - List all admins
- `DELETE /admins/:id` - Delete admin

## Authentication

All admin routes require JWT token in the `Authorization` header:
```
Authorization: Bearer <your_jwt_token>
```

## Project Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection
├── models/
│   ├── Admin.js           # Admin user schema
│   ├── News.js            # News schema
│   ├── Gallery.js         # Gallery schema
│   ├── Staff.js           # Staff schema
│   ├── Application.js     # Application schema
│   └── Settings.js        # Settings schema
├── routes/
│   ├── auth.js            # Authentication routes
│   ├── public.js          # Public API routes
│   └── admin.js           # Admin protected routes
├── middleware/
│   └── auth.js            # JWT verification & error handling
├── scripts/
│   └── seedAdmin.js       # Seed initial admin
├── uploads/               # File storage (local)
├── .env                   # Environment variables
├── .env.example           # Example env file
├── server.js              # Main server file
├── package.json           # Dependencies
└── README.md              # This file
```

## Environment Variables

```bash
# MongoDB
MONGODB_URI=mongodb://localhost:27017/future_school

# Server
PORT=3000
NODE_ENV=development

# JWT
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d

# Admin
ADMIN_EMAIL=admin@futureschool.com
ADMIN_PASSWORD=Admin@123

# File Upload
UPLOAD_PATH=./uploads
```

## CORS Configuration

The API accepts requests from:
- `http://localhost:5173` (Vite development server)
- `http://localhost:3001` (Admin dashboard)

Modify in `server.js` as needed.

## Next Steps

1. Start the backend server: `npm run dev`
2. Seed admin user: `npm run seed`
3. Create the admin dashboard React app
4. Connect frontend components to API endpoints

## License

ISC
