# Vercel Deployment Guide

## Overview
This guide explains how to deploy your portfolio with Tina (AI chatbot) to Vercel.

## Prerequisites
- Git repository (GitHub, GitLab, or Bitbucket)
- Vercel account (free tier works)
- Groq API key

## Configuration Files Updated
✅ `package.json` - Build script fixed (removed `next export`)
✅ `next.config.js` - Configured for serverless functions
✅ `vercel.json` - Simplified for Next.js

## Deployment Steps

### Step 1: Push Code to Git Repository
```bash
git add .
git commit -m "Fix Vercel deployment - enable API routes"
git push origin main
```

### Step 2: Connect to Vercel

#### Option A: Vercel Dashboard (Recommended)
1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import your Git repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy" (don't add env vars yet)

#### Option B: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Step 3: Add Environment Variables

**IMPORTANT**: The chatbot won't work without this step!

1. Go to your Vercel project dashboard
2. Navigate to: **Settings** → **Environment Variables**
3. Add the following variable:

   **Variable Name**: `GROQ_API_KEY`

   **Value**: `your_groq_api_key_here`

   **Environments**: Select all three:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

4. Click "Save"

### Step 4: Redeploy

After adding environment variables, you MUST redeploy:

**Option A: Trigger Redeploy from Dashboard**
1. Go to: **Deployments** tab
2. Click the three dots on latest deployment
3. Click "Redeploy"
4. Check "Use existing Build Cache" (optional)
5. Click "Redeploy"

**Option B: Push a New Commit**
```bash
git commit --allow-empty -m "Trigger redeploy with env vars"
git push
```

## Verification

After deployment completes, test the following:

### ✅ Website Loads
Visit: `https://your-project.vercel.app`

### ✅ Chatbot Works
1. Click the purple chat button (bottom-right)
2. Tina should greet you
3. Ask: "What are Mark's skills?"
4. Should get a response about React, TypeScript, etc.

### ✅ API Route Accessible
Check: `https://your-project.vercel.app/api/chat`
- Should return: `{"error":"Method not allowed"}` (this is correct - it only accepts POST)

## Troubleshooting

### Problem: 405 Method Not Allowed
**Cause**: API routes not deployed (using static export)
**Solution**: Ensure `package.json` has `"build": "next build"` (not `next export`)

### Problem: Chatbot returns error
**Cause**: Missing environment variable
**Solution**: Add `GROQ_API_KEY` in Vercel Dashboard → Settings → Environment Variables → Redeploy

### Problem: Build fails
**Cause**: Node version mismatch
**Solution**: Vercel should use Node 20.x (specified in `package.json` engines)

### Problem: TypeScript errors during build
**Cause**: Strict type checking
**Solution**: Fix TypeScript errors or add `typescript.ignoreBuildErrors: true` to `next.config.js` (not recommended)

## Environment Variables Reference

### Required
- `GROQ_API_KEY` - Groq API key for Tina chatbot

### Optional
- `OPENAI_API_KEY` - OpenAI API key (backup, not currently used)

## Build Configuration

### package.json
```json
{
  "scripts": {
    "build": "next build"  // ✅ Enables API routes
  },
  "engines": {
    "node": ">=20.x"  // ✅ Vercel will use Node 20
  }
}
```

### next.config.js
- Images: Unoptimized (for Vercel compatibility)
- NO `output: 'export'` (this disables API routes)

### vercel.json
```json
{
  "framework": "nextjs"  // Let Vercel handle the rest
}
```

## Post-Deployment

### Custom Domain (Optional)
1. Go to: **Settings** → **Domains**
2. Add your custom domain
3. Configure DNS records as instructed

### Monitoring
- View logs: **Deployments** → Click deployment → **Function Logs**
- Monitor API calls: Check `/api/chat` logs

### Updates
Every push to `main` branch triggers automatic deployment.

## Security Notes

- ✅ `.env.local` is in `.gitignore` (API keys never committed)
- ✅ Environment variables stored securely in Vercel
- ✅ API routes run server-side only (keys never exposed to browser)

## Support

If deployment fails:
1. Check Vercel build logs
2. Verify environment variables are set
3. Ensure Node version >=20.x
4. Check that `next build` works locally

## Resources

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Environment Variables: https://vercel.com/docs/concepts/projects/environment-variables

---

**Last Updated**: After fixing API route deployment issue
**Status**: ✅ Ready to deploy with API routes enabled
