## Relevant Files

- `app/Models/AccessLog.php` - New model to track Gmail access logs
- `app/Models/BlockedGmail.php` - Model for blocked Gmail accounts
- `database/migrations/2026_01_07_XXXXXX_create_access_logs_table.php` - Migration for access logging
- `database/migrations/2026_01_07_XXXXXX_create_blocked_gmails_table.php` - Migration for blocked accounts
- `app/Services/GoogleDriveService.php` - Modified to handle OAuth redirects and blocking
- `app/Http/Controllers/AdminController.php` - Updated to show logs instead of permissions
- `app/Http/Controllers/StudentController.php` - Modified for shared batch access
- `routes/web.php` - New routes for OAuth redirects and access logging
- `resources/js/pages/admin-drive.tsx` - Simplified to show access logs and blocking
- `resources/js/pages/student/dashboard.tsx` - Updated for OAuth flow before Drive access

### Notes

- Unit tests should be created for new models and modified services
- Existing Google Drive integration tests need updates
- OAuth flow requires secure token handling

## Tasks

- [ ] 1.0 Create database schema for access logging and Gmail blocking
  - [ ] 1.1 Create access_logs migration (gmail, folder_id, folder_name, accessed_at, ip_address, user_agent)
  - [ ] 1.2 Create blocked_gmails migration (gmail, blocked_at, blocked_by, reason)
  - [ ] 1.3 Create AccessLog Eloquent model with relationships and scopes
  - [ ] 1.4 Create BlockedGmail Eloquent model with relationships and scopes
  - [ ] 1.5 Add indexes to migrations for performance (gmail, accessed_at)
- [ ] 2.0 Implement OAuth redirect system for capturing Gmail access
  - [ ] 2.1 Add new routes for Drive access OAuth flow (/drive/access/{folderId})
  - [ ] 2.2 Create DriveAccessController for handling OAuth redirects and logging
  - [ ] 2.3 Implement OAuth callback method to capture Gmail and log access
  - [ ] 2.4 Add secure token generation for OAuth state parameter
  - [ ] 2.5 Handle OAuth errors and redirect back with appropriate messages
- [ ] 3.0 Modify GoogleDriveService for simplified access control
  - [ ] 3.1 Remove shareFolder and revokeAccess methods (individual permissions)
  - [ ] 3.2 Add isGmailBlocked method to check blocked accounts
  - [ ] 3.3 Add logAccess method to record Gmail + folder access
  - [ ] 3.4 Simplify getFiles method to return all accessible folders
  - [ ] 3.5 Update authenticate method to handle OAuth for access tracking
- [ ] 4.0 Update admin interface to show access logs and blocking
  - [ ] 4.1 Replace admin-drive.tsx permission UI with access logs table
  - [ ] 4.2 Add block/unblock Gmail functionality with confirmation dialogs
  - [ ] 4.3 Display chronological access logs (Gmail, folder, timestamp, IP)
  - [ ] 4.4 Update AdminController methods to return logs instead of permissions
  - [ ] 4.5 Add filtering/search for access logs (by Gmail, date range, folder)
- [ ] 5.0 Modify student interface for shared batch access
  - [ ] 5.1 Update student dashboard to redirect through OAuth before Drive access
  - [ ] 5.2 Replace "Open in Drive" buttons with "Access Materials" OAuth flow
  - [ ] 5.3 Remove email collection modal and related functionality
  - [ ] 5.4 Update StudentController to handle OAuth redirects
  - [ ] 5.5 Add clear instructions for students about Gmail authentication
