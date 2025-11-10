# Technical Documentation - Awfis Coworking Website

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Setup & Installation](#setup--installation)
5. [Development](#development)
6. [Form Integration Guide](#form-integration-guide)
7. [WhatsApp Integration](#whatsapp-integration)
8. [Asset Management](#asset-management)
9. [Deployment Guide](#deployment-guide)
10. [Backend Integration Requirements](#backend-integration-requirements)
11. [SEO & Meta Tags](#seo--meta-tags)
12. [Browser Support](#browser-support)

---

## Project Overview

This is a modern, responsive landing page for Awfis coworking spaces in Mumbai. The website features two lead capture forms with visit scheduling functionality, image galleries, amenities showcase, and comprehensive information about coworking services.

**Key Features:**
- Responsive design (mobile-first approach)
- Two lead capture forms with scheduling functionality
- WhatsApp integration for instant support
- Image carousel galleries for different space tiers (Gold, Elite, Awfis)
- Interactive city/locality selection
- FAQ section with tabbed navigation
- SEO optimized with structured data
- Smooth scroll animations

---

## Technology Stack

### Core Framework
- **React 18.3.1** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library (based on Radix UI)
- **Lucide React** - Icon library

### Routing & SEO
- **React Router DOM 6.30.1** - Client-side routing
- **React Helmet Async 2.0.5** - SEO meta tag management

### Form & UI Components
- **React Hook Form 7.61.1** - Form state management
- **Zod 3.25.76** - Schema validation
- **date-fns 3.6.0** - Date manipulation
- **Sonner** - Toast notifications
- **Embla Carousel React** - Image carousel

---

## Project Structure

```
awfis-mumbai/
├── public/
│   ├── robots.txt                 # SEO crawling rules
│   └── placeholder.svg            # Placeholder images
│
├── src/
│   ├── assets/                    # Static assets
│   │   ├── awfis-slide-*.jpg     # Awfis tier gallery images (7 images)
│   │   ├── elite-slide-*.jpg     # Elite tier gallery images (9 images)
│   │   ├── gold-slide-*.jpg      # Gold tier gallery images (10 images)
│   │   ├── hero-slide-*.jpg      # Hero section background slides (3 images)
│   │   ├── awfis-logo.png        # Brand logo
│   │   ├── qr-whatsapp.png       # WhatsApp QR code
│   │   └── city-icons/           # Location icons (18 cities)
│   │
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components (28 components)
│   │   ├── AmenitiesSection.tsx  # Amenities showcase
│   │   ├── BackgroundSlideshow.tsx # Hero background slider
│   │   ├── EmbeddedLeadForm.tsx  # Hero section form (RIGHT SIDE)
│   │   ├── FAQSection.tsx        # FAQ content
│   │   ├── FAQTab.tsx            # FAQ tab navigation
│   │   ├── FooterCTA.tsx         # Bottom CTA section
│   │   ├── GallerySection.tsx    # Image galleries
│   │   ├── HeroSection.tsx       # Hero section with form
│   │   ├── LeadForm.tsx          # Full-width bottom form
│   │   ├── NetworkSection.tsx    # Location network display
│   │   ├── ScrollToTop.tsx       # Scroll to top button
│   │   └── ServicesSection.tsx   # Services showcase
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx        # Mobile detection hook
│   │   └── use-toast.ts          # Toast notification hook
│   │
│   ├── lib/
│   │   └── utils.ts              # Utility functions (cn, etc.)
│   │
│   ├── pages/
│   │   ├── Index.tsx             # Main landing page
│   │   └── NotFound.tsx          # 404 page
│   │
│   ├── App.tsx                   # Root application component
│   ├── main.tsx                  # Application entry point
│   ├── index.css                 # Global styles & Tailwind
│   └── vite-env.d.ts            # TypeScript declarations
│
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

---

## Setup & Installation

### Prerequisites
- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher (or yarn/pnpm)

### Installation Steps

1. **Extract/Clone the project**
   ```bash
   cd awfis-mumbai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm run dev
   ```
   The site should be available at `http://localhost:5173`

---

## Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint

# Type check
npm run type-check
```

### Development Server
- **URL**: http://localhost:5173
- **Hot Module Replacement (HMR)**: Enabled by default
- **Auto-restart**: On file changes

### Build Output
- Production build creates optimized files in `dist/` folder
- All assets are hashed for cache busting
- CSS is minified and tree-shaken

---

## Form Integration Guide

### Overview
The website has **TWO** lead capture forms that need backend integration:

1. **EmbeddedLeadForm** - Hero section (right sidebar)
2. **LeadForm** - Bottom of page (full-width section)

---

### Form A: EmbeddedLeadForm (Hero Section)

**Location**: `src/components/EmbeddedLeadForm.tsx`

**Fields Collected:**
```typescript
interface EmbeddedFormData {
  fullName: string;        // Required - Text input
  email: string;           // Required - Email validation
  mobile: string;          // Required - Tel input
  company: string;         // Optional - Text input
  locality: string;        // Required - Dropdown (15 Mumbai locations)
  scheduleVisit: boolean;  // Optional - Checkbox
  selectedDate: string;    // Conditional - Radio group + custom date
  selectedTime: string;    // Conditional - Radio group (4 time slots)
}
```

**Locality Options:**
```javascript
["Airoli", "Andheri East", "Andheri West", "BKC", "Dadar West",
 "Ghatkopar West", "Goregaon East", "Hiranandani Powai", "Juinagar",
 "Lokhandwala", "Lower Parel", "Mulund", "New Cuffe Parade", "Thane", "Vashi"]
```

**Time Preferences:**
```javascript
["Breakfast meet", "Brunch meet", "Lunch meet", "High Tea meet"]
```

**Date Selection Logic:**
- User can select from next 3 days (radio buttons)
- OR pick custom date via calendar (disables past dates)
- Time preference only shows after date is selected

**Current Submit Handler (Lines 59-73):**
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  toast.success("Thank you! We'll contact you shortly to discuss your workspace needs.");
  // Form reset logic
  setFormData({
    fullName: "",
    email: "",
    mobile: "",
    company: "",
    locality: "",
    scheduleVisit: false,
    selectedDate: "",
    selectedTime: ""
  });
  setCustomDate(undefined);
};
```

**Integration Point:**
Replace the `toast.success()` line with your API call:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://your-api-endpoint.com/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        customDate: customDate ? format(customDate, 'yyyy-MM-dd') : null,
        formSource: 'embedded-hero-form',
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) throw new Error('Submission failed');
    
    const data = await response.json();
    toast.success("Thank you! We'll contact you shortly.");
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      company: "",
      locality: "",
      scheduleVisit: false,
      selectedDate: "",
      selectedTime: ""
    });
    setCustomDate(undefined);
    
  } catch (error) {
    console.error('Form submission error:', error);
    toast.error("Something went wrong. Please try again.");
  }
};
```

---

### Form B: LeadForm (Bottom Section)

**Location**: `src/components/LeadForm.tsx`

**Fields Collected:**
```typescript
interface LeadFormData {
  fullName: string;        // Required - Text input
  email: string;           // Required - Email validation
  mobile: string;          // Required - Tel input
  company: string;         // Optional - Text input
  city: string;            // Hardcoded to "Mumbai"
  locality: string;        // Required - Dropdown (same 15 locations)
  desksRequired: string;   // Optional - Number input
  scheduleVisit: boolean;  // Optional - Checkbox
  selectedSlot: string;    // Conditional - Predefined slots OR custom date
  customDate: Date | undefined; // Conditional - Calendar picker
}
```

**Predefined Time Slots (12 total):**
Generated dynamically for next 3 days:
```
Format: "DD-MMM-YYYY - Meeting Type"
Examples:
- "05-Oct-2025 - Breakfast meet"
- "05-Oct-2025 - Brunch meet"
- "05-Oct-2025 - Lunch meet"
- "05-Oct-2025 - High Tea meet"
(Repeats for 3 consecutive days)
```

**Current Submit Handler (Lines 62-77):**
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  toast.success("Thank you! We'll contact you shortly to discuss your workspace needs.");
  setFormData({
    fullName: "",
    email: "",
    mobile: "",
    company: "",
    city: "Mumbai",
    locality: "",
    desksRequired: "",
    scheduleVisit: false,
    selectedSlot: "",
    customDate: undefined
  });
};
```

**Integration Point:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://your-api-endpoint.com/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        customDate: formData.customDate ? format(formData.customDate, 'yyyy-MM-dd') : null,
        formSource: 'bottom-lead-form',
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) throw new Error('Submission failed');
    
    const data = await response.json();
    toast.success("Thank you! We'll contact you shortly.");
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      company: "",
      city: "Mumbai",
      locality: "",
      desksRequired: "",
      scheduleVisit: false,
      selectedSlot: "",
      customDate: undefined
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    toast.error("Something went wrong. Please try again.");
  }
};
```

---

### Expected API Payload Structure

**Example JSON Payload:**
```json
{
  "fullName": "John Doe",
  "email": "john.doe@example.com",
  "mobile": "+919876543210",
  "company": "Tech Startup Pvt Ltd",
  "city": "Mumbai",
  "locality": "BKC",
  "desksRequired": "5",
  "scheduleVisit": true,
  "selectedSlot": "05-Oct-2025 - Brunch meet",
  "customDate": null,
  "formSource": "embedded-hero-form",
  "timestamp": "2025-10-04T10:30:00.000Z"
}
```

---

## WhatsApp Integration

### Current Setup

**Mobile Devices:**
- Direct WhatsApp link: `https://wa.link/ednemj`
- Opens WhatsApp app directly with pre-filled message

**Desktop Devices:**
- QR Code image: `src/assets/qr-whatsapp.png`
- Users scan QR code to connect

**Pre-filled Message:**
```
"Hi! I'm interested in Awfis coworking spaces in Mumbai. Can you help me with more details?"
```

### Configuration

**To Update WhatsApp Number:**

1. Edit `src/components/EmbeddedLeadForm.tsx` (Line 96):
```typescript
href="https://wa.link/YOUR_NEW_LINK"
```

2. Edit `src/components/LeadForm.tsx` (Line 124):
```typescript
href="https://wa.link/YOUR_NEW_LINK"
```

3. Replace QR code image:
   - Generate new QR code for your WhatsApp number
   - Replace `src/assets/qr-whatsapp.png`

**Generate WhatsApp Link:**
```
https://wa.me/[PHONE_NUMBER]?text=[URL_ENCODED_MESSAGE]

Example:
https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20Awfis
```

---

## Asset Management

### Image Assets Inventory

**Hero Background Slides:**
- `src/assets/hero-slide-1.jpg`
- `src/assets/hero-slide-2.jpg`
- `src/assets/hero-slide-3.jpg`

**Gallery Images:**

*Gold Tier (10 images):*
- `src/assets/gold-slide-[1-10].jpg`

*Elite Tier (9 images):*
- `src/assets/elite-slide-[1-9].jpg`

*Awfis Standard (7 images):*
- `src/assets/awfis-slide-[1-7].jpg`

**City Icons (18 locations):**
- Located in `src/assets/city-icons/`
- PNG format, optimized for web
- Cities: Ahmedabad, Bengaluru, Bhubaneswar, Chandigarh, Chennai, Delhi, Gurgaon, Guwahati, Hyderabad, Indore, Jaipur, Kochi, Kolkata, Lucknow, Mumbai, Nagpur, Noida, Pune

**Brand Assets:**
- `src/assets/awfis-logo.png` - Company logo
- `src/assets/qr-whatsapp.png` - WhatsApp QR code

### Image Optimization Guidelines

All images should be:
- **Format**: WebP (with JPG fallback for older browsers)
- **Compression**: 80% quality
- **Max width**: 1920px for hero images, 800px for gallery
- **Naming convention**: kebab-case
- **Alt text**: Always provide descriptive alt attributes for SEO

---

## Deployment Guide

### Build Process

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Build output location**
   ```
   dist/
   ├── assets/
   │   ├── index-[hash].js    # Main JS bundle
   │   ├── index-[hash].css   # Compiled CSS
   │   └── [image-files]      # Optimized images
   ├── index.html             # Entry point
   └── robots.txt             # SEO rules
   ```

3. **Test production build locally**
   ```bash
   npm run preview
   ```

### Hosting Options

#### Option 1: Static Hosting (Recommended)
- **Netlify**
  - Drag and drop `dist/` folder
  - Or connect Git repository
  - Auto HTTPS + CDN included

- **Vercel**
  - Import Git repository
  - Auto-detects Vite config
  - Zero configuration needed

- **AWS S3 + CloudFront**
  - Upload `dist/` to S3 bucket
  - Configure CloudFront distribution
  - Set up custom domain

#### Option 2: Traditional Web Server
- **Nginx**
  ```nginx
  server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;
    
    location / {
      try_files $uri $uri/ /index.html;
    }
  }
  ```

- **Apache**
  ```apache
  <VirtualHost *:80>
    ServerName yourdomain.com
    DocumentRoot /path/to/dist
    
    <Directory /path/to/dist>
      Options -Indexes +FollowSymLinks
      AllowOverride All
      Require all granted
      
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.html$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteRule . /index.html [L]
    </Directory>
  </VirtualHost>
  ```

### Domain Configuration

1. **DNS Setup**
   - Add A record pointing to server IP
   - Or CNAME record for hosting platform

2. **SSL Certificate**
   - Use Let's Encrypt (free)
   - Or hosting platform's auto-SSL

3. **SEO Canonical URL**
   Update in `src/pages/Index.tsx`:
   ```tsx
   <link rel="canonical" href="https://YOUR-DOMAIN.com/" />
   ```

---

## Backend Integration Requirements

### API Endpoint Specifications

#### POST /api/leads

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "fullName": "string (required)",
  "email": "string (required, email format)",
  "mobile": "string (required, 10 digits)",
  "company": "string (optional)",
  "city": "string (default: Mumbai)",
  "locality": "string (required, from predefined list)",
  "desksRequired": "string (optional, number)",
  "scheduleVisit": "boolean",
  "selectedDate": "string (ISO date format) or null",
  "selectedTime": "string or null",
  "selectedSlot": "string or null",
  "customDate": "string (ISO date format) or null",
  "formSource": "string (embedded-hero-form | bottom-lead-form)",
  "timestamp": "string (ISO timestamp)"
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "leadId": "unique-lead-identifier",
  "message": "Lead captured successfully"
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "error": "Validation error message",
  "fields": {
    "email": "Invalid email format"
  }
}
```

**Error Response (500 Server Error):**
```json
{
  "success": false,
  "error": "Internal server error"
}
```

### Validation Requirements

**Server-Side Validation (Required):**

1. **Email Validation**
   - Valid email format
   - Domain existence check (optional)

2. **Mobile Number Validation**
   - Exactly 10 digits
   - Indian number format: ^[6-9]\d{9}$

3. **Required Fields Check**
   - fullName: Min 2 characters
   - email: Valid format
   - mobile: 10 digits
   - locality: From predefined list

4. **Date Validation**
   - If scheduleVisit is true, date must be present
   - Date must be in future
   - Date format: ISO 8601

5. **Sanitization**
   - Strip HTML tags
   - Escape special characters
   - Prevent SQL injection

### Security Recommendations

1. **Rate Limiting**
   ```
   - 5 submissions per IP per hour
   - Prevent automated spam
   ```

2. **CORS Configuration**
   ```
   Allow-Origin: your-domain.com
   Allow-Methods: POST
   Allow-Headers: Content-Type
   ```

3. **Data Encryption**
   - HTTPS only (TLS 1.2+)
   - Encrypt sensitive data at rest

4. **Honeypot Field**
   Add hidden field to catch bots:
   ```html
   <input type="text" name="website" style="display:none" />
   ```

5. **CAPTCHA (Optional)**
   - Google reCAPTCHA v3
   - Only visible on suspicious activity

### Database Schema Suggestion

```sql
CREATE TABLE leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  mobile VARCHAR(10) NOT NULL,
  company VARCHAR(255),
  city VARCHAR(100) DEFAULT 'Mumbai',
  locality VARCHAR(100) NOT NULL,
  desks_required INT,
  schedule_visit BOOLEAN DEFAULT FALSE,
  visit_date DATE,
  visit_time VARCHAR(50),
  form_source VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45),
  user_agent TEXT,
  status ENUM('new', 'contacted', 'converted', 'lost') DEFAULT 'new',
  notes TEXT,
  INDEX idx_email (email),
  INDEX idx_created_at (created_at),
  INDEX idx_status (status)
);
```

### Notification Integration

**Email Notifications:**

1. **To User (Confirmation Email)**
   - Subject: "Thank you for your interest in Awfis Mumbai"
   - Body: Confirmation + next steps
   - Include visit details if scheduled

2. **To Admin/Sales Team**
   - Subject: "New Lead: [Name] - [Locality]"
   - Body: All form details
   - Call-to-action: Contact lead

**CRM Integration Options:**
- Salesforce API
- HubSpot API
- Zoho CRM API
- Google Sheets API (simple option)

---

## SEO & Meta Tags

### Current SEO Implementation

**Location**: `src/pages/Index.tsx` (Lines 15-45)

**Title Tag:**
```
Professional Coworking Office Spaces in Mumbai | Awfis - Starting ₹9,000/month
```

**Meta Description:**
```
Premium coworking office spaces in Mumbai with private cabins & fixed desks. 
Starting ₹9,000/month, 1-month lock-in. BKC, Lower Parel, Andheri & 15+ locations.
```

**Keywords:**
```
coworking space mumbai, office space mumbai, private office mumbai, 
awfis mumbai, coworking bkc, office space lower parel
```

**Structured Data (JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Awfis Mumbai Coworking Spaces",
  "description": "Professional coworking office spaces in Mumbai",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mumbai",
    "addressCountry": "IN"
  },
  "telephone": "1800-123-AWFIS",
  "priceRange": "₹9000-₹50000",
  "openingHours": "Mo-Su 00:00-24:00"
}
```

