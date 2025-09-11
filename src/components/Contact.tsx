export default function Contact() {
  const coOwners = [
    {
      name: "Nick Peterson",
      phone: "📞 (000) 000-0001",
      email: "✉️ nick@example.com"
    },
    {
      name: "Andy Newton",
      phone: "📞 (000) 000-0002",
      email: "✉️ andy@example.com"
    }
  ];

  return (
    <section id="contact" className="bg-gradient-to-b from-[#121212] from-[89.904%] to-[#0b3a86] py-24 px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-[63px]">
          <h2 className="text-white text-[56px] leading-[89.6px] tracking-[-1px] uppercase font-bold">
            GET IN CONTACT WITH US
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-24 items-center justify-center">
          {/* Co-owners Contact */}
          <div className="flex flex-col gap-8 w-full lg:w-[483px]">
            <h3 className="text-white text-[24px] leading-[38.4px] tracking-[-0.5px] uppercase font-bold">
              CO-OWNERS
            </h3>
            
            <div className="flex flex-col gap-8">
              {coOwners.map((owner, index) => (
                <div key={index} className="bg-[#f2f2f2] p-8 h-[179.19px] flex flex-col justify-center">
                  <h4 className="text-[#0b3a86] text-[20px] leading-[32px] uppercase font-bold mb-4">
                    {owner.name}
                  </h4>
                  <p className="text-[#0b3a86] text-[15px] leading-[25.6px] mb-2">
                    {owner.phone}
                  </p>
                  <p className="text-[#0b3a86] text-[15.75px] leading-[25.6px]">
                    {owner.email}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Map/Location */}
          <div className="flex flex-col items-center w-full lg:w-[432px]">
            <div className="w-full h-[361px] bg-[#0b3a86] rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-lg font-medium">Map Location</span>
            </div>
            <div className="text-center">
              <p className="text-[#f2f2f2] text-[17.719px] leading-[28.8px]">
                19915 West 161st Street, Olathe, KS 66062
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
