# Sanity CMS Integration Setup Guide

This guide will help you complete the Sanity CMS integration for your KAMO Athletics website.

## 🚀 Quick Start

### ✅ Project Already Set Up!

**Good news!** Your Sanity project has already been created and configured:

- **Project ID**: `ua5ga1nx`
- **Dataset**: `production`
- **Environment variables**: Already configured in `.env.local`
- **API Token**: Already generated and configured

No additional setup required! You can jump straight to using the studio.

### 3. Get Your API Token (Optional but Recommended)

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to "API" tab
4. Click "Add API token"
5. Give it a name like "KAMO Website"
6. Set permissions to "Editor"
7. Copy the token and add it to your `.env.local`

### 1. Access Sanity Studio

You can access the Sanity Studio in two ways:

**Option A: Standalone Studio (Recommended)**
```bash
npm run sanity
```
Studio will be available at: `http://localhost:3333`

**Option B: Embedded Studio**
```bash
npm run dev
```
Website at: `http://localhost:3000`  
Embedded Studio at: `http://localhost:3000/studio`

### 2. Start Your Website

```bash
npm run dev
```

Your website will be available at `http://localhost:3000`

## 📝 Content Management

### Accessing the Studio

Once both are running:
- **Website**: `http://localhost:3000`
- **Sanity Studio**: `http://localhost:3333`

### Content Types Available

Your Sanity Studio includes these content types:

1. **Hero Section** - Edit the main banner
2. **About Section** - Modify about content and badge
3. **Team Members** - Add/edit coach profiles
4. **Schedule** - Update class times and descriptions  
5. **Contact** - Manage contact information
6. **Footer** - Edit footer content and links
7. **Site Settings** - Global site configuration

### Key Features

✅ **Editable Content**: All text, images, and colors  
✅ **Team Management**: Add/remove team members  
✅ **Color Customization**: Brand colors throughout the site  
✅ **Image Management**: Upload and manage all images  
✅ **Schedule Management**: Update class times easily  
✅ **Contact Info**: Manage all contact details  

## 🎨 Customization

### Adding New Team Members

1. Go to Sanity Studio
2. Click "Team Member" 
3. Click "Create new"
4. Fill in details including profile image
5. Set display order (lower numbers appear first)
6. Publish the changes

### Changing Colors

Each section has customizable colors:
- Background colors
- Text colors  
- Button colors
- Badge colors

### Managing Images

- Upload images directly in Sanity Studio
- Images are automatically optimized
- Alt text is required for accessibility

## 🔧 Advanced Configuration

### Custom Schemas

All schemas are in `/sanity/schemaTypes/`. You can modify these to add new fields.

### Queries

Data queries are in `/sanity/queries.ts`. Modify these to fetch additional data.

### Styling

Components use dynamic styling based on Sanity data with fallback values.

## 🚀 Deployment

### Deploy Sanity Studio

```bash
npm run sanity-deploy
```

This will deploy your studio to `https://your-project.sanity.studio`

### Deploy Website

Deploy your Next.js site as normal. Make sure to add your environment variables to your hosting provider.

## 🆘 Troubleshooting

### Common Issues

1. **"Project ID not found"** - Check your `.env.local` file
2. **"CORS errors"** - Add your domain to CORS origins in Sanity manage
3. **"Images not loading"** - Verify API token and project permissions

### Getting Help

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)

## 📋 Next Steps

1. ✅ Set up environment variables
2. ✅ Start Sanity Studio  
3. ✅ Create your first content
4. ✅ Preview changes on your website
5. ✅ Deploy to production

### 🎯 **Default Content Included**

**Important**: Your website will display the original content even without Sanity configuration! Each component includes fallback values that match your original design:

- **Hero Section**: Original title, subtitle, and background image
- **About Section**: Original team member profiles (Nick, Andy, Tonya) with photos
- **Schedule**: Original class times and group image
- **Contact**: Original contact information and placeholder data  
- **Header/Footer**: Original navigation and company information

This means you can deploy immediately and customize content later through Sanity Studio.

Your website is now fully integrated with Sanity CMS! 🎉