### robots.txt Configuration

**Location**: `public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### SEO Checklist

- ✅ Semantic HTML5 structure
- ✅ Single H1 per page
- ✅ Alt text on all images
- ✅ Meta description under 160 characters
- ✅ Title tag under 60 characters
- ✅ Structured data (LocalBusiness)
- ✅ Canonical URL
- ✅ Open Graph tags
- ✅ Mobile-responsive design
- ✅ Fast load times (Lighthouse score optimization)

---

## Browser Support

### Supported Browsers

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |
| Mobile Safari (iOS) | 14+ |
| Chrome (Android) | 90+ |

### Known Compatibility

- **CSS Grid**: Full support
- **CSS Flexbox**: Full support
- **ES6+ JavaScript**: Transpiled by Vite
- **CSS Custom Properties**: Full support
- **Date Input**: Polyfilled for older browsers

---

## Additional Notes

### Performance Optimization

1. **Lazy Loading**
   - Images below the fold are lazy-loaded
   - Uses native `loading="lazy"` attribute

2. **Code Splitting**
   - React Router implements automatic code splitting
   - Each route is a separate chunk

3. **CSS Optimization**
   - Tailwind CSS purges unused styles
   - Only used utilities are included in build

### Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- Color contrast ratio: WCAG AA compliant

### Maintenance

**Regular Updates:**
- Dependencies: Monthly security updates
- Images: Optimize as needed
- Content: Update pricing, locations as needed

**Monitoring:**
- Google Analytics integration (add your tracking ID)
- Error tracking (Sentry recommended)
- Uptime monitoring (UptimeRobot/Pingdom)

---

## Support & Contact

For technical questions about this codebase:
- Review component documentation in source files
- Check React + Vite official documentation
- Review shadcn/ui component examples

---

## License

Proprietary - Awfis Space Solutions Pvt Ltd

---

**Last Updated**: October 4, 2025  
**Version**: 1.0.0
