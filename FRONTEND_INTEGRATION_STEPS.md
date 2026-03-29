# Step-by-Step Frontend Integration Guide

This guide walks you through updating each component to use the backend API.

## Prerequisites

1. **Backend running** on `http://localhost:3000`
2. **Admin dashboard running** on `http://localhost:3001` (optional, for content management)
3. **Navigate to frontend directory**: `cd d:\amburrfutureschool\`

## Option A: Quick Setup (Copy-Paste)

If you just want to get started quickly, copy the API utilities and use them:

```bash
# These files are already created for you!
src/utils/apiClient.js          # Main API client
src/hooks/useApi.js             # React hooks for data fetching
src/examples/IntegrationExample.jsx  # Complete working examples
```

Use them in your components:
```javascript
// Option 1: Using hooks (recommended)
import { useNews } from '../hooks/useApi'

const MyComponent = () => {
  const { news, loading, error } = useNews()
  // ... use news
}

// Option 2: Using API client directly
import { apiClient } from '../utils/apiClient'

const MyComponent = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    apiClient.news.getAll().then(data => setNews(data.news))
  }, [])
}
```

## Component Migration Checklist

### Phase 1: Update Pages using News

- [ ] src/pages/Home.jsx - Add news section
- [ ] src/pages/News.jsx - If exists, display all news with pagination

**Steps:**
1. Open the component
2. Replace hardcoded `const news = [...]` with hook or API call
3. Add loading and error states
4. Test in browser

**Example for Home.jsx:**

```javascript
// BEFORE
import heroImage from '../assets/hero.jpg'

function Home() {
  const news = [  // Hardcoded data
    { id: 1, title: 'News 1', content: '...' },
    // ...
  ]
  
  return (
    <section>
      {news.map(item => (...))}
    </section>
  )
}

// AFTER
import { useNews } from '../hooks/useApi'

function Home() {
  const { news, loading, error } = useNews(1, 6)  // Get first 6 news
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  
  return (
    <section>
      {news.map(item => (...))}
    </section>
  )
}
```

### Phase 2: Update Gallery Component

- [ ] src/pages/Gallery.jsx - Display images from database
- [ ] src/components/Gallery.jsx - If exists as component

**Steps:**
1. Use `useGallery` and `useGalleryCategories` hooks
2. Add category filter buttons
3. Add pagination if needed

**Example:**

```javascript
import { useGallery, useGalleryCategories } from '../hooks/useApi'

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const { gallery, loading, error } = useGallery(1, 12, selectedCategory)
  const { categories } = useGalleryCategories()
  
  return (
    <>
      {/* Category buttons */}
      <div className="flex gap-2">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Gallery grid */}
      <div className="grid grid-cols-3">
        {gallery.map(item => (
          <img key={item._id} src={item.imageUrl} alt={item.title} />
        ))}
      </div>
    </>
  )
}
```

### Phase 3: Update Staff Directory

- [ ] src/pages/Instructors.jsx - Display staff from database
- [ ] src/pages/FacultyPage.jsx - If exists
- [ ] src/components/Faculty.jsx - If exists as component

**Steps:**
1. Use `useStaff` hook
2. Display staff cards with photos, bios, emails
3. Optional: Add position filter

**Example:**

```javascript
import { useStaff } from '../hooks/useApi'

function Instructors() {
  const { staff, loading, error } = useStaff()
  
  return (
    <div className="grid grid-cols-4 gap-6">
      {staff.map(member => (
        <div key={member._id}>
          <img src={member.imageUrl} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.position}</p>
          <p>{member.bio}</p>
          {member.email && <a href={`mailto:${member.email}`}>{member.email}</a>}
        </div>
      ))}
    </div>
  )
}
```

### Phase 4: Update Admission Form

- [ ] src/components/AdmissionQueryForm.jsx
- [ ] src/pages/ApplyAdmission.jsx

**Steps:**
1. Import `useAdmissionForm` hook
2. Replace submit handler with `submit()` function
3. Add success message after submission
4. Clear form on success

**Example:**

```javascript
import { useAdmissionForm } from '../hooks/useApi'

function AdmissionQueryForm() {
  const [formData, setFormData] = useState({...})
  const { submit, loading, error, success } = useAdmissionForm()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await submit(formData)
    if (result.success) {
      setFormData({...})  // Clear form
      alert('Application submitted!')
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">✓ Submitted!</p>}
      {/* form fields */}
      <button disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
    </form>
  )
}
```

### Phase 5: Update Contact Page Settings

- [ ] src/pages/Contact.jsx - Display contact info from settings
- [ ] src/components/Footer.jsx - Display footer info from settings

**Steps:**
1. Use `useSettings` hook
2. Display school info, phone, email, social links
3. Make inputs dynamic

**Example:**

```javascript
import { useSettings } from '../hooks/useApi'

