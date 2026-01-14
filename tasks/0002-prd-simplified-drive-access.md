# Product Requirements Document: Simplified Google Drive Access System

## Introduction/Overview

The simplified Google Drive access system replaces the complex individual student permission management with a streamlined approach suitable for batch-based learning. Instead of managing individual student accounts and folder permissions, the system provides one shared login account per batch while tracking individual Gmail access for accountability.

## Goals

- Simplify teacher workflow by removing complex permission management
- Provide one shared login account for all students in a batch
- Track individual student access through personal Gmail authentication
- Enable teachers to revoke access for misbehaving students
- Maintain accountability while reducing administrative overhead

## User Stories

- As a teacher, I want to provide one login account for an entire batch so that I don't have to manage individual student accounts and permissions.
- As a teacher, I want to know which students accessed which materials using their personal Gmail so that I can monitor engagement and revoke access if needed.
- As a student, I want to use a shared batch account to access the portal and then authenticate with my personal Gmail when viewing study materials so that my individual access is tracked.
- As a teacher, I want to easily revoke access for specific students who misbehave without affecting the entire batch.

## Functional Requirements

1. Provide a single shared login account that multiple students can use for batch access
2. Implement OAuth redirect when accessing Google Drive folders to capture individual student Gmail accounts
3. Create access logging system that records Gmail account, folder accessed, and timestamp
4. Display access logs in admin interface showing who accessed what and when
5. Allow admins to revoke access for specific Gmail accounts (block list functionality)
6. Remove complex permission granting interface (no more individual student-folder assignments)
7. Show blocked Gmail accounts in admin interface with unblock functionality
8. Maintain existing folder structure but make all folders accessible to authenticated batch members initially

## Non-Goals (Out of Scope)

- Individual student account management
- Complex permission hierarchies
- Email collection for marketing purposes
- Advanced folder organization per student
- Integration with Google Classroom or other education platforms

## Design Considerations

- Maintain existing admin dashboard layout but simplify Drive management section
- Show access logs in a clear, chronological table format
- Use clear visual indicators for blocked vs active Gmail accounts
- Keep student interface simple with clear access instructions
- Follow existing brand colors and typography

## Technical Considerations

- Modify existing GoogleDriveService to handle OAuth redirects for access tracking
- Create new AccessLog model to track Gmail + folder + timestamp data
- Add Gmail blocking functionality to GoogleDriveService
- Update admin interface to show logs instead of permission management
- Modify student dashboard to redirect through OAuth before Drive access
- Ensure OAuth flow captures Gmail without requiring full Drive API permissions
- Use existing Laravel authentication but modify student flow
- Maintain database relationships for backward compatibility during transition

## Success Metrics

- Teachers can set up batch access in under 5 minutes
- Students can access materials with 2-step authentication (portal login + Gmail)
- Access logs are accurate and show individual Gmail accounts
- Blocked students cannot access materials through any means
- System performance remains fast despite logging overhead

## Open Questions

- How should the OAuth redirect flow work technically (popup vs redirect)?
- What information should be captured in access logs (IP, user agent, etc.)?
- Should blocked Gmails be prevented at OAuth level or Drive level?
- How to handle students who don't have Gmail accounts?
- Should there be a grace period before blocking takes effect?