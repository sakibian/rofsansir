# Product Requirements Document: Homepage Feature

## Introduction/Overview

The homepage feature serves as the primary landing page for the Rofsan Sir portal website, showcasing the brand identity and credibility of Rofsan Sir as a CAIE O Level Bengali examiner. This feature addresses the core problem of establishing trust and credibility with the website owner, providing an informative and functional entry point for parents, students, and teachers to learn about courses, routines, and the teacher's background.

## Goals

- Establish credibility and trust through professional presentation of Rofsan Sir's credentials and experience
- Provide clear information about available courses and class schedules
- Showcase educational resources and books in an engaging manner
- Create an intuitive user experience that guides visitors to relevant sections
- Reflect the brand identity with academic excellence and Bengali heritage

## User Stories

- As a parent, I want to know about courses, classes, routines, and about the teacher himself so that I can decide if it's suitable for my child.
- As a student, I want to know about my routine, find resources, class schedule, and know about teacher plan so that I can prepare for classes.

## Functional Requirements

1. Display a hero section with a prominent image of Rofsan Sir overlaid with the headline "Master O Level Bangla with a CAIE Examiner."
2. Include a trust bar showcasing logos of Cambridge, ESS, and OIS institutions.
3. Show quick statistics: 10+ Years Experience, CAIE Examiner, 100+ Students / Year.
4. Provide a course showcase section highlighting O Level Bangla Full Course, Paper 1 (Composition, Comprehension), and Paper 2 (Language & Grammar).
5. Display a books section with slide functionality (arrow controls or auto-interval) showing published books.
6. Implement image scrolling/carousel for visual engagement.
7. Include a short introduction about Rofsan Sir's background and teaching philosophy.
8. Provide quick navigation links to Latest Resources and Current Batches.
9. Include call-to-action buttons such as "Enrol Now" and "View Resources."
10. Dynamically display class routine based on admin-configured data.

## Non-Goals (Out of Scope)

- User authentication or registration functionality
- Payment processing or enrollment forms
- Admin dashboard or content management
- Student login portal access
- Interactive features beyond basic navigation

## Design Considerations

- Follow the brand guidelines specified in Bio.txt: Primary Navy (#003366), Secondary Crimson (#A30000), Gold (#FFD700), Clean White/Light Grey (#F9F9F9)
- Use Amaranth font for primary headlines and Open Sans/Roboto for body text
- Incorporate professional portraiture and high-quality book mockups
- Ensure responsive design for mobile, tablet, and desktop
- Match the visual layout and elements shown in homepage.png mockup
- Use Tailwind CSS v4 for styling with proper spacing and gap utilities

## Technical Considerations

- Built using Laravel 12 with Inertia.js v2 and React 19
- Implement responsive carousel/slider components for image scrolling and book showcase
- Use Eloquent models for dynamic routine data retrieval
- Ensure fast loading times with optimized images and minimal JavaScript
- Follow Laravel conventions for routing and controller structure
- Use Wayfinder for type-safe route generation

## Success Metrics

- The site is functional and informative for targeted users (parents, students, teachers)
- All required elements load correctly and are visually appealing
- Brand identity is accurately reflected through colors, typography, and imagery
- Page loads within acceptable time limits (<3 seconds)
- Responsive behavior works across different devices and screen sizes

## Open Questions

- What specific images should be used for the hero section and carousel?
- How should the image scrolling/carousel be implemented (auto-play interval vs. manual controls)?
- What is the data structure for the dynamic routine display?
- Are there any specific animations or transitions required for the book slider?
- Should the homepage include any form of contact integration (e.g., WhatsApp link)?
