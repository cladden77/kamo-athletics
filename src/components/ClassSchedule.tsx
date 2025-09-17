'use client';

import { urlFor } from '../../sanity/client';

interface ScheduleData {
  badgeText?: string;
  heading?: string;
  description?: string;
  weekdaySchedule?: {
    title: string;
    times: string;
  };
  weekendSchedule?: {
    title: string;
    times: string;
  };
  buttonText?: string;
  scheduleImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  backgroundColor?: { hex?: string };
  textColor?: { hex?: string };
  buttonColor?: { hex?: string };
}

interface ClassScheduleProps {
  data?: ScheduleData;
}

export default function ClassSchedule({ data }: ClassScheduleProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Fallback values (original content)
  const badgeText = data?.badgeText || "SCHEDULE";
  const heading = data?.heading || "CLASS\nSCHEDULE";
  const description = data?.description || "Join us for high-intensity CrossFit classes designed for all fitness\nlevels. Our expert coaches will guide you through every workout.";
  const weekdaySchedule = data?.weekdaySchedule || {
    title: "MONDAY - FRIDAY",
    times: "515am | 630am | 930am | 12pm | 4pm | 5pm | 6pm"
  };
  const weekendSchedule = data?.weekendSchedule || {
    title: "SATURDAY", 
    times: "8am | 9am"
  };
  const buttonText = data?.buttonText || "CONTACT US TODAY";
  const scheduleImage = data?.scheduleImage?.asset 
    ? urlFor(data.scheduleImage.asset).url()
    : '/kamo-group.jpg';
  // Background is handled via CSS classes
  const textColor = data?.textColor?.hex || '#f2f2f2';
  const buttonColor = data?.buttonColor?.hex || '#0b3a86';

  return (
    <section id="schedule" className="bg-gradient-to-b from-[#121212] from-[88.942%] to-[#0b3a86] py-24 px-4 md:px-8 lg:px-[152px]">
      <div className="max-w-[1265px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          {/* Content */}
          <div className="flex-1 flex flex-col gap-[14.9px]">
            {/* Schedule Badge */}
            <div 
              className="inline-flex items-center px-4 py-[7px] w-fit"
              style={{ backgroundColor: buttonColor }}
            >
              <span className="text-white text-[12px] tracking-[2px] uppercase font-bold leading-[19.2px]">
                {badgeText}
              </span>
            </div>

            {/* Heading */}
            <div className="mb-4">
              <h2 
                className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-[-1px] uppercase font-bold"
                style={{ color: textColor }}
              >
                {heading.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < heading.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </div>

            {/* Description */}
            <div className="mb-10">
              <p 
                className="text-[18px] leading-[28.8px]"
                style={{ color: textColor }}
              >
                {description.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < description.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>

            {/* Schedule Details */}
            <div className="flex flex-col gap-10 mb-10">
              {/* Weekdays */}
              <div className="flex flex-col gap-4">
                <h4 
                  className="text-[14px] sm:text-[15px] md:text-[15.875px] tracking-[2px] uppercase font-bold leading-[1.6]"
                  style={{ color: textColor }}
                >
                  {weekdaySchedule.title}
                </h4>
                <div 
                  className="bg-[#1a1a1a] border-l-4 pl-[27px] pr-6 py-[15px]"
                  style={{ borderColor: buttonColor }}
                >
                  <p 
                    className="text-[14.4px] tracking-[0.5px] leading-[23px]"
                    style={{ color: textColor }}
                  >
                    {weekdaySchedule.times}
                  </p>
                </div>
              </div>

              {/* Weekend */}
              <div className="flex flex-col gap-4">
                <h4 
                  className="text-[14px] sm:text-[15px] md:text-[16px] tracking-[2px] uppercase font-bold leading-[1.6]"
                  style={{ color: textColor }}
                >
                  {weekendSchedule.title}
                </h4>
                <div 
                  className="bg-[#1a1a1a] border-l-4 pl-[27px] pr-6 py-[15px]"
                  style={{ borderColor: buttonColor }}
                >
                  <p 
                    className="text-[14.4px] tracking-[0.5px] leading-[23px]"
                    style={{ color: textColor }}
                  >
                    {weekendSchedule.times}
                  </p>
                </div>

                <p className="text-[14.4px] tracking-[0.5px] leading-[23px]">*Memberships include 24-hour access</p>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={scrollToContact}
              className="text-white px-10 py-4 text-[13.6px] tracking-[1px] uppercase font-bold hover:opacity-80 transition-opacity w-fit cursor-pointer"
              style={{ backgroundColor: buttonColor }}
            >
              {buttonText}
            </button>
          </div>

          {/* Image - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:flex flex-1">
            <div 
              className="w-full h-[466px] bg-cover bg-center bg-no-repeat rounded-lg"
              style={{ backgroundImage: `url('${scheduleImage}')` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
