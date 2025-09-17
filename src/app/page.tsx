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
    sanityFetch({ query: heroQuery, tags: ['hero'] }),
    sanityFetch({ query: aboutQuery, tags: ['about'] }),
    sanityFetch({ query: teamMembersQuery, tags: ['teamMember'] }),
    sanityFetch({ query: scheduleQuery, tags: ['schedule'] }),
    sanityFetch({ query: contactQuery, tags: ['contact'] }),
    sanityFetch({ query: footerQuery, tags: ['footer'] }),
    sanityFetch({ query: siteSettingsQuery, tags: ['siteSettings'] })
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
