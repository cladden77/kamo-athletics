import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sanityFetch } from '@/sanity/lib/fetch';

export const metadata: Metadata = {
  title: 'Privacy Policy | KAMO Athletics',
  description: 'Privacy policy for KAMO Athletics - how we collect, use, and protect your personal information.',
};

// Type definitions
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

interface FooterData {
  companyName?: string;
  address?: string[];
  hours?: string[];
  followTitle?: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
  }>;
  contactTitle?: string;
  phone?: string;
  email?: string;
  copyrightText?: string;
  backgroundColor?: { hex?: string };
  textColor?: { hex?: string };
}

// Queries for header and footer data
const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  title,
  description,
  logo{
    asset->,
    alt
  },
  navigation,
  ctaButtonText,
  primaryColor,
  secondaryColor
}`;

const FOOTER_QUERY = `*[_type == "footer"][0]{
  companyName,
  address,
  hours,
  followTitle,
  socialLinks,
  contactTitle,
  phone,
  email,
  copyrightText,
  backgroundColor,
  textColor
}`;

export default async function PrivacyPolicy() {
  // Fetch data for header and footer
  const [siteSettings, footerData] = await Promise.all([
    sanityFetch<SiteSettings>({ query: SITE_SETTINGS_QUERY, tags: ['siteSettings'] }),
    sanityFetch<FooterData>({ query: FOOTER_QUERY, tags: ['footer'] }),
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Header siteSettings={siteSettings} />
      
      {/* Header spacing to account for fixed navigation */}
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="pt-20 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0b3a86] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">
                  Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0b3a86] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">
                  We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0b3a86] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">
                  We will only retain personal information as long as necessary for the fulfillment of those purposes.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0b3a86] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">
                  We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0b3a86] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">
                  Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0b3a86] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">
                  We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0b3a86] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">
                  We will make readily available to customers information about our policies and practices relating to the management of personal information.
                </p>
              </div>

              {/* Commitment Statement */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg border-l-4 border-[#0b3a86]">
                <p className="text-lg text-gray-800 font-medium">
                  We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mt-12 bg-[#0b3a86] text-white p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Questions About This Policy?</h2>
                <p className="text-lg mb-4">
                  If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-lg">
                    <strong>Email:</strong> kamoathl@gmail.com
                  </p>
                  <p className="text-lg">
                    <strong>Phone:</strong> (816) 718-7374
                  </p>
                  <p className="text-lg">
                    <strong>Address:</strong> 20500 W 185th terrace, Spring Hill Kansas 66083
                  </p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="mt-8 text-center text-gray-500">
                <p>Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <Footer data={footerData} />
    </div>
  );
}
