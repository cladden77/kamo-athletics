# KAMO Athletics Landing Page

A modern, responsive landing page for KAMO Athletics CrossFit gym built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with KAMO Athletics branding
- **Component-Based Architecture**: Each section is built as a separate, reusable component
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## Sections

1. **Header**: Navigation with logo and menu items
2. **Hero**: Main banner with call-to-action buttons
3. **Instagram Gallery**: Social media showcase with grid layout
4. **Class Schedule**: Detailed class times with gradient background
5. **About**: Team member profiles with descriptions
6. **Contact**: Contact information for co-owners and location
7. **Footer**: Company information and social links

## Tech Stack

- **Next.js 15.5.2**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework
- **React 19.1.0**: Latest React version

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
└── components/
    ├── Header.tsx         # Navigation header
    ├── Hero.tsx          # Hero section
    ├── InstagramGallery.tsx # Instagram feed
    ├── ClassSchedule.tsx # Class schedule section
    ├── About.tsx         # About section with team
    ├── Contact.tsx       # Contact information
    └── Footer.tsx        # Footer component
```

## Design System

### Colors
- Primary Blue: `#0b3a86` (KAMO Blue)
- Light Gray: `#f2f2f2` (Background)
- Dark Gray: `#121212` (Text)
- Darker Gray: `#1a1a1a` (Cards)

### Typography
- Font Family: Segoe UI
- Headings: Bold, uppercase with custom tracking
- Body Text: Regular weight with optimized line heights

### Spacing
- Consistent padding and margins using Tailwind's spacing scale
- Responsive breakpoints: mobile, tablet, desktop

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Performance

- Optimized images and assets
- Efficient component structure
- Static generation for fast loading
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Instagram Integration

The Instagram section can display real posts from [@kamoathletics](https://www.instagram.com/kamoathletics/). 

### Setup Real Instagram Feed

To display actual Instagram posts, you'll need to set up Instagram Basic Display API:

1. **Create Facebook App**: Go to [Facebook Developers](https://developers.facebook.com/) and create a new app
2. **Add Instagram Basic Display**: Add Instagram Basic Display product to your app
3. **Get Access Token**: Follow the [Instagram Basic Display API guide](https://developers.facebook.com/docs/instagram-basic-display-api)
4. **Set Environment Variables**:
   ```bash
   INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token
   INSTAGRAM_USER_ID=your_instagram_user_id
   ```

### Fallback Content

Without API credentials, the component automatically uses high-quality fallback posts that match KAMO Athletics' brand style and messaging. These include:
- Motivational quotes and messaging
- Workout announcements  
- Community highlights
- Brand-consistent visuals

### Features

- **Auto-fallback**: Graceful degradation if API fails
- **Loading states**: Skeleton loading while fetching
- **Hover effects**: Interactive post previews
- **Direct links**: All posts link to actual Instagram
- **Responsive**: Mobile-optimized grid layout
- **Performance**: 5-minute caching to respect rate limits

## License

This project is private and proprietary to KAMO Athletics.
