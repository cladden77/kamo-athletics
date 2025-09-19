import Link from 'next/link';

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

interface FooterProps {
  data?: FooterData;
}

export default function Footer({ data }: FooterProps) {
  // Fallback values (original content)
  const companyName = data?.companyName || "KAMO ATHLETICS";
  const address = data?.address || ["123 Fitness Street", "Mountain View, CA 94041"];
  const hours = data?.hours || ["Mon-Fri: 5AM-10PM", "Sat-Sun: 7AM-8PM"];
  const followTitle = data?.followTitle || "FOLLOW";
  const socialLinks = data?.socialLinks || [
    { platform: "Instagram", url: "#" },
    { platform: "Facebook", url: "#" }
  ];
  const contactTitle = data?.contactTitle || "CONTACT";
  const phone = data?.phone || "(000) 000-0000";
  const email = data?.email || "info@kamoathletics.com";
  const copyrightText = data?.copyrightText || "© 2024 Kamo Athletics. All rights reserved.";
  const backgroundColor = data?.backgroundColor?.hex || '#000000';
  const textColor = data?.textColor?.hex || '#6b7280';
  return (
    <footer 
      className="py-16 px-4 md:px-8 lg:px-[120px]"
      style={{ backgroundColor }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-[35px]">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row gap-16 items-start justify-center">
            {/* Company Info */}
            <div className="w-full lg:w-[400px]">
              <h4 className="text-[#f2f2f2] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] tracking-[-0.5px] uppercase font-bold">
                {companyName}
              </h4>
              <div 
                className="text-[16px] leading-[25.6px] mb-[20px]"
                style={{ color: textColor }}
              >
                {address.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div 
                className="text-[15.875px] leading-[25.6px]"
                style={{ color: textColor }}
              >
                {hours.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>

            {/* Social & Contact Links */}
            <div className="flex flex-col lg:flex-row gap-8 w-full lg:w-[714.67px]">
              {/* Follow */}
              <div className="w-full lg:w-[341.33px]">
                <h5 className="text-[#f2f2f2] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] tracking-[1px] uppercase font-bold">
                  {followTitle}
                </h5>
                <div className="flex flex-col gap-[5px]">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      className="text-[16px] leading-[25.6px] hover:text-white transition-colors"
                      style={{ color: textColor }}
                    >
                      {link.platform}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="w-full lg:w-[341.34px]">
                <h5 className="text-[#f2f2f2] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] tracking-[1px] uppercase font-bold">
                  {contactTitle}
                </h5>
                <div className="flex flex-col gap-[5px]">
                  <a 
                    href={`tel:${phone.replace(/[^\d]/g, '')}`} 
                    className="text-[16px] leading-[25.6px] hover:text-white transition-colors"
                    style={{ color: textColor }}
                  >
                    {phone}
                  </a>
                  <a 
                    href={`mailto:${email}`} 
                    className="text-[16px] leading-[25.6px] hover:text-white transition-colors"
                    style={{ color: textColor }}
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#333333] pt-[33px]">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <p 
                  className="text-[16px] leading-[25.6px]"
                  style={{ color: textColor }}
                >
                  {copyrightText}
                </p>
                <span 
                  className="hidden sm:inline text-[16px]"
                  style={{ color: textColor }}
                >
                  |
                </span>
                <Link 
                  href="/privacy-policy"
                  className="text-[16px] leading-[25.6px] hover:text-white transition-colors"
                  style={{ color: textColor }}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
