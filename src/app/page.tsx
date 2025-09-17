import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InstagramGallery from '@/components/InstagramGallery';
import ClassSchedule from '@/components/ClassSchedule';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { sanityFetch } from '@/sanity/lib/fetch';
import {
  heroQuery,
  aboutQuery,
  teamMembersQuery,
  scheduleQuery,
  contactQuery,
  footerQuery,
  siteSettingsQuery
} from '../../sanity/queries';

// Type definitions for the data
interface SiteSettings {
  logo?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  navigation?: Array<{
    title: string;
    sectionId: string;
  }>;
  ctaButtonText?: string;
  primaryColor?: { hex?: string };
}

interface HeroData {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  titleColor?: { hex?: string };
  subtitleColor?: { hex?: string };
  buttonColor?: { hex?: string };
}

interface AboutData {
  badgeText?: string;
  heading?: string;
  description?: Array<{
    _type: string;
    children: Array<{
      _type: string;
      text: string;
    }>;
  }>;
}

interface ScheduleData {
  badgeText?: string;
  heading?: string;
  description?: string;
  weekdayTimes?: string;
  saturdayTimes?: string;
  membershipNote?: string;
}

interface ContactData {
  heading?: string;
  coOwnersTitle?: string;
  address?: string;
  mapPlaceholder?: string;
}

interface FooterData {
  companyName?: string;
  address?: string[];
  hours?: string[];
  socialLinks?: Array<{
    platform: string;
    url: string;
  }>;
  contactInfo?: Array<{
    type: string;
    value: string;
  }>;
  copyright?: string;
}

interface TeamMember {
  firstName: string;
  lastName: string;
  role: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  description: string;
}

export default async function Home() {
  // Fetch all data in parallel
  const [
    heroData,
    aboutData,
    teamMembers,
    scheduleData,
    contactData,
    footerData,
    siteSettings
  ] = await Promise.all([
    sanityFetch<HeroData>({ query: heroQuery, tags: ['hero'] }),
    sanityFetch<AboutData>({ query: aboutQuery, tags: ['about'] }),
    sanityFetch<TeamMember[]>({ query: teamMembersQuery, tags: ['teamMember'] }),
    sanityFetch<ScheduleData>({ query: scheduleQuery, tags: ['schedule'] }),
    sanityFetch<ContactData>({ query: contactQuery, tags: ['contact'] }),
    sanityFetch<FooterData>({ query: footerQuery, tags: ['footer'] }),
    sanityFetch<SiteSettings>({ query: siteSettingsQuery, tags: ['siteSettings'] })
  ]);

  return (
    <main className="min-h-screen">
      <Header siteSettings={siteSettings} />
      <Hero data={heroData} />
      <InstagramGallery />
      <ClassSchedule data={scheduleData} />
      <About data={aboutData} teamMembers={teamMembers || []} />
      <Contact data={contactData} teamMembers={teamMembers || []} />
      <Footer data={footerData} />
    </main>
  );
}
