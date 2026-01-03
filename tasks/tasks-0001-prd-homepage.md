# Rofsan Sir Website - Complete Product Requirements Document (PRD)

## Overview
This PRD outlines the complete requirements for the Rofsan Sir O Level Bengali website based on the comprehensive content document. The website serves as a platform for Rofsan Khan, a CAIE-certified Cambridge Bengali Examiner, to showcase his expertise, published books, courses, and resources for O Level Bengali students.

## Brand Identity
- **Primary Colors**: Navy Blue (#2C3E6D), Bright Blue (#1E88E5), Sky Blue (#42A5F5), Deep Blue (#1565C0)
- **Accent Colors**: Gold (#FFD700) for achievements, White (#FFFFFF) for backgrounds
- **Typography**: Amaranth/Montserrat for English headlines, Hind Siliguri/Kalpurush for Bengali, Open Sans/Roboto for body text
- **Trust Elements**: Cambridge Assessment, Edexcel, ELITES logos

## Technical Stack
- **Backend**: Laravel 12 with Inertia.js v2
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: MySQL with Eloquent ORM
- **Authentication**: Laravel Fortify
- **File Storage**: Local storage with Google Drive integration for student resources
- **Testing**: Pest v4 with browser testing capabilities

## Website Pages & Features

### 1. Home Page (/)
**Sections:**
- Hero Section with headline, subheadline, CTA buttons
- Quick Stats Bar (10+ Years Experience, CAIE Certified, etc.)
- About Rofsan Sir (short intro with credentials)
- Course Showcase Section
- Published Books Slider with arrow navigation
- Current Admissions Banner
- Trust Badges

### 2. Courses & Admission Page (/courses)
**Features:**
- Course overview (Paper 1 & 2 details)
- Course features (High-tech classroom, resources, tests)
- Special programs (Topical Mock Tests, Crash Course)
- Current admissions status
- Enrollment process with CTA buttons
- Why choose Rofsan Sir section
- Class locations and contact info

### 3. Resources Page (/resources)
**Features:**
- Resource categories (Literature Analysis, Grammar Notes, Vocabulary, Past Papers, Worksheets)
- Published Guidebooks (Premium/Free sections)
- Free resources download
- Filter systems for all categories
- Download instructions and access levels

### 4. Examiner Tips Page (/examiner-tips)
**Features:**
- Paper 1 & 2 specific tips
- Weekly "Examiner's Eye" feature
- Mark scheme decoded
- Common mistakes database
- Student success stories
- Ask the Examiner form

### 5. Students Portal Page (/students-portal)
**Features:**
- Student login system
- Dashboard with resources access
- Google Drive integration for materials
- Downloadable PDFs by topic
- Progress tracking
- Assignment submissions
- Communication tools
- Admin dashboard for management

### 6. About Rofsan Khan Page (/about)
**Sections:**
- Complete biography
- Career journey and leadership
- Academic qualifications
- Examiner expertise
- Teaching philosophy
- Published works
- Professional approach and vision

### 7. Contact/Enquiry Page (/contact)
**Features:**
- WhatsApp direct contact
- Contact form with validation
- Location information with Google Maps
- Office hours
- Enquiry handling system

### 8. Footer (All Pages)
**Sections:**
- About Rofsan Sir
- Quick Links navigation
- Contact Information
- Office Hours & Social Media
- Resources & Quick Info
- Trust Badges
- Newsletter signup
- Copyright and legal links

## Technical Requirements

### Responsive Design
- Mobile-first approach
- Tablet optimization (768px+)
- Desktop experience (1024px+)
- Touch-friendly interactions

### Functional Requirements
- Image scrolling carousel
- Book slider with arrow navigation
- Filter systems for resources
- Student authentication system
- Google Drive API integration
- Email capture system
- Downloadable PDF functionality
- Admin CMS for content management
- WhatsApp integration
- Form validation and submission

### Performance Requirements
- Fast loading times (<3 seconds)
- Optimized images and assets
- Lazy loading for carousels
- SEO optimization with proper meta tags
- Accessibility compliance (WCAG 2.1)

### Security Requirements
- Secure authentication
- CSRF protection
- XSS prevention
- Secure file uploads
- GDPR compliance for data handling

## Database Models Required
- User (authentication)
- Student (portal access)
- Routine (class schedules)
- Resource (downloadable materials)
- Book (published works)
- Course (enrollment data)
- Contact (enquiry submissions)
- AdminContent (dynamic content management)

## API Integrations
- Google Drive API (student resources)
- WhatsApp API (direct messaging)
- Email service (notifications)
- Payment gateway (future premium features)

## Testing Requirements
- Unit tests for all components
- Feature tests for pages
- Browser tests with Pest v4
- Accessibility testing
- Performance testing

## SEO Requirements
- Keyword optimization (O Level Bangla, Cambridge Bengali Examiner, etc.)
- Meta tags for all pages
- Structured data markup
- Fast loading optimization
- Mobile-friendly design

## Relevant Files

### Backend Files
- `app/Http/Controllers/` - Page controllers (HomeController, CoursesController, etc.)
- `app/Models/` - Eloquent models (User, Student, Resource, Book, etc.)
- `database/migrations/` - Database schema migrations
- `routes/web.php` - Route definitions
- `resources/views/app.blade.php` - Main layout template

### Frontend Files
- `resources/js/pages/` - Inertia page components
- `resources/js/components/` - Reusable React components
- `resources/js/layouts/` - Layout components
- `resources/css/app.css` - Custom styles and brand colors
- `public/` - Static assets (images, logos, books)

### Test Files
- `tests/Feature/` - Feature tests for pages
- `tests/Unit/` - Unit tests for components and models
- `tests/Browser/` - Browser tests for interactions

## Tasks

### Phase 1: Foundation & Setup
- [x] 1.0 Set up routing and basic structure
  - [x] 1.1 Create base controllers and routes for all pages
  - [x] 1.2 Set up Inertia pages structure
  - [x] 1.3 Configure authentication with Fortify
  - [x] 1.4 Set up database models and migrations
- [ ] 1.5 Implement responsive layout system
- [ ] 1.6 Apply brand styling (colors, fonts, Tailwind config)
- [ ] 1.7 Create footer component (appears on all pages)

### Phase 2: Home Page Implementation
- [ ] 2.0 Implement hero section and trust elements
  - [ ] 2.1 Create hero-section.tsx with overlay and CTAs
  - [ ] 2.2 Create trust-bar.tsx with institution logos
  - [ ] 2.3 Add quick statistics display
  - [ ] 2.4 Integrate components into homepage layout
- [ ] 2.5 Create course and book showcases
  - [ ] 2.6 Create course-showcase.tsx component
  - [ ] 2.7 Create book-slider.tsx with navigation
  - [ ] 2.8 Implement slider functionality
  - [ ] 2.9 Add admissions banner section
- [ ] 2.10 Add image carousel and routine display
  - [ ] 2.11 Create image-carousel.tsx component
  - [ ] 2.12 Create Routine model and migration
  - [ ] 2.13 Create routine-display.tsx component
  - [ ] 2.14 Update HomeController for dynamic data

### Phase 3: Core Pages Implementation
- [ ] 3.0 Courses & Admission Page
  - [ ] 3.1 Create courses page with overview sections
  - [ ] 3.2 Add course features and special programs
  - [ ] 3.3 Implement enrollment forms and CTAs
  - [ ] 3.4 Add location and contact information
- [ ] 3.5 Resources Page
  - [ ] 3.6 Create resource categories and filtering
  - [ ] 3.7 Implement free/premium resource sections
  - [ ] 3.8 Add download functionality
  - [ ] 3.9 Create Resource model for content management
- [ ] 3.10 Examiner Tips Page
  - [ ] 3.11 Create tips categories and content structure
  - [ ] 3.12 Add "Ask the Examiner" form
  - [ ] 3.13 Implement weekly feature system
  - [ ] 3.14 Create ExaminerTip model

### Phase 4: Advanced Features
- [ ] 4.0 Students Portal Implementation
  - [ ] 4.1 Create authentication system for students
  - [ ] 4.2 Build dashboard with resource access
  - [ ] 4.3 Integrate Google Drive API
  - [ ] 4.4 Add progress tracking and assignments
  - [ ] 4.5 Create admin dashboard for management
- [ ] 4.6 About & Contact Pages
  - [ ] 4.7 Create comprehensive about page
  - [ ] 4.8 Implement contact forms and WhatsApp integration
  - [ ] 4.9 Add Google Maps integration
- [ ] 4.10 Content Management System
  - [ ] 4.11 Create admin interfaces for content updates
  - [ ] 4.12 Add dynamic content models
  - [ ] 4.13 Implement newsletter signup

### Phase 5: Testing & Optimization
- [ ] 5.0 Comprehensive Testing
  - [ ] 5.1 Write unit tests for all components
  - [ ] 5.2 Create feature tests for pages
  - [ ] 5.3 Implement browser tests with Pest v4
  - [ ] 5.4 Test accessibility and responsiveness
- [ ] 5.5 Performance Optimization
  - [ ] 5.6 Optimize images and assets
  - [ ] 5.7 Implement lazy loading
  - [ ] 5.8 Add SEO meta tags and structured data
- [ ] 5.9 Final Polish
  - [ ] 5.10 Run vendor/bin/pint --dirty for code formatting
  - [ ] 5.11 Cross-browser testing
  - [ ] 5.12 Final security audit

## Success Metrics
- Page load times < 3 seconds
- Mobile-friendly score > 90/100
- SEO performance improvements
- User engagement (time on page, conversion rates)
- Student portal adoption rate
- Resource download tracking

## Notes
- Follow Laravel and Inertia.js best practices
- Use TypeScript for all React components
- Implement proper error handling and validation
- Ensure accessibility compliance throughout
- Regular code formatting with Pint
- Comprehensive testing before deployment
- Use semantic HTML and proper heading hierarchy
