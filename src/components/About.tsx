import { urlFor } from '../../sanity/client';
import { PortableText } from '@portabletext/react';

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
  backgroundColor?: { hex?: string };
  textColor?: { hex?: string };
  badgeColor?: { hex?: string };
}

interface AboutProps {
  data?: AboutData;
  teamMembers?: TeamMember[];
}

export default function About({ data, teamMembers = [] }: AboutProps) {
  // Original team member data as fallback
  const originalTeamMembers = [
    {
      firstName: "NICK",
      lastName: "Petersen",
      role: "HEAD COACH",
      image: { asset: { _ref: "image-nick", _type: "reference" }, alt: "Nick Petersen" },
      description: "Nick is a former CrossFit Games Team Athlete (2022). He grew up outside LA and found his way to Kansas playing college baseball. He defines himself as a Servant of Christ and you can see this manifested in his kindness, compassion and work ethic. In his free time you can find him on his farm with his wife and two children."
    },
    {
      firstName: "ANDY",
      lastName: "NEWTON", 
      role: "HEAD COACH",
      image: { asset: { _ref: "image-andy", _type: "reference" }, alt: "Andy Newton" },
      description: "Andy is a CrossFit OG. His life revolves around equanimity, sobriety and fitness. As a decorated combat veteran, the efficacies he forged as a warfighter can be found utilized in his every day coaching."
    },
    {
      firstName: "TONYA",
      lastName: "DARYMPLE",
      role: "HEAD COACH", 
      image: { asset: { _ref: "image-tonya", _type: "reference" }, alt: "Tonya Darymple" },
      description: "Tonya began her CrossFit journey in 2013 during her husband's deployment to Afghanistan. During the deployment, she experienced the magic of the CrossFit community as they were a tremendous source of encouragement and support during that challenging time. Fostering community within the framework of the CrossFit methodology is one of her greatest joys."
    }
  ];

  // Fallback values (original content)
  const badgeText = data?.badgeText || "ABOUT US";
  const heading = data?.heading || "About KAMO Athletics";
  const description = data?.description || [
    {
      _type: 'block',
      children: [
        { _type: 'span', text: 'KAMO Athletics is the collaborative effort of Andy Arson Newton and Nick Petersen, two of Kansas City\'s most revered CrossFit coaches.' }
      ]
    },
    {
      _type: 'block', 
      children: [
        { _type: 'span', text: 'We believe in a community first approach, welcoming people from every walk of life and every capability level. Within our walls we aim to show people how fitness can change their everyday life.' }
      ]
    }
  ];
  const backgroundColor = data?.backgroundColor?.hex || '#f2f2f2';
  const textColor = data?.textColor?.hex || '#121212';
  const badgeColor = data?.badgeColor?.hex || '#0b3a86';

  // Use Sanity team members if available, otherwise use original data
  const displayTeamMembers = teamMembers.length > 0 ? teamMembers : originalTeamMembers;

  return (
    <section 
      id="about" 
      className="py-[70px] px-4 md:px-8 lg:px-[152px]"
      style={{ backgroundColor }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header Content */}
        <div className="text-center mb-16">
          {/* About Us Badge */}
          <div 
            className="inline-flex items-center px-4 py-[7px] mb-[14.9px]"
            style={{ backgroundColor: badgeColor }}
          >
            <span className="text-white text-[12px] tracking-[2px] uppercase font-bold leading-[19.2px]">
              {badgeText}
            </span>
          </div>

          {/* Heading */}
          <h2 
            className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-[-1px] uppercase font-bold mb-4"
            style={{ color: textColor }}
          >
            {heading}
          </h2>

          {/* Description */}
          <div className="max-w-[927px] mx-auto">
            <div 
              className="text-[17.719px] leading-[28.8px]"
              style={{ color: textColor }}
            >
              <PortableText value={description} />
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[75px]">
          {displayTeamMembers.map((member, index) => {
            // Use original images as fallback
            const fallbackImages = {
              'NICK': '/nick-profile.jpg',
              'ANDY': '/andy-profile.jpg', 
              'TONYA': '/tonya-profile.jpg'
            };
            
            const memberImage = member.image?.asset && member.image.asset._ref !== 'image-nick' && member.image.asset._ref !== 'image-andy' && member.image.asset._ref !== 'image-tonya'
              ? urlFor(member.image.asset).url() 
              : fallbackImages[member.firstName as keyof typeof fallbackImages] || '/default-profile.jpg';
            
            return (
              <div key={index} className="flex flex-col gap-5">
                {/* Member Image */}
                <div 
                  className="relative h-[400px] w-full bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
                  style={{ backgroundImage: `url('${memberImage}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end p-6">
                    <span className="text-[#f2f2f2] text-[12px] tracking-[2px] uppercase font-bold leading-[19.2px] mb-2">
                      {member.role}
                    </span>
                    <h4 className="text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[1.1] tracking-[-0.5px] uppercase font-bold">
                      {member.firstName}<br />{member.lastName}
                    </h4>
                  </div>
                </div>

                {/* Member Description */}
                <p 
                  className="text-[17.719px] leading-[28.8px]"
                  style={{ color: textColor }}
                >
                  {member.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
