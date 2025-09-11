export default function ClassSchedule() {
  return (
    <section id="schedule" className="bg-gradient-to-b from-[#121212] from-[88.942%] to-[#0b3a86] py-24 px-4 md:px-8 lg:px-[152px]">
      <div className="max-w-[1265px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          {/* Content */}
          <div className="flex-1 flex flex-col gap-[14.9px]">
            {/* Schedule Badge */}
            <div className="bg-[#0b3a86] inline-flex items-center px-4 py-[7px] w-fit">
              <span className="text-white text-[12px] tracking-[2px] uppercase font-bold leading-[19.2px]">
                SCHEDULE
              </span>
            </div>

            {/* Heading */}
            <div className="mb-4">
              <h2 className="text-white text-[48px] lg:text-[48px] leading-[52.8px] tracking-[-1px] uppercase font-bold">
                CLASS<br />SCHEDULE
              </h2>
            </div>

            {/* Description */}
            <div className="mb-10">
              <p className="text-[#f2f2f2] text-[18px] leading-[28.8px]">
                Join us for high-intensity CrossFit classes designed for all fitness<br />
                levels. Our expert coaches will guide you through every workout.
              </p>
            </div>

            {/* Schedule Details */}
            <div className="flex flex-col gap-10 mb-10">
              {/* Monday - Friday */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[#f2f2f2] text-[15.875px] tracking-[2px] uppercase font-bold leading-[25.6px]">
                  MONDAY - FRIDAY
                </h4>
                <div className="bg-[#1a1a1a] border-l-4 border-[#0b3a86] pl-[27px] pr-6 py-[15px]">
                  <p className="text-[#f2f2f2] text-[14.4px] tracking-[0.5px] leading-[23px]">
                    515am | 630am | 930am | 12pm | 4pm | 5pm | 6pm
                  </p>
                </div>
              </div>

              {/* Saturday */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[#f2f2f2] text-[16px] tracking-[2px] uppercase font-bold leading-[25.6px]">
                  SATURDAY
                </h4>
                <div className="bg-[#1a1a1a] border-l-4 border-[#0b3a86] pl-[27px] pr-6 py-[15px]">
                  <p className="text-[#f2f2f2] text-[14.4px] tracking-[0.5px] leading-[23px]">
                    8am | 9am
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-[#0b3a86] text-white px-10 py-4 text-[13.6px] tracking-[1px] uppercase font-bold hover:bg-[#0a2d6b] transition-colors w-fit">
              CONTACT US TODAY
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div 
              className="w-full h-[466px] bg-cover bg-center bg-no-repeat rounded-lg"
              style={{ backgroundImage: `url('/kamo-group.jpg')` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