function Footer() {
  const { settings, loading, error } = useSettings()
  
  if (loading || !settings) return null
  
  return (
    <footer>
      <h3>{settings.schoolName}</h3>
      <p>{settings.address}</p>
      <p>Phone: {settings.phone.join(', ')}</p>
      <p>Email: {settings.email.join(', ')}</p>
      <div className="social-links">
        {settings.socialLinks.facebook && <a href={settings.socialLinks.facebook}>Facebook</a>}
        {settings.socialLinks.instagram && <a href={settings.socialLinks.instagram}>Instagram</a>}
      </div>
    </footer>
  )
}
```

## Complete File Updates

### 1. Update src/pages/Home.jsx

Find the news section and replace with:

```javascript
import { useNews } from '../hooks/useApi'

// In your component:
function Home() {
  const { news, loading } = useNews(1, 6)  // Get 6 news items
  
  return (
    <section className="py-12">
      <h2>Latest News</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-3">
          {news.map(item => (
            <article key={item._id}>
              {item.imageUrl && <img src={item.imageUrl} alt={item.title} />}
              <h3>{item.title}</h3>
              <p>{item.content.substring(0, 100)}...</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
```

### 2. Update src/pages/Gallery.jsx

```javascript
import { useState } from 'react'
import { useGallery, useGalleryCategories } from '../hooks/useApi'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const { gallery, loading } = useGallery(1, 12, selectedCategory)
  const { categories } = useGalleryCategories()

  return (
    <>
      <div className="flex gap-2 mb-8">
        <button onClick={() => setSelectedCategory('')}>All</button>
        {categories.map(cat => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {gallery.map(item => (
          <img key={item._id} src={item.imageUrl} alt={item.title} />
        ))}
      </div>
    </>
  )
}
```

### 3. Update src/pages/Instructors.jsx

```javascript
import { useStaff } from '../hooks/useApi'

export default function Instructors() {
  const { staff, loading } = useStaff()

  return (
    <div className="grid grid-cols-4 gap-6">
      {staff.map(member => (
        <div key={member._id}>
          {member.imageUrl && (
            <img src={member.imageUrl} alt={member.name} />
          )}
          <h3>{member.name}</h3>
          <p className="text-red-600">{member.position}</p>
          <p>{member.bio}</p>
        </div>
      ))}
    </div>
  )
}
```

### 4. Update src/components/AdmissionQueryForm.jsx

Already has the form structure, just update the submit handler:

```javascript
import { useAdmissionForm } from '../hooks/useApi'

const AdmissionQueryForm = () => {
  const [formData, setFormData] = useState({...})
  const { submit, loading, error, success } = useAdmissionForm()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await submit(formData)
    // Handle success/error
  }

  // Rest of component...
}
```

### 5. Update src/components/Footer.jsx

```javascript
import { useSettings } from '../hooks/useApi'

function Footer() {
  const { settings } = useSettings()

  if (!settings) return null

  return (
    <footer>
      <div>
        <h3>{settings.schoolName}</h3>
        <p>{settings.address}</p>
      </div>
      <div>
        <h4>Contact</h4>
        {settings.phone.map(phone => <p key={phone}>{phone}</p>)}
        {settings.email.map(email => <p key={email}>{email}</p>)}
      </div>
    </footer>
  )
}
```

## Testing Each Update

After updating each component:

```bash
# In project root
npm run dev

# Open browser to http://localhost:5173

# Check:
1. Does data load?
2. No console errors?
3. Images display?
4. Links work?
5. Forms submit?
```

## Troubleshooting

### Error: "Cannot read property 'map' of undefined"

**Cause**: Data is undefined before loading

**Fix**: Add loading check:
```javascript
if (loading || !news) return <div>Loading...</div>
{news.map(...)}
```

### Error: "Network error" or "CORS error"

**Cause**: Backend not running

**Fix**: Start backend in another terminal:
```bash
cd backend
npm run dev
```

### Images not showing

**Cause**: Image URLs are relative paths

**Fix**: Ensure backend is serving uploads folder on `http://localhost:3000/uploads/`

### Form submissions not working

**Cause**: useAdmissionForm hook error

**Fix**: Check browser console for full error message and backend logs

## Migration Timeline

**Suggested order:**
1. **Day 1**: Update Gallery, Staff (no forms)
2. **Day 2**: Update News display, Footer settings 
3. **Day 3**: Update Admission form, Contact page
4. **Day 4**: Test fully, debug any issues

## References

- API Client: [src/utils/apiClient.js](../src/utils/apiClient.js)
- Hooks: [src/hooks/useApi.js](../src/hooks/useApi.js)
- Examples: [src/examples/IntegrationExample.jsx](../src/examples/IntegrationExample.jsx)
- Backend API Docs: [backend/README.md](../backend/README.md)

## After Complete Integration

Once all components are updated:

1. ✅ **Frontend displays data from backend**
2. ✅ **Forms save to database**
3. ✅ **Admin can manage all content**
4. ✅ **Changes visible immediately**
5. ✅ Ready to deploy!

---

**Need help?** Check the IntegrationExample.jsx for working code samples!
