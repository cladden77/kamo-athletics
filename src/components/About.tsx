export default function About() {
  const teamMembers = [
    {
      name: "NICK",
      lastName: "Petersen",
      role: "HEAD COACH",
      image: "/nick-profile.jpg",
      description: "Nick is a former CrossFit Games Team Athlete (2022). He grew up outside LA and found his way to Kansas playing college baseball. He defines himself as a Servant of Christ and you can see this manifested in his kindness, compassion and work ethic. In his free time you can find him on his farm with his wife and two children."
    },
    {
      name: "ANDY",
      lastName: "NEWTON",
      role: "HEAD COACH",
      image: "/andy-profile.jpg",
      description: "Andy is a CrossFit OG. His life revolves around equanimity, sobriety and fitness. As a decorated combat veteran, the efficacies he forged as a warfighter can be found utilized in his every day coaching."
    },
    {
      name: "TONYA",
      lastName: "DARYMPLE",
      role: "HEAD COACH",
      image: "/tonya-profile.jpg",
      description: "Tonya began her CrossFit journey in 2013 during her husband&apos;s deployment to Afghanistan. During the deployment, she experienced the magic of the CrossFit community as they were a tremendous source of encouragement and support during that challenging time. Fostering community within the framework of the CrossFit methodology is one of her greatest joys."
    }
  ];

  return (
    <section id="about" className="bg-[#f2f2f2] py-[70px] px-4 md:px-8 lg:px-[152px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Content */}
        <div className="text-center mb-16">
          {/* About Us Badge */}
          <div className="bg-[#0b3a86] inline-flex items-center px-4 py-[7px] mb-[14.9px]">
            <span className="text-white text-[12px] tracking-[2px] uppercase font-bold leading-[19.2px]">
              ABOUT US
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[#121212] text-[48px] leading-[52.8px] tracking-[-1px] uppercase font-bold mb-4">
            About KAMO Athletics
          </h2>

          {/* Description */}
          <div className="max-w-[927px] mx-auto">
            <p className="text-[#121212] text-[17.719px] leading-[28.8px] mb-4">
              KAMO Athletics is the collaborative effort of Andy Arson Newton and Nick Petersen, two of Kansas City&apos;s most revered CrossFit coaches.
            </p>
            <p className="text-[#121212] text-[17.578px] leading-[28.8px]">
              We believe in a community first approach, welcoming people from every walk of life and every capability level. Within our walls we aim to show people how fitness can change their everyday life.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[75px]">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col gap-5">
              {/* Member Image */}
              <div 
                className="relative h-[400px] w-full bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
                style={{ backgroundImage: `url('${member.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end p-6">
                  <span className="text-[#f2f2f2] text-[12px] tracking-[2px] uppercase font-bold leading-[19.2px] mb-2">
                    {member.role}
                  </span>
                  <h4 className="text-white text-[20px] leading-[22px] tracking-[-0.5px] uppercase font-bold">
                    {member.name}<br />{member.lastName}
                  </h4>
                </div>
              </div>

              {/* Member Description */}
              <p className="text-[#121212] text-[17.719px] leading-[28.8px]">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
