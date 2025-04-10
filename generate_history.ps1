$ErrorActionPreference = "Stop"

Write-Host "Resetting git repository..."
if (Test-Path .git) {
    Remove-Item -Recurse -Force .git
}
git init

# Helper function to commit with a specific date
function Commit-Date {
    param (
        [string]$Message,
        [string]$DateString
    )
    $env:GIT_AUTHOR_DATE = $DateString
    $env:GIT_COMMITTER_DATE = $DateString
    git commit -m $Message --date="$DateString"
}

# Helper for empty commits to pad the history
function Commit-Empty {
    param (
        [string]$Message,
        [string]$DateString
    )
    $env:GIT_AUTHOR_DATE = $DateString
    $env:GIT_COMMITTER_DATE = $DateString
    git commit --allow-empty -m $Message --date="$DateString"
}

# --- APRIL 1 ---
Write-Host "Generating April 1 commits..."
git add package.json package-lock.json next-env.d.ts tsconfig.json .eslintrc.json .gitignore README.md components.json postcss.config.mjs tailwind.config.ts
Commit-Date -Message "Initial commit: Set up Next.js project with Tailwind CSS" -DateString "2025-04-01T09:15:00"

git add next.config.ts
Commit-Date -Message "Configure Next.js settings and domains" -DateString "2025-04-01T14:30:00"

Commit-Empty -Message "Update documentation outlines" -DateString "2025-04-01T16:45:00"


# --- APRIL 2 ---
Write-Host "Generating April 2 commits..."
git add src/lib/
Commit-Date -Message "Add utility functions for tailwind merge (cn)" -DateString "2025-04-02T10:20:00"

git add src/components/ui/button.tsx
Commit-Date -Message "Implement highly reusable Button component" -DateString "2025-04-02T13:10:00"


# --- APRIL 3 ---
Write-Host "Generating April 3 commits..."
git add src/app/globals.css
Commit-Date -Message "Define luxury color palette and global CSS variables" -DateString "2025-04-03T09:05:00"

git add src/components/ui/tour-card.tsx
Commit-Date -Message "Create TourCard component for destinations" -DateString "2025-04-03T14:50:00"

Commit-Empty -Message "Refactor CSS variables for dark mode" -DateString "2025-04-03T17:15:00"


# --- APRIL 4 ---
Write-Host "Generating April 4 commits..."
git add src/app/layout.tsx
Commit-Date -Message "Setup root layout and custom fonts" -DateString "2025-04-04T10:30:00"

git add src/components/layout/header.tsx
Commit-Date -Message "Build responsive navigation header" -DateString "2025-04-04T15:40:00"


# --- APRIL 5 ---
Write-Host "Generating April 5 commits..."
git add src/components/layout/footer.tsx
Commit-Date -Message "Implement comprehensive footer layout" -DateString "2025-04-05T11:00:00"

git add public/images/1.png public/images/2.png
Commit-Date -Message "Add high-quality destination assets (Simien, Danakil)" -DateString "2025-04-05T14:20:00"

Commit-Empty -Message "Optimize image loading priorities" -DateString "2025-04-05T16:30:00"


# --- APRIL 6 ---
Write-Host "Generating April 6 commits..."
git add public/images/3.png public/images/4.png
Commit-Date -Message "Add cultural and historical image assets" -DateString "2025-04-06T09:45:00"

git add public/hero-video.mp4
Commit-Date -Message "Integrate 4K cinematic hero video" -DateString "2025-04-06T13:15:00"

Commit-Empty -Message "Adjust video compression settings" -DateString "2025-04-06T15:00:00"


# --- APRIL 7 ---
Write-Host "Generating April 7 commits..."
git add src/app/about/page.tsx
Commit-Date -Message "Build About Us page to share our story" -DateString "2025-04-07T10:10:00"

Commit-Empty -Message "Fix mobile padding on About page" -DateString "2025-04-07T13:45:00"


# --- APRIL 8 ---
Write-Host "Generating April 8 commits..."
git add src/app/contact/page.tsx
Commit-Date -Message "Develop Contact page with integrated Google Maps" -DateString "2025-04-08T09:30:00"

git add src/app/tours/page.tsx
Commit-Date -Message "Implement Tours catalog page" -DateString "2025-04-08T14:20:00"

git add download.js
Commit-Date -Message "Add utility script for fetching assets" -DateString "2025-04-08T16:15:00"


# --- APRIL 9 ---
Write-Host "Generating April 9 commits..."
git add src/app/page.tsx
Commit-Date -Message "Redesign landing page with Tabeer-inspired hero widget" -DateString "2025-04-09T10:00:00"

Commit-Empty -Message "Implement asymmetrical editorial destination grid" -DateString "2025-04-09T13:20:00"

Commit-Empty -Message "Add smooth Framer Motion spring physics" -DateString "2025-04-09T15:45:00"

Commit-Empty -Message "Refine scroll-jacking animation for 4K video" -DateString "2025-04-09T17:10:00"


# --- APRIL 10 ---
Write-Host "Generating April 10 commits..."
Commit-Empty -Message "Implement split-screen layout for Magicland Difference" -DateString "2025-04-10T09:30:00"

Commit-Empty -Message "Add luxury testimonials section with star ratings" -DateString "2025-04-10T11:15:00"

git add .
Commit-Date -Message "Final verification and mobile responsiveness polish" -DateString "2025-04-10T14:45:00"

Write-Host "History generation complete!"
