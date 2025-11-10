# Icon Migration Guide for AngularJS Integration

Complete guide for migrating 16 Lucide icons from React to AngularJS (awfis.com)

---

## Table of Contents
1. [Overview](#overview)
2. [Icon Inventory](#icon-inventory)
3. [Download Links](#download-links)
4. [Complete SVG Code](#complete-svg-code)
5. [Folder Structure](#folder-structure)
6. [AngularJS Integration Methods](#angularjs-integration-methods)
7. [Styling Guide](#styling-guide)
8. [Size Reference](#size-reference)
9. [PNG Export Guide](#png-export-guide)

---

## Overview

Your React project uses 16 Lucide icons rendered as React components. This guide provides everything needed to integrate these icons into your AngularJS project at awfis.com.

**Total Icons:** 16  
**Categories:** FAQ (1), Forms (6), Gallery (2), Amenities (8)  
**Base Size:** 24x24px  
**Stroke Width:** 2  
**Color:** currentColor (inherits from parent)

---

## Icon Inventory

### FAQ Icons (1)
- `help-circle` - Question mark icon for FAQ button and dialog

### Form Icons (6)
- `smartphone` - Chat With Us header icon
- `message-circle` - WhatsApp Chat Now button
- `user` - Form section "Help us reach you" header
- `map-pin` - Locality field label
- `clock` - Schedule a visit checkbox
- `calendar` - Custom date picker button

### Gallery Icons (2)
- `chevron-left` - Carousel previous button
- `chevron-right` - Carousel next button

### Amenities Icons (8)
- `coffee` - All-day Café
- `wifi` - High Speed Wi-Fi
- `users` - 24/7 Housekeeping
- `wrench` - Expert IT Support
- `printer` - Printing & Scanning
- `building` - Office Administration
- `car` - Ample Car Parking
- `map-pin` - Travel Solutions

---

## Download Links

Visit these URLs to download icons directly from Lucide.dev:

### FAQ Icons
- **help-circle**: https://lucide.dev/icons/help-circle

### Form Icons
- **smartphone**: https://lucide.dev/icons/smartphone
- **message-circle**: https://lucide.dev/icons/message-circle
- **user**: https://lucide.dev/icons/user
- **map-pin**: https://lucide.dev/icons/map-pin
- **clock**: https://lucide.dev/icons/clock
- **calendar**: https://lucide.dev/icons/calendar

### Gallery Icons
- **chevron-left**: https://lucide.dev/icons/chevron-left
- **chevron-right**: https://lucide.dev/icons/chevron-right

### Amenities Icons
- **coffee**: https://lucide.dev/icons/coffee
- **wifi**: https://lucide.dev/icons/wifi
- **users**: https://lucide.dev/icons/users
- **wrench**: https://lucide.dev/icons/wrench
- **printer**: https://lucide.dev/icons/printer
- **building**: https://lucide.dev/icons/building
- **car**: https://lucide.dev/icons/car

**Note:** `map-pin` is used in both Forms (12px) and Amenities (32px)

---

## Complete SVG Code

### FAQ Icons

#### help-circle.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
  <line x1="12" y1="17" x2="12.01" y2="17"/>
</svg>
```

---

### Form Icons

#### smartphone.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
  <line x1="12" y1="18" x2="12.01" y2="18"/>
</svg>
```

#### message-circle.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
</svg>
```

#### user.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
  <circle cx="12" cy="7" r="4"/>
</svg>
```

#### map-pin.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
  <circle cx="12" cy="10" r="3"/>
</svg>
```

#### clock.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <polyline points="12 6 12 12 16 14"/>
</svg>
```

#### calendar.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
  <line x1="16" y1="2" x2="16" y2="6"/>
  <line x1="8" y1="2" x2="8" y2="6"/>
  <line x1="3" y1="10" x2="21" y2="10"/>
</svg>
```

---

### Gallery Icons

#### chevron-left.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="15 18 9 12 15 6"/>
</svg>
```

#### chevron-right.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="9 18 15 12 9 6"/>
</svg>
```

---

### Amenities Icons

#### coffee.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
  <line x1="6" y1="1" x2="6" y2="4"/>
  <line x1="10" y1="1" x2="10" y2="4"/>
  <line x1="14" y1="1" x2="14" y2="4"/>
</svg>
```

#### wifi.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
  <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
  <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
  <line x1="12" y1="20" x2="12.01" y2="20"/>
</svg>
```

#### users.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
  <circle cx="9" cy="7" r="4"/>
  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
</svg>
```

#### wrench.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
</svg>
```

#### printer.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 9 6 2 18 2 18 9"/>
  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
  <rect x="6" y="14" width="12" height="8"/>
</svg>
```

#### building.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
  <path d="M9 22v-4h6v4"/>
  <path d="M8 6h.01"/>
  <path d="M16 6h.01"/>
  <path d="M12 6h.01"/>
  <path d="M12 10h.01"/>
  <path d="M12 14h.01"/>
  <path d="M16 10h.01"/>
  <path d="M16 14h.01"/>
  <path d="M8 10h.01"/>
  <path d="M8 14h.01"/>
</svg>
```

#### car.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
  <circle cx="7" cy="17" r="2"/>
  <path d="M9 17h6"/>
  <circle cx="17" cy="17" r="2"/>
</svg>
```

---

## Folder Structure

Recommended organization for your AngularJS project:

```
assets/
└── icons/
    ├── faq/
    │   └── help-circle.svg
    ├── forms/
    │   ├── smartphone.svg
    │   ├── message-circle.svg
    │   ├── user.svg
    │   ├── map-pin.svg
    │   ├── clock.svg
    │   └── calendar.svg
    ├── gallery/
    │   ├── chevron-left.svg
    │   └── chevron-right.svg
    └── amenities/
        ├── coffee.svg
        ├── wifi.svg
        ├── users.svg
        ├── wrench.svg
        ├── printer.svg
        ├── building.svg
        ├── car.svg
        └── map-pin.svg
```

---

## AngularJS Integration Methods

### Method 1: Direct SVG Inline (Recommended)

**Best for:** Simple integration with full styling control

#### Example: FAQ Button
```html
<button class="faq-button">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
  <span>FAQs</span>
</button>
```

#### Example: Amenity Card
```html
<div class="amenity-card">
  <div class="icon-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  </div>
  <h3>All-day Café</h3>
  <p>Avail all-day café services with up to 15% OFF</p>
</div>
```

#### Example: Form Field with Icon
```html
<label class="form-label">
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
  <span>Select Locality</span>
</label>
```

---

### Method 2: AngularJS Icon Directive

**Best for:** Reusable icon component across the application

#### Create the Directive (icon.directive.js)
```javascript
angular.module('awfisApp').directive('awfisIcon', function() {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      size: '@',
      color: '@',
      strokeWidth: '@',
      cssClass: '@'
    },
    template: function(element, attrs) {
      const size = attrs.size || '24';
      const color = attrs.color || 'currentColor';
      const strokeWidth = attrs.strokeWidth || '2';
      const cssClass = attrs.cssClass || '';
      
      const icons = {
        'help-circle': '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
        
        'smartphone': '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
        
        'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
        
        'user': '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
        
        'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
        
        'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
        
        'calendar': '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
        
        'chevron-left': '<polyline points="15 18 9 12 15 6"/>',
        
        'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
        
        'coffee': '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>',
        
        'wifi': '<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',
        
        'users': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        
        'wrench': '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
        
        'printer': '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
        
        'building': '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
        
        'car': '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>'
      };
      
      return '<svg class="' + cssClass + '" xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="' + strokeWidth + '" stroke-linecap="round" stroke-linejoin="round">' + 
             (icons[attrs.name] || '') + 
             '</svg>';
    }
  };
});
```

#### Usage in HTML
```html
<!-- FAQ Button -->
<awfis-icon name="help-circle" size="16" color="#FF6B35"></awfis-icon>

<!-- Amenity Card -->
<awfis-icon name="coffee" size="32" color="currentColor" css-class="amenity-icon"></awfis-icon>

<!-- Form Field -->
<awfis-icon name="map-pin" size="12"></awfis-icon>

<!-- Gallery Navigation -->
<awfis-icon name="chevron-left" size="24" css-class="carousel-arrow"></awfis-icon>
```

---

### Method 3: Using SVG Files with ng-include

**Best for:** When you want to keep SVG files separate

#### Save SVG Files
Save each SVG code above as individual `.svg` files in your organized folder structure.

#### HTML Usage
```html
<!-- Include SVG file -->
<div ng-include="'assets/icons/forms/smartphone.svg'" class="icon icon-md"></div>

<!-- In a button -->
<button>
  <div ng-include="'assets/icons/faq/help-circle.svg'" class="icon icon-sm"></div>
  <span>FAQs</span>
</button>
```

---

## Styling Guide

### Icon Size Classes

Match your React implementation with these CSS classes:

```css
/* Icon sizing classes */
.icon-xs {
  width: 12px;
  height: 12px;
}  /* Equivalent to w-3 h-3 in Tailwind */

.icon-sm {
  width: 16px;
  height: 16px;
}  /* Equivalent to w-4 h-4 in Tailwind */

.icon-md {
  width: 20px;
  height: 20px;
}  /* Equivalent to w-5 h-5 in Tailwind */

.icon-lg {
  width: 24px;
  height: 24px;
}  /* Equivalent to w-6 h-6 in Tailwind */

.icon-xl {
  width: 32px;
  height: 32px;
}  /* Equivalent to w-8 h-8 in Tailwind */
```

### Color Customization

#### Method 1: Using currentColor (Recommended)
```css
/* Icon inherits color from parent text color */
.primary-button {
  color: #FF6B35;
}

.primary-button svg {
  stroke: currentColor; /* Will be #FF6B35 */
}
```

#### Method 2: Direct Stroke Color
```css
.amenity-icon {
  stroke: #FF6B35;
}

.form-icon {
  stroke: #4A5568;
}
```

#### Method 3: Color Classes
```css
.icon-primary { stroke: #FF6B35; }
.icon-accent { stroke: #F59E0B; }
.icon-success { stroke: #10B981; }
.icon-white { stroke: #FFFFFF; }
.icon-gray { stroke: #6B7280; }
```

### Complete Example Stylesheet

```css
/* awfis-icons.css */

/* Base icon styling */
svg[data-icon] {
  display: inline-block;
  vertical-align: middle;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Size classes */
.icon-xs { width: 12px; height: 12px; }
.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 20px; height: 20px; }
.icon-lg { width: 24px; height: 24px; }
.icon-xl { width: 32px; height: 32px; }

/* Color classes */
.icon-primary { stroke: #FF6B35; }
.icon-accent { stroke: #F59E0B; }
.icon-success { stroke: #10B981; }
.icon-white { stroke: #FFFFFF; }

/* Context-specific styling */
.faq-button svg {
  margin-right: 8px;
  transition: transform 0.3s ease;
}

.faq-button:hover svg {
  transform: rotate(15deg);
}

.amenity-card .icon-wrapper {
  padding: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 107, 53, 0.05));
  margin-bottom: 16px;
  transition: transform 0.3s ease;
}

.amenity-card:hover .icon-wrapper {
  transform: scale(1.1);
}

.carousel-arrow {
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.carousel-arrow:hover {
  opacity: 0.7;
}
```

---

## Size Reference

Complete reference matching your React implementation:

| Location | Icon Name | React Size | Pixels | CSS Class | Color |
|----------|-----------|------------|--------|-----------|-------|
| FAQ Button | help-circle | w-4 h-4 | 16px | icon-sm | currentColor |
| FAQ Dialog Header | help-circle | w-6 h-6 | 24px | icon-lg | #FF6B35 |
| Chat Header | smartphone | w-5 h-5 | 20px | icon-md | currentColor |
| WhatsApp Button | message-circle | w-4 h-4 | 16px | icon-sm | currentColor |
| Form Section Header | user | w-5 h-5 | 20px | icon-md | currentColor |
| Locality Label | map-pin | w-3 h-3 | 12px | icon-xs | currentColor |
| Schedule Checkbox | clock | w-3 h-3 | 12px | icon-xs | currentColor |
| Calendar Button | calendar | w-4 h-4 | 16px | icon-sm | currentColor |
| Gallery Prev/Next | chevron-* | default | 24px | icon-lg | white |
| All Amenities | various | w-8 h-8 | 32px | icon-xl | #FF6B35 |

---

## PNG Export Guide

If you need PNG files instead of SVG:

### Recommended Export Sizes
- **16px** - For small icons (w-4 h-4)
- **24px** - For medium icons (w-6 h-6)
- **32px** - For large icons (w-8 h-8)
- **48px** - For retina/high-DPI displays (2x size)

### Naming Convention
```
icon-name-16.png
icon-name-24.png
icon-name-32.png
icon-name-48.png
```

Example:
```
help-circle-16.png
help-circle-24.png
coffee-32.png
coffee-48.png
```

### Online Conversion Tools

1. **CloudConvert** (Batch conversion)
   - URL: https://cloudconvert.com/svg-to-png
   - Upload SVG files
   - Set desired width/height
   - Download PNG batch

2. **Convertio** (Free, no signup)
   - URL: https://convertio.co/svg-png/
   - Drag and drop SVG files
   - Convert and download

3. **SVG2PNG** (Simple interface)
   - URL: https://svgtopng.com/
   - Upload SVG
   - Set dimensions
   - Download PNG

### Manual Download from Lucide.dev
1. Visit the icon page (links in "Download Links" section)
2. Click "Export" button
3. Select "PNG" format
4. Choose size (16px, 24px, 32px, 48px)
5. Download

---

## Quick Start Checklist

- [ ] Copy all 16 SVG codes from "Complete SVG Code" section
- [ ] Create folder structure in your AngularJS project
- [ ] Save each SVG as individual `.svg` file
- [ ] Choose integration method (Direct Inline, Directive, or ng-include)
- [ ] Implement icon directive if using Method 2
- [ ] Copy CSS styling from "Styling Guide" section
- [ ] Test all icons in different contexts (buttons, cards, forms)
- [ ] Verify sizes match the React implementation
- [ ] Apply color customization as needed
- [ ] Export PNGs if required for email templates or other uses

---

## Support Resources

- **Lucide Icon Library**: https://lucide.dev
- **AngularJS Directives Guide**: https://docs.angularjs.org/guide/directive
- **SVG Tutorial**: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial
- **Online SVG Editor**: https://boxy-svg.com/ (for customization)

---

## Notes

- All icons use `stroke="currentColor"` for easy color inheritance
- Base viewBox is `0 0 24 24` for all icons
- Stroke width is `2` to match Lucide's default
- Icons are resolution-independent when using SVG
- PNG files are recommended only for email templates or legacy systems

---

**Document Version:** 1.0  
**Last Updated:** 2025-10-31  
**Total Icons:** 16  
**Format:** SVG (PNG export available)
