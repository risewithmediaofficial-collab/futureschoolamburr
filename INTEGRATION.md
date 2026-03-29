# Integration Guide: Connecting Frontend to Backend API

This guide explains how to update your existing React frontend to use the backend API instead of hardcoded data.

## Overview

Your frontend currently works with local data. We'll update it to fetch from the backend API running on `http://localhost:3000`.

## Step-by-Step Integration

### 1. Update Admission Form (AdmissionQueryForm.jsx)

**Before**: Hardcoded success message
**After**: POST to backend API

```javascript
// src/components/AdmissionQueryForm.jsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Phone, Mail, BookOpen, MessageSquare, CheckCircle } from 'lucide-react';

const API_BASE_URL = 'http://localhost:3000/api';

const AdmissionQueryForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    currentGrade: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/public/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          applicationType: 'admission',
          studentName: formData.studentName,
          parentName: formData.parentName,
          currentGrade: formData.currentGrade,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      if (!response.ok) throw new Error('Failed to submit application');

      setIsSubmitted(true);
      setFormData({
        parentName: '',
        studentName: '',
        phone: '',
        email: '',
        currentGrade: '',
        message: ''
      });
    } catch (error) {
      setError(error.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // ... rest of component ... (same JSX as before)
  );
};

export default AdmissionQueryForm;
```

### 2. Update News Component (Home.jsx / News.jsx)

```javascript
// src/pages/Home.jsx or src/pages/News.jsx

import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:3000/api';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/public/news?limit=6`);
        const data = await response.json();
        setNews(data.news);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="text-center py-8">Loading news...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article key={item._id} className="bg-gray-50 rounded-lg overflow-hidden">
              {item.imageUrl && (
                <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.content.substring(0, 100)}...</p>
                <small className="text-gray-400">
                  {new Date(item.publishedDate).toLocaleDateString()}
                </small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
```

### 3. Update Gallery Component (Gallery.jsx)

```javascript
// src/pages/Gallery.jsx

import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:3000/api';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, galleryRes] = await Promise.all([
          fetch(`${API_BASE_URL}/public/gallery/categories`),
          fetch(`${API_BASE_URL}/public/gallery${selectedCategory ? `?category=${selectedCategory}` : ''}`)
        ]);

        const categoriesData = await categoriesRes.json();
        const galleryData = await galleryRes.json();

        setCategories(categoriesData.categories);
        setGallery(galleryData.gallery);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  if (loading) return <div className="text-center py-8">Loading gallery...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === '' ? 'bg-red-600 text-white' : 'bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg capitalize ${
                selectedCategory === cat ? 'bg-red-600 text-white' : 'bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item) => (
            <div key={item._id} className="relative group overflow-hidden rounded-lg">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
```

### 4. Update Staff Directory (Instructors.jsx)

```javascript
// src/pages/Instructors.jsx

import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:3000/api';

const Instructors = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/public/staff`);
        const data = await response.json();
        setStaff(data.staff);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  if (loading) return <div className="text-center py-8">Loading staff...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Faculty & Staff</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {staff.map((member) => (
            <div key={member._id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
              {member.imageUrl && (
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-red-600 font-semibold text-sm">{member.position}</p>
                {member.department && (
                  <p className="text-gray-600 text-xs mt-1">{member.department}</p>
                )}
                {member.bio && (
                  <p className="text-gray-600 text-xs mt-2">{member.bio}</p>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`} className="text-blue-600 text-xs hover:underline">
                    {member.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
```

### 5. Update Site Settings

```javascript
// Create a new hook for site settings: src/hooks/useSettings.js

import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:3000/api';

export const useSettings = () => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/public/settings`);
        const data = await response.json();
        setSettings(data.settings);
      } catch (error) {
        console.error('Failed to fetch settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading };
};

// Use in Footer/Header:
import { useSettings } from '../hooks/useSettings';

const Footer = () => {
  const { settings, loading } = useSettings();

  if (loading || !settings) return null;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4">{settings.schoolName}</h3>
          <p className="text-sm text-gray-400">{settings.address}</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          {settings.phone.map((p, i) => (
            <p key={i} className="text-sm text-gray-400">{p}</p>
          ))}
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {settings.socialLinks.facebook && (
              <a href={settings.socialLinks.facebook} className="text-blue-400 hover:text-blue-300">
                Facebook
              </a>
            )}
            {/* Add other social links similarly */}
          </div>
        </div>
      </div>
    </footer>
  );
};
```

## API Client Utility (Recommended)

Create a centralized API client (`src/utils/apiClient.js`):

```javascript
const API_BASE_URL = 'http://localhost:3000/api';

export const apiClient = {
  async get(endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return response.json();
  },

  async post(endpoint, data) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return response.json();
  }
};

// Usage:
// const data = await apiClient.get('/public/news');
// await apiClient.post('/public/applications', formData);
```

## Testing the Integration

1. **Start backend**: `cd backend && npm run dev`
2. **Seed admin**: `npm run seed`
3. **Start admin dashboard**: `cd admin && npm run dev`
4. **Create some test data** in admin dashboard (news, staff, etc.)
5. **Start frontend**: `npm run dev` (from root)
6. Visit `http://localhost:5173` and see the data from backend

## Environment Variables

Create `.env` in frontend root (optional):

```env
VITE_API_URL=http://localhost:3000/api
```

Then use:
```javascript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
```

## Handling Errors

Add error boundaries and user-friendly messages:

```javascript
const [error, setError] = useState('');

try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
  // Process data
} catch (error) {
  setError(`Failed to load data: ${error.message}`);
  console.error(error);
}
```

## CORS Handling

Backend is already configured to accept requests from `localhost:5173`. If you deploy elsewhere, update `backend/server.js`:

```javascript
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3001', 'https://yourdomain.com'],
  credentials: true
}))
```

## Next Steps

1. ✓ Update all components to use backend API
2. ✓ Test all features
3. Create file upload functionality for images in admin dashboard
4. Add loading states and error messages
5. Optimize API calls (caching, pagination)
6. Deploy to production

## Resources

- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [React Hooks Documentation](https://react.dev/reference/react)
- [Backend API Docs](backend/README.md)

---

**Complete integration check:**
- [ ] News loading from backend
- [ ] Gallery images loading from backend
- [ ] Staff directory loading from backend
- [ ] Application submissions saving to database
- [ ] Settings loading from backend
- [ ] Admin dashboard managing all content
- [ ] Error handling working
- [ ] CORS errors resolved
