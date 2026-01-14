<?php

namespace App\Services;

use Google\Client;
use Google\Service\Drive;
use Illuminate\Support\Facades\Log;

class GoogleDriveService
{
    protected Client $client;

    protected Drive $service;

    public function __construct()
    {
        $this->client = new Client;
        $this->client->setClientId(config('google.client_id'));
        $this->client->setClientSecret(config('google.client_secret'));
        $this->client->setRedirectUri(config('google.redirect_uri'));
        $this->client->setScopes([Drive::DRIVE_READONLY]);
        $this->client->setAccessType('offline');
        $this->client->setPrompt('consent');

        $this->service = new Drive($this->client);
    }

    /**
     * Get the OAuth authorization URL
     */
    public function getAuthUrl(): string
    {
        return $this->client->createAuthUrl();
    }

    /**
     * Exchange authorization code for access token
     */
    public function authenticate(string $code): array
    {
        try {
            $accessToken = $this->client->fetchAccessTokenWithAuthCode($code);
            $this->client->setAccessToken($accessToken);

            // Get user info
            $oauth2 = new \Google\Service\Oauth2($this->client);
            $userInfo = $oauth2->userinfo->get();

            return [
                'access_token' => $accessToken,
                'email' => $userInfo->email,
                'name' => $userInfo->name,
            ];
        } catch (\Exception $e) {
            Log::error('Google Drive authentication failed: '.$e->getMessage());
            throw $e;
        }
    }

    /**
     * Set access token for authenticated requests
     */
    public function setAccessToken(array $token): void
    {
        $this->client->setAccessToken($token);

        // Refresh token if expired
        if ($this->client->isAccessTokenExpired()) {
            $refreshToken = $this->client->getRefreshToken();
            if ($refreshToken) {
                $this->client->fetchAccessTokenWithRefreshToken($refreshToken);
            }
        }
    }

    /**
     * Get user's Drive files (for admin to select folders)
     */
    public function getFiles(string $query = '', int $pageSize = 100): array
    {
        try {
            $optParams = [
                'pageSize' => $pageSize,
                'fields' => 'files(id,name,mimeType,parents,webViewLink,thumbnailLink,modifiedTime)',
                'q' => "mimeType='application/vnd.google-apps.folder' and trashed=false".($query ? " and {$query}" : ''),
            ];

            $results = $this->service->files->listFiles($optParams);

            return array_map(function ($file) {
                return [
                    'id' => $file->id,
                    'name' => $file->name,
                    'type' => 'folder',
                    'webViewLink' => $file->webViewLink,
                    'modifiedTime' => $file->modifiedTime,
                ];
            }, $results->getFiles());
        } catch (\Exception $e) {
            Log::error('Failed to get Drive files: '.$e->getMessage());

            return [];
        }
    }

    /**
     * Get folder contents for a student
     */
    public function getFolderContents(string $folderId): array
    {
        try {
            $query = "'{$folderId}' in parents and trashed=false";
            $optParams = [
                'q' => $query,
                'fields' => 'files(id,name,mimeType,size,webViewLink,webContentLink,thumbnailLink,modifiedTime,iconLink)',
                'orderBy' => 'modifiedTime desc',
            ];

            $results = $this->service->files->listFiles($optParams);

            return array_map(function ($file) {
                return [
                    'id' => $file->id,
                    'name' => $file->name,
                    'mimeType' => $file->mimeType,
                    'size' => $file->size ?? 0,
                    'webViewLink' => $file->webViewLink,
                    'webContentLink' => $file->webContentLink ?? null,
                    'thumbnailLink' => $file->thumbnailLink ?? null,
                    'modifiedTime' => $file->modifiedTime,
                    'iconLink' => $file->iconLink ?? null,
                    'isFolder' => $file->mimeType === 'application/vnd.google-apps.folder',
                ];
            }, $results->getFiles());
        } catch (\Exception $e) {
            Log::error("Failed to get folder contents for {$folderId}: ".$e->getMessage());

            return [];
        }
    }

    /**
     * Get all accessible files and folders from Drive
     */
    public function getAllDriveContents(int $pageSize = 100): array
    {
        try {
            $optParams = [
                'pageSize' => $pageSize,
                'fields' => 'files(id,name,mimeType,size,webViewLink,webContentLink,thumbnailLink,modifiedTime,iconLink,parents)',
                'q' => 'trashed=false',
                'orderBy' => 'modifiedTime desc',
            ];

            $results = $this->service->files->listFiles($optParams);

            return array_map(function ($file) {
                return [
                    'id' => $file->id,
                    'name' => $file->name,
                    'mimeType' => $file->mimeType,
                    'size' => $file->size ?? 0,
                    'webViewLink' => $file->webViewLink,
                    'webContentLink' => $file->webContentLink ?? null,
                    'thumbnailLink' => $file->thumbnailLink ?? null,
                    'modifiedTime' => $file->modifiedTime,
                    'iconLink' => $file->iconLink ?? null,
                    'parents' => $file->parents ?? [],
                    'isFolder' => $file->mimeType === 'application/vnd.google-apps.folder',
                ];
            }, $results->getFiles());
        } catch (\Exception $e) {
            Log::error('Failed to get all Drive contents: '.$e->getMessage());

            return [];
        }
    }

    /**
     * Get file metadata
     */
    public function getFile(string $fileId): ?array
    {
        try {
            $file = $this->service->files->get($fileId, [
                'fields' => 'id,name,mimeType,size,webViewLink,webContentLink,thumbnailLink,modifiedTime,iconLink',
            ]);

            return [
                'id' => $file->id,
                'name' => $file->name,
                'mimeType' => $file->mimeType,
                'size' => $file->size ?? 0,
                'webViewLink' => $file->webViewLink,
                'webContentLink' => $file->webContentLink ?? null,
                'thumbnailLink' => $file->thumbnailLink ?? null,
                'modifiedTime' => $file->modifiedTime,
                'iconLink' => $file->iconLink ?? null,
            ];
        } catch (\Exception $e) {
            Log::error("Failed to get file {$fileId}: ".$e->getMessage());

            return null;
        }
    }

    /**
     * Check if user has access to a folder
     */
    public function hasAccess(string $folderId, string $email): bool
    {
        try {
            $permissions = $this->service->permissions->listPermissions($folderId, [
                'fields' => 'permissions(emailAddress,role)',
            ]);

            foreach ($permissions->getPermissions() as $permission) {
                if ($permission->emailAddress === $email && $permission->role === 'reader') {
                    return true;
                }
            }

            return false;
        } catch (\Exception $e) {
            Log::error("Failed to check access for folder {$folderId}: ".$e->getMessage());

            return false;
        }
    }

    /**
     * Check if a Gmail account is blocked
     */
    public function isGmailBlocked(string $gmail): bool
    {
        return \App\Models\BlockedGmail::isBlocked($gmail);
    }

    /**
     * Log access for tracking purposes
     */
    public function logAccess(string $gmail, string $folderId, string $folderName, string $ipAddress, ?string $userAgent = null): void
    {
        \App\Models\AccessLog::create([
            'gmail' => $gmail,
            'folder_id' => $folderId,
            'folder_name' => $folderName,
            'accessed_at' => now(),
            'ip_address' => $ipAddress,
            'user_agent' => $userAgent,
        ]);
    }
}
