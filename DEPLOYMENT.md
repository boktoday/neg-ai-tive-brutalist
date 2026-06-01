# Vercel Deployment Guide

Your project is now ready to deploy to Vercel with webhook-based story submissions.

## What Changed

1. **StorySubmission component** - Now sends data to a webhook instead of Supabase
2. **Environment variable** - Added `VITE_STORY_WEBHOOK_URL` for your webhook
3. **vercel.json** - Added for proper SPA routing on Vercel

## Deployment Steps

### 1. Push to Git Repository
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GIT_REPO_URL
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository
4. Before deploying, add environment variables:

#### Required Environment Variables:
- `VITE_STORY_WEBHOOK_URL` - Your story submission webhook URL

#### Optional (if keeping other Supabase features):
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anon key

5. Click "Deploy"

### 3. Set Your Webhook URL

After deployment, provide your webhook URL and I'll add it to the configuration.

The webhook will receive POST requests with this JSON structure:
```json
{
  "name": "User Name",
  "jobTitle": "Job Title",
  "story": "The sob story content..."
}
```

## Local Development

Update `.env` file with your webhook URL:
```
VITE_STORY_WEBHOOK_URL=https://your-webhook-url.com/endpoint
```

Then run:
```bash
npm install
npm run dev
```

## Notes

- The newsletter component still uses its hardcoded webhook
- Supabase tables remain in the database but are no longer used for story submissions
- The VictimStories component still shows mock data (not pulling from database)
