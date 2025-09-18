interface ContactData {
  heading?: string;
  coOwnersTitle?: string;
  address?: string;
  mapPlaceholder?: string;
  backgroundColor?: { hex?: string };
  textColor?: { hex?: string };
  cardBackgroundColor?: { hex?: string };
  cardTextColor?: { hex?: string };
}

interface TeamMember {
  firstName: string;
  lastName: string;
  phone?: string;
  email?: string;
}

interface ContactProps {
  data?: ContactData;
  teamMembers?: TeamMember[];
}

export default function Contact({ data, teamMembers = [] }: ContactProps) {
  // Fallback values (original content)
  const heading = data?.heading || "GET IN CONTACT WITH US";
  const coOwnersTitle = data?.coOwnersTitle || "CO-OWNERS";
  const address = data?.address || "20500 W 185th Terrace, Spring Hill, Kansas 66083";
  // const mapPlaceholder = data?.mapPlaceholder || "Map Location"; // No longer needed with actual map
  // Background is handled via CSS classes
  const textColor = data?.textColor?.hex || '#f2f2f2';
  const cardBackgroundColor = data?.cardBackgroundColor?.hex || '#f2f2f2';
  const cardTextColor = data?.cardTextColor?.hex || '#0b3a86';

  // Filter team members who have contact info to display as co-owners
  const coOwners = teamMembers.filter(member => member.phone || member.email).map(member => ({
    name: `${member.firstName} ${member.lastName}`,
    phone: member.phone || '',
    email: member.email || ''
  }));

  // Original co-owners as fallback
  const defaultCoOwners = [
    {
      name: "Nick Petersen",
      phone: "(805) 791-5779",
      email: "kamoathl@gmail.com"
    },
    {
      name: "Andy Newton", 
      phone: "(816) 718-7374",
      email: "kamoathl@gmail.com"
    }
  ];

  const displayCoOwners = coOwners.length > 0 ? coOwners : defaultCoOwners;

  return (
    <section id="contact" className="bg-gradient-to-b from-[#121212] from-[89.904%] to-[#0b3a86] py-24 px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-[63px]">
          <h2 
            className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] leading-[1.6] tracking-[-1px] uppercase font-bold"
            style={{ color: textColor }}
          >
            {heading}
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-24 items-center justify-center">
          {/* Co-owners Contact */}
          <div className="flex flex-col gap-8 w-full lg:w-[483px]">
            <h3 
              className="text-[18px] sm:text-[20px] md:text-[24px] leading-[1.6] tracking-[-0.5px] uppercase font-bold"
              style={{ color: textColor }}
            >
              {coOwnersTitle}
            </h3>
            
            <div className="flex flex-col gap-8">
              {displayCoOwners.map((owner, index) => (
                <div 
                  key={index} 
                  className="p-8 h-[179.19px] flex flex-col justify-center"
                  style={{ backgroundColor: cardBackgroundColor }}
                >
                  <h4 
                    className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] uppercase font-bold mb-4"
                    style={{ color: cardTextColor }}
                  >
                    {owner.name}
                  </h4>
                  {owner.phone && (
                    <p 
                      className="text-[15px] leading-[25.6px] mb-2"
                      style={{ color: cardTextColor }}
                    >
                      📞 <a 
                        href={`tel:${owner.phone.replace(/[^\d+]/g, '')}`}
                        className="hover:underline transition-all duration-200"
                        style={{ color: cardTextColor }}
                      >
                        {owner.phone}
                      </a>
                    </p>
                  )}
                  {owner.email && (
                    <p 
                      className="text-[15.75px] leading-[25.6px]"
                      style={{ color: cardTextColor }}
                    >
                      ✉️ <a 
                        href={`mailto:${owner.email}`}
                        className="hover:underline transition-all duration-200"
                        style={{ color: cardTextColor }}
                      >
                        {owner.email}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Map/Location */}
          <div className="flex flex-col items-center w-full lg:w-[432px]">
            <div className="w-full h-[361px] rounded-lg overflow-hidden mb-4">
              <iframe
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=20500%20W%20185th%20Terrace,%20Spring%20Hill,%20Kansas%2066083&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kamo Athletics Location"
              />
            </div>
            <div className="text-center">
              <p 
                className="text-[17.719px] leading-[28.8px]"
                style={{ color: textColor }}
              >
                {address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
