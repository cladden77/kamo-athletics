export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-16 px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-[31.99px]">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row gap-16 items-start justify-center">
            {/* Company Info */}
            <div className="w-full lg:w-[357.33px]">
              <h4 className="text-[#f2f2f2] text-[20px] leading-[32px] tracking-[-0.5px] uppercase font-bold mb-[55.3px]">
                KAMO ATHLETICS
              </h4>
              <div className="text-gray-500 text-[16px] leading-[25.6px] mb-[63.18px]">
                <p>123 Fitness Street</p>
                <p>Mountain View, CA 94041</p>
              </div>
              <div className="text-gray-500 text-[15.875px] leading-[25.6px]">
                <p>Mon-Fri: 5AM-10PM</p>
                <p>Sat-Sun: 7AM-8PM</p>
              </div>
            </div>

            {/* Social & Contact Links */}
            <div className="flex flex-col lg:flex-row gap-8 w-full lg:w-[714.67px]">
              {/* Follow */}
              <div className="w-full lg:w-[341.33px]">
                <h5 className="text-[#f2f2f2] text-[16px] leading-[25.6px] tracking-[1px] uppercase font-bold mb-[41.59px]">
                  FOLLOW
                </h5>
                <div className="flex flex-col gap-[33.59px]">
                  <a href="#" className="text-gray-500 text-[16px] leading-[25.6px] hover:text-white transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-500 text-[16px] leading-[25.6px] hover:text-white transition-colors">
                    Facebook
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="w-full lg:w-[341.34px]">
                <h5 className="text-[#f2f2f2] text-[16px] leading-[25.6px] tracking-[1px] uppercase font-bold mb-[41.59px]">
                  CONTACT
                </h5>
                <div className="flex flex-col gap-[33.59px]">
                  <a href="tel:(000)000-0000" className="text-gray-500 text-[16px] leading-[25.6px] hover:text-white transition-colors">
                    (000) 000-0000
                  </a>
                  <a href="mailto:info@kamoathletics.com" className="text-gray-500 text-[16px] leading-[25.6px] hover:text-white transition-colors">
                    info@kamoathletics.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#333333] pt-[33px]">
            <div className="text-center">
              <p className="text-gray-500 text-[16px] leading-[25.6px]">
                © 2024 Kamo Athletics. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
